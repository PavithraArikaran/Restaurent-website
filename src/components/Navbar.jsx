import { BRAND_NAME } from '../constants/brand'

function scrollToId(id) {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
}

export default function Navbar({
  search,
  onSearchChange,
  dietFilter,
  onDietChange,
  cartQty,
  paid,
}) {
  return (
    <nav
      className="sticky top-0 z-50 border-b border-emerald-900/30 bg-emerald-950/95 shadow-lg shadow-emerald-950/20 backdrop-blur-md"
      aria-label="Main"
    >
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-3 px-4 py-4 lg:grid-cols-3 lg:items-center">
      <div className="flex items-center gap-4">
  <button
    type="button"
    onClick={() => scrollToId("top")}
    className="flex items-center gap-3 font-display shrink-0 text-left text-xl font-semibold tracking-tight text-amber-50 transition hover:text-amber-100"
  >
    <img
      src="/public/menu/zaika-table-logo.png"
      alt="Logo"
      className="w-12 h-12 object-contain"
    />

    <span>{BRAND_NAME}</span>
  </button>

          <div className="hidden items-center gap-2 md:flex ">
            <button
              type="button"
              onClick={() => scrollToId('menu-section')}
              className="rounded-lg px-3 py-2 text-sm font-medium text-emerald-100/90 hover:bg-emerald-900/50 hover:text-amber-50"
            >
              Items
            </button>
            <button
              type="button"
              onClick={() => scrollToId('about-section')}
              className="rounded-lg px-3 py-2 text-sm font-medium text-emerald-100/90 hover:bg-emerald-900/50 hover:text-amber-50"
            >
              About
            </button>
          </div>
        </div>

        <div className="w-full lg:mx-auto lg:max-w-md">
          <label className="sr-only" htmlFor="nav-search">
            Search menu
          </label>
          <div className="relative">
            <span
              className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-emerald-300/70"
              aria-hidden
            >
              ⌕
            </span>
            <input
              id="nav-search"
              type="search"
              value={search}
              onChange={(e) => onSearchChange(e.target.value)}
              placeholder="Search veg, gravy, rice…"
              className="w-full rounded-xl border border-emerald-700/60 bg-emerald-900/40 py-2.5 pl-9 pr-3 text-sm text-amber-50 placeholder:text-emerald-200/45 focus:border-amber-400/60 focus:outline focus:outline-2 focus:outline-offset-0 focus:outline-amber-400/50"
              autoComplete="off"
            />
          </div>
          <div className="flex flex-wrap items-center gap-2 md:hidden mt-2">
            <button
              type="button"
              onClick={() => scrollToId('menu-section')}
              className="rounded-lg bg-emerald-900/45 px-3 py-2 text-xs font-semibold uppercase tracking-wide text-emerald-100"
            >
              Items
            </button>
            <button
              type="button"
              onClick={() => scrollToId('about-section')}
              className="rounded-lg bg-emerald-900/45 px-3 py-2 text-xs font-semibold uppercase tracking-wide text-emerald-100"
            >
              About
            </button>
          </div>
        </div>

        <div className="flex flex-wrap items-center justify-end gap-2 sm:justify-start lg:justify-end">
          <div
            className="flex rounded-xl border border-emerald-800/60 bg-emerald-900/35 p-0.5 shadow-inner shadow-black/20"
            role="group"
            aria-label="Vegetarian filter"
          >
            {[
              { id: 'all', label: 'All' },
              {
                id: 'veg',
                label: (
                  <>
                    <span className="mr-1.5 inline-block h-2 w-2 rounded-full bg-emerald-400" aria-hidden />
                    Veg
                  </>
                ),
              },
              {
                id: 'non-veg',
                label: (
                  <>
                    <span className="mr-1.5 inline-block h-2 w-2 rounded-full bg-rose-400" aria-hidden />
                    Non-veg
                  </>
                ),
              },
            ].map((opt) => (
              <button
                key={opt.id}
                type="button"
                onClick={() => onDietChange(opt.id)}
                className={
                  dietFilter === opt.id
                    ? 'rounded-[10px] bg-amber-500 px-3 py-2 text-xs font-bold uppercase tracking-wide text-emerald-950 shadow-sm'
                    : 'rounded-[10px] px-3 py-2 text-xs font-semibold uppercase tracking-wide text-emerald-100 hover:bg-emerald-800/45'
                }
              >
                {opt.label}
              </button>
            ))}
          </div>

          <div className="flex flex-wrap items-center gap-2">
            {cartQty > 0 && (
              <span className="rounded-full bg-amber-400/95 px-3 py-1.5 text-xs font-bold uppercase tracking-wide text-emerald-950 ring-2 ring-emerald-950/20">
                {cartQty} in cart
              </span>
            )}
            {paid && (
              <span
                className="rounded-lg bg-emerald-500 px-3 py-2 text-xs font-bold text-white shadow-md"
                role="status"
              >
                Paid — thank you!
              </span>
            )}
          </div>
        </div>
      </div>
    </nav>
  )
}
