import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import { plateHits } from '../data/plateHits'
import { useReducedMotion } from '../hooks/useReducedMotion'
import { MediaImage } from '../lib/MediaImage'

export function PlateHits() {
  const reduced = useReducedMotion()

  return (
    <section id="food" className="border-t-2 border-current scroll-mt-24">
      <div className="px-4 md:px-10 py-10 md:py-14 flex flex-col md:flex-row md:items-end justify-between gap-4">
        <h2 className="font-display text-4xl md:text-6xl font-900 uppercase leading-none">
          Plate Hits
        </h2>
        <p className="font-body text-muted max-w-xs">
          No cards. Just the dish, the punch, the price.
        </p>
      </div>

      <div className="flex flex-col">
        {plateHits.map((hit, i) => (
          <HitRow key={hit.id} hit={hit} index={i} reduced={reduced} />
        ))}
      </div>
    </section>
  )
}

function HitRow({
  hit,
  index,
  reduced,
}: {
  hit: (typeof plateHits)[number]
  index: number
  reduced: boolean
}) {
  const ref = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  })
  const scale = useTransform(
    scrollYProgress,
    [0, 0.35, 0.65, 1],
    reduced ? [1, 1, 1, 1] : [1.12, 1, 1, 1.06],
  )
  const flip = index % 2 === 1

  return (
    <article
      ref={ref}
      className="relative min-h-[70svh] md:min-h-[85svh] overflow-hidden border-t-2 border-current"
    >
      <motion.div className="absolute inset-0" style={{ scale }}>
        <MediaImage
          src={hit.image}
          alt={hit.name}
          className="h-full w-full object-cover"
        />
        <div
          className={`absolute inset-0 ${
            flip
              ? 'bg-gradient-to-l from-espresso/90 via-espresso/40 to-transparent'
              : 'bg-gradient-to-r from-espresso/90 via-espresso/40 to-transparent'
          }`}
        />
      </motion.div>

      <div
        className={`relative z-10 flex min-h-[70svh] md:min-h-[85svh] items-end md:items-center px-4 md:px-10 py-12 ${
          flip ? 'md:justify-end' : 'md:justify-start'
        }`}
      >
        <div className="text-cream max-w-lg">
          <p className="mojo-label text-mango mb-2">
            {hit.category}
          </p>
          <h3 className="font-display text-5xl md:text-7xl font-900 uppercase leading-[0.9]">
            {hit.name}
          </h3>
          <p className="mt-4 font-display text-base uppercase tracking-[0.12em] text-cream">
            {hit.punch}
          </p>
          <p className="mt-6 font-display text-4xl font-700">{hit.price}</p>
        </div>
      </div>
    </article>
  )
}
