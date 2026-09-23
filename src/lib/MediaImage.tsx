import { useState } from 'react'

function webpSrc(src: string) {
  return src.replace(/\.(png|jpe?g)$/i, '.webp')
}

/** Graceful image fallback; serves WebP when available. */
export function MediaImage({
  src,
  alt,
  className = '',
  loading = 'lazy',
  fetchPriority,
  width,
  height,
}: {
  src: string
  alt: string
  className?: string
  loading?: 'lazy' | 'eager'
  fetchPriority?: 'high' | 'low' | 'auto'
  width?: number
  height?: number
}) {
  const [failed, setFailed] = useState(false)
  const webp = webpSrc(src)
  const hasWebp = /\.(png|jpe?g)$/i.test(src)

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
    <picture style={{ display: 'contents' }}>
      {hasWebp && <source srcSet={webp} type="image/webp" />}
      <img
        src={src}
        alt={alt}
        loading={loading}
        decoding="async"
        fetchPriority={fetchPriority}
        width={width}
        height={height}
        className={className}
        onError={() => setFailed(true)}
      />
    </picture>
  )
}
