import { useMemo, useState } from 'react';
import ImageLightbox, { type LightboxImage } from '@/components/ImageLightbox';
import {
  parkTerraceImageSource,
  parkTerraceImages,
  type ParkTerraceCategory,
} from '@/data/parkTerraceImages';

type GalleryCategory = 'All' | ParkTerraceCategory;

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState<GalleryCategory>('All');
  const [openImageIndex, setOpenImageIndex] = useState<number | null>(null);

  const categories = useMemo<GalleryCategory[]>(() => {
    const uniqueCategories: ParkTerraceCategory[] = Array.from(
      new Set(parkTerraceImages.map((image) => image.category)),
    );
    return ['All', ...uniqueCategories];
  }, []);

  const filteredImages =
    activeCategory === 'All'
      ? parkTerraceImages
      : parkTerraceImages.filter((image) => image.category === activeCategory);

  const lightboxImages: LightboxImage[] = filteredImages.map((image) => ({
    src: image.imageUrl,
    alt: image.alt,
    title: image.title,
    description: image.description,
  }));

  const heroImage = parkTerraceImages[11];
  const heroIndexInAll = parkTerraceImages.findIndex(
    (image) => image.id === heroImage.id,
  );

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 md:py-24 border-b border-border">
        <img
          src={heroImage.imageUrl}
          alt={heroImage.alt}
          className="absolute inset-0 h-full w-full object-cover"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/65 to-black/70"></div>
        <div className="container relative">
          <button
            type="button"
            onClick={() => {
              setActiveCategory('All');
              if (heroIndexInAll >= 0) {
                setOpenImageIndex(heroIndexInAll);
              }
            }}
            className="hidden md:inline-flex absolute right-4 top-4 z-20 rounded-full border border-white/30 bg-black/35 px-4 py-1.5 text-[0.62rem] font-semibold uppercase tracking-[0.18em] text-white transition hover:bg-black/50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/70"
          >
            View Photo
          </button>
          <div className="max-w-2xl text-white space-y-4">
            <p className="inline-flex rounded-full border border-white/35 px-4 py-2 text-xs uppercase tracking-[0.2em] font-semibold text-white/90">
              Photo Gallery
            </p>
            <h1>Park Terrace In Focus</h1>
            <p className="text-lg text-white/90">
              Explore architecture, courtyards, and seasonal planting views from
              Park Terrace Gardens.
            </p>
            <p className="text-sm text-white/80">
              {parkTerraceImages.length} curated photos sourced from{' '}
              <a
                href={parkTerraceImageSource.articleUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white underline underline-offset-4"
              >
                {parkTerraceImageSource.name}
              </a>
              .
            </p>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-16 md:py-24">
        <div className="container">
          {/* Category Filter */}
          <div className="flex flex-wrap gap-3 mb-10 justify-center">
            {categories.map((category) => (
              <button
                key={category}
                type="button"
                onClick={() => {
                  setActiveCategory(category);
                  setOpenImageIndex(null);
                }}
                className={`px-5 py-2.5 rounded-xl text-sm font-semibold transition-all ${
                  activeCategory === category
                    ? 'bg-accent text-accent-foreground shadow-md'
                    : 'bg-card text-foreground border border-border hover:border-accent/40 hover:text-accent'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Gallery Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
            {filteredImages.map((image, index) => (
              <button
                key={image.id}
                type="button"
                onClick={() => setOpenImageIndex(index)}
                className="group text-left overflow-hidden rounded-2xl border border-border bg-card shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/60"
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={image.imageUrl}
                    alt={image.alt}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/15 to-transparent"></div>
                  <span className="absolute right-3 top-3 rounded-full border border-white/35 bg-black/45 px-3 py-1 text-[0.62rem] font-semibold uppercase tracking-[0.18em] text-white opacity-0 transition-opacity group-hover:opacity-100 group-focus-visible:opacity-100">
                    View Large
                  </span>
                  <div className="absolute left-4 right-4 bottom-4">
                    <p className="text-xs uppercase tracking-[0.18em] text-white/80 font-semibold mb-1">
                      {image.category}
                    </p>
                    <p className="text-lg font-serif font-bold text-white">
                      {image.title}
                    </p>
                  </div>
                </div>
                <div className="p-4">
                  <p className="text-sm text-muted-foreground">
                    {image.description}
                  </p>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      <ImageLightbox
        images={lightboxImages}
        openIndex={openImageIndex}
        onClose={() => setOpenImageIndex(null)}
      />
    </div>
  );
}
