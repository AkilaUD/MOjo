import { motion } from 'framer-motion'
import { useReducedMotion } from '../hooks/useReducedMotion'

type CleanFrySealProps = {
  className?: string
  size?: number
}

/**
 * Mojo-branded kitchen seal — better oil / no seed oils.
 * SVG so arcs stay crisp at any size; tokens match site cream/espresso/chili/mango.
 */
export function CleanFrySeal({ className = '', size = 168 }: CleanFrySealProps) {
  const reduced = useReducedMotion()
  const uid = 'mojo-fry-seal'

  return (
    <motion.div
      className={`shrink-0 ${className}`}
      style={{
        width: `min(${size}px, 70vmin)`,
        height: `min(${size}px, 70vmin)`,
      }}
      role="img"
      aria-label="Mojo clean fry: better oil, better crisp. We fry without seed oils."
      initial={reduced ? false : { opacity: 0, scale: 0.78 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ type: 'spring', stiffness: 220, damping: 18 }}
    >
      <svg
        viewBox="0 0 200 200"
        width="100%"
        height="100%"
        className="block h-full w-full drop-shadow-[3px_3px_0_rgba(22,13,10,0.35)]"
        aria-hidden
      >
        <defs>
          {/* Upper arc — left to right along the top */}
          <path
            id={`${uid}-top`}
            d="M 30,108 A 70,70 0 0,1 170,108"
            fill="none"
          />
          {/* Lower arc — left to right along the bottom (flipped sweep) */}
          <path
            id={`${uid}-bottom`}
            d="M 170,108 A 70,70 0 0,1 30,108"
            fill="none"
          />
        </defs>

        <circle cx="100" cy="100" r="96" fill="#FFF3D6" />
        <circle
          cx="100"
          cy="100"
          r="90"
          fill="none"
          stroke="#8F2D14"
          strokeWidth="3.5"
        />
        <circle
          cx="100"
          cy="100"
          r="96"
          fill="none"
          stroke="#160D0A"
          strokeWidth="3"
        />

        <g className={reduced ? undefined : 'mojo-seal-spin'}>

          <circle
            cx="100"
            cy="100"
            r="78"
            fill="none"
            stroke="#160D0A"
            strokeWidth="1"
            opacity="0.2"
          />
          <text
            fill="#160D0A"
            fontFamily="'Newsreader', Georgia, serif"
            fontSize="11.5"
            letterSpacing="1.4"
          >
            <textPath
              href={`#${uid}-top`}
              startOffset="50%"
              textAnchor="middle"
            >
              Better oil. Better crisp.
            </textPath>
          </text>
          <text
            fill="#160D0A"
            fontFamily="'Newsreader', Georgia, serif"
            fontSize="11"
            letterSpacing="1"
          >
            <textPath
              href={`#${uid}-bottom`}
              startOffset="50%"
              textAnchor="middle"
            >
              We fry without seed oils.
            </textPath>
          </text>
        </g>

        <text
          x="100"
          y="94"
          textAnchor="middle"
          fill="#160D0A"
          fontFamily="'Big Shoulders Display', system-ui, sans-serif"
          fontSize="26"
          fontWeight="900"
          letterSpacing="1.5"
        >
          CLEAN FRY
        </text>
        <line
          x1="64"
          y1="106"
          x2="136"
          y2="106"
          stroke="#F2A23A"
          strokeWidth="2.5"
        />
        <text
          x="100"
          y="128"
          textAnchor="middle"
          fill="#8F2D14"
          fontFamily="'Big Shoulders Display', system-ui, sans-serif"
          fontSize="18"
          fontWeight="800"
          letterSpacing="3.5"
        >
          MOJO
        </text>
      </svg>
    </motion.div>
  )
}
