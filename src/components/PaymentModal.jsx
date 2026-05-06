import { useState } from 'react'
import { formatMoney } from '../utils/formatMoney'

export default function PaymentModal({ isOpen, total, onClose, onConfirm }) {
  const [method, setMethod] = useState('card')

  if (!isOpen) return null

  function handleSubmit(e) {
    e.preventDefault()
    onConfirm()
    setMethod('card')
  }

  function handleClose() {
    onClose()
    setMethod('card')
  }

  return (
    <div
      className="fixed inset-0 z-40 flex items-end justify-center bg-stone-900/45 p-4 backdrop-blur-[2px] sm:items-center"
      role="dialog"
      aria-modal="true"
      aria-labelledby="pay-title"
    >
      <div className="max-h-[90vh] w-full max-w-md overflow-auto rounded-2xl border border-stone-200 bg-white p-6 shadow-2xl ring-1 ring-stone-900/10">
        <h3 id="pay-title" className="text-lg font-bold text-stone-900">
          Payment
        </h3>
        <p className="mt-1 text-sm text-stone-600">
          Demo only — no real charge. Fill the form and confirm.
        </p>

        <p className="mt-4 rounded-lg bg-amber-50 px-3 py-2 text-sm font-semibold text-stone-900 ring-1 ring-amber-200/80">
          Amount: <span className="tabular-nums">{formatMoney(total)}</span>
        </p>

        <form onSubmit={handleSubmit} className="mt-4 space-y-4">
          <fieldset className="space-y-2">
            <legend className="text-sm font-semibold text-stone-900">Method</legend>
            <label className="flex items-center gap-2 text-sm">
              <input
                type="radio"
                name="method"
                value="card"
                checked={method === 'card'}
                onChange={() => setMethod('card')}
              />
              Card
            </label>
            <label className="flex items-center gap-2 text-sm">
              <input
                type="radio"
                name="method"
                value="upi"
                checked={method === 'upi'}
                onChange={() => setMethod('upi')}
              />
              UPI / digital wallet
            </label>
            <label className="flex items-center gap-2 text-sm">
              <input
                type="radio"
                name="method"
                value="cash"
                checked={method === 'cash'}
                onChange={() => setMethod('cash')}
              />
              Pay at counter (cash)
            </label>
          </fieldset>

          {method === 'card' && (
            <div className="space-y-3">
              <label className="block text-sm">
                <span className="font-medium text-stone-700">Name on card</span>
                <input
                  required
                  className="mt-1 w-full rounded-md border border-stone-300 px-3 py-2 text-sm"
                  placeholder="Alex Taylor"
                  autoComplete="cc-name"
                />
              </label>
              <label className="block text-sm">
                <span className="font-medium text-stone-700">Card number</span>
                <input
                  required
                  inputMode="numeric"
                  className="mt-1 w-full rounded-md border border-stone-300 px-3 py-2 text-sm tabular-nums"
                  placeholder="4242 4242 4242 4242"
                  autoComplete="cc-number"
                />
              </label>
              <div className="grid grid-cols-2 gap-3">
                <label className="block text-sm">
                  <span className="font-medium text-stone-700">Expiry</span>
                  <input
                    required
                    className="mt-1 w-full rounded-md border border-stone-300 px-3 py-2 text-sm"
                    placeholder="MM/YY"
                    autoComplete="cc-exp"
                  />
                </label>
                <label className="block text-sm">
                  <span className="font-medium text-stone-700">CVV</span>
                  <input
                    required
                    className="mt-1 w-full rounded-md border border-stone-300 px-3 py-2 text-sm"
                    placeholder="123"
                    autoComplete="cc-csc"
                  />
                </label>
              </div>
            </div>
          )}

          {method === 'upi' && (
            <label className="block text-sm">
              <span className="font-medium text-stone-700">UPI ID or wallet</span>
              <input
                required
                className="mt-1 w-full rounded-md border border-stone-300 px-3 py-2 text-sm"
                placeholder="you@upi"
              />
            </label>
          )}

          {method === 'cash' && (
            <p className="rounded-lg bg-stone-50 px-3 py-2 text-sm text-stone-600">
              Total will be settled when you collect your order. No card details needed.
            </p>
          )}

          <div className="flex gap-2 pt-2">
            <button
              type="button"
              onClick={handleClose}
              className="flex-1 rounded-xl border border-stone-300 py-2.5 text-sm font-semibold text-stone-800 hover:bg-stone-50"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="flex-1 rounded-xl bg-stone-900 py-2.5 text-sm font-bold text-white shadow-sm hover:bg-stone-800"
            >
              Confirm payment
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}
