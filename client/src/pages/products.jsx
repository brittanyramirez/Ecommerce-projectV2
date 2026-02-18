import { useEffect, useMemo, useRef, useState } from "react";

export default function Products() {
// Filter state
  const [type, setType] = useState("all");
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");
  
// Data state
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");


  const [addedMap, setAddedMap] = useState({}); 

// Back to top
  const [showTop, setShowTop] = useState(false);
  const topRef = useRef(null);

  const typeOptions = useMemo(
    () => [
      { label: "All", value: "all" },
      { label: "Blush", value: "blush" },
      { label: "Lip Gloss", value: "lipgloss" },
      { label: "Skin Tint", value: "skintint" },
    ],
    []
  );


  function buildQuery() {
    const params = new URLSearchParams();
    params.set("type", type);

    // only include min/max if user typed something
    const min = minPrice.trim();
    const max = maxPrice.trim();

    if (min) params.set("minPrice", min);
    if (max) params.set("maxPrice", max);

    return params.toString();
  }

  async function fetchProducts() {
    setErrorMsg("");
    setLoading(true);
    try {
      const query = buildQuery();
      const res = await fetch(`https://ecommerce-projectv2.onrender.com/api/products?${query}`);

      if (!res.ok) {
        throw new Error(`Server error: ${res.status}`);
      }

      const data = await res.json();
      setProducts(Array.isArray(data) ? data : []);
    } catch (err) {
      setErrorMsg(
        "Couldn't load products."
      );
      setProducts([]);
    } finally {
      setLoading(false);
    }
  }

  function addToCartUI(productId) {
    setAddedMap((prev) => ({ ...prev, [productId]: true }));
    window.setTimeout(() => {
      setAddedMap((prev) => {
        const next = { ...prev };
        delete next[productId];
        return next;
      });
    }, 1500);
  }

  useEffect(() => {
    fetchProducts();

  }, []);

  // Back to top visibility
  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 600);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);


  return (
    <div ref={topRef} className="min-h-screen bg-[#fbf6f4] text-neutral-900">
      {/* Header + Filters */}
      <div className="max-w-6xl mx-auto px-6 pt-10 pb-8">
        <div className="text-center">
          <h1 className="text-5xl font-semibold tracking-tight">Shop All</h1>
          <p className="mt-3 text-neutral-500">
            Minimal, skin first essentials.
          </p>
        </div>

        {/* Filters centered */}
        <div className="mt-8 flex flex-col items-center gap-5">
          {/* Pills */}
          <div className="flex flex-wrap justify-center gap-2">
            {typeOptions.map((opt) => {
              const active = type === opt.value;
              return (
                <button
                  key={opt.value}
                  type="button"
                  onClick={() => setType(opt.value)}
                  className={
                    "rounded-full border px-4 py-2 text-sm transition " +
                    (active
                      ? "bg-black text-white border-black"
                      : "bg-white text-neutral-700 border-neutral-200 hover:border-[#d46a8c] hover:text-[#d46a8c]")
                  }
                >
                  {opt.label}
                </button>
              );
            })}
          </div>

          {/* Min/Max and Apply */}
          <div className="flex flex-wrap justify-center gap-3">
            <div className="flex flex-col">
              <label className="text-[11px] uppercase tracking-widest text-neutral-400 mb-1">
                Min price
              </label>
              <input
                value={minPrice}
                onChange={(e) => setMinPrice(e.target.value)}
                inputMode="decimal"
                placeholder="0"
                className="w-44 rounded-xl border border-neutral-200 bg-white px-4 py-3 text-sm outline-none focus:border-[#d46a8c]"
              />
            </div>

            <div className="flex flex-col">
              <label className="text-[11px] uppercase tracking-widest text-neutral-400 mb-1">
                Max price
              </label>
              <input
                value={maxPrice}
                onChange={(e) => setMaxPrice(e.target.value)}
                inputMode="decimal"
                placeholder="50"
                className="w-44 rounded-xl border border-neutral-200 bg-white px-4 py-3 text-sm outline-none focus:border-[#d46a8c]"
              />
            </div>

            <div className="flex flex-col justify-end">
              <button
                onClick={fetchProducts}
                className="rounded-full bg-black px-7 py-3 text-sm text-white transition hover:bg-neutral-800 disabled:opacity-60"
                disabled={loading}
              >
                {loading ? "Loading..." : "Apply"}
              </button>
            </div>
          </div>

          {/* Error message */}
          {errorMsg && (
            <div className="text-sm text-red-600 bg-red-50 border border-red-100 rounded-xl px-4 py-3">
              {errorMsg}
            </div>
          )}
        </div>
      </div>

      {/* Product grid */}
      <div className="max-w-6xl mx-auto px-6 pb-16">
        {products.length === 0 && !loading && !errorMsg ? (
          <div className="text-center text-neutral-500 py-12">
            No products found for those filters.
          </div>
        ) : null}

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7">
          {products.map((p) => {
            const added = !!addedMap[p.id];

            return (
              <div
                key={p.id}
                className="rounded-3xl border border-black/10 bg-white shadow-sm overflow-hidden"
              >
                {/* Image wrapper */}
                <div className="bg-white">
                  {/* object-contain so it doesn’t crop the pic */}
                  <img
                    src={p.imageUrl}
                    alt={p.name}
                    className="w-full h-80 object-contain p-6"
                    loading="lazy"
                  />
                </div>

                <div className="px-6 pb-6">
                  <div className="text-[11px] uppercase tracking-widest text-neutral-400">
                    {p.type}
                  </div>

                  <h3 className="mt-2 text-xl font-semibold">{p.name}</h3>

                  <p className="mt-2 text-neutral-600 text-sm leading-relaxed">
                    {p.description}
                  </p>

                  <div className="mt-4 flex items-center justify-between">
                    <div className="text-lg font-semibold">
                      ${Number(p.price).toFixed(2)}
                    </div>

                    <button
                      type="button"
                      onClick={() => addToCartUI(p.id)}
                      className={
                        "rounded-full px-5 py-2.5 text-sm transition border " +
                        (added
                          ? "bg-[#f7d7e2] border-[#f0b7c9] text-neutral-900"
                          : "bg-black border-black text-white hover:bg-neutral-800")
                      }
                    >
                      {added ? "Added ✓" : "Add to cart"}
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Back to top button */}
      {showTop && (
        <button
          type="button"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="fixed bottom-6 right-6 rounded-full bg-black text-white px-4 py-3 text-sm shadow-lg hover:bg-neutral-800 transition"
        >
          ↑ Top
        </button>
      )}
    </div>
  );
}
