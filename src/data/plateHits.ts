export type PlateHit = {
  id: string
  name: string
  punch: string
  price: string
  image: string
  category: string
}

export const plateHits: PlateHit[] = [
  {
    id: 'hit-ceviche',
    name: 'Down the Hatch',
    punch: 'Aji · Lime · Crunch',
    price: '$19',
    image: '/media/hit-02.jpg',
    category: 'Ceviche',
  },
  {
    id: 'hit-tacos',
    name: 'Baja Shrimp Tacos',
    punch: 'Mango · Crema · Heat',
    price: '$15',
    image: '/media/hit-01.jpg',
    category: 'Tacos',
  },
  {
    id: 'hit-wings',
    name: 'Mojo Wings',
    punch: 'Mango · Valentina · Fire',
    price: '$17',
    image: '/media/crave-heat.jpg',
    category: 'Appetizer',
  },
  {
    id: 'hit-lomo',
    name: "Jumpin' Lomo",
    punch: 'Smoke · Soy · Fries',
    price: '$33',
    image: '/media/hit-03.jpg',
    category: 'Entree',
  },
  {
    id: 'hit-empanada',
    name: 'Beef Empanada',
    punch: 'Crisp · Savory · Dip',
    price: '$13',
    image: '/media/hit-04.jpg',
    category: 'Empanada',
  },
]
