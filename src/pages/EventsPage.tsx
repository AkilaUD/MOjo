import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { InquiryForm } from '../components/InquiryForm'
import { PageHero } from '../components/PageHero'
import { useReducedMotion } from '../hooks/useReducedMotion'
import { MediaImage } from '../lib/MediaImage'
import { links } from '../data/links'

export function EventsPage() {
  const reduced = useReducedMotion()

  return (
    <div>
      <PageHero
        label="Private parties"
        title="Events"
        body="Host celebrations at Mojo — office parties, holidays, birthdays, bridal or baby showers. The Tulum Room seats up to 25 for seated service."
        image="/media/loc-fohi.png"
        imageAlt="Mojo dining room energy"
        actions={
          <>
            <a
              href={links.eventsEmail}
              className="mojo-btn mojo-btn-cream"
              style={{ backgroundColor: '#FFF3D6', color: '#160D0A', borderColor: '#FFF3D6' }}
            >
              Email Events
            </a>
            <a
              href={links.phoneFoHi}
              className="mojo-btn mojo-btn-outline"
              style={{ color: '#FFF3D6', borderColor: '#FFF3D6' }}
            >
              Call FoHi
            </a>
          </>
        }
      />

      <section className="px-4 md:px-10 py-14 md:py-20 max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-14 items-start">
          <motion.div
            initial={reduced ? false : { opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.55 }}
          >
            <h2 className="font-display text-3xl md:text-4xl font-800 uppercase leading-none mb-6">
              Large party rules
            </h2>
            <ul className="space-y-3 font-body text-base md:text-lg list-disc pl-5">
              <li>Seating time: 2 hours (unless arranged prior)</li>
              <li>Please arrive on time — late arrivals may shorten seating</li>
              <li>Outside cake fee: $3 per person</li>
              <li>Brunch Sat–Sun from 11am · last seating 2:30pm</li>
              <li>Dinner starts 4pm every day</li>
            </ul>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href={links.eventsEmail} className="mojo-btn mojo-btn-primary">
                Email Events
              </a>
              <Link to="/reserve" className="mojo-btn mojo-btn-outline">
                Reserve a Table
              </Link>
            </div>

            <div className="mt-10 relative aspect-[4/3] border-2 border-current overflow-hidden">
              <MediaImage
                src="/media/loc-rvc.png"
                alt="Mojo Rockville Centre"
                className="absolute inset-0 h-full w-full object-cover"
              />
            </div>
          </motion.div>

          <motion.div
            className="border-2 border-current p-6 md:p-8 bg-[var(--mojo-bg)]"
            initial={reduced ? false : { opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <p className="mojo-label text-chili mb-2">Inquiry</p>
            <h2 className="font-display text-2xl md:text-3xl font-800 uppercase mb-6">
              Plan your night
            </h2>
            <InquiryForm subject="Mojo Event Inquiry" />
          </motion.div>
        </div>
      </section>
    </div>
  )
}
