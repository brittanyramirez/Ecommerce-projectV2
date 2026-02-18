import { Link } from "react-router-dom";
import Slider from "../components/slider.jsx";

export default function Home() {
  return (
    <div className="w-full">
      {/* HERO VIDEO */}
      <section className="relative w-full h-[80vh] md:h-screen overflow-hidden">
        <video
          className="absolute inset-0 w-full h-full object-cover"
          src="/images/makeupvid.mp4"
          autoPlay
          muted
          loop
          playsInline
        />

        <div className="absolute inset-0 bg-black/45" />

        <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6">
          <p className="text-white/70 tracking-[0.2em] text-xs md:text-sm">
            BLUSH &amp; BRITT
          </p>

          <h1 className="text-white text-4xl md:text-6xl font-semibold tracking-wide mt-3">
            Beauty at your fingertips.
          </h1>

          <p className="text-white/80 mt-4 text-base md:text-xl max-w-xl">
            Soft focus blush, high shine gloss, and skin tints made to glow with you.
          </p>

          <div className="mt-7 flex items-center gap-3">
            <Link
              to="/products"
              className="bg-pink-200 hover:bg-pink-300 transition px-7 py-3 rounded-full text-black font-medium"
            >
              Shop Now
            </Link>

            <Link
              to="/products?type=blush"
              className="bg-white/10 hover:bg-white/20 transition px-7 py-3 rounded-full text-white font-medium border border-white/25"
            >
              Shop Blush
            </Link>
          </div>
          {/* Scroll indicator */}
<div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
  <span className="text-white/80 text-xs tracking-[0.2em]">SCROLL</span>
  <div className="h-10 w-6 rounded-full border border-white/40 flex items-start justify-center p-1">
    <span className="h-2 w-2 rounded-full bg-white/80 animate-bounce" />
  </div>
</div>

        </div>
      </section>

      {/* SLIDER SECTION */}
      <section className="px-6 md:px-10 py-12">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-end justify-between gap-6 mb-6">
            <div>
              <h2 className="text-2xl md:text-3xl font-semibold">Featured Products</h2>
              <p className="text-neutral-600 mt-1">
                Tap through bestsellers and coming soon products.
              </p>
            </div>
          </div>

          <Slider />
        </div>
      </section>
      {/* Brand Gallery Preview */}
<section className="max-w-6xl mx-auto px-6 py-20">
  <div className="text-center mb-12">
    <h2 className="text-3xl md:text-4xl font-semibold">
      Behind the Glow
    </h2>
    <p className="text-neutral-500 mt-3">
      The mood. The texture. The energy.
    </p>
  </div>

  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
    <img src="/images/3lips.jpeg" className="rounded-xl object-cover h-48 w-full" />
    <img src="/images/confident.jpeg" className="rounded-xl object-cover h-48 w-full" />
    <img src="/images/shades-skin.jpeg" className="rounded-xl object-cover h-48 w-full" />
    <img src="/images/loud-blush.jpg" className="rounded-xl object-cover h-48 w-full" />
  </div>

  <div className="text-center mt-10">
    <a
      href="/gallery"
      className="bg-black text-white px-7 py-3 rounded-full hover:bg-neutral-800 transition"
    >
      View Full Gallery
    </a>
  </div>
</section>
    </div>
  );
}
