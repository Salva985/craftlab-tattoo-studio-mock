import { useT } from '../i18n/useT.js'

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

      <section id="gallery" className="mx-auto max-w-6xl px-4 py-20">
        <h2 className="text-2xl font-semibold">{t('sections.gallery')}</h2>
        <div className="mt-6 rounded-xl border border-white/10 p-10 text-white/60">
          Gallery preview goes here
        </div>
      </section>

      <section id="pricing" className="mx-auto max-w-6xl px-4 py-20">
        <h2 className="text-2xl font-semibold">{t('sections.pricing')}</h2>
        <div className="mt-6 rounded-xl border border-white/10 p-10 text-white/60">
          Pricing tables go here
        </div>
      </section>

      <section id="booking" className="mx-auto max-w-6xl px-4 py-20">
        <h2 className="text-2xl font-semibold">{t('sections.booking')}</h2>
        <div className="mt-6 rounded-xl border border-white/10 p-10 text-white/60">
          Booking form goes here
        </div>
      </section>
    </>
  )
}