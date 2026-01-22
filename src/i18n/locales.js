export const LOCALES = /** @type {const} */ (['en', 'es', 'it'])
export const DEFAULT_LOCALE = 'en'
export const STORAGE_KEY = 'craftlab_locale'

export function isLocale(value) {
  return LOCALES.includes(value)
}