import { Link } from 'react-router-dom'
import { PageHero } from '../components/PageHero'
import { MediaImage } from '../lib/MediaImage'
import { links } from '../data/links'

const TILES = [
  { src: '/media/hit-01.jpg', label: 'Tacos' },
  { src: '/media/hit-02.jpg', label: 'Ceviche' },
  { src: '/media/hit-05.jpg', label: 'Cocktails' },
] as const

export function OrderPage() {
  return (
    <div>
      <PageHero
        label="Takeout & delivery"
        title="Order Online"
        body="Fresh tacos, empanadas, ceviche, burgers, and more — brunch, lunch, or dinner from Forest Hills on Toast."
        image="/media/hit-01.jpg"
        imageAlt="Baja shrimp tacos"
        tall
        actions={
          <>
            <a
              href={links.orderToastFoHi}
              target="_blank"
              rel="noopener noreferrer"
              className="mojo-btn mojo-btn-cream"
              style={{ backgroundColor: '#FFF3D6', color: '#160D0A', borderColor: '#FFF3D6' }}
            >
              Order Now on Toast
            </a>
            <a
              href={links.phoneFoHi}
              className="mojo-btn mojo-btn-outline"
              style={{ color: '#FFF3D6', borderColor: '#FFF3D6' }}
            >
              Call 718-261-6162
            </a>
            <Link
              to="/menu"
              className="mojo-btn mojo-btn-outline"
              style={{ color: '#FFF3D6', borderColor: '#FFF3D6' }}
            >
              Browse Full Menu
            </Link>
          </>
        }
      />

      <section className="relative border-t-2 border-current">
        <div className="absolute inset-0">
          <MediaImage
            src="/media/crave-heat.jpg"
            alt=""
            className="h-full w-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-[var(--mojo-bg)]/92" />
        </div>
        <div className="relative px-4 md:px-10 py-14 md:py-20">
          <a
            href={links.orderToastFoHi}
            target="_blank"
            rel="noopener noreferrer"
            className="block max-w-3xl border-2 border-current bg-cream text-espresso p-8 md:p-14 hover:bg-espresso hover:text-cream transition-colors group"
          >
            <p className="mojo-label text-chili group-hover:text-mango mb-3">
              Powered by Toast
            </p>
            <p className="font-display text-3xl md:text-5xl font-800 uppercase leading-none">
              Open the Mojo FoHi
              <br />
              ordering menu
            </p>
            <p className="mt-4 font-body text-base md:text-lg opacity-80">
              Continues on Toast — pick your items, schedule pickup or delivery.
            </p>
            <span className="mt-8 inline-block font-display uppercase tracking-[0.16em] text-base font-700 border-b-2 border-current pb-0.5">
              Continue to Toast →
            </span>
          </a>

          <div className="mt-10 grid grid-cols-3 gap-3 md:gap-4 max-w-3xl">
            {TILES.map((tile) => (
              <a
                key={tile.label}
                href={links.orderToastFoHi}
                target="_blank"
                rel="noopener noreferrer"
                className="relative aspect-[3/4] border-2 border-current overflow-hidden group"
              >
                <MediaImage
                  src={tile.src}
                  alt={tile.label}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-espresso/90 to-transparent" />
                <span className="absolute bottom-3 left-3 mojo-label text-cream">
                  {tile.label}
                </span>
              </a>
            ))}
          </div>

          <p className="mt-8 font-body text-muted max-w-xl">
            Prefer to dine in?{' '}
            <Link to="/reserve" className="underline text-[var(--mojo-ink)]">
              Reserve a table
            </Link>{' '}
            at Forest Hills or Rockville Centre.
          </p>
        </div>
      </section>
    </div>
  )
}
