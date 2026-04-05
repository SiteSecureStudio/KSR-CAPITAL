interface RevealProps {
  children: React.ReactNode
  inView: boolean
  delay?: 1 | 2 | 3 | 4
  className?: string
}

export function Reveal({ children, inView, delay, className = '' }: RevealProps) {
  const delayClass = delay ? `reveal-delay-${delay}` : ''
  return (
    <div className={`reveal ${inView ? 'visible' : ''} ${delayClass} ${className}`.trim()}>
      {children}
    </div>
  )
}
