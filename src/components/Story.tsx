import { motion } from 'framer-motion'
import { useReducedMotion } from '../hooks/useReducedMotion'
import { MediaImage } from '../lib/MediaImage'

export function Story() {
  const reduced = useReducedMotion()

  return (
    <section
      id="story"
      className="py-16 md:py-24 px-4 md:px-10 border-t-2 border-current scroll-mt-24"
    >
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 md:gap-12 items-center">
        <div>
          <p className="mojo-label text-muted mb-3">Origin</p>
          <motion.h2
            className="font-display text-4xl md:text-6xl font-900 uppercase leading-[0.9]"
            initial={reduced ? false : { opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Born hungry
            <br />
            on Austin St
          </motion.h2>
          <div className="mt-6 space-y-4 font-body text-base md:text-lg leading-relaxed">
            <p>
              Forest Hills, 2019 — Mojo opened as Latin fusion that refuses to
              sit still. Chefs Emmanuel Piqueras and Jose Ventura Lozano cook
              the plate that makes the night start.
            </p>
            <p>
              Then Rockville Centre. Same heat. Later hours. Same Mojo.
            </p>
          </div>
        </div>
        <div className="aspect-[4/5] border-2 border-current overflow-hidden">
          <MediaImage
            src="/media/loc-fohi.png"
            alt="Mojo dining room"
            className="h-full w-full object-cover"
          />
        </div>
      </div>
    </section>
  )
}
