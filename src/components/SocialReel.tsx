import { links } from '../data/links'
import { socialFrames } from '../data/social'
import { useReducedMotion } from '../hooks/useReducedMotion'
import { MediaImage } from '../lib/MediaImage'

export function SocialReel() {
  const reduced = useReducedMotion()

  return (
    <section
      id="social"
      className="py-20 md:py-28 border-t-2 border-current overflow-hidden scroll-mt-24"
    >
      <div className="px-4 md:px-10 mb-10 flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <p className="mojo-label text-muted mb-2">Community</p>
          <h2 className="font-display text-4xl md:text-6xl font-800 uppercase leading-none">
            #MOJOGOTTHEMOJO
          </h2>
        </div>
        <a
          href={links.instagram}
          target="_blank"
          rel="noopener noreferrer"
          className="mojo-label border-b-2 border-current pb-1 self-start"
        >
          @mojo_foresthills ↗
        </a>
      </div>

      <div className="relative">
        <div
          className={`flex gap-3 md:gap-4 w-max ${
            reduced ? '' : 'animate-mojo-reel hover:[animation-play-state:paused]'
          }`}
        >
          {socialFrames.map((frame) => (
            <figure
              key={frame.id}
              className="relative w-[62vw] sm:w-[40vw] md:w-[28vw] lg:w-[22vw] aspect-[3/4] border-2 border-current overflow-hidden shrink-0"
            >
              <MediaImage
                src={frame.src}
                alt={frame.alt}
                className="h-full w-full object-cover"
              />
              <figcaption className="absolute bottom-0 inset-x-0 p-3 mojo-label text-cream bg-gradient-to-t from-espresso/90 to-transparent">
                {frame.alt}
              </figcaption>
            </figure>
          ))}
          {/* Duplicate for seamless marquee — hidden from AT */}
          {!reduced &&
            socialFrames.map((frame) => (
              <figure
                key={`dup-${frame.id}`}
                aria-hidden="true"
                className="relative w-[62vw] sm:w-[40vw] md:w-[28vw] lg:w-[22vw] aspect-[3/4] border-2 border-current overflow-hidden shrink-0"
              >
                <MediaImage
                  src={frame.src}
                  alt=""
                  className="h-full w-full object-cover"
                />
                <figcaption className="absolute bottom-0 inset-x-0 p-3 mojo-label text-cream bg-gradient-to-t from-espresso/90 to-transparent">
                  {frame.alt}
                </figcaption>
              </figure>
            ))}
        </div>
      </div>

      <style>{`
        @keyframes mojo-reel {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
        .animate-mojo-reel {
          animation: mojo-reel 48s linear infinite;
        }
        @media (prefers-reduced-motion: reduce) {
          .animate-mojo-reel { animation: none; }
        }
      `}</style>
    </section>
  )
}
