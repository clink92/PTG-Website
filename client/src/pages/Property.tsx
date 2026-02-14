import { useState } from 'react';
import { Card } from '@/components/ui/card';
import ImageLightbox, { type LightboxImage } from '@/components/ImageLightbox';
import { Building2, PawPrint, Trees, Users } from 'lucide-react';
import { parkTerraceImages, parkTerraceImageSource } from '@/data/parkTerraceImages';

export default function Property() {
  const heroImage = parkTerraceImages[13];
  const overviewImage = parkTerraceImages[2];
  const sideImages = [parkTerraceImages[4], parkTerraceImages[7]];
  const galleryStrip = parkTerraceImages.slice(12, 16);
  const [openImageIndex, setOpenImageIndex] = useState<number | null>(null);

  const featureCards = [
    {
      icon: Building2,
      title: 'Modernized Interiors',
      text: 'Many homes include updated kitchens, bathrooms, and finishes while preserving historic character.',
    },
    {
      icon: Trees,
      title: 'Roof & Garden Access',
      text: 'Penthouse terraces and shared outdoor areas provide flexible everyday access to open air.',
    },
    {
      icon: PawPrint,
      title: 'Pet-Friendly Living',
      text: 'A welcoming policy supports pet ownership as part of daily cooperative life.',
    },
    {
      icon: Users,
      title: 'Shareholder Community',
      text: 'Resident ownership supports long-term stewardship and careful management of shared assets.',
    },
  ];

  const lightboxImages: LightboxImage[] = [
    {
      src: heroImage.imageUrl,
      alt: heroImage.alt,
      title: 'Property Overview Hero',
      description: heroImage.description,
    },
    {
      src: overviewImage.imageUrl,
      alt: overviewImage.alt,
      title: overviewImage.title,
      description: overviewImage.description,
    },
    ...sideImages.map((image) => ({
      src: image.imageUrl,
      alt: image.alt,
      title: image.title,
      description: image.description,
    })),
    ...galleryStrip.map((image) => ({
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
      <section className="relative overflow-hidden py-20 md:py-28 border-b border-border">
        <img
          src={heroImage.imageUrl}
          alt={heroImage.alt}
          className="absolute inset-0 h-full w-full object-cover"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/65 to-black/70"></div>
        <div className="container relative text-white">
          <button
            type="button"
            onClick={() => openLightbox(heroImage.imageUrl)}
            className="hidden md:inline-flex absolute right-4 top-4 z-20 rounded-full border border-white/30 bg-black/35 px-4 py-1.5 text-[0.62rem] font-semibold uppercase tracking-[0.18em] text-white transition hover:bg-black/50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/70"
          >
            View Photo
          </button>
          <div className="max-w-3xl space-y-5">
            <p className="inline-flex rounded-full border border-white/35 px-4 py-2 text-xs uppercase tracking-[0.2em] font-semibold text-white/90">
              Property Overview
            </p>
            <h1>Our Property</h1>
            <p className="text-lg md:text-xl text-white/90 leading-relaxed">
              A distinguished mid-rise garden apartment complex featuring five
              eight-story buildings with 397 units across 2.67 acres of
              beautifully maintained grounds.
            </p>
          </div>

          <div className="grid grid-cols-3 gap-3 md:gap-4 mt-10 max-w-xl">
            <div className="rounded-2xl border border-white/25 bg-black/30 p-4 text-center">
              <p className="text-3xl font-serif font-bold">1940</p>
              <p className="text-sm text-white/85">Built</p>
            </div>
            <div className="rounded-2xl border border-white/25 bg-black/30 p-4 text-center">
              <p className="text-3xl font-serif font-bold">397</p>
              <p className="text-sm text-white/85">Units</p>
            </div>
            <div className="rounded-2xl border border-white/25 bg-black/30 p-4 text-center">
              <p className="text-3xl font-serif font-bold">2.67</p>
              <p className="text-sm text-white/85">Acres</p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            <div className="space-y-8">
              <div>
                <h2 className="text-foreground mb-4">Property Overview</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Park Terrace Gardens is a 100% shareholder-owned housing
                  cooperative in upper Manhattan, bounded by West 215th Street
                  and West 217th Street one block west of Broadway.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  The buildings were completed in 1940 with masonry, steel, and
                  concrete construction and converted to a cooperative in 1976,
                  preserving the site as a long-term resident community.
                </p>
              </div>

              <div className="bg-accent/5 border border-accent/20 rounded-2xl p-6">
                <h3 className="font-serif font-bold text-xl mb-4 text-foreground">
                  Key Facts
                </h3>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold mt-1">•</span>
                    <span>
                      <strong>Built:</strong> 1940
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold mt-1">•</span>
                    <span>
                      <strong>Total Units:</strong> 397
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold mt-1">•</span>
                    <span>
                      <strong>Buildings:</strong> Five eight-story structures
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold mt-1">•</span>
                    <span>
                      <strong>Land Area:</strong> 2.67 acres
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold mt-1">•</span>
                    <span>
                      <strong>Co-op Conversion:</strong> 1976
                    </span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="space-y-4">
              <button
                type="button"
                onClick={() => openLightbox(overviewImage.imageUrl)}
                className="group relative overflow-hidden rounded-3xl border border-border bg-card text-left shadow-xl transition-all hover:-translate-y-0.5 hover:shadow-2xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/60"
              >
                <img
                  src={overviewImage.imageUrl}
                  alt={overviewImage.alt}
                  className="h-80 md:h-96 w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                  loading="lazy"
                />
                <span className="absolute right-3 top-3 rounded-full border border-white/35 bg-black/40 px-3 py-1 text-[0.62rem] font-semibold uppercase tracking-[0.18em] text-white opacity-0 transition-opacity group-hover:opacity-100 group-focus-visible:opacity-100">
                  View Large
                </span>
                <p className="px-4 py-3 text-sm text-muted-foreground">{overviewImage.title}</p>
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

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {featureCards.map((feature) => {
              const Icon = feature.icon;
              return (
                <Card
                  key={feature.title}
                  className="p-6 border-accent/15 bg-card/90 hover:-translate-y-1 hover:shadow-xl transition-all"
                >
                  <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center mb-4">
                    <Icon className="text-accent" size={24} />
                  </div>
                  <h3 className="font-serif font-bold text-base mb-2 text-foreground">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">{feature.text}</p>
                </Card>
              );
            })}
          </div>

          <div className="mb-16">
            <h2 className="text-foreground mb-8">Property Views</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {galleryStrip.map((image) => (
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
                  <p className="px-3 py-3 text-sm text-muted-foreground">{image.title}</p>
                </button>
              ))}
            </div>
          </div>

          <div className="bg-accent/5 border border-border rounded-2xl p-8">
            <h2 className="text-foreground mb-6">Location and Neighborhood</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="font-serif font-bold text-lg mb-4 text-foreground">
                  Address
                </h3>
                <p className="text-muted-foreground mb-2">
                  Park Terrace Gardens, Inc.
                </p>
                <p className="text-muted-foreground mb-2">72 Park Terrace West</p>
                <p className="text-muted-foreground">New York, NY 10034</p>
              </div>
              <div>
                <h3 className="font-serif font-bold text-lg mb-4 text-foreground">
                  Nearby Parks
                </h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Inwood Hill Park</li>
                  <li>• Fort Tryon Park</li>
                  <li>• Harlem River Park</li>
                  <li>• Highbridge Park</li>
                </ul>
              </div>
            </div>
            <p className="text-xs text-muted-foreground mt-6">
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
