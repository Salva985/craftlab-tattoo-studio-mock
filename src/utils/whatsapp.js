export function buildWhatsAppLink({ phoneE164, message }) {
    const base = `https://wa.me/${phoneE164.replace(/\+/g, '')}`
    const text = encodeURIComponent(message || '')
    return `${base}?text=${text}`
  }