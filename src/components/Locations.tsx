import { Link } from 'react-router-dom'
import { locations } from '../data/locations'
import { MediaImage } from '../lib/MediaImage'
import { ReserveChooser } from './ReserveChooser'

export function Locations({ showAsk = true }: { showAsk?: boolean }) {
  return (
    <section id="locations" className="border-t-2 border-current scroll-mt-24">
      {locations.map((loc, i) => (
        <article
          key={loc.id}
          className={`grid lg:grid-cols-2 min-h-[90svh] ${
            i % 2 === 1 ? 'lg:[&>*:first-child]:order-2' : ''
          }`}
        >
          <div className="relative min-h-[50vh] lg:min-h-full border-b-2 lg:border-b-0 lg:border-r-2 border-current overflow-hidden">
            <MediaImage
              src={loc.image}
              alt={`${loc.name} location`}
              className="absolute inset-0 h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-espresso/90 via-espresso/40 to-transparent" />
            <div className="absolute bottom-0 left-0 p-6 md:p-10 text-cream">
              <p className="mojo-label text-cream/90">{loc.region}</p>
              <h3 className="font-display text-5xl md:text-7xl font-900 uppercase leading-none">
                {loc.name}
              </h3>
              {loc.note && (
                <p className="mt-3 font-body italic text-cream/90">{loc.note}</p>
              )}
            </div>
          </div>

          <div className="flex flex-col justify-center px-6 py-12 md:px-12 md:py-16 gap-8">
            <div>
              <p className="font-display text-2xl md:text-3xl font-700 uppercase">
                {loc.address}
              </p>
              <p className="font-body text-lg mt-1">{loc.cityLine}</p>
            </div>

            <div>
              <p className="mojo-label mb-3">Hours</p>
              <ul className="space-y-1 font-body text-base">
                {loc.hours.map((h) => (
                  <li key={h}>{h}</li>
                ))}
              </ul>
            </div>

            <div className="flex flex-col sm:flex-row flex-wrap gap-3">
              <a
                href={loc.reserveHref}
                target="_blank"
                rel="noopener noreferrer"
                className="mojo-btn mojo-btn-primary"
              >
                Reserve
              </a>
              <a
                href={loc.mapsHref}
                target="_blank"
                rel="noopener noreferrer"
                className="mojo-btn mojo-btn-outline"
              >
                Directions
              </a>
              <a href={loc.phoneHref} className="mojo-btn mojo-btn-outline">
                {loc.phone}
              </a>
            </div>

            <a
              href={loc.emailHref}
              className="mojo-label text-muted hover:text-[var(--mojo-ink)]"
            >
              {loc.email}
            </a>
          </div>
        </article>
      ))}

      {showAsk ? (
        <div className="border-t-2 border-current">
          <ReserveChooser id="reserve" />
        </div>
      ) : (
        <div className="border-t-2 border-current px-4 md:px-10 py-12 text-center">
          <Link to="/reserve" className="mojo-btn mojo-btn-primary">
            Reserve a Table
          </Link>
        </div>
      )}
    </section>
  )
}
