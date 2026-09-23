import { menuItems, type MenuItem } from './menu'

export type FlavorId = 'CITRUS' | 'SPICY' | 'SMOKY' | 'SWEET' | 'FRESH'

export type Flavor = {
  id: FlavorId
  label: string
  accent: string
  blurb: string
  itemIds: string[]
}

export const flavors: Flavor[] = [
  {
    id: 'CITRUS',
    label: 'Citrus',
    accent: '#F2A23A',
    blurb: 'Lime, passion, leche de tigre — bright acid that wakes the palate.',
    itemIds: ['down-the-hatch', 'peruvian-ceviche', 'mojito', 'pisco-passion'],
  },
  {
    id: 'SPICY',
    label: 'Spicy',
    accent: '#8F2D14',
    blurb: 'Habanero heat, Valentina glaze, chili salt — warmth that stays.',
    itemIds: ['guac-chips', 'mojo-wings', 'el-chamuco', 'baja-shrimp-tacos'],
  },
  {
    id: 'SMOKY',
    label: 'Smoky',
    accent: '#160D0A',
    blurb: 'Char, mezcal, soy reduction — depth from the grill and the glass.',
    itemIds: ['jumpin-lomo', 'churrasco', 'chocolate-old-fashioned', 'chicken-mojo'],
  },
  {
    id: 'SWEET',
    label: 'Sweet',
    accent: '#E83E8C',
    blurb: 'Mango, dulce, cuatro leches — dessert and glaze in equal measure.',
    itemIds: ['mojo-wings', 'cuatro-leches', 'churros', 'passion-mula'],
  },
  {
    id: 'FRESH',
    label: 'Fresh',
    accent: '#A7C957',
    blurb: 'Herbs, avocado, crunch — the cold bar and the garden on one plate.',
    itemIds: ['vegan-ceviche', 'guac-chips', 'baja-shrimp-tacos', 'mojito'],
  },
]

export function itemsForFlavor(id: FlavorId): MenuItem[] {
  const flavor = flavors.find((f) => f.id === id)
  if (!flavor) return []
  return flavor.itemIds
    .map((itemId) => menuItems.find((m) => m.id === itemId))
    .filter((m): m is MenuItem => Boolean(m))
}
