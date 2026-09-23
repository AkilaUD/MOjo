import { useEffect, useState } from 'react'

const SECTION_IDS = [
  'food',
  'drinks',
  'events',
  'story',
  'locations',
  'reserve',
  'menu',
  'flavor',
  'tonight',
  'after-dark',
  'social',
] as const

export type SectionId = (typeof SECTION_IDS)[number]

export function useActiveSection(ids: string[] = [...SECTION_IDS]) {
  const [active, setActive] = useState<string>('food')

  useEffect(() => {
    const elements = ids
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => Boolean(el))

    if (!elements.length) return

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)
        if (visible[0]?.target.id) {
          setActive(visible[0].target.id)
        }
      },
      { rootMargin: '-35% 0px -45% 0px', threshold: [0.1, 0.35, 0.6] },
    )

    elements.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [ids])

  return active
}
