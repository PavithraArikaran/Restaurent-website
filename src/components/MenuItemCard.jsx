import { formatMoney } from '../utils/formatMoney'

export default function MenuItemCard({ item, onAdd }) {
  const veg = item.diet === 'veg'

  return (
    <article className="group relative overflow-hidden rounded-2xl border border-stone-200/90 bg-white shadow-md shadow-stone-900/10 ring-1 ring-rose-950/5 transition hover:-translate-y-1 hover:shadow-xl hover:ring-emerald-900/15">
      <div className="relative aspect-[4/3] overflow-hidden bg-emerald-900/15">
        <img
          src={item.image}
          alt={item.name}
          decoding="async"
          className="h-full w-full object-cover transition duration-500 ease-out group-hover:scale-105"
        />
        <span
          className={
            veg
              ? 'absolute left-3 top-3 rounded-full border border-emerald-800/35 bg-emerald-900/85 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wide text-emerald-50 shadow-sm backdrop-blur-sm'
              : 'absolute left-3 top-3 rounded-full border border-rose-900/35 bg-rose-900/85 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wide text-rose-50 shadow-sm backdrop-blur-sm'
          }
        >
          {veg ? 'Veg' : 'Non-veg'}
        </span>
      </div>
      <div className="flex flex-col gap-3 border-t border-stone-100 p-4">
        <div>
          <p className="font-display text-lg font-semibold tracking-tight text-emerald-950">
            {item.name}
          </p>
          <p className="mt-1 text-sm leading-snug text-stone-600">{item.description}</p>
          <p className="mt-2 text-base font-semibold tabular-nums text-amber-950">
            {formatMoney(item.price)}
          </p>
        </div>
        <button
          type="button"
          onClick={() => onAdd(item.id)}
          className="w-full rounded-xl bg-gradient-to-r from-emerald-800 to-emerald-950 px-3 py-2.5 text-sm font-semibold text-amber-50 shadow-md transition hover:from-emerald-700 hover:to-emerald-900 focus:outline focus:outline-2 focus:outline-offset-2 focus:outline-emerald-800 active:scale-[0.99]"
        >
          Add to cart
        </button>
      </div>
    </article>
  )
}
