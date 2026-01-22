export default function Footer() {
    return (
      <footer className="border-t border-white/10">
        <div className="mx-auto max-w-6xl px-4 py-10 text-sm text-white/60">
          © {new Date().getFullYear()} CraftLab Studio
        </div>
      </footer>
    )
  }