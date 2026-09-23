import { lazy, Suspense } from 'react'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import { ScrollToTop } from './components/ScrollToTop'
import { SiteLayout } from './components/SiteLayout'
import { HomePage } from './pages/HomePage'

const MenuPage = lazy(() =>
  import('./pages/MenuPage').then((m) => ({ default: m.MenuPage })),
)
const OrderPage = lazy(() =>
  import('./pages/OrderPage').then((m) => ({ default: m.OrderPage })),
)
const ReservePage = lazy(() =>
  import('./pages/ReservePage').then((m) => ({ default: m.ReservePage })),
)
const EventsPage = lazy(() =>
  import('./pages/EventsPage').then((m) => ({ default: m.EventsPage })),
)
const CateringPage = lazy(() =>
  import('./pages/CateringPage').then((m) => ({ default: m.CateringPage })),
)
const LocationsPage = lazy(() =>
  import('./pages/LocationsPage').then((m) => ({ default: m.LocationsPage })),
)

function RouteFallback() {
  return (
    <div
      className="min-h-[50svh] flex items-center justify-center"
      aria-busy="true"
      aria-label="Loading"
    >
      <p className="font-display text-2xl uppercase tracking-[0.16em] text-muted">
        Mojo
      </p>
    </div>
  )
}

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Suspense fallback={<RouteFallback />}>
        <Routes>
          <Route element={<SiteLayout />}>
            <Route index element={<HomePage />} />
            <Route path="menu" element={<MenuPage />} />
            <Route path="order" element={<OrderPage />} />
            <Route path="reserve" element={<ReservePage />} />
            <Route path="events" element={<EventsPage />} />
            <Route path="catering" element={<CateringPage />} />
            <Route path="locations" element={<LocationsPage />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Route>
        </Routes>
      </Suspense>
    </BrowserRouter>
  )
}
