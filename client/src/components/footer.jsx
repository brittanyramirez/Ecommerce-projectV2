import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="mt-16 border-t border-black/10 bg-white">
      <div className="mx-auto max-w-6xl px-6 md:px-10 py-12">
        <div className="grid gap-10 md:grid-cols-3">
          {/* Brand */}
          <div>
            <Link to="/" className="inline-flex items-center gap-3">
              <img
                src="/images/logo.png"
                alt="Blush & Britt"
                className="h-10 w-auto"
              />
            </Link>

            <p className="mt-4 text-sm text-neutral-600 max-w-sm">
              Minimal, skin first beauty. Curated shades, soft focus pigment, and
              gloss that hits every time.
            </p>
          </div>

          {/* Links */}
          <div className="md:justify-self-center">
            <p className="text-xs tracking-[0.25em] text-neutral-500">LINKS</p>
            <div className="mt-4 flex flex-col gap-3 text-sm">
              <Link className="text-neutral-700 hover:text-black transition" to="/products">
                Shop All
              </Link>
              <Link className="text-neutral-700 hover:text-black transition" to="/gallery">
                Gallery
              </Link>
              <Link className="text-neutral-700 hover:text-black transition" to="/contact">
                Contact
              </Link>
            </div>
          </div>

          {/* Social */}
          <div className="md:justify-self-end">
            <p className="text-xs tracking-[0.25em] text-neutral-500">SOCIAL</p>
            <div className="mt-4 flex flex-col gap-3 text-sm">
              <a className="text-neutral-700 hover:text-black transition" href="#" target="_blank" rel="noreferrer">
                Instagram
              </a>
              <a className="text-neutral-700 hover:text-black transition" href="#" target="_blank" rel="noreferrer">
                TikTok
              </a>
              <a className="text-neutral-700 hover:text-black transition" href="#" target="_blank" rel="noreferrer">
                YouTube
              </a>
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-col md:flex-row md:items-center md:justify-between gap-4 text-xs text-neutral-500">
          <p>© {new Date().getFullYear()} Blush &amp; Britt</p>
          <p className="text-neutral-400">Portfolio demo, no real checkout.</p>
        </div>
      </div>
    </footer>
  );
}
