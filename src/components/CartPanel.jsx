import { TAX_RATE } from '../constants/billing'
import { formatMoney } from '../utils/formatMoney'

export default function CartPanel({ lines, subtotal, tax, total, onQtyChange, onClear, onPay }) {
  return (
    <aside className="lg:sticky lg:top-19 lg:self-start">
      <div className="rounded-2xl border border-emerald-200/70 bg-white/98 p-5 shadow-xl shadow-emerald-950/10 ring-1 ring-emerald-950/15 backdrop-blur-sm">
        <h2 className="font-display mb-1 text-lg font-bold text-emerald-950">Cart & billing</h2>
        <p className="mb-4 text-sm text-stone-600">
          Review line items and totals before you pay.
        </p>

        {lines.length === 0 ? (
          <p className="rounded-xl bg-gradient-to-br from-stone-50 to-amber-50/40 py-10 text-center text-sm text-stone-600 ring-1 ring-stone-200/80">
            Your cart is empty. Add dishes from the menu.
          </p>
        ) : (
          <>
            <ul className="mb-4 max-h-72 space-y-3 overflow-auto border-b border-stone-100 pb-4">
              {lines.map((row) => (
                <li
                  key={row.id}
                  className="flex gap-3 rounded-xl bg-stone-50/90 p-2 text-sm ring-1 ring-stone-900/5"
                >
                  <div className="relative h-14 w-14 shrink-0 overflow-hidden rounded-lg bg-stone-200">
                    <img
                      src={row.image}
                      alt={row.name}
                      className="h-full w-full object-cover"
                      decoding="async"
                    />
                  </div>
                  <div className="flex min-w-0 flex-1 flex-col gap-2">
                    <div className="flex items-start justify-between gap-2">
                      <span className="truncate font-semibold text-stone-900">
                        {row.name}{' '}
                        <span className="font-normal text-stone-600">× {row.qty}</span>
                      </span>
                      <span className="shrink-0 tabular-nums font-medium text-stone-800">
                        {formatMoney(row.price * row.qty)}
                      </span>
                    </div>
                    <div className="flex flex-wrap items-center gap-2">
                      <button
                        type="button"
                        aria-label={`Decrease ${row.name}`}
                        onClick={() => onQtyChange(row.id, row.qty - 1)}
                        className="h-8 min-w-[2rem] rounded-lg border border-stone-300 bg-white text-sm font-medium text-stone-800 hover:bg-stone-100"
                      >
                        −
                      </button>
                      <button
                        type="button"
                        aria-label={`Increase ${row.name}`}
                        onClick={() => onQtyChange(row.id, row.qty + 1)}
                        className="h-8 min-w-[2rem] rounded-lg border border-stone-300 bg-white text-sm font-medium text-stone-800 hover:bg-stone-100"
                      >
                        +
                      </button>
                      <button
                        type="button"
                        onClick={() => onQtyChange(row.id, 0)}
                        className="ml-auto text-xs font-medium text-red-700 underline-offset-4 hover:underline"
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                </li>
              ))}
            </ul>

            <dl className="space-y-2 text-sm tabular-nums">
              <div className="flex justify-between">
                <dt className="text-stone-600">Subtotal</dt>
                <dd className="font-medium">{formatMoney(subtotal)}</dd>
              </div>
                  <div className="flex justify-between">
                    <dt className="text-stone-600">GST ({Math.round(TAX_RATE * 100)}%)</dt>
                <dd className="font-medium">{formatMoney(tax)}</dd>
              </div>
              <div className="flex justify-between rounded-lg bg-stone-900/[0.04] px-3 py-2 text-base font-bold text-stone-900 ring-1 ring-stone-900/10">
                <dt>Total due</dt>
                <dd>{formatMoney(total)}</dd>
              </div>
            </dl>

            <div className="mt-4 flex flex-col gap-2">
              <button
                type="button"
                onClick={onPay}
                className="w-full rounded-xl bg-emerald-700 py-3 text-sm font-bold text-white shadow-sm transition hover:bg-emerald-800 focus:outline focus:outline-2 focus:outline-offset-2 focus:outline-emerald-700 active:scale-[0.99]"
              >
                Pay {formatMoney(total)}
              </button>
              <button
                type="button"
                onClick={onClear}
                className="w-full rounded-xl border border-stone-300 bg-white py-2.5 text-sm font-medium text-stone-800 hover:bg-stone-50"
              >
                Clear cart
              </button>
            </div>
          </>
        )}
      </div>
    </aside>
  )
}
