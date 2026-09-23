import { motion } from 'framer-motion'
import { currentDaypart, tonightSlots } from '../data/tonight'
import { useReducedMotion } from '../hooks/useReducedMotion'

export function Tonight() {
  const active = currentDaypart()
  const reduced = useReducedMotion()

  return (
    <section
      id="events"
      className="py-14 md:py-20 px-4 md:px-10 border-t-2 border-current scroll-mt-24"
    >
      <div id="tonight" className="max-w-4xl mx-auto">
        <div className="mb-8 md:mb-10">
          <p className="mojo-label text-muted mb-2">Go tonight</p>
          <h2 className="font-display text-4xl md:text-6xl font-900 uppercase leading-none">
            Tonight at Mojo
          </h2>
        </div>

        <ol className="relative border-l-2 border-current ml-1">
          {tonightSlots.map((slot, i) => {
            const isNow = slot.daypart === active
            return (
              <motion.li
                key={slot.id}
                className="relative pl-6 md:pl-10 py-4 md:py-5"
                style={{ color: isNow ? undefined : 'var(--mojo-muted)' }}
                initial={reduced ? false : { opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-8%' }}
                transition={{ delay: i * 0.04 }}
              >
                <span
                  className={`absolute -left-[6px] top-7 h-2.5 w-2.5 rounded-full border-2 ${
                    isNow
                      ? 'border-chili bg-chili'
                      : 'border-current bg-transparent'
                  }`}
                />
                <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-2">
                  <div>
                    {isNow && (
                      <span className="mojo-label text-chili border-b border-chili tracking-[0.16em]">
                        Now
                      </span>
                    )}
                    <h3
                      className={`font-display uppercase font-800 leading-none ${
                        isNow
                          ? 'text-3xl md:text-5xl text-[var(--mojo-ink)]'
                          : 'text-2xl md:text-3xl'
                      }`}
                    >
                      {slot.label}
                    </h3>
                    <p
                      className={`mt-2 font-body text-base ${
                        isNow ? 'text-[var(--mojo-ink)]' : ''
                      }`}
                    >
                      {slot.detail}
                    </p>
                  </div>
                  <div className="mojo-label shrink-0 tracking-[0.12em] !text-sm md:!text-base">
                    {slot.time}
                  </div>
                </div>
              </motion.li>
            )
          })}
        </ol>
      </div>
    </section>
  )
}
