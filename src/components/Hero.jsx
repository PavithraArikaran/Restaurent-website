import { BRAND_NAME, BRAND_TAGLINE } from '../constants/brand'

export default function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden border-b border-rose-900/15 bg-gradient-to-br from-emerald-950 via-emerald-900 to-teal-900"
      aria-labelledby="hero-title"
    >
      <div
        className="pointer-events-none absolute -right-24 -top-24 h-64 w-64 rounded-full bg-amber-400/15 blur-3xl"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute bottom-0 left-0 h-48 w-48 rounded-full bg-rose-500/10 blur-3xl"
        aria-hidden
      />

      <div className="relative mx-auto max-w-6xl px-4 py-12 sm:py-16 lg:py-20">
        <p className="text-xs font-bold uppercase tracking-[0.3em] text-amber-200/80">
          Since today — your table, our kitchen
        </p>
        <h1
          id="hero-title"
          className="font-display mt-3 max-w-xl text-4xl font-semibold leading-tight text-amber-50 sm:text-5xl lg:text-6xl"
        >
          Welcome to&nbsp;
          <span className="whitespace-nowrap text-amber-300">{BRAND_NAME}</span>
        </h1>
        <p className="mt-4 max-w-lg text-lg text-emerald-100/95">{BRAND_TAGLINE}</p>
        <p className="mt-6 inline-flex rounded-full border border-amber-300/35 bg-black/15 px-4 py-2 text-sm font-medium text-amber-100 backdrop-blur-sm">
          ₹ prices · dine-in takeaway demo · Tap items to bill &amp; pay
        </p>
      </div>
    </section>
  )
}
