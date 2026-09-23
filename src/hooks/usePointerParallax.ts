import { useEffect, useState } from 'react'
import { useReducedMotion } from './useReducedMotion'

type Vec = { x: number; y: number }

/** Normalized pointer offset from center (-1..1). Disabled when reduced motion. */
export function usePointerParallax(strength = 1) {
  const reduced = useReducedMotion()
  const [offset, setOffset] = useState<Vec>({ x: 0, y: 0 })

  useEffect(() => {
    if (reduced) {
      setOffset({ x: 0, y: 0 })
      return
    }

    const onMove = (e: PointerEvent) => {
      const x = ((e.clientX / window.innerWidth) * 2 - 1) * strength
      const y = ((e.clientY / window.innerHeight) * 2 - 1) * strength
      setOffset({ x, y })
    }

    window.addEventListener('pointermove', onMove, { passive: true })
    return () => window.removeEventListener('pointermove', onMove)
  }, [reduced, strength])

  return offset
}
