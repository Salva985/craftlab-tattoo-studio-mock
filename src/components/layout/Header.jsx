import { useT } from '../../i18n/useT.js'
import { LOCALES } from '../../i18n/locales.js'
import { useLocale } from '../../i18n/I18nProvider.jsx'

const labels = { en: 'EN', es: 'ES', it: 'IT' }

export default function Header() {
  const t = useT()
  const { locale, setLocale } = useLocale()

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-black/70 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-3 px-4 py-4">
        <div className="font-semibold tracking-wide">CraftLab Studio</div>

        <nav className="hidden gap-6 text-sm md:flex">
          <a href="#gallery" className="text-white/70 hover:text-white">{t('nav.gallery')}</a>
          <a href="#pricing" className="text-white/70 hover:text-white">{t('nav.pricing')}</a>
          <a href="#booking" className="text-white/70 hover:text-white">{t('nav.booking')}</a>
        </nav>

        <div className="flex items-center gap-2">
          <div className="flex rounded-full border border-white/15 p-1">
            {LOCALES.map((l) => {
              const active = l === locale
              return (
                <button
                  key={l}
                  type="button"
                  onClick={() => setLocale(l)}
                  className={[
                    'rounded-full px-2.5 py-1 text-xs font-semibold',
                    active ? 'bg-white text-black' : 'text-white/70 hover:text-white',
                  ].join(' ')}
                  aria-label={`Switch language to ${l}`}
                >
                  {labels[l]}
                </button>
              )
            })}
          </div>

          <a
            href="#booking"
            className="rounded-full bg-white px-4 py-2 text-sm font-semibold text-black hover:opacity-90"
          >
            {t('nav.bookCta')}
          </a>
        </div>
      </div>
    </header>
  )
}