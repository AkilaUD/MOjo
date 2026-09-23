import { useEffect, useRef, useState, type ReactNode } from 'react'

/** Mount children only when near the viewport — cuts initial JS/image work. */
export function DeferredMount({
  children,
  rootMargin = '280px 0px',
  minHeight = '40vh',
}: {
  children: ReactNode
  rootMargin?: string
  minHeight?: string
}) {
  const ref = useRef<HTMLDivElement>(null)
  const [show, setShow] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el || show) return

    if (typeof IntersectionObserver === 'undefined') {
      setShow(true)
      return
    }

    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) {
          setShow(true)
          io.disconnect()
        }
      },
      { rootMargin },
    )
    io.observe(el)
    return () => io.disconnect()
  }, [rootMargin, show])

  return (
    <div ref={ref} style={show ? undefined : { minHeight }}>
      {show ? children : null}
    </div>
  )
}
