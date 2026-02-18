import { Link, NavLink } from "react-router-dom";

export default function Navbar() {
 const linkBase =
  "relative text-sm tracking-wide transition duration-300 after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-[#d46a8c] after:transition-all after:duration-300 hover:after:w-full";
const linkStyle = ({ isActive }) =>
  `${linkBase} ${
    isActive
      ? "text-[#d46a8c]"
      : "text-neutral-600 hover:text-[#d46a8c]"
  }`;

  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur border-b border-black/10">
      <div className="mx-auto max-w-6xl px-6 md:px-10 h-16 flex items-center justify-between">
        {/* Logo (clickable to Home) */}
        <Link to="/" className="flex items-center gap-3">
          <img
            src="/images/logo.png"
            alt="Blush & Britt"
            className="h-10 w-auto select-none"
            draggable="false"
          />
        </Link>

        {/* Nav links */}
        <nav className="flex items-center gap-6">
        <NavLink to="/" className={linkStyle}>
        HOME
        </NavLink>

        <NavLink to="/products" className={linkStyle}>
        SHOP
        </NavLink>

        <NavLink to="/contact" className={linkStyle}>
        CONTACT
        </NavLink>

        <NavLink to="/gallery" className={linkStyle}>
        GALLERY
        </NavLink>

        </nav>
      </div>
    </header>
  );
}

