import { useEffect, useState } from 'react'

/**
 * Stay day-cream through Crave + Plate Hits + Menu.
 * Night ramp only when After Dark enters view.
 */
export function useScrollAtmosphere() {
  const [phase, setPhase] = useState(0)

  useEffect(() => {
    const root = document.documentElement

    const lerp = (a: number, b: number, t: number) => a + (b - a) * t
    const hexToRgb = (hex: string) => {
      const h = hex.replace('#', '')
      return {
        r: parseInt(h.slice(0, 2), 16),
        g: parseInt(h.slice(2, 4), 16),
        b: parseInt(h.slice(4, 6), 16),
      }
    }
    const mix = (a: string, b: string, t: number) => {
      const A = hexToRgb(a)
      const B = hexToRgb(b)
      const r = Math.round(lerp(A.r, B.r, t))
      const g = Math.round(lerp(A.g, B.g, t))
      const bl = Math.round(lerp(A.b, B.b, t))
      return `rgb(${r} ${g} ${bl})`
    }

    const setDay = () => {
      root.style.setProperty('--mojo-phase', '0')
      root.style.setProperty('--mojo-bg', '#FFF3D6')
      root.style.setProperty('--mojo-ink', '#160D0A')
      root.style.setProperty('--mojo-accent', '#F2A23A')
      root.style.setProperty(
        '--mojo-muted',
        'color-mix(in srgb, #160D0A 68%, transparent)',
      )
      root.style.colorScheme = 'light'
      setPhase(0)
    }

    const update = () => {
      const afterDark = document.getElementById('after-dark')
      if (!afterDark) {
        setDay()
        return
      }

      const rect = afterDark.getBoundingClientRect()
      const sectionTop = window.scrollY + rect.top
      const start = sectionTop - window.innerHeight * 0.25
      const end = sectionTop + afterDark.offsetHeight * 0.9
      const y = window.scrollY

      let p = 0
      if (y < start) {
        setDay()
        return
      }
      if (y > end) p = 1
      else p = (y - start) / Math.max(end - start, 1)

      p = Math.max(0, Math.min(1, p))
      setPhase(p)
      root.style.setProperty('--mojo-phase', String(p))

      const bg =
        p < 0.35
          ? mix('#FFF3D6', '#F2A23A', p / 0.35)
          : p < 0.65
            ? mix('#F2A23A', '#8F2D14', (p - 0.35) / 0.3)
            : mix('#8F2D14', '#160D0A', (p - 0.65) / 0.35)

      const ink = p < 0.3 ? '#160D0A' : '#FFF3D6'
      const accent = p < 0.5 ? '#F2A23A' : '#E83E8C'
      const muted =
        p < 0.3
          ? 'color-mix(in srgb, #160D0A 68%, transparent)'
          : 'color-mix(in srgb, #FFF3D6 72%, transparent)'

      root.style.setProperty('--mojo-bg', bg)
      root.style.setProperty('--mojo-ink', ink)
      root.style.setProperty('--mojo-accent', accent)
      root.style.setProperty('--mojo-muted', muted)
      root.style.colorScheme = p >= 0.3 ? 'dark' : 'light'
    }

    update()
    window.addEventListener('scroll', update, { passive: true })
    window.addEventListener('resize', update)
    return () => {
      window.removeEventListener('scroll', update)
      window.removeEventListener('resize', update)
    }
  }, [])

  return phase
}
