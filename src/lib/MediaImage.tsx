import { useState } from 'react'

/** Graceful image fallback when a media file is missing. */
export function MediaImage({
  src,
  alt,
  className = '',
  loading = 'lazy',
}: {
  src: string
  alt: string
  className?: string
  loading?: 'lazy' | 'eager'
}) {
  const [failed, setFailed] = useState(false)

  if (failed) {
    return (
      <div
        className={`bg-espresso/20 flex items-center justify-center ${className}`}
        role="img"
        aria-label={alt}
      >
        <span className="font-display text-2xl tracking-widest opacity-40 uppercase">
          Mojo
        </span>
      </div>
    )
  }

  return (
    <img
      src={src}
      alt={alt}
      loading={loading}
      decoding="async"
      className={className}
      onError={() => setFailed(true)}
    />
  )
}
