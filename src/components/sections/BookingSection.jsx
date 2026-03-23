import { useEffect, useState } from 'react'
import { buildWhatsAppLink } from '../../utils/whatsapp.js'
import { useT } from '../../i18n/useT.js'

export default function BookingSection() {
  const t = useT()

  const [form, setForm] = useState({
    name: '',
    contact: '',
    date: '',
    service: '',
    style: '',
    message: '',
  })

  useEffect(() => {
    const applyBookingPrefill = () => {
      const hash = window.location.hash

      if (!hash.startsWith('#booking')) return

      const queryString = hash.split('?')[1]
      if (!queryString) return

      const params = new URLSearchParams(queryString)

      const style = params.get('style')
      const title = params.get('title')
      const service = params.get('service')

      setForm((prev) => ({
        ...prev,
        service: service || prev.service,
        style: style || prev.style,
        message: title
          ? `I’m interested in a design similar to "${title}".`
          : prev.message,
      }))

      const el = document.getElementById('booking')
      el?.scrollIntoView({ behavior: 'smooth' })
    }

    applyBookingPrefill()
    window.addEventListener('hashchange', applyBookingPrefill)

    return () => {
      window.removeEventListener('hashchange', applyBookingPrefill)
    }
  }, [])

  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    const text = `
${t('booking.name')}: ${form.name}
${t('booking.contact')}: ${form.contact}
${t('booking.date')}: ${form.date}
${t('booking.service')}: ${form.service}
${t('booking.style')}: ${form.style}
${t('booking.message')}: ${form.message}
`

    const url = buildWhatsAppLink({
      phoneE164: '+34600000000', // TODO replace
      message: text,
    })

    window.open(url, '_blank')
    setSubmitted(true)
  }

  return (
    <section id="booking" className="bg-[#161616] mx-auto max-w-6xl px-4 py-20">
      <div className="max-w-2xl">
        <h2 className="text-2xl font-semibold">{t('sections.booking')}</h2>
        <p className="mt-2 text-white/60">
          {t('booking.subtitle')}
        </p>
      </div>

      {!submitted ? (
        <form onSubmit={handleSubmit} className="mt-10 grid gap-6 md:grid-cols-2">
          
          {/* Name */}
          <div className="flex flex-col gap-2">
            <label className="text-sm text-white/70">
              {t('booking.name')}
            </label>
            <input
              name="name"
              value={form.name}
              onChange={handleChange}
              className="rounded-lg border border-white/20 bg-transparent px-4 py-2"
              required
            />
          </div>

          {/* Contact */}
          <div className="flex flex-col gap-2">
            <label className="text-sm text-white/70">
              {t('booking.contact')}
            </label>
            <input
              name="contact"
              value={form.contact}
              onChange={handleChange}
              className="rounded-lg border border-white/20 bg-transparent px-4 py-2"
              required
            />
          </div>

          {/* Date */}
          <div className="flex flex-col gap-2">
            <label className="text-sm text-white/70">
              {t('booking.date')}
            </label>
            <input
              type="date"
              name="date"
              value={form.date}
              onChange={handleChange}
              className="rounded-lg border border-white/20 bg-transparent px-4 py-2"
            />
          </div>

          {/* Service */}
          <div className="flex flex-col gap-2">
            <label className="text-sm text-white/70">
              {t('booking.service')}
            </label>
            <div className="flex gap-3">
                <button
                type="button"
                onClick={() => setForm((prev) => ({ ...prev, service: 'tattoo' }))}
                className={`flex-1 rounded-full border px-4 py-2 text-sm transition
                    ${
                    form.service === 'tattoo'
                        ? 'border-white bg-white text-black'
                        : 'border-white/20 text-white hover:bg-white/10'
                    }`}
                >
                {t('booking.tattoo')}
                </button>

                <button
                type="button"
                onClick={() => setForm((prev) => ({ ...prev, service: 'piercing' }))}
                className={`flex-1 rounded-full border px-4 py-2 text-sm transition
                    ${
                    form.service === 'piercing'
                        ? 'border-white bg-white text-black'
                        : 'border-white/20 text-white hover:bg-white/10'
                    }`}
                >
                {t('booking.piercing')}
                </button>
            </div>
          </div>

          {/* Style */}
          <div className="flex flex-col gap-2 md:col-span-2">
            <label className="text-sm text-white/70">
              {t('booking.style')}
            </label>
            <input
              name="style"
              value={form.style}
              onChange={handleChange}
              className="rounded-lg border border-white/20 bg-transparent px-4 py-2"
            />
          </div>

          {/* Message */}
          <div className="flex flex-col gap-2 md:col-span-2">
            <label className="text-sm text-white/70">
              {t('booking.message')}
            </label>
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              className="rounded-lg border border-white/20 bg-transparent px-4 py-2"
              rows={4}
            />
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="mt-4 rounded-full bg-white px-6 py-3 font-semibold text-black md:col-span-2"
          >
            {t('booking.submit')}
          </button>
        </form>
      ) : (
        <div className="mt-10 text-white/70">
          {t('booking.success')}
        </div>
      )}
    </section>
  )
}