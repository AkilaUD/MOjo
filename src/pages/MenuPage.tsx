import { Link } from 'react-router-dom'
import { useMemo, useState } from 'react'
import { PageHero } from '../components/PageHero'
import { MediaImage } from '../lib/MediaImage'
import {
  menuCategories,
  menuItems,
  type MenuCategory,
} from '../data/menu'

type Daypart = 'ALL' | 'FOOD' | 'BRUNCH' | 'DRINKS'

const DAYPARTS: { id: Daypart; label: string }[] = [
  { id: 'ALL', label: 'All' },
  { id: 'FOOD', label: 'Lunch / Dinner' },
  { id: 'BRUNCH', label: 'Brunch' },
  { id: 'DRINKS', label: 'Drinks' },
]

const FOOD_CATS: MenuCategory[] = [
  'APPETIZERS',
  'SALADS',
  'CEVICHE',
  'ENTREES',
  'SANDWICHES',
  'DESSERTS',
]

const CATEGORY_IMAGE: Partial<Record<MenuCategory, string>> = {
  APPETIZERS: '/media/food-guac.jpg',
  SALADS: '/media/crave-fresh.png',
  CEVICHE: '/media/hit-02.png',
  ENTREES: '/media/hit-03.png',
  SANDWICHES: '/media/crave-smoke.png',
  BRUNCH: '/media/crave-sweet.png',
  DESSERTS: '/media/food-dessert.jpg',
  COCKTAILS: '/media/hit-05.png',
}

function catsForDaypart(d: Daypart): MenuCategory[] {
  if (d === 'ALL') return menuCategories
  if (d === 'BRUNCH') return ['BRUNCH']
  if (d === 'DRINKS') return ['COCKTAILS']
  return FOOD_CATS
}

export function MenuPage() {
  const [daypart, setDaypart] = useState<Daypart>('ALL')
  const [category, setCategory] = useState<MenuCategory | 'ALL'>('ALL')

  const visibleCats = useMemo(() => catsForDaypart(daypart), [daypart])

  const items = useMemo(() => {
    return category === 'ALL'
      ? menuItems.filter((m) => visibleCats.includes(m.category))
      : menuItems.filter((m) => m.category === category)
  }, [category, visibleCats])

  const grouped = useMemo(() => {
    const map = new Map<MenuCategory, typeof menuItems>()
    for (const cat of visibleCats) {
      const list =
        category === 'ALL' || category === cat
          ? menuItems.filter((m) => m.category === cat)
          : []
      if (list.length) map.set(cat, list)
    }
    return map
  }, [category, visibleCats])

  return (
    <div>
      <PageHero
        label="Full catalog"
        title="Menu"
        body={`Every plate and pour from the Mojo kitchen — ${menuItems.length} items. Prices reflect dinner; brunch and lunch may vary.`}
        image="/media/hit-02.png"
        imageAlt="Mojo ceviche"
        actions={
          <>
            <Link
              to="/order"
              className="mojo-btn mojo-btn-cream"
              style={{ backgroundColor: '#FFF3D6', color: '#160D0A', borderColor: '#FFF3D6' }}
            >
              Order Online
            </Link>
            <Link
              to="/reserve"
              className="mojo-btn mojo-btn-outline"
              style={{ color: '#FFF3D6', borderColor: '#FFF3D6' }}
            >
              Reserve a Table
            </Link>
          </>
        }
      />

      <div className="sticky top-[3.5rem] md:top-[4.25rem] z-30 bg-[var(--mojo-bg)] border-b-2 border-current">
        <div className="flex gap-3 overflow-x-auto scrollbar-none px-4 md:px-10 py-3.5">
          {DAYPARTS.map((d) => (
            <button
              key={d.id}
              type="button"
              aria-pressed={daypart === d.id}
              onClick={() => {
                setDaypart(d.id)
                setCategory('ALL')
              }}
              className={`shrink-0 font-display uppercase tracking-[0.08em] text-base md:text-lg font-800 px-4 md:px-5 py-2.5 border-2 transition-colors ${
                daypart === d.id
                  ? 'bg-[var(--mojo-ink)] text-[var(--mojo-bg)] border-[var(--mojo-ink)]'
                  : 'border-current text-[var(--mojo-ink)]'
              }`}
            >
              {d.label}
            </button>
          ))}
        </div>
        <div
          className="flex gap-3 overflow-x-auto scrollbar-none px-4 md:px-10 pb-3.5"
          role="tablist"
          aria-label="Menu categories"
        >
          <button
            type="button"
            role="tab"
            aria-selected={category === 'ALL'}
            onClick={() => setCategory('ALL')}
            className={`shrink-0 font-display uppercase tracking-[0.08em] text-base md:text-lg font-800 px-4 md:px-5 py-2.5 border-2 ${
              category === 'ALL'
                ? 'border-[var(--mojo-ink)] bg-[var(--mojo-ink)] text-[var(--mojo-bg)]'
                : 'border-current text-[var(--mojo-ink)]'
            }`}
          >
            All ({items.length})
          </button>
          {visibleCats.map((cat) => {
            const n = menuItems.filter((m) => m.category === cat).length
            return (
              <button
                key={cat}
                type="button"
                role="tab"
                aria-selected={category === cat}
                onClick={() => setCategory(cat)}
                className={`shrink-0 font-display uppercase tracking-[0.08em] text-base md:text-lg font-800 px-4 md:px-5 py-2.5 border-2 ${
                  category === cat
                    ? 'border-[var(--mojo-ink)] bg-[var(--mojo-ink)] text-[var(--mojo-bg)]'
                    : 'border-current text-[var(--mojo-ink)]'
                }`}
              >
                {cat} ({n})
              </button>
            )
          })}
        </div>
      </div>

      <div className="px-4 md:px-10 py-10 md:py-14 max-w-5xl mx-auto space-y-16">
        {[...grouped.entries()].map(([cat, list]) => {
          const banner =
            CATEGORY_IMAGE[cat] ?? list[0]?.image ?? '/media/hit-02.png'
          return (
            <section key={cat} id={`menu-${cat.toLowerCase()}`}>
              <div className="relative mb-6 aspect-[21/9] md:aspect-[3/1] border-2 border-current overflow-hidden">
                <MediaImage
                  src={banner}
                  alt={cat}
                  className="absolute inset-0 h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-espresso/85 via-espresso/40 to-transparent" />
                <h2 className="absolute bottom-4 left-4 md:bottom-6 md:left-6 font-display text-3xl md:text-5xl font-800 uppercase text-cream leading-none">
                  {cat}
                </h2>
              </div>
              <ul className="divide-y-2 divide-current border-t-2 border-b-2 border-current">
                {list.map((item) => (
                  <li
                    key={item.id}
                    className="py-5 md:py-6 grid grid-cols-1 md:grid-cols-[5.5rem_1fr_auto] gap-3 md:gap-5 items-start"
                  >
                    <div className="hidden md:block aspect-square border-2 border-current overflow-hidden">
                      <MediaImage
                        src={item.image}
                        alt=""
                        className="h-full w-full object-cover"
                      />
                    </div>
                    <div>
                      <h3 className="font-display text-xl md:text-2xl font-700 uppercase leading-tight">
                        {item.name}
                      </h3>
                      {item.tags?.length ? (
                        <p className="mojo-label text-muted mt-1 tracking-[0.1em]">
                          {item.tags.join(' · ')}
                        </p>
                      ) : null}
                      <p className="mt-2 font-body text-base text-muted max-w-xl">
                        {item.description}
                      </p>
                      {item.ingredients.length > 0 && (
                        <p className="mt-2 mojo-label text-muted tracking-[0.1em]">
                          {item.ingredients.join(' · ')}
                        </p>
                      )}
                    </div>
                    <span className="font-display text-xl font-700 shrink-0 md:pt-1">
                      {item.price}
                    </span>
                  </li>
                ))}
              </ul>
            </section>
          )
        })}
      </div>

      <p className="px-4 md:px-10 pb-10 max-w-5xl mx-auto font-body text-base text-muted">
        18% Gratuity on Party of 3 or less · 20% Gratuity for Party of 4+.
        Consuming raw or under-cooked meats, poultry, seafood, shellfish or eggs
        may increase your risk of food-borne illness.
      </p>
    </div>
  )
}
