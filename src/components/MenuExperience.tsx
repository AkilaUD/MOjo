import { Link } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import { useEffect, useMemo, useRef, useState } from 'react'
import {
  menuCategories,
  menuItems,
  type MenuCategory,
} from '../data/menu'
import { useReducedMotion } from '../hooks/useReducedMotion'
import { MediaImage } from '../lib/MediaImage'

export function MenuExperience() {
  const [category, setCategory] = useState<MenuCategory>('APPETIZERS')
  const reduced = useReducedMotion()
  const railRef = useRef<HTMLDivElement>(null)
  const sectionRef = useRef<HTMLElement>(null)

  const items = useMemo(
    () => menuItems.filter((m) => m.category === category),
    [category],
  )

  useEffect(() => {
    const openCocktails = () => {
      if (window.location.hash === '#drinks') {
        setCategory('COCKTAILS')
      }
    }
    openCocktails()
    window.addEventListener('hashchange', openCocktails)
    return () => window.removeEventListener('hashchange', openCocktails)
  }, [])

  return (
    <section
      id="menu"
      ref={sectionRef}
      className="py-20 md:py-28 border-t-2 border-current scroll-mt-24"
    >
      <div id="drinks" className="scroll-mt-28" />

      <div className="px-4 md:px-10 mb-10 flex flex-col lg:flex-row lg:items-end justify-between gap-6">
        <div>
          <p className="mojo-label text-muted mb-2">
            Immersive Menu
          </p>
          <h2 className="font-display text-5xl md:text-7xl font-800 uppercase leading-none">
            Browse by Appetite
          </h2>
        </div>
        <Link
          to="/menu"
          className="mojo-label border-b-2 border-current pb-1 self-start lg:self-auto"
        >
          Full menu catalog →
        </Link>
      </div>

      <div
        ref={railRef}
        className="flex gap-2 md:gap-4 overflow-x-auto scrollbar-none px-4 md:px-10 pb-6 snap-x"
        role="tablist"
        aria-label="Menu categories"
      >
        {menuCategories.map((cat) => {
          const active = category === cat
          return (
            <button
              key={cat}
              type="button"
              role="tab"
              aria-selected={active}
              aria-pressed={active}
              onClick={() => setCategory(cat)}
              className={`snap-start shrink-0 font-display uppercase tracking-[0.12em] text-sm md:text-base px-5 py-3 border-2 transition-colors ${
                active
                  ? 'border-[var(--mojo-ink)] bg-[var(--mojo-ink)] text-[var(--mojo-bg)]'
                  : 'border-current text-muted hover:text-[var(--mojo-ink)]'
              }`}
            >
              {cat}
            </button>
          )
        })}
      </div>

      <div className="px-4 md:px-10">
        <AnimatePresence mode="wait">
          <motion.div
            key={category}
            initial={reduced ? false : { opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            exit={reduced ? undefined : { opacity: 0, x: -30 }}
            transition={{ duration: 0.35 }}
            className="grid md:grid-cols-2 gap-8 md:gap-12"
          >
            <div className="relative aspect-[4/5] md:aspect-auto md:min-h-[32rem] border-2 border-current overflow-hidden sticky top-24 self-start">
              {items[0] && (
                <>
                  <MediaImage
                    src={items[0].image}
                    alt={items[0].name}
                    className="absolute inset-0 h-full w-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-espresso/80 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-cream">
                    <p className="mojo-label text-cream/80">
                      {category}
                    </p>
                    <p className="font-display text-4xl md:text-5xl font-800 uppercase leading-none mt-1">
                      {items[0].name}
                    </p>
                  </div>
                </>
              )}
            </div>

            <ul className="flex flex-col divide-y-2 divide-current border-t-2 border-b-2 border-current">
              {items.map((item) => (
                <li
                  key={item.id}
                  className="py-5 md:py-6 flex justify-between gap-4 group"
                >
                  <div>
                    <h3 className="font-display text-2xl md:text-3xl font-700 uppercase leading-tight group-hover:underline decoration-2 underline-offset-4 decoration-chili transition-[text-decoration]">
                      {item.name}
                    </h3>
                    <p className="mt-2 font-body text-base text-muted max-w-md">
                      {item.description}
                    </p>
                    <p className="mt-2 mojo-label text-muted tracking-[0.12em]">
                      {item.ingredients.join(' · ')}
                    </p>
                  </div>
                  <span className="font-display text-xl font-700 shrink-0">
                    {item.price}
                  </span>
                </li>
              ))}
              {items.length === 0 && (
                <li className="py-10 font-body text-muted">
                  Coming soon to this category.
                </li>
              )}
            </ul>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  )
}
