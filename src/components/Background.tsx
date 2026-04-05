import bgVideo from '../../brand assests/output_loop.mp4'

export function Background() {
  return (
    <div className="fixed inset-0 overflow-hidden" style={{ zIndex: -1 }}>

      {/* Video base layer */}
      <video
        autoPlay
        loop
        muted
        playsInline
        style={{
          position: 'absolute',
          inset: 0,
          width: '100%',
          height: '100%',
          objectFit: 'cover',
        }}
      >
        <source src={bgVideo} type="video/mp4" />
      </video>

      {/* Dark veil over video for text legibility */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: 'rgba(8, 8, 8, 0.58)',
        }}
      />

    </div>
  )
}
