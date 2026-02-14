import { useState } from 'react';
import { Card } from '@/components/ui/card';
import ImageLightbox, { type LightboxImage } from '@/components/ImageLightbox';
import { Droplets, Flower2, Leaf, Trees } from 'lucide-react';
import { parkTerraceImageSource, parkTerraceImages } from '@/data/parkTerraceImages';

export default function Gardens() {
  const heroImage = parkTerraceImages[4];
  const highlightImage = parkTerraceImages[5];
  const sideImages = [parkTerraceImages[10], parkTerraceImages[12]];
  const [openImageIndex, setOpenImageIndex] = useState<number | null>(null);

  const seasonalHighlights = [
    {
      season: 'Spring',
      details: 'Flower borders and fresh canopy growth re-open every path.',
      icon: Flower2,
      image: parkTerraceImages[9],
    },
    {
      season: 'Summer',
      details: 'Dense foliage creates cooler courtyards and shaded circulation.',
      icon: Trees,
      image: parkTerraceImages[3],
    },
    {
      season: 'Fall',
      details: 'Changing color defines the long landscaped edges of the block.',
      icon: Leaf,
      image: parkTerraceImages[15],
    },
    {
      season: 'Winter',
      details: 'Evergreen structure and branching form keep strong garden lines.',
      icon: Droplets,
      image: parkTerraceImages[7],
    },
  ];

  const sceneImages = parkTerraceImages.slice(0, 8);

  const lightboxImages: LightboxImage[] = [
    {
      src: heroImage.imageUrl,
      alt: heroImage.alt,
      title: 'Gardens Hero View',
      description: heroImage.description,
    },
    {
      src: highlightImage.imageUrl,
      alt: highlightImage.alt,
      title: highlightImage.title,
      description: highlightImage.description,
    },
    ...sideImages.map((image) => ({
      src: image.imageUrl,
      alt: image.alt,
      title: image.title,
      description: image.description,
    })),
    ...seasonalHighlights.map((highlight) => ({
      src: highlight.image.imageUrl,
      alt: highlight.image.alt,
      title: `${highlight.season}: ${highlight.image.title}`,
      description: highlight.details,
    })),
    ...sceneImages.map((image) => ({
      src: image.imageUrl,
      alt: image.alt,
      title: image.title,
      description: image.description,
    })),
  ];

  const openLightbox = (imageUrl: string) => {
    const index = lightboxImages.findIndex((image) => image.src === imageUrl);
    if (index >= 0) {
      setOpenImageIndex(index);
    }
  };

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 md:py-28">
        <img
          src={heroImage.imageUrl}
          alt={heroImage.alt}
          className="absolute inset-0 h-full w-full object-cover"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/65 to-black/60"></div>
        <div className="container relative">
          <button
            type="button"
            onClick={() => openLightbox(heroImage.imageUrl)}
            className="hidden md:inline-flex absolute right-4 top-4 z-20 rounded-full border border-white/30 bg-black/35 px-4 py-1.5 text-[0.62rem] font-semibold uppercase tracking-[0.18em] text-white transition hover:bg-black/50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/70"
          >
            View Photo
          </button>
          <div className="max-w-3xl text-white space-y-4">
            <p className="inline-flex rounded-full border border-white/35 px-4 py-2 text-xs uppercase tracking-[0.2em] font-semibold text-white/90">
              2.67 Acres Of Shared Green Space
            </p>
            <h1>Our Gardens</h1>
            <p className="text-lg md:text-xl text-white/90 leading-relaxed">
              Park Terrace Gardens is defined by tree canopy, layered plantings,
              and walkable courtyards that create a park-like setting above the
              city grid.
            </p>
          </div>
        </div>
      </section>

      {/* Main Story */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 xl:gap-14 mb-16">
            <div className="space-y-8">
              <div>
                <h2 className="text-foreground mb-4">Garden Heritage</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Since 1940, the cooperative has maintained a continuous
                  landscape language across the block interior: mature trees,
                  planted edges, and pathways sized for daily resident movement.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  The gardens are both amenity and infrastructure. They support
                  neighborhood biodiversity, improve shade and comfort, and
                  preserve the character that makes Park Terrace Gardens unique in
                  northern Manhattan.
                </p>
              </div>

              <div className="bg-accent/5 border border-accent/20 rounded-2xl p-6">
                <h3 className="font-serif font-bold text-xl mb-4 text-foreground">
                  Landscape Features
                </h3>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold mt-1">•</span>
                    <span>
                      <strong>Mature Canopy:</strong> Established shade trees and
                      ornamental specimens across each courtyard.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold mt-1">•</span>
                    <span>
                      <strong>Seasonal Color:</strong> Rotating blooms and
                      perennial structure for year-round interest.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold mt-1">•</span>
                    <span>
                      <strong>Resident-Scaled Paths:</strong> Walkable routes that
                      connect buildings and shared spaces.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold mt-1">•</span>
                    <span>
                      <strong>Layered Planting Beds:</strong> Groundcover,
                      shrubs, and canopy work together as one system.
                    </span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="space-y-4">
              <button
                type="button"
                onClick={() => openLightbox(highlightImage.imageUrl)}
                className="group relative overflow-hidden rounded-3xl border border-border bg-card text-left shadow-xl transition-all hover:-translate-y-0.5 hover:shadow-2xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/60"
              >
                <img
                  src={highlightImage.imageUrl}
                  alt={highlightImage.alt}
                  className="h-80 md:h-96 w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                  loading="lazy"
                />
                <span className="absolute right-3 top-3 rounded-full border border-white/35 bg-black/40 px-3 py-1 text-[0.62rem] font-semibold uppercase tracking-[0.18em] text-white opacity-0 transition-opacity group-hover:opacity-100 group-focus-visible:opacity-100">
                  View Large
                </span>
                <p className="px-4 py-3 text-sm text-muted-foreground">{highlightImage.title}</p>
              </button>

              <div className="grid grid-cols-2 gap-4">
                {sideImages.map((image) => (
                  <button
                    key={image.id}
                    type="button"
                    onClick={() => openLightbox(image.imageUrl)}
                    className="group relative overflow-hidden rounded-2xl border border-border bg-card text-left shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/60"
                  >
                    <img
                      src={image.imageUrl}
                      alt={image.alt}
                      className="h-44 md:h-52 w-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                      loading="lazy"
                    />
                    <span className="absolute right-2 top-2 rounded-full border border-white/30 bg-black/35 px-2.5 py-1 text-[0.58rem] font-semibold uppercase tracking-[0.15em] text-white opacity-0 transition-opacity group-hover:opacity-100 group-focus-visible:opacity-100">
                      View Large
                    </span>
                    <p className="px-3 py-2 text-xs text-muted-foreground">{image.title}</p>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Seasonal Cards */}
          <div className="mb-16">
            <h2 className="text-foreground mb-8">Seasonal Highlights</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
              {seasonalHighlights.map((highlight) => {
                const Icon = highlight.icon;
                return (
                  <button
                    key={highlight.season}
                    type="button"
                    onClick={() => openLightbox(highlight.image.imageUrl)}
                    className="group overflow-hidden rounded-2xl border border-accent/15 bg-card text-left transition-all hover:-translate-y-1 hover:shadow-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/60"
                  >
                    <div className="relative">
                      <img
                        src={highlight.image.imageUrl}
                        alt={highlight.image.alt}
                        className="h-40 w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                        loading="lazy"
                      />
                      <span className="absolute right-2 top-2 rounded-full border border-white/30 bg-black/35 px-2.5 py-1 text-[0.58rem] font-semibold uppercase tracking-[0.15em] text-white opacity-0 transition-opacity group-hover:opacity-100 group-focus-visible:opacity-100">
                        View Large
                      </span>
                    </div>
                    <div className="p-5">
                      <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center mb-3">
                        <Icon className="text-accent" size={20} />
                      </div>
                      <h3 className="font-serif font-bold text-lg mb-2 text-foreground">
                        {highlight.season}
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        {highlight.details}
                      </p>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Scene Grid */}
          <div className="mb-10">
            <h2 className="text-foreground mb-8">Garden Scenes</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {sceneImages.map((image) => (
                <button
                  key={image.id}
                  type="button"
                  onClick={() => openLightbox(image.imageUrl)}
                  className="group relative overflow-hidden rounded-2xl border border-border bg-card text-left shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/60"
                >
                  <div className="overflow-hidden">
                    <img
                      src={image.imageUrl}
                      alt={image.alt}
                      className="h-52 w-full object-cover transition-transform duration-500 group-hover:scale-105"
                      loading="lazy"
                    />
                  </div>
                  <span className="absolute right-2 top-2 rounded-full border border-white/30 bg-black/35 px-2.5 py-1 text-[0.58rem] font-semibold uppercase tracking-[0.15em] text-white opacity-0 transition-opacity group-hover:opacity-100 group-focus-visible:opacity-100">
                    View Large
                  </span>
                  <div className="px-3 py-3">
                    <p className="text-xs uppercase tracking-wide text-accent font-semibold mb-1">
                      {image.category}
                    </p>
                    <p className="text-sm font-medium text-foreground">{image.title}</p>
                  </div>
                </button>
              ))}
            </div>
          </div>

          <p className="text-sm text-muted-foreground">
            Photography sourced from{' '}
            <a
              href={parkTerraceImageSource.articleUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium no-underline border-b border-accent/40 hover:border-accent"
            >
              {parkTerraceImageSource.name}
            </a>
            .
          </p>
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
