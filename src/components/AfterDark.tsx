import {
  motion,
  useScroll,
  useTransform,
  type MotionValue,
} from 'framer-motion'
import { useEffect, useRef, useState } from 'react'
import { CleanFrySeal } from './CleanFrySeal'
import { useReducedMotion } from '../hooks/useReducedMotion'

const PHASES = [
  { label: 'Day', line: 'Light on the bar. Plates arriving.' },
  { label: 'Sunset', line: 'Mango hour. The room warms.' },
  { label: 'Evening', line: 'Chili in the air. Voices rising.' },
  { label: 'Night', line: 'Pink light. Bass. Mojo after dark.' },
] as const

export function AfterDark() {
  const ref = useRef<HTMLElement>(null)
  const reduced = useReducedMotion()
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end end'],
  })

  const glowOpacity = useTransform(scrollYProgress, [0, 1], [0.2, 1])
  const copyOpacity = useTransform(scrollYProgress, [0.1, 0.4], [0.7, 1])
  const [phaseLabel, setPhaseLabel] = useState<(typeof PHASES)[number]['label']>(
    'Day',
  )

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const update = () => {
      const rect = el.getBoundingClientRect()
      const total = el.offsetHeight - window.innerHeight
      const scrolled = -rect.top
      const p = total > 0 ? Math.max(0, Math.min(1, scrolled / total)) : 0
      const i = Math.min(3, Math.max(0, Math.floor(p * 4)))
      setPhaseLabel(PHASES[i].label)
    }

    update()
    window.addEventListener('scroll', update, { passive: true })
    window.addEventListener('resize', update)
    return () => {
      window.removeEventListener('scroll', update)
      window.removeEventListener('resize', update)
    }
  }, [])

  const o0 = useTransform(scrollYProgress, [0, 0.12, 0.25], [0.55, 1, 0.6])
  const o1 = useTransform(scrollYProgress, [0.25, 0.37, 0.5], [0.55, 1, 0.6])
  const o2 = useTransform(scrollYProgress, [0.5, 0.62, 0.75], [0.55, 1, 0.6])
  const o3 = useTransform(scrollYProgress, [0.75, 0.88, 1], [0.55, 1, 1])
  const opacities = [o0, o1, o2, o3]

  return (
    <section id="after-dark" ref={ref} className="relative h-[180vh]">
      <div className="sticky top-0 h-[100svh] overflow-hidden pb-24 md:pb-0">
        <div className="absolute inset-0 bg-espresso" />
        <motion.div
          className="absolute inset-0"
          style={{
            background:
              'radial-gradient(ellipse at 30% 40%, #F2A23A55, transparent 50%), radial-gradient(ellipse at 80% 70%, #E83E8C44, transparent 45%), #160D0A',
            opacity: glowOpacity,
          }}
        />

        <div className="relative z-10 grid h-full w-full grid-cols-1 items-center gap-6 px-4 py-10 md:px-10 md:py-12 lg:grid-cols-[minmax(0,1.05fr)_minmax(240px,0.95fr)] lg:gap-10">
          <div className="flex min-w-0 flex-col justify-between gap-10 self-stretch py-2">
            <div>
              <p className="mojo-label text-cream/85 mb-4 md:mb-6">Atmosphere</p>
              <h2 className="font-display text-cream text-5xl md:text-7xl lg:text-8xl font-900 uppercase leading-[0.85]">
                Mojo
                <br />
                <span className="text-night-pink">After Dark</span>
              </h2>
            </div>

            <div>
              <ul className="flex flex-wrap gap-3 md:gap-4">
                {PHASES.map((phase, i) => (
                  <PhaseChip
                    key={phase.label}
                    label={phase.label}
                    line={phase.line}
                    opacity={reduced ? undefined : opacities[i]}
                    reduced={reduced}
                    active={phaseLabel === phase.label}
                  />
                ))}
              </ul>

              <motion.p
                className="mt-6 md:mt-8 max-w-md font-body text-lg text-cream/90 italic"
                style={{ opacity: copyOpacity }}
              >
                Scroll the day into night. The site follows the room.
              </motion.p>
            </div>
          </div>

          <div className="flex items-center justify-center lg:justify-end lg:pr-4 xl:pr-8">
            <CleanFrySeal size={360} />
          </div>
        </div>

        <div
          className="absolute bottom-8 right-4 md:bottom-10 md:right-10 font-display text-cream text-5xl md:text-7xl font-900 opacity-15 uppercase pointer-events-none hidden xl:block"
          aria-hidden
        >
          {phaseLabel}
        </div>
      </div>
    </section>
  )
}

function PhaseChip({
  label,
  line,
  opacity,
  reduced,
  active,
}: {
  label: string
  line: string
  opacity?: MotionValue<number>
  reduced: boolean
  active: boolean
}) {
  return (
    <motion.li
      style={reduced ? { opacity: active ? 1 : 0.6 } : { opacity }}
      className={`border px-4 py-3 text-cream min-w-[8rem] ${
        active ? 'border-night-pink' : 'border-cream/50'
      }`}
    >
      <span className="mojo-label block">
        {label}
      </span>
      <span className="font-body text-base mt-1 block text-cream/85">{line}</span>
    </motion.li>
  )
}
