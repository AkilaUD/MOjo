import { Link } from 'react-router-dom'
import { links } from '../data/links'
import { MediaImage } from '../lib/MediaImage'

const rooms = [
  {
    region: 'Queens',
    name: 'Forest Hills',
    detail: 'Lunch · Brunch · Dinner · Happy Hour',
    href: links.opentableFoHi,
    cta: 'Reserve Forest Hills',
    image: '/media/loc-fohi.png',
  },
  {
    region: 'Long Island',
    name: 'Rockville Centre',
    detail: 'Brunch · Dinner · Late Night',
    href: links.opentableRvc,
    cta: 'Reserve Rockville Centre',
    image: '/media/loc-rvc.png',
  },
] as const

/** Dual-location OpenTable chooser — used on /reserve and home footer. */
export function ReserveChooser({
  id,
  className = '',
  compact = false,
}: {
  id?: string
  className?: string
  /** Hide the big “Come Hungry” headline when a PageHero already covers it */
  compact?: boolean
}) {
  return (
    <div
      id={id}
      className={`px-4 md:px-10 py-16 md:py-24 pb-28 md:pb-28 text-center scroll-mt-28 md:scroll-mt-24 ${className}`}
    >
      {!compact && (
        <>
          <p className="mojo-label text-muted mb-4">The ask</p>
          <h2 className="font-display text-5xl md:text-8xl font-900 uppercase leading-none">
            Come Hungry.
            <br />
            Leave with Mojo.
          </h2>
          <p className="mt-5 font-body text-base md:text-lg text-muted max-w-md mx-auto">
            Pick your room. Book on OpenTable.
          </p>
        </>
      )}
      {compact && (
        <p className="font-body text-base md:text-lg text-muted max-w-md mx-auto mb-2">
          Pick your room. Book on OpenTable.
        </p>
      )}
      <div
        className={`grid sm:grid-cols-2 gap-4 max-w-3xl mx-auto text-left ${
          compact ? 'mt-8' : 'mt-10'
        }`}
      >
        {rooms.map((room) => (
          <a
            key={room.name}
            href={room.href}
            target="_blank"
            rel="noopener noreferrer"
            className="group border-2 border-current overflow-hidden hover:bg-[var(--mojo-ink)] hover:text-[var(--mojo-bg)] transition-colors"
          >
            <div className="relative aspect-[16/10] overflow-hidden border-b-2 border-current">
              <MediaImage
                src={room.image}
                alt={room.name}
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-espresso/70 to-transparent pointer-events-none group-hover:opacity-80" />
            </div>
            <div className="p-5 md:p-6">
              <p className="mojo-label opacity-70 group-hover:opacity-90">
                {room.region}
              </p>
              <p className="font-display text-2xl md:text-3xl font-800 uppercase leading-none mt-1">
                {room.name}
              </p>
              <p className="mt-3 font-body text-sm md:text-base opacity-80">
                {room.detail}
              </p>
              <span className="mt-5 inline-block font-display uppercase tracking-[0.16em] text-base font-700 border-b-2 border-current pb-0.5">
                {room.cta}
              </span>
            </div>
          </a>
        ))}
      </div>
      <p className="mt-8 font-body text-muted">
        Prefer takeout?{' '}
        <Link to="/order" className="underline font-700 text-[var(--mojo-ink)]">
          Order online
        </Link>
      </p>
    </div>
  )
}
