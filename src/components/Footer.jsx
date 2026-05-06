import { BRAND_NAME } from '../constants/brand'

export default function Footer() {
  return (
    <footer className="border-t border-emerald-900/20 bg-emerald-950 py-10 text-emerald-200">
      <div className="mx-auto max-w-5xl px-4 grid gap-6 md:grid-cols-3 text-sm">

        {/* Brand */}
        <div>
          <p className="font-display text-lg font-semibold text-amber-200">
            {BRAND_NAME}
          </p>
          <p className="mt-2 text-emerald-200/70 leading-relaxed">
            Serving fresh, delicious meals with authentic flavours and a warm dining experience.
          </p>
        </div>

        {/* Address */}
        <div>
          <p className="font-semibold text-amber-200">Visit Us</p>
          <p className="mt-2 text-emerald-200/70 leading-relaxed">
            Town Hall<br />
            Coimbatore, Tamil Nadu<br />
            India
          </p>
        </div>

        {/* Contact */}
        <div>
          <p className="font-semibold text-amber-200">Contact</p>
          <p className="mt-2 text-emerald-200/70">
            Phone: +91 98765 43210<br />
            Email: info@yourrestaurant.com
          </p>
        </div>
      </div>

      {/* Bottom line */}
      <div className="mt-8 text-center text-xs text-emerald-200/60">
        © {new Date().getFullYear()} {BRAND_NAME}. All rights reserved.
      </div>
    </footer>
  )
}