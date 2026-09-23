import { Link } from 'react-router-dom'
import { PageHero } from '../components/PageHero'
import { ReserveChooser } from '../components/ReserveChooser'

export function ReservePage() {
  return (
    <div>
      <PageHero
        label="OpenTable"
        title="Reserve"
        body="Two rooms. One Mojo. Book Forest Hills or Rockville Centre — lunch, brunch, dinner, or late night."
        image="/media/loc-fohi.png"
        imageAlt="Mojo Forest Hills dining room"
        actions={
          <>
            <a
              href="#pick-room"
              className="mojo-btn mojo-btn-cream"
              style={{ backgroundColor: '#FFF3D6', color: '#160D0A', borderColor: '#FFF3D6' }}
            >
              Pick Your Room
            </a>
            <Link
              to="/order"
              className="mojo-btn mojo-btn-outline"
              style={{ color: '#FFF3D6', borderColor: '#FFF3D6' }}
            >
              Order Online
            </Link>
          </>
        }
      />
      <ReserveChooser id="pick-room" compact />
    </div>
  )
}
