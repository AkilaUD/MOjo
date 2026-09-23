import { lazy, Suspense } from 'react'
import { DeferredMount } from '../components/DeferredMount'
import { Crave } from '../components/Crave'
import { Hero } from '../components/Hero'
import { useScrollAtmosphere } from '../hooks/useScrollAtmosphere'

const PlateHits = lazy(() =>
  import('../components/PlateHits').then((m) => ({ default: m.PlateHits })),
)
const MenuExperience = lazy(() =>
  import('../components/MenuExperience').then((m) => ({
    default: m.MenuExperience,
  })),
)
const Tonight = lazy(() =>
  import('../components/Tonight').then((m) => ({ default: m.Tonight })),
)
const AfterDark = lazy(() =>
  import('../components/AfterDark').then((m) => ({ default: m.AfterDark })),
)
const SocialReel = lazy(() =>
  import('../components/SocialReel').then((m) => ({ default: m.SocialReel })),
)
const Story = lazy(() =>
  import('../components/Story').then((m) => ({ default: m.Story })),
)
const Locations = lazy(() =>
  import('../components/Locations').then((m) => ({ default: m.Locations })),
)

function SectionFallback({ minHeight = '50vh' }: { minHeight?: string }) {
  return <div style={{ minHeight }} aria-hidden />
}

export function HomePage() {
  useScrollAtmosphere()

  return (
    <>
      <Hero />
      <Crave />

      <DeferredMount minHeight="70vh">
        <Suspense fallback={<SectionFallback minHeight="70vh" />}>
          <PlateHits />
        </Suspense>
      </DeferredMount>

      <DeferredMount minHeight="60vh">
        <Suspense fallback={<SectionFallback minHeight="60vh" />}>
          <MenuExperience />
        </Suspense>
      </DeferredMount>

      <DeferredMount minHeight="40vh">
        <Suspense fallback={<SectionFallback minHeight="40vh" />}>
          <Tonight />
        </Suspense>
      </DeferredMount>

      <DeferredMount minHeight="100vh" rootMargin="400px 0px">
        <Suspense fallback={<SectionFallback minHeight="100vh" />}>
          <AfterDark />
        </Suspense>
      </DeferredMount>

      <DeferredMount minHeight="50vh">
        <Suspense fallback={<SectionFallback minHeight="50vh" />}>
          <SocialReel />
        </Suspense>
      </DeferredMount>

      <DeferredMount minHeight="50vh">
        <Suspense fallback={<SectionFallback minHeight="50vh" />}>
          <Story />
        </Suspense>
      </DeferredMount>

      <DeferredMount minHeight="80vh">
        <Suspense fallback={<SectionFallback minHeight="80vh" />}>
          <Locations />
        </Suspense>
      </DeferredMount>
    </>
  )
}
