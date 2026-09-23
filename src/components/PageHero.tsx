import { motion } from 'framer-motion'
import type { ReactNode } from 'react'
import { useReducedMotion } from '../hooks/useReducedMotion'
import { MediaImage } from '../lib/MediaImage'

type PageHeroProps = {
  label: string
  title: string
  body?: string
  image: string
  imageAlt: string
  actions?: ReactNode
  tall?: boolean
}

export function PageHero({
  label,
  title,
  body,
  image,
  imageAlt,
  actions,
  tall = false,
}: PageHeroProps) {
  const reduced = useReducedMotion()

  return (
    <header
      className={`relative overflow-hidden bg-espresso text-cream ${
        tall ? 'min-h-[70svh]' : 'min-h-[55svh] md:min-h-[60svh]'
      }`}
    >
      <div className="absolute inset-0">
        <MediaImage
          src={image}
          alt={imageAlt}
          className="h-full w-full object-cover"
          loading="eager"
          fetchPriority="high"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-espresso via-espresso/55 to-espresso/25" />
        <div className="absolute inset-0 bg-gradient-to-r from-espresso/80 via-espresso/35 to-transparent" />
      </div>

      <div className="relative z-10 flex min-h-[inherit] flex-col justify-end px-4 pb-12 pt-28 md:px-10 md:pb-16">
        <div className="max-w-3xl">
          <motion.p
            className="mojo-label text-mango mb-3 !text-base"
            initial={reduced ? false : { opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            {label}
          </motion.p>
          <motion.h1
            className="font-display text-5xl sm:text-6xl md:text-8xl font-900 uppercase leading-[0.9]"
            initial={reduced ? false : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.08 }}
          >
            {title}
          </motion.h1>
          {body && (
            <motion.p
              className="mt-5 max-w-xl font-body text-base md:text-lg text-cream/90"
              initial={reduced ? false : { opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.18 }}
            >
              {body}
            </motion.p>
          )}
          {actions && (
            <motion.div
              className="mt-8 flex flex-wrap gap-3"
              initial={reduced ? false : { opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.28 }}
            >
              {actions}
            </motion.div>
          )}
        </div>
      </div>
    </header>
  )
}
