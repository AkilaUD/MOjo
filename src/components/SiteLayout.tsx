import { Outlet } from 'react-router-dom'
import { Nav } from './Nav'
import { ReserveBar } from './ReserveBar'
import { SiteFooter } from './SiteFooter'

export function SiteLayout() {
  return (
    <div className="grain relative min-h-screen pb-[calc(5.5rem+env(safe-area-inset-bottom))] md:pb-0">
      <Nav />
      <main>
        <Outlet />
      </main>
      <SiteFooter />
      <ReserveBar />
    </div>
  )
}
