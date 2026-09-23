import { AfterDark } from '../components/AfterDark'
import { Crave } from '../components/Crave'
import { Hero } from '../components/Hero'
import { Locations } from '../components/Locations'
import { MenuExperience } from '../components/MenuExperience'
import { PlateHits } from '../components/PlateHits'
import { SocialReel } from '../components/SocialReel'
import { Story } from '../components/Story'
import { Tonight } from '../components/Tonight'
import { useScrollAtmosphere } from '../hooks/useScrollAtmosphere'

export function HomePage() {
  useScrollAtmosphere()

  return (
    <>
      <Hero />
      <Crave />
      <PlateHits />
      <MenuExperience />
      <Tonight />
      <AfterDark />
      <SocialReel />
      <Story />
      <Locations />
    </>
  )
}
