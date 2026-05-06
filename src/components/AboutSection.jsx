import { BRAND_NAME } from '../constants/brand'

export default function AboutSection() {
  return (
    <section
      id="about-section"
      className="scroll-mt-28 border-t border-amber-200/70 bg-white/95 py-14"
      aria-labelledby="about-heading"
    >
      <div className="mx-auto max-w-3xl px-4 text-center">
        <p className="text-xs font-bold uppercase tracking-[0.25em] text-rose-900/65">
          About Us
        </p>

        <h2
          id="about-heading"
          className="font-display mt-3 text-3xl font-semibold text-emerald-950"
        >
          Authentic taste, made with care
        </h2>

        <p className="mx-auto mt-4 max-w-2xl leading-relaxed text-stone-600">
          Welcome to{' '}
          <span className="font-semibold text-emerald-900">{BRAND_NAME}</span>, where
          every dish is prepared with fresh ingredients and traditional recipes.
          From comforting South Indian favourites to rich North Indian curries,
          we bring you flavours that feel like home.
        </p>

        <p className="mx-auto mt-3 max-w-2xl leading-relaxed text-stone-600">
          Whether you're stopping by for a quick bite or a full meal, our goal is
          simple — serve delicious food, fast service, and a warm dining experience
          you’ll want to come back to.
        </p>
      </div>
    </section>
  )
}