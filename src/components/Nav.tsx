import { Link, useLocation } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import { links } from '../data/links'

const NAV = [
  { to: '/', label: 'Home', end: true },
  { to: '/menu', label: 'Menu' },
  { to: '/order', label: 'Order' },
  { to: '/events', label: 'Events' },
  { to: '/catering', label: 'Catering' },
  { to: '/locations', label: 'Locations' },
] as const

function isActive(pathname: string, to: string, end?: boolean) {
  if (end || to === '/') return pathname === '/'
  return pathname === to || pathname.startsWith(`${to}/`)
}

export function Nav() {
  const { pathname } = useLocation()
  const [open, setOpen] = useState(false)
  const reserveActive = pathname === '/reserve'

  useEffect(() => {
    setOpen(false)
  }, [pathname])

  useEffect(() => {
    if (!open) return
    const prev = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false)
    }
    window.addEventListener('keydown', onKey)
    return () => {
      document.body.style.overflow = prev
      window.removeEventListener('keydown', onKey)
    }
  }, [open])

  return (
    <>
      <header className="fixed top-0 inset-x-0 z-50 pointer-events-none">
        <div className="flex items-center justify-between px-4 md:px-8 py-3 md:py-4 pointer-events-auto text-[var(--mojo-ink)] bg-[color-mix(in_srgb,var(--mojo-bg)_90%,transparent)] backdrop-blur-md border-b border-[color-mix(in_srgb,var(--mojo-ink)_12%,transparent)]">
          <Link
            to="/"
            className="font-display text-2xl md:text-3xl font-800 tracking-tight"
          >
            MOJO
          </Link>

          <nav className="hidden lg:flex items-center gap-4 xl:gap-6 text-base xl:text-lg uppercase tracking-[0.1em] font-display font-700">
            {NAV.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                className={`transition-opacity ${
                  isActive(pathname, item.to, 'end' in item && item.end)
                    ? 'opacity-100'
                    : 'opacity-70 hover:opacity-100'
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <Link
              to="/reserve"
              className={`mojo-btn mojo-btn-ghost !hidden md:!inline-flex !px-4 !py-2.5 !text-base ${
                reserveActive ? 'bg-[var(--mojo-ink)] text-[var(--mojo-bg)]' : ''
              }`}
            >
              Reserve
            </Link>
            <button
              type="button"
              className="mojo-btn mojo-btn-ghost !inline-flex lg:!hidden !px-4 !py-2.5 !text-base"
              aria-expanded={open}
              aria-controls="mobile-menu"
              aria-label={open ? 'Close menu' : 'Open menu'}
              onClick={() => setOpen(true)}
            >
              Menu
            </button>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-menu"
            role="dialog"
            aria-modal="true"
            aria-label="Site menu"
            className="fixed inset-0 z-[60] bg-espresso text-cream flex flex-col"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div className="flex justify-between px-4 py-4">
              <span className="font-display text-2xl font-800">MOJO</span>
              <button
                type="button"
                className="font-display uppercase tracking-[0.12em] text-base"
                aria-label="Close menu"
                onClick={() => setOpen(false)}
              >
                Close
              </button>
            </div>
            <nav className="flex-1 flex flex-col justify-center px-6 gap-3 overflow-y-auto">
              {NAV.map((item, i) => (
                <motion.div
                  key={item.to}
                  initial={{ x: -24, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.04 * i }}
                >
                  <Link
                    to={item.to}
                    onClick={() => setOpen(false)}
                    className="font-display text-4xl sm:text-5xl font-700 uppercase block"
                  >
                    {item.label}
                  </Link>
                </motion.div>
              ))}
              <Link
                to="/reserve"
                onClick={() => setOpen(false)}
                className="font-display text-4xl sm:text-5xl font-700 uppercase"
              >
                Reserve
              </Link>
            </nav>
            <div className="m-6 flex flex-col gap-3 pb-[max(1.5rem,env(safe-area-inset-bottom))]">
              <a
                href={links.opentableFoHi}
                target="_blank"
                rel="noopener noreferrer"
                className="mojo-btn mojo-btn-primary border-cream bg-cream text-espresso text-center"
                onClick={() => setOpen(false)}
              >
                Reserve Forest Hills
              </a>
              <a
                href={links.opentableRvc}
                target="_blank"
                rel="noopener noreferrer"
                className="mojo-btn mojo-btn-outline border-cream text-center"
                onClick={() => setOpen(false)}
              >
                Reserve Rockville Centre
              </a>
              <a
                href={links.orderToastFoHi}
                target="_blank"
                rel="noopener noreferrer"
                className="mojo-btn mojo-btn-outline border-cream text-center"
                onClick={() => setOpen(false)}
              >
                Order Online
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
