export type Daypart =
  | 'BRUNCH'
  | 'LUNCH'
  | 'HAPPY_HOUR'
  | 'DINNER'
  | 'LIVE'
  | 'LATE'

export type TonightSlot = {
  id: string
  daypart: Daypart
  label: string
  time: string
  detail: string
  location?: 'FoHi' | 'RVC' | 'Both'
}

export const tonightSlots: TonightSlot[] = [
  {
    id: 'brunch',
    daypart: 'BRUNCH',
    label: 'Brunch',
    time: 'Sat–Sun 11am–3pm',
    detail: 'Plates, bottomless energy, light pouring in.',
    location: 'FoHi',
  },
  {
    id: 'lunch',
    daypart: 'LUNCH',
    label: 'Lunch',
    time: 'Daily 12pm–4pm',
    detail: 'Ceviche bar, tacos, the midday Mojo.',
    location: 'FoHi',
  },
  {
    id: 'happy',
    daypart: 'HAPPY_HOUR',
    label: 'Happy Hour',
    time: 'Mon–Thu until 7pm',
    detail: 'Drinks & bites while the room warms up.',
    location: 'Both',
  },
  {
    id: 'dinner',
    daypart: 'DINNER',
    label: 'Dinner',
    time: '4pm–11pm · Fri–Sat til late',
    detail: 'Full kitchen. Full bar. Come hungry.',
    location: 'Both',
  },
  {
    id: 'live',
    daypart: 'LIVE',
    label: 'Live Music / DJ',
    time: 'Thu–Sun nights',
    detail: 'The room turns. Bass under the conversation.',
    location: 'Both',
  },
  {
    id: 'late',
    daypart: 'LATE',
    label: 'Late Night',
    time: 'Fri–Sat after dinner',
    detail: 'Special events, industry nights, private parties.',
    location: 'Both',
  },
]

/** Rough daypart for “live” highlight on the Tonight section. */
export function currentDaypart(now = new Date()): Daypart {
  const day = now.getDay() // 0 Sun
  const hour = now.getHours()
  const isWeekend = day === 0 || day === 6

  if (isWeekend && hour >= 11 && hour < 15) return 'BRUNCH'
  if (hour >= 12 && hour < 16) return 'LUNCH'
  if (day >= 1 && day <= 4 && hour >= 16 && hour < 19) return 'HAPPY_HOUR'
  if (hour >= 16 && hour < 22) return 'DINNER'
  if (hour >= 22 || hour < 2) return 'LIVE'
  if (hour >= 2 && hour < 11) return 'LATE'
  return 'DINNER'
}
