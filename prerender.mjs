/**
 * Pre-render script: spins up a local static server, visits each route
 * with Puppeteer, and writes the rendered HTML into dist/ so every URL
 * gets a real index.html that Google can index without running JavaScript.
 *
 * Usage: node prerender.mjs
 * Run AFTER: npm run build
 */

import { createServer } from 'http'
import { readFileSync, writeFileSync, mkdirSync, existsSync } from 'fs'
import { join, extname } from 'path'
import { fileURLToPath } from 'url'
import puppeteer from 'puppeteer'

const __dirname = fileURLToPath(new URL('.', import.meta.url))
const DIST = join(__dirname, 'dist')
const PORT = 4999

const ROUTES = [
  '/',
  '/about',
  '/about/director',
  '/approach',
  '/portfolio',
  '/portfolio/kampung-baru-shoplot',
  '/portfolio/rinching-industrial',
  '/portfolio/sungai-besi-industrial',
  '/portfolio/kampung-pandan-pickleball',
  '/portfolio/dome-style-hall',
  '/portfolio/pker-park-pickleball',
  '/contact',
  '/privacy',
]

const MIME = {
  '.html': 'text/html',
  '.js': 'application/javascript',
  '.css': 'text/css',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.svg': 'image/svg+xml',
  '.ico': 'image/x-icon',
  '.json': 'application/json',
  '.woff2': 'font/woff2',
  '.mp4': 'video/mp4',
}

function startServer() {
  return new Promise((resolve) => {
    const server = createServer((req, res) => {
      let filePath = join(DIST, req.url === '/' ? '/index.html' : req.url)

      if (!existsSync(filePath) || filePath.endsWith('/')) {
        filePath = join(DIST, 'index.html')
      }

      try {
        const data = readFileSync(filePath)
        const ext = extname(filePath)
        res.writeHead(200, { 'Content-Type': MIME[ext] || 'application/octet-stream' })
        res.end(data)
      } catch {
        const fallback = readFileSync(join(DIST, 'index.html'))
        res.writeHead(200, { 'Content-Type': 'text/html' })
        res.end(fallback)
      }
    })
    server.listen(PORT, () => {
      console.log(`  Static server running on http://localhost:${PORT}`)
      resolve(server)
    })
  })
}

async function render(browser, route) {
  const page = await browser.newPage()
  await page.goto(`http://localhost:${PORT}${route}`, { waitUntil: 'networkidle0', timeout: 30000 })

  // Wait for React to mount
  await page.waitForSelector('#root > *', { timeout: 10000 }).catch(() => {})

  const html = await page.content()
  await page.close()
  return html
}

async function main() {
  if (!existsSync(DIST)) {
    console.error('dist/ not found — run npm run build first')
    process.exit(1)
  }

  const server = await startServer()

  let browser
  try {
    browser = await puppeteer.launch({ headless: true, args: ['--no-sandbox'] })
  } catch {
    // Fallback to the puppeteer cache used by screenshot.mjs on this machine
    browser = await puppeteer.launch({
      headless: true,
      executablePath: 'C:/Users/nateh/.cache/puppeteer/chrome/win64-134.0.6998.35/chrome-win64/chrome.exe',
      args: ['--no-sandbox'],
    })
  }

  console.log(`\nPre-rendering ${ROUTES.length} routes...\n`)

  for (const route of ROUTES) {
    try {
      const html = await render(browser, route)

      // Write to the correct dist path
      let outPath
      if (route === '/') {
        outPath = join(DIST, 'index.html')
      } else {
        const dir = join(DIST, route)
        mkdirSync(dir, { recursive: true })
        outPath = join(dir, 'index.html')
      }

      writeFileSync(outPath, html, 'utf-8')
      console.log(`  ✓ ${route}`)
    } catch (err) {
      console.error(`  ✗ ${route} — ${err.message}`)
    }
  }

  await browser.close()
  server.close()
  console.log('\nPre-rendering complete.')
}

main()
