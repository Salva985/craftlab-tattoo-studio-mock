import { createContext, useContext, useEffect, useMemo, useState } from 'react'
import { DEFAULT_LOCALE, isLocale, STORAGE_KEY } from './locales.js'

const I18nContext = createContext(null)

function getInitialLocale() {
  const saved = localStorage.getItem(STORAGE_KEY)
  if (isLocale(saved)) return saved

  const browser = (navigator.language || '').slice(0, 2).toLowerCase()
  if (isLocale(browser)) return browser

  return DEFAULT_LOCALE
}

export function I18nProvider({ children }) {
  const [locale, setLocale] = useState(getInitialLocale)

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, locale)
  }, [locale])

  const value = useMemo(() => ({ locale, setLocale }), [locale])

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>
}

export function useLocale() {
  const ctx = useContext(I18nContext)
  if (!ctx) throw new Error('useLocale must be used within <I18nProvider>')
  return ctx
}