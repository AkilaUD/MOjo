import { Link } from 'react-router-dom'

export function ReserveBar() {
  return (
    <div className="fixed bottom-0 inset-x-0 z-50 md:hidden pointer-events-none pb-[env(safe-area-inset-bottom)]">
      <div className="pointer-events-auto mx-3 mb-3 flex overflow-hidden border-2 border-espresso bg-cream shadow-[4px_4px_0_#160D0A]">
        <Link
          to="/order"
          className="mojo-btn mojo-btn-chili flex-1 !rounded-none border-0 !py-3.5"
        >
          Order
        </Link>
        <Link
          to="/menu"
          className="mojo-btn flex-1 !rounded-none border-0 !py-3.5 text-espresso hover:bg-espresso hover:text-cream"
        >
          Menu
        </Link>
      </div>
    </div>
  )
}
