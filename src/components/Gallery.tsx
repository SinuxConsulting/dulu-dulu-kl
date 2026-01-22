import { useState } from "react";
import { X } from "lucide-react";
import food1 from "@/assets/food-1.webp";
import food2 from "@/assets/food-2.webp";
import food3 from "@/assets/food-3.webp";
import food4 from "@/assets/food-4.webp";
import food5 from "@/assets/food-5.webp";
import food6 from "@/assets/food-6.webp";
import cafeExterior from "@/assets/cafe-exterior.webp";
import cafeInterior1 from "@/assets/cafe-interior-1.webp";
import cafeInterior2 from "@/assets/cafe-interior-2.webp";

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const images = [
    { src: cafeExterior, alt: "DULU-DULU Cafe exterior", category: "Ambiance" },
    { src: food1, alt: "Delicious noodle dish", category: "Food" },
    { src: cafeInterior1, alt: "Cozy interior", category: "Ambiance" },
    { src: food2, alt: "Traditional rice dish", category: "Food" },
    { src: food5, alt: "Signature dish", category: "Food" },
    { src: cafeInterior2, alt: "Seating area", category: "Ambiance" },
    { src: food3, alt: "Fish head noodles", category: "Food" },
    { src: food4, alt: "Mee siam", category: "Food" },
    { src: food6, alt: "Special menu item", category: "Food" },
  ];

  return (
    <section id="gallery" className="py-20 md:py-32 bg-background relative">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-primary font-medium text-sm uppercase tracking-wider">Gallery</span>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mt-3 mb-6">
            Moments at <span className="text-primary italic">Dulu-Dulu</span>
          </h2>
          <p className="text-foreground/75 text-lg leading-relaxed">
            From our rustic interiors to mouth-watering dishes — every visit creates memories worth savoring.
          </p>
        </div>

        {/* Masonry Grid */}
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
          {images.map((image, index) => (
            <div
              key={index}
              className="break-inside-avoid group cursor-pointer"
              onClick={() => setSelectedImage(image.src)}
            >
              <div className="relative overflow-hidden rounded-xl">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brown-dark/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4 right-4">
                    <span className="text-cream text-xs font-medium uppercase tracking-wider bg-primary/80 px-3 py-1 rounded-full">
                      {image.category}
                    </span>
                    <p className="text-cream mt-2 font-medium">{image.alt}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Instagram CTA */}
        <div className="mt-16 text-center">
          <a
            href="https://www.instagram.com/duludulu.kl/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-gradient-to-r from-primary to-rust-light text-primary-foreground px-8 py-4 rounded-full font-medium hover:opacity-90 transition-opacity shadow-lg"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
            </svg>
            Follow @duludulu.kl
          </a>
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 bg-brown-dark/95 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <button
            className="absolute top-6 right-6 text-cream/80 hover:text-cream transition-colors"
            onClick={() => setSelectedImage(null)}
          >
            <X className="w-8 h-8" />
          </button>
          <img
            src={selectedImage}
            alt="Gallery image"
            className="max-w-full max-h-[90vh] object-contain rounded-lg shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </section>
  );
};

export default Gallery;
