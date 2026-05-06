import { getSortedCategories } from '../data/menu'
import MenuItemCard from './MenuItemCard'

export default function MenuList({ items, onAdd }) {
  const categories = getSortedCategories(items)

  return (
    <section id="menu-section" aria-labelledby="menu-heading" className="scroll-mt-28 text-left">
      <h2 id="menu-heading" className="font-display mb-2 text-2xl font-semibold text-emerald-950 sm:text-3xl">
        Menu &amp; items
      </h2>
      <p className="mb-8 max-w-xl text-sm text-stone-600">
        Filter by veg or non-veg in the navbar, or search pulav, biriyani, gravy, soups, drinks.
      </p>

      {categories.length === 0 ? (
        <p className="rounded-2xl border border-dashed border-stone-300 bg-white/70 py-14 text-center text-sm text-stone-600">
          No dishes match search or filters — try resetting filters or a shorter search.
        </p>
      ) : (
        <div className="space-y-10">
          {categories.map((cat) => (
            <div key={cat}>
              <h3 className="mb-4 flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.2em] text-rose-900/65">
                <span className="h-px w-10 shrink-0 rounded-full bg-rose-700/55" aria-hidden />
                {cat}
              </h3>
              <ul className="grid gap-5 sm:grid-cols-2">
                {items
                  .filter((m) => m.category === cat)
                  .map((item) => (
                    <li key={item.id}>
                      <MenuItemCard item={item} onAdd={onAdd} />
                    </li>
                  ))}
              </ul>
            </div>
          ))}
        </div>
      )}
    </section>
  )
}
