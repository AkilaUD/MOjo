import { links } from './links'

export type Location = {
  id: 'fohi' | 'rvc'
  name: string
  region: string
  address: string
  cityLine: string
  phone: string
  phoneHref: string
  email: string
  emailHref: string
  hours: string[]
  reserveHref: string
  mapsHref: string
  image: string
  note?: string
}

export const locations: Location[] = [
  {
    id: 'fohi',
    name: 'Forest Hills',
    region: 'Queens',
    address: '70-20 Austin Street',
    cityLine: 'Forest Hills, NY 11375',
    phone: '718-261-6162',
    phoneHref: links.phoneFoHi,
    email: 'info@mojolatin.com',
    emailHref: links.emailFoHi,
    hours: [
      'Lunch daily 12pm–4pm',
      'Brunch Sat–Sun 11am–3pm',
      'Dinner 4pm–11pm · Fri–Sat until 12am',
      'Happy Hour Mon–Thu until 7pm',
    ],
    reserveHref: links.opentableFoHi,
    mapsHref: links.mapsFoHi,
    image: '/media/loc-fohi.png',
    note: 'Where Mojo began — 2019.',
  },
  {
    id: 'rvc',
    name: 'Rockville Centre',
    region: 'Long Island',
    address: '300 Sunrise Highway',
    cityLine: 'Rockville Centre, NY 11570',
    phone: '516-208-5650',
    phoneHref: links.phoneRvc,
    email: 'mojorvc@gmail.com',
    emailHref: links.emailRvc,
    hours: [
      'Dinner Mon–Wed 5pm–11pm',
      'Thu 5pm–1am · Fri 5pm–2am',
      'Sat 12pm–2am · Sun 12pm–11pm',
      'Brunch Sat 12–4 · Sing-along Sun 12–6',
    ],
    reserveHref: links.opentableRvc,
    mapsHref: links.mapsRvc,
    image: '/media/loc-rvc.png',
    note: 'The Mojo expansion — same heat, new room.',
  },
]
