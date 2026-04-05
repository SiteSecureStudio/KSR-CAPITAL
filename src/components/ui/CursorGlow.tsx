import { useEffect, useRef } from 'react'

export function CursorGlow() {
  const glowRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = glowRef.current
    if (!el) return

    let x = window.innerWidth / 2
    let y = window.innerHeight / 2
    let currentX = x
    let currentY = y
    let rafId: number

    const onMove = (e: MouseEvent) => {
      x = e.clientX
      y = e.clientY
    }

    // Smooth lerp follow so the glow trails the cursor slightly
    const lerp = (a: number, b: number, t: number) => a + (b - a) * t

    const tick = () => {
      currentX = lerp(currentX, x, 0.1)
      currentY = lerp(currentY, y, 0.1)
      el.style.transform = `translate(${currentX}px, ${currentY}px)`
      rafId = requestAnimationFrame(tick)
    }

    window.addEventListener('mousemove', onMove, { passive: true })
    rafId = requestAnimationFrame(tick)

    return () => {
      window.removeEventListener('mousemove', onMove)
      cancelAnimationFrame(rafId)
    }
  }, [])

  return (
    <div
      ref={glowRef}
      aria-hidden="true"
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '480px',
        height: '480px',
        marginLeft: '-240px',
        marginTop: '-240px',
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(201,162,39,0.13) 0%, rgba(201,162,39,0.05) 40%, transparent 70%)',
        pointerEvents: 'none',
        zIndex: 998,
        willChange: 'transform',
        mixBlendMode: 'screen',
      }}
    />
  )
}
