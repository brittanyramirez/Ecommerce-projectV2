import { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";

export default function Slider() {
  const slides = useMemo(
    () => [
      {
        img: "/images/cherry-kiss.png",
        eyebrow: "NEW",
        title: "Cherry Kiss: bold cherry red gloss",
        subtitle: "One swipe away from making a statement.",
        cta: { label: "Shop Gloss", href: "/products?type=lipgloss" },
      },
      {
        img: "/images/maincharacter-energy.png",
        eyebrow: "BLUSH",
        title: "Main character energy on demand.",
        subtitle: "Rich pigment. Weightless feel. Skin first finish.",
        cta: { label: "Shop Blush", href: "/products?type=blush" },
      },
      {
        img: "/images/skintint-shades.png",
        eyebrow:"COMING SOON",
        title: "Your skin, just elevated.",
        subtitle: "Breathable coverage with a luminous, satin glow.",
        cta: { label: "Shop Skin Tint", href: "/products?type=skintint" },
      },
    ],
    []
  );

  const [index, setIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  // AUTO PLAY
  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, 4500);

    return () => clearInterval(interval);
  }, [isPaused, slides.length]);

  const prev = () =>
    setIndex((prev) => (prev - 1 + slides.length) % slides.length);

  const next = () =>
    setIndex((prev) => (prev + 1) % slides.length);

  const active = slides[index];

  return (
    <div
      className="rounded-3xl border border-black/10 bg-white shadow-sm overflow-hidden"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="grid grid-cols-1 md:grid-cols-2">
        {/* IMAGE SIDE */}
        <div className="relative bg-neutral-100">
          <div className="h-[320px] md:h-[420px] w-full flex items-center justify-center p-8">
            <img
              src={active.img}
              alt={active.title}
              className="max-h-full max-w-full object-contain transition duration-500"
            />
          </div>

          {/* Arrows */}
          <button
            onClick={prev}
            className="absolute left-4 top-1/2 -translate-y-1/2 h-10 w-10 rounded-full bg-white/80 hover:bg-white border border-black/10 flex items-center justify-center"
          >
            ‹
          </button>

          <button
            onClick={next}
            className="absolute right-4 top-1/2 -translate-y-1/2 h-10 w-10 rounded-full bg-white/80 hover:bg-white border border-black/10 flex items-center justify-center"
          >
            ›
          </button>
        </div>

        {/* TEXT SIDE */}
        <div className="p-8 md:p-12 flex flex-col justify-center">
          <p className="text-xs tracking-[0.25em] text-neutral-500">
            {active.eyebrow}
          </p>

          <h3 className="text-3xl md:text-4xl font-semibold mt-3 leading-tight">
            {active.title}
          </h3>

          <p className="text-neutral-600 mt-4">
            {active.subtitle}
          </p>

          <div className="mt-6 flex items-center gap-4">
            <Link
              to={active.cta.href}
              className="bg-black text-white px-6 py-3 rounded-full hover:opacity-90 transition text-sm font-medium"
            >
              {active.cta.label}
            </Link>

            <Link
              to="/products"
              className="text-sm text-neutral-700 underline underline-offset-4"
            >
              View all
            </Link>
          </div>

          {/* Dots */}
          <div className="mt-6 flex items-center gap-2">
            {slides.map((_, i) => (
              <button
                key={i}
                onClick={() => setIndex(i)}
                className={`h-2.5 rounded-full transition ${
                  i === index ? "w-8 bg-black" : "w-2.5 bg-black/20"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
