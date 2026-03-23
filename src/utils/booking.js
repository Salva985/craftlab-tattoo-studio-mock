export function goToBooking(params = {}) {
    const searchParams = new URLSearchParams()
  
    Object.entries(params).forEach(([key, value]) => {
      if (value) searchParams.set(key, value)
    })
  
    const nextHash = `#booking?${searchParams.toString()}`
    const currentHash = window.location.hash
  
    if (currentHash === nextHash) {
      window.dispatchEvent(new HashChangeEvent('hashchange'))
      return
    }
  
    window.location.hash = nextHash
  }