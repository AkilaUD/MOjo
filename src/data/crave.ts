import { menuItems, type MenuItem } from './menu'

export type CraveId = 'HEAT' | 'CITRUS' | 'SMOKE' | 'SWEET' | 'FRESH'

export type CraveDial = {
  id: CraveId
  label: string
  accent: string
  punch: string
  ingredients: [string, string, string]
  plate: string
  itemIds: string[]
}

export const craveDials: CraveDial[] = [
  {
    id: 'HEAT',
    label: 'Heat',
    accent: '#8F2D14',
    punch: 'Chili that sticks to the lips.',
    ingredients: ['Habanero', 'Valentina', 'Mango'],
    plate: '/media/crave-heat.jpg',
    itemIds: ['mojo-wings', 'guac-chips', 'el-chamuco'],
  },
  {
    id: 'CITRUS',
    label: 'Citrus',
    accent: '#F2A23A',
    punch: 'Acid bright enough to wake the room.',
    ingredients: ['Lime', 'Aji Amarillo', 'Passion'],
    plate: '/media/crave-citrus.jpg',
    itemIds: ['down-the-hatch', 'peruvian-ceviche', 'pisco-passion'],
  },
  {
    id: 'SMOKE',
    label: 'Smoke',
    accent: '#160D0A',
    punch: 'Char from the grill. Depth in the glass.',
    ingredients: ['Chimichurri', 'Skirt steak', 'Mezcal'],
    plate: '/media/crave-smoke.jpg',
    itemIds: ['churrasco', 'jumpin-lomo', 'chocolate-old-fashioned'],
  },
  {
    id: 'SWEET',
    label: 'Sweet',
    accent: '#E83E8C',
    punch: 'Dulce after the fire.',
    ingredients: ['Cuatro leches', 'Churro', 'Passion'],
    plate: '/media/crave-sweet.jpg',
    itemIds: ['cuatro-leches', 'churros', 'passion-mula'],
  },
  {
    id: 'FRESH',
    label: 'Fresh',
    accent: '#A7C957',
    punch: 'Herbs, crunch, cold bar energy.',
    ingredients: ['Avocado', 'Cilantro', 'Mint'],
    plate: '/media/crave-fresh.jpg',
    itemIds: ['guac-chips', 'vegan-ceviche', 'mojito'],
  },
]

export function itemsForCrave(id: CraveId): MenuItem[] {
  const dial = craveDials.find((d) => d.id === id)
  if (!dial) return []
  return dial.itemIds
    .map((itemId) => menuItems.find((m) => m.id === itemId))
    .filter((m): m is MenuItem => Boolean(m))
}

export const craveReserveHref = '/reserve'
