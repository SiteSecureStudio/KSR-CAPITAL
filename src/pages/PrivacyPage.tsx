import { SEO } from '../components/SEO'
import { useInView } from '../hooks/useInView'
import { Reveal } from '../components/ui/Reveal'
import { SectionLabel } from '../components/ui/SectionLabel'
import { Separator } from '@/components/ui/separator'

interface SectionProps {
  title: string
  children: React.ReactNode
}

function PolicySection({ title, children }: SectionProps) {
  return (
    <div className="mb-12">
      <h2
        className="font-display text-[#E2D9C8] mb-4"
        style={{ fontSize: '1.3rem', fontWeight: 400 }}
      >
        {title}
      </h2>
      <div className="space-y-4 text-[#9A9085] text-sm leading-relaxed">
        {children}
      </div>
    </div>
  )
}

export function PrivacyPage() {
  const { ref, inView } = useInView()
  const year = new Date().getFullYear()

  return (
    <>
      <SEO
        title="Privacy Policy — KSR Capital Sdn Bhd"
        description="Read KSR Capital Sdn Bhd's privacy policy outlining how we collect, use, and protect your personal data in accordance with Malaysian data protection requirements."
        canonical="/privacy"
        noIndex={false}
      />
      <section className="pt-40 pb-16 md:pt-48 md:pb-20">
        <div className="max-w-6xl mx-auto px-8 md:px-12">
          <div ref={ref}>
            <Reveal inView={inView}>
              <SectionLabel>Legal</SectionLabel>
            </Reveal>
            <Reveal inView={inView} delay={1}>
              <h1
                className="font-display text-[#E2D9C8] mt-6 leading-tight"
                style={{ fontSize: 'clamp(2.4rem, 5vw, 4rem)', fontWeight: 300, letterSpacing: '-0.02em' }}
              >
                Privacy Policy &<br />
                <em className="text-[#C9A227] italic">Terms of Use</em>
              </h1>
            </Reveal>
            <Reveal inView={inView} delay={2} className="mt-6">
              <p className="text-[#9A9085] text-sm">
                Last updated: {new Date().toLocaleDateString('en-MY', { year: 'numeric', month: 'long', day: 'numeric' })}
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      <Separator className="bg-[#242424]" />

      <section className="py-20 md:py-28">
        <div className="max-w-4xl mx-auto px-8 md:px-12">
          <Reveal inView={inView} delay={1}>

            <PolicySection title="1. About This Policy">
              <p>
                This Privacy Policy describes how KSR Capital Sdn Bhd (Company Registration: 764906-W)
                ("KSR Capital", "we", "us", or "our") collects, uses, and protects personal data
                obtained through our website (ksrcapital.com.my) and through direct communications
                with us.
              </p>
              <p>
                This policy is in compliance with the Personal Data Protection Act 2010 (PDPA)
                of Malaysia. By accessing our website or providing us with your personal information,
                you consent to the collection and use of your data as described herein.
              </p>
            </PolicySection>

            <PolicySection title="2. Information We Collect">
              <p>We may collect the following types of personal data:</p>
              <ul className="list-none space-y-2 mt-3">
                {[
                  'Contact information: name, email address, telephone number',
                  'Business information: company name, business nature, inquiry details',
                  'Communication records: emails, enquiries, and correspondence you send us',
                  'Website usage data: pages visited, time spent, browser type (collected anonymously)',
                ].map(item => (
                  <li key={item} className="flex items-start gap-3">
                    <div className="w-4 h-px bg-[#C9A227] mt-2.5 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </PolicySection>

            <PolicySection title="3. How We Use Your Information">
              <p>Personal data collected is used solely for the following purposes:</p>
              <ul className="list-none space-y-2 mt-3">
                {[
                  'Responding to inquiries from prospective tenants, investors, or partners',
                  'Processing leasing or investment-related communications',
                  'Maintaining records required for legal and regulatory compliance',
                  'Improving our website and services',
                ].map(item => (
                  <li key={item} className="flex items-start gap-3">
                    <div className="w-4 h-px bg-[#C9A227] mt-2.5 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-4">
                We do not sell, rent, or share your personal data with third parties for marketing
                purposes without your explicit consent.
              </p>
            </PolicySection>

            <PolicySection title="4. Data Security">
              <p>
                We implement appropriate technical and organisational measures to protect your personal
                data against unauthorised access, disclosure, alteration, or destruction. However, no
                method of transmission over the internet is 100% secure, and we cannot guarantee
                absolute security.
              </p>
            </PolicySection>

            <PolicySection title="5. Data Retention">
              <p>
                We retain personal data only for as long as necessary to fulfil the purposes for which
                it was collected, or as required by applicable Malaysian law. When personal data is no
                longer required, we will securely delete or anonymise it.
              </p>
            </PolicySection>

            <PolicySection title="6. Your Rights Under PDPA">
              <p>
                Under Malaysia's Personal Data Protection Act 2010, you have the right to:
              </p>
              <ul className="list-none space-y-2 mt-3">
                {[
                  'Access your personal data held by us',
                  'Correct inaccurate or incomplete personal data',
                  'Withdraw consent for the processing of your personal data',
                  'Request the cessation of processing of your personal data',
                ].map(item => (
                  <li key={item} className="flex items-start gap-3">
                    <div className="w-4 h-px bg-[#C9A227] mt-2.5 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-4">
                To exercise any of these rights, please contact us at{' '}
                <a href="mailto:ksrcapitalsb@gmail.com" className="text-[#C9A227] hover:underline">
                  ksrcapitalsb@gmail.com
                </a>.
              </p>
            </PolicySection>

            <PolicySection title="7. Website Disclaimer">
              <p>
                The information provided on this website is for general informational purposes only.
                KSR Capital Sdn Bhd makes no representations or warranties of any kind, express or
                implied, about the completeness, accuracy, reliability, or availability of information
                contained on this website.
              </p>
              <p>
                Property details, availability, and specifications are subject to change without notice.
                All property information should be verified with KSR Capital directly before making
                any investment or leasing decision.
              </p>
            </PolicySection>

            <PolicySection title="8. Third-Party Links">
              <p>
                This website may contain links to external websites. KSR Capital is not responsible
                for the privacy practices or content of those third-party sites. We encourage you to
                review the privacy policies of any external sites you visit.
              </p>
            </PolicySection>

            <PolicySection title="9. Changes to This Policy">
              <p>
                We reserve the right to update this Privacy Policy at any time. Changes will be posted
                on this page with an updated "Last updated" date. Continued use of our website after
                changes constitutes acceptance of the updated policy.
              </p>
            </PolicySection>

            <PolicySection title="10. Contact">
              <p>
                For any questions, concerns, or requests relating to this Privacy Policy or our
                data practices, please contact:
              </p>
              <div className="mt-4 p-6 border border-[#242424]" style={{ background: '#0F0F0F' }}>
                <p className="font-display text-[#E2D9C8] mb-1" style={{ fontSize: '1rem' }}>
                  KSR Capital Sdn Bhd
                </p>
                <p className="text-[#C9A227] text-xs tracking-widest mb-4">764906-W</p>
                <p>No. 26510, Lot 10234, Mukim Gombak, Jalan Batu Caves, 68100 Batu Caves, Selangor Darul Ehsan</p>
                <p className="mt-2">
                  Email:{' '}
                  <a href="mailto:ksrcapitalsb@gmail.com" className="text-[#C9A227] hover:underline">
                    ksrcapitalsb@gmail.com
                  </a>
                </p>
                <p>Tel: 03-6186 7032</p>
              </div>
            </PolicySection>

            <div className="pt-8 border-t border-[#242424]">
              <p className="text-[#9A9085] text-xs">
                © {year} KSR Capital Sdn Bhd. All rights reserved. Registered in Malaysia under SSM.
              </p>
            </div>

          </Reveal>
        </div>
      </section>
    </>
  )
}
