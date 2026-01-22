import { useMemo } from 'react'
import { useLocale } from './I18nProvider.jsx'
import { messages } from './messages.js'

function getByPath(obj, path) {
  return path.split('.').reduce((acc, key) => (acc ? acc[key] : undefined), obj)
}

export function useT() {
  const { locale } = useLocale()

  return useMemo(() => {
    return (key) => {
      const node = getByPath(messages, key)
      if (!node) return key
      return node[locale] ?? node.en ?? key
    }
  }, [locale])
}