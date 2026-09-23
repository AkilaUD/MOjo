import { Link } from 'react-router-dom'
import { Locations } from '../components/Locations'
import { PageHero } from '../components/PageHero'

export function LocationsPage() {
  return (
    <div>
      <PageHero
        label="Two rooms"
        title="Locations"
        body="Forest Hills in Queens and Rockville Centre on Long Island — same Mojo, two neighborhoods."
        image="/media/loc-rvc.png"
        imageAlt="Mojo Rockville Centre"
        actions={
          <>
            <Link
              to="/reserve"
              className="mojo-btn mojo-btn-cream"
              style={{ backgroundColor: '#FFF3D6', color: '#160D0A', borderColor: '#FFF3D6' }}
            >
              Reserve
            </Link>
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
      <Locations showAsk={false} />
    </div>
  )
}
