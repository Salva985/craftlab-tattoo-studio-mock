export default function Header() {
    return (
      <header className="sticky top-0 z-50 border-b border-white/10 bg-black/70 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4">
          <div className="font-semibold tracking-wide">
            CraftLab Studio
          </div>
  
          <nav className="hidden gap-6 text-sm md:flex">
            <a href="#gallery" className="text-white/70 hover:text-white">Gallery</a>
            <a href="#pricing" className="text-white/70 hover:text-white">Pricing</a>
            <a href="#booking" className="text-white/70 hover:text-white">Booking</a>
          </nav>
  
          <a
            href="#booking"
            className="rounded-full bg-white px-4 py-2 text-sm font-semibold text-black hover:opacity-90"
          >
            Book
          </a>
        </div>
      </header>
    )
  }