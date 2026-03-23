import { PRICING } from '../../data/pricing.js'
import { useLocale } from '../../i18n/I18nProvider.jsx'
import { useT } from '../../i18n/useT.js'
import { goToBooking } from '../../utils/booking.js'

function getText(field, locale) {
  if (!field) return ''
  if (typeof field === 'string') return field
  return field[locale] ?? field.en ?? ''
}

export default function PricingSection() {
  const { locale } = useLocale()
  const t = useT()

  return (
    <section id="pricing" className="bg-[#1f1f1f] mx-auto max-w-6xl px-4 py-20">
      <h2 className="text-2xl font-semibold">
        {t('sections.pricing')}
      </h2>

      <div className="mt-10 grid gap-10 md:grid-cols-2">
        
        {/* Tattoo */}
        <div>
          <h3 className="text-lg font-semibold mb-4">
            {t('pricing.tattoo')}
          </h3>

          <div className="space-y-4">
            {PRICING.tattoo.map((item) => (
              <div
                key={item.id}
                className="flex justify-between border-b border-white/10 pb-3"
              >
                <div>
                  <p className="font-medium">
                    {getText(item.name, locale)}
                  </p>
                  {item.duration && (
                    <p className="text-sm text-white/50">
                      {item.duration}
                    </p>
                  )}
                  <button
                    type="button"
                    onClick={() => goToBooking({ service: 'tattoo' })}
                    className="mt-6 inline-block rounded-full border border-white/20 px-5 py-2 text-sm text-white hover:bg-white/10"
                    >
                    {t('pricing.bookTattoo')}
                    </button>
                </div>

                <p className="text-white/80">{item.price}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Piercing */}
        <div>
          <h3 className="text-lg font-semibold mb-4">
            {t('pricing.piercing')}
          </h3>

          <div className="space-y-4">
            {PRICING.piercing.map((item) => (
              <div
              key={item.id}
              className="border-b border-white/20 pb-4"
            >
              {/* Row: name + price */}
              <div className="flex justify-between">
                <p>{getText(item.name, locale)}</p>
                <p className="text-white font-semibold">{item.price}</p>
              </div>
            
              {/* CTA BELOW */}
              <button
                type="button"
                onClick={() => goToBooking({ service: 'piercing' })}
                className="mt-3 rounded-full border border-white/20 px-4 py-1.5 text-sm text-white hover:bg-white/10"
              >
                {t('pricing.bookPiercing')}
              </button>
            </div>
            ))}
          </div>
        </div>
      </div>

      {/* Policies */}
      <div className="mt-10 space-y-2 text-sm text-white/60">
        <p>{getText(PRICING.policies.minCharge, locale)}</p>
        <p>{getText(PRICING.policies.deposit, locale)}</p>
        <p>{getText(PRICING.policies.cancellation, locale)}</p>
      </div>
    </section>
  )
}