export default function Gallery() {
  const images = [
    "/images/3lips.jpeg",
    "/images/cherry-lips.jpeg",
    "/images/cocoa-tint.jpg",
    "/images/confident.jpeg",
    "/images/loud-blush.jpg",
    "/images/modeling-bb.jpg",
    "/images/shades-skin.jpeg",
    "/images/smiling.jpeg",
    "/images/sparkle-lip.jpg",
    "/images/spotlight-bb.jpg",
    "/images/tint-shades.png",
    "/images/cheeky.jpeg",
  ];

  return (
    <div className="max-w-7xl mx-auto px-6 py-20">
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-semibold">
          The Blush & Britt Edit
        </h1>
        <p className="text-neutral-500 mt-4">
          A visual diary of glow, texture, and intention.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {images.map((img, index) => (
          <div key={index} className="overflow-hidden rounded-2xl">
            <img
              src={img}
              className="w-full h-full object-cover hover:scale-105 transition duration-500"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
