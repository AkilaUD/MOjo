import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { usePointerParallax } from '../hooks/usePointerParallax'
import { useReducedMotion } from '../hooks/useReducedMotion'
import { MediaImage } from '../lib/MediaImage'

export function Hero() {
  const offset = usePointerParallax(0.4)
  const reduced = useReducedMotion()

  return (
    <section
      id="top"
      className="relative min-h-[100svh] overflow-hidden bg-espresso text-cream"
    >
      <motion.div
        className="absolute inset-0 scale-[1.12]"
        style={
          reduced
            ? undefined
            : {
                x: offset.x * 22,
                y: offset.y * 14,
              }
        }
      >
        <MediaImage
          src="/media/hero.png"
          alt="Mojo Latin ceviche with citrus spray"
          loading="eager"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-espresso via-espresso/55 to-espresso/20" />
        <div className="absolute inset-0 bg-gradient-to-r from-espresso/85 via-espresso/30 to-espresso/45" />
        <div className="absolute inset-0 bg-gradient-to-l from-espresso/55 via-transparent to-transparent" />
      </motion.div>

      <div className="relative z-10 flex min-h-[100svh] flex-col justify-end px-4 pb-28 pt-28 md:px-10 md:pb-16">
        <div className="max-w-5xl">
          <motion.p
            className="mojo-label text-mango mb-3 !text-base"
            initial={reduced ? false : { opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Latin Fusion
          </motion.p>

          <motion.h1
            className="font-display font-900 leading-[0.85] tracking-[-0.04em] text-[clamp(4.5rem,18vw,11rem)]"
            initial={reduced ? false : { opacity: 0, y: 36 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            MOJO
          </motion.h1>

          <motion.p
            className="mt-5 font-display text-2xl md:text-4xl uppercase tracking-[0.12em] font-700 text-cream"
            initial={reduced ? false : { opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.4 }}
          >
            Come hungry.
          </motion.p>

          <motion.div
            className="mt-10 flex flex-wrap gap-3"
            initial={reduced ? false : { opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.55 }}
          >
            <Link
              to="/reserve"
              className="mojo-btn mojo-btn-cream"
              style={{ backgroundColor: '#FFF3D6', color: '#160D0A', borderColor: '#FFF3D6' }}
            >
              Reserve a Table
            </Link>
            <a
              href="#crave"
              className="mojo-btn mojo-btn-outline"
              style={{ color: '#FFF3D6', borderColor: '#FFF3D6' }}
            >
              What&apos;s Calling You
            </a>
          </motion.div>

          <p className="mt-8 md:hidden mojo-label text-cream">
            Forest Hills · Queens
            <br />
            Rockville Centre · LI
          </p>
        </div>

        <div className="absolute bottom-8 right-4 md:right-10 hidden md:block max-w-[12rem] text-right mojo-label text-cream">
          Forest Hills · Queens
          <br />
          Rockville Centre · LI
        </div>
      </div>
    </section>
  )
}
