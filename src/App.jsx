import { useMemo, useState } from 'react'
import { TAX_RATE } from './constants/billing'
import { MENU } from './data/menu'
import AboutSection from './components/AboutSection'
import CartPanel from './components/CartPanel'
import Footer from './components/Footer'
import Hero from './components/Hero'
import MenuList from './components/MenuList'
import Navbar from './components/Navbar'
import PaymentModal from './components/PaymentModal'

export default function App() {
  const [cart, setCart] = useState({})
  const [paymentOpen, setPaymentOpen] = useState(false)
  const [paid, setPaid] = useState(false)
  const [search, setSearch] = useState('')
  const [dietFilter, setDietFilter] = useState('all')

  const filteredItems = useMemo(() => {
    const q = search.trim().toLowerCase()
    return MENU.filter((item) => {
      if (dietFilter === 'veg' && item.diet !== 'veg') return false
      if (dietFilter === 'non-veg' && item.diet !== 'non-veg') return false
      if (!q) return true
      const n = `${item.name} ${item.description}`.toLowerCase()
      return n.includes(q)
    })
  }, [search, dietFilter])

  const lines = useMemo(() => {
    return Object.entries(cart)
      .map(([id, qty]) => {
        const item = MENU.find((m) => m.id === id)
        if (!item || qty < 1) return null
        return { ...item, qty }
      })
      .filter(Boolean)
  }, [cart])

  const subtotal = useMemo(() => {
    return lines.reduce((sum, row) => sum + row.price * row.qty, 0)
  }, [lines])

  const tax = subtotal * TAX_RATE
  const total = subtotal + tax

  function addToCart(id) {
    setCart((c) => ({ ...c, [id]: (c[id] || 0) + 1 }))
    setPaid(false)
  }

  function setQty(id, qty) {
    setCart((c) => {
      const next = { ...c }
      if (qty < 1) delete next[id]
      else next[id] = qty
      return next
    })
    setPaid(false)
  }

  function clearCart() {
    setCart({})
    setPaymentOpen(false)
    setPaid(false)
  }

  function handlePaymentConfirmed() {
    setPaid(true)
    setPaymentOpen(false)
    setCart({})
  }

  const cartQty = lines.reduce((n, row) => n + row.qty, 0)

  return (
    <div className="min-h-screen bg-gradient-to-b from-rose-950/25 via-teal-50/40 to-emerald-50/80 font-sans text-stone-800 antialiased">
      <Navbar
        search={search}
        onSearchChange={setSearch}
        dietFilter={dietFilter}
        onDietChange={setDietFilter}
        cartQty={cartQty}
        paid={paid}
      />

      <Hero />

      <main className="mx-auto grid max-w-6xl gap-10 px-4 py-10 lg:grid-cols-[1fr_minmax(280px,360px)]">
        <MenuList items={filteredItems} onAdd={addToCart} />
        <CartPanel
          lines={lines}
          subtotal={subtotal}
          tax={tax}
          total={total}
          onQtyChange={setQty}
          onClear={clearCart}
          onPay={() => setPaymentOpen(true)}
        />
      </main>

      <AboutSection />

      <PaymentModal
        isOpen={paymentOpen}
        total={total}
        onClose={() => setPaymentOpen(false)}
        onConfirm={handlePaymentConfirmed}
      />

      <Footer />
    </div>
  )
}
