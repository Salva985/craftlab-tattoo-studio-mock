import { useT } from '../i18n/useT.js'
import GallerySection from '../components/sections/GallerySection.jsx'
import PricingSection from '../components/sections/PricingSection.jsx'
import BookingSection from '../components/sections/BookingSection.jsx'

export default function Home() {
  const t = useT()

  return (
    <>
      <section className="mx-auto max-w-6xl px-4 py-20">
        <h1 className="text-4xl font-bold tracking-tight md:text-6xl">
          {t('hero.title')}
        </h1>

        <p className="mt-6 max-w-xl text-white/70">
          {t('hero.subtitle')}
        </p>

        <div className="mt-8 flex gap-3">
          <a
            href="#booking"
            className="rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-black"
          >
            {t('hero.ctaPrimary')}
          </a>
          <a
            href="#gallery"
            className="rounded-full border border-white/15 px-5 py-2.5 text-sm font-semibold text-white hover:bg-white/5"
          >
            {t('hero.ctaSecondary')}
          </a>
        </div>
      </section>

      <GallerySection />

      {/* PRICING */}
      <PricingSection />

      {/* BOOKING */}
      <BookingSection />
    </>
  )
}