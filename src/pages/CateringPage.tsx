import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { PageHero } from '../components/PageHero'
import { useReducedMotion } from '../hooks/useReducedMotion'
import { MediaImage } from '../lib/MediaImage'
import { links } from '../data/links'

const KITCHEN_RAIL = [
  { src: '/media/hit-03.jpg', label: 'Churrasco' },
  { src: '/media/hit-01.jpg', label: 'Tacos' },
  { src: '/media/hit-02.jpg', label: 'Ceviche' },
  { src: '/media/hit-04.jpg', label: 'Empanadas' },
] as const

export function CateringPage() {
  const reduced = useReducedMotion()

  return (
    <div>
      <PageHero
        label="Off-site"
        title="Catering"
        body="From sizzling churrasco to zesty ceviches, tacos, and empanadas — Mojo catering brings Latin fusion to corporate events, office luncheons, and celebrations of all sizes."
        image="/media/hit-03.jpg"
        imageAlt="Churrasco spread"
        tall
        actions={
          <>
            <a
              href={links.cateringEzCater}
              target="_blank"
              rel="noopener noreferrer"
              className="mojo-btn mojo-btn-cream"
              style={{ backgroundColor: '#FFF3D6', color: '#160D0A', borderColor: '#FFF3D6' }}
            >
              Order on ezCater
            </a>
            <a
              href={links.phoneFoHi}
              className="mojo-btn mojo-btn-outline"
              style={{ color: '#FFF3D6', borderColor: '#FFF3D6' }}
            >
              Call 718-261-6162
            </a>
          </>
        }
      />

      <section className="border-t-2 border-current">
        <div className="px-4 md:px-10 py-10 md:py-12">
          <p className="mojo-label text-muted mb-4">From the kitchen</p>
          <div className="flex gap-3 md:gap-4 overflow-x-auto scrollbar-none pb-1">
            {KITCHEN_RAIL.map((plate) => (
              <div
                key={plate.label}
                className="relative shrink-0 w-[42vw] sm:w-48 md:w-56 aspect-[4/5] border-2 border-current overflow-hidden"
              >
                <MediaImage
                  src={plate.src}
                  alt={plate.label}
                  className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-espresso/85 to-transparent" />
                <span className="absolute bottom-3 left-3 mojo-label text-cream">
                  {plate.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 md:px-10 py-14 md:py-20 max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-14 items-start">
          <motion.div
            initial={reduced ? false : { opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.55 }}
            className="space-y-5 font-body text-base md:text-lg"
          >
            <h2 className="font-display text-3xl md:text-4xl font-800 uppercase leading-none">
              We&apos;ll deliver to you
            </h2>
            <p>
              Order catering for office lunches, parties, and celebrations on
              ezCater — or call us and we&apos;ll build a spread that tastes like
              Mojo.
            </p>
            <div className="flex flex-wrap gap-3 pt-2">
              <a
                href={links.cateringEzCater}
                target="_blank"
                rel="noopener noreferrer"
                className="mojo-btn mojo-btn-primary"
              >
                Order on ezCater
              </a>
              <a href={links.phoneFoHi} className="mojo-btn mojo-btn-outline">
                Call 718-261-6162
              </a>
              <a
                href={links.orderToastFoHi}
                target="_blank"
                rel="noopener noreferrer"
                className="mojo-btn mojo-btn-outline"
              >
                Smaller order on Toast
              </a>
              <Link to="/menu" className="mojo-btn mojo-btn-outline">
                Full Menu
              </Link>
            </div>
          </motion.div>

          <motion.div
            className="border-2 border-current p-6 md:p-8 bg-[var(--mojo-bg)]"
            initial={reduced ? false : { opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <p className="mojo-label text-chili mb-2">ezCater</p>
            <h2 className="font-display text-2xl md:text-3xl font-800 uppercase mb-4">
              Queens catering
            </h2>
            <p className="font-body text-base md:text-lg text-muted mb-6">
              Browse the Mojo catering menu, pick a delivery window, and place
              your order online.
            </p>
            <a
              href={links.cateringEzCater}
              target="_blank"
              rel="noopener noreferrer"
              className="mojo-btn mojo-btn-primary"
            >
              Open ezCater
            </a>
            <p className="mt-6 font-body text-base text-muted">
              Prefer email?{' '}
              <a href={links.eventsEmail} className="underline text-[var(--mojo-ink)]">
                events@mojolatin.com
              </a>
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
