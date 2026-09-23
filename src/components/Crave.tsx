import { Link } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import { useState } from 'react'
import {
  craveDials,
  craveReserveHref,
  itemsForCrave,
  type CraveId,
} from '../data/crave'
import { useReducedMotion } from '../hooks/useReducedMotion'
import { MediaImage } from '../lib/MediaImage'

export function Crave() {
  const [active, setActive] = useState<CraveId>('CITRUS')
  const reduced = useReducedMotion()
  const dial = craveDials.find((d) => d.id === active)!
  const items = itemsForCrave(active)

  return (
    <section
      id="crave"
      className="relative py-16 md:py-24 px-4 md:px-10 border-t-2 border-current overflow-hidden scroll-mt-24"
    >
      <div className="max-w-7xl mx-auto">
        <div className="mb-8 md:mb-12 flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <p className="mojo-label text-muted mb-2">
              Signature
            </p>
            <h2 className="font-display text-5xl md:text-7xl lg:text-8xl font-900 uppercase leading-none">
              Crave
            </h2>
          </div>
          <p className="max-w-sm font-body text-base md:text-lg">
            Dial what you want. The plate answers.
          </p>
        </div>

        {/* Dials */}
        <div className="flex flex-wrap gap-2 md:gap-3 mb-8 md:mb-10">
          {craveDials.map((d) => {
            const on = d.id === active
            return (
              <button
                key={d.id}
                type="button"
                onClick={() => setActive(d.id)}
                aria-pressed={on}
                className={`font-display uppercase tracking-[0.12em] text-sm md:text-base px-4 py-3 border-2 transition-colors ${
                  on
                    ? 'bg-[var(--mojo-ink)] text-[var(--mojo-bg)] border-[var(--mojo-ink)]'
                    : 'border-current text-muted hover:text-[var(--mojo-ink)]'
                }`}
              >
                <span
                  className="inline-block h-2 w-2 mr-2 align-middle"
                  style={{ background: d.accent }}
                  aria-hidden
                />
                {d.label}
              </button>
            )
          })}
        </div>

        <div className="grid lg:grid-cols-[1.4fr_1fr] gap-6 md:gap-10 items-stretch">
          {/* Plate stage */}
          <div className="relative min-h-[22rem] md:min-h-[32rem] border-2 border-current overflow-hidden bg-espresso">
            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                className="absolute inset-0"
                initial={
                  reduced
                    ? false
                    : { clipPath: 'inset(0 100% 0 0)', scale: 1.08 }
                }
                animate={{ clipPath: 'inset(0 0% 0 0)', scale: 1 }}
                exit={
                  reduced
                    ? undefined
                    : { clipPath: 'inset(0 0 0 100%)', opacity: 0.5 }
                }
                transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
              >
                <MediaImage
                  src={dial.plate}
                  alt={dial.label}
                  className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-espresso via-espresso/20 to-transparent" />
              </motion.div>
            </AnimatePresence>

            <div className="absolute inset-x-0 bottom-0 p-5 md:p-8 text-cream z-10">
              <AnimatePresence mode="wait">
                <motion.div
                  key={`meta-${active}`}
                  initial={reduced ? false : { y: 16, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={reduced ? undefined : { opacity: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <p
                    className="mojo-label mb-2"
                    style={{ color: dial.accent === '#160D0A' ? '#F2A23A' : dial.accent }}
                  >
                    {dial.label}
                  </p>
                  <p className="font-body text-lg md:text-xl italic text-cream/95 mb-4 max-w-md">
                    {dial.punch}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-5">
                    {dial.ingredients.map((word, i) => (
                      <motion.span
                        key={word}
                        className="mojo-label border border-cream/50 px-3 py-1.5 tracking-[0.12em]"
                        initial={reduced ? false : { y: 12, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.08 * i }}
                      >
                        {word}
                      </motion.span>
                    ))}
                  </div>
                    <Link
                      to={craveReserveHref}
                      className="mojo-btn mojo-btn-cream"
                      style={{ backgroundColor: '#FFF3D6', color: '#160D0A', borderColor: '#FFF3D6' }}
                    >
                      Reserve for this
                    </Link>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

          {/* Matching dishes */}
          <div className="flex flex-col gap-4">
            <p className="mojo-label text-muted">
              Calling you
            </p>
            <AnimatePresence mode="wait">
              <motion.ul
                key={active}
                className="flex flex-col gap-3 flex-1"
                initial={reduced ? false : { opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={reduced ? undefined : { opacity: 0, x: -12 }}
                transition={{ duration: 0.3 }}
              >
                {items.map((item) => (
                  <li
                    key={item.id}
                    className="grid grid-cols-[5.5rem_1fr_auto] gap-3 items-center border-2 border-current p-2"
                  >
                    <div className="aspect-square overflow-hidden border border-current">
                      <MediaImage
                        src={item.image}
                        alt={item.name}
                        className="h-full w-full object-cover"
                      />
                    </div>
                    <div>
                      <p className="mojo-label text-muted tracking-[0.12em]">
                        {item.category}
                      </p>
                      <h3 className="font-display text-lg md:text-xl font-700 uppercase leading-tight">
                        {item.name}
                      </h3>
                    </div>
                    <span className="font-display text-lg font-700 pr-2">
                      {item.price}
                    </span>
                  </li>
                ))}
              </motion.ul>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  )
}
