export function sortByMostRecent(items) {
    return [...items].sort((a, b) => new Date(b.date) - new Date(a.date))
  }
  
  export function filterByStyle(items, style) {
    if (!style || style === 'all') return items
    return items.filter((it) => it.styles?.includes(style))
  }