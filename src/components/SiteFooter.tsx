import { Link } from 'react-router-dom'
import { links } from '../data/links'

const legal = [
  { label: 'Privacy Policy', href: links.privacyPolicy },
  { label: 'Cookies Policy', href: links.cookiesPolicy },
  { label: 'ADA Accessibility', href: links.adaAccessibility },
  { label: 'Sitemap', href: links.sitemap },
] as const

const social = [
  { label: 'Instagram', href: links.instagram },
  { label: 'Facebook', href: links.facebook },
  { label: 'TikTok', href: links.tiktok },
] as const

export function SiteFooter() {
  return (
    <footer className="border-t-2 border-current px-4 md:px-10 py-12 md:py-16 pb-28 md:pb-16">
      <div className="max-w-6xl mx-auto">
        <p className="font-body text-base md:text-lg text-muted border-b-2 border-current pb-6 mb-10">
          18% Gratuity on Party of 3 or less
          <span className="mx-2 text-[var(--mojo-ink)]" aria-hidden>
            ·
          </span>
          20% Gratuity for Party of 4+
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 md:gap-8">
          <div>
            <p className="mojo-label mb-4">Contact</p>
            <address className="not-italic space-y-3 font-body text-base md:text-lg">
              <p>
                <a
                  href={links.mapsFoHi}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline"
                >
                  70-20 Austin St, Forest Hills NY 11375
                </a>
              </p>
              <p>
                <a href={links.phoneFoHi} className="hover:underline">
                  718-261-6162
                </a>
              </p>
              <p>
                <a href={links.emailFoHi} className="hover:underline uppercase">
                  info@mojolatin.com
                </a>
              </p>
            </address>
          </div>

          <div>
            <p className="mojo-label mb-4">Hours</p>
            <div className="space-y-3 font-body text-base md:text-lg">
              <p className="font-display uppercase tracking-[0.08em] font-700 text-base">
                Open Daily
              </p>
              <p>Lunch 12pm–4pm · Brunch Sat + Sun 11am–3pm</p>
              <p>Dinner 4pm–11pm · Fri + Sat 4pm–12am</p>
            </div>
          </div>

          <div>
            <p className="mojo-label mb-4">Connect</p>
            <ul className="space-y-2 font-body text-base md:text-lg">
              {social.map((s) => (
                <li key={s.label}>
                  <a
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline"
                  >
                    {s.label}
                  </a>
                </li>
              ))}
            </ul>
            <p className="mojo-label mt-8 mb-3">Visit</p>
            <ul className="space-y-2 font-body text-base">
              <li>
                <Link to="/menu" className="hover:underline">
                  Menu
                </Link>
              </li>
              <li>
                <Link to="/order" className="hover:underline">
                  Order Online
                </Link>
              </li>
              <li>
                <Link to="/reserve" className="hover:underline">
                  Reserve
                </Link>
              </li>
              <li>
                <Link to="/locations" className="hover:underline">
                  Locations
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <p className="mojo-label mb-4">Jobs</p>
            <p className="font-body text-base md:text-lg mb-4">
              Want to join the team? Email us your resume!
            </p>
            <a href={links.jobsEmail} className="mojo-btn mojo-btn-outline">
              Email Resume
            </a>
            <p className="mojo-label mt-8 mb-3">Host</p>
            <ul className="space-y-2 font-body text-base">
              <li>
                <Link to="/events" className="hover:underline">
                  Events
                </Link>
              </li>
              <li>
                <Link to="/catering" className="hover:underline">
                  Catering
                </Link>
              </li>
              <li>
                <a
                  href={links.blog}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline"
                >
                  Blog ↗
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t-2 border-current flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <ul className="flex flex-wrap gap-x-5 gap-y-2 font-body text-base">
            {legal.map((item) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline text-muted hover:text-[var(--mojo-ink)]"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
          <p className="mojo-label text-muted">
            © {new Date().getFullYear()} by Mojo · #MOJOGOTTHEMOJO
          </p>
        </div>
      </div>
    </footer>
  )
}
