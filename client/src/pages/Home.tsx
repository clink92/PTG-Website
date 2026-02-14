import { useState } from 'react';
import { Link } from 'wouter';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { ArrowRight, Home as HomeIcon, Leaf, Trees, Users } from 'lucide-react';
import ImageLightbox, { type LightboxImage } from '@/components/ImageLightbox';
import {
  parkTerraceHistoryImages,
  parkTerraceHistoryMilestones,
  parkTerraceHistorySource,
  parkTerraceImages,
  parkTerraceImageSource,
} from '@/data/parkTerraceImages';

export default function Home() {
  const heroPrimaryImage = parkTerraceImages[0];
  const heroSecondaryImages = [parkTerraceImages[1], parkTerraceImages[7]];
  const archiveImages = parkTerraceImages.slice(8, 12);
  const historyImages = parkTerraceHistoryImages;
  const featuredSeamanImages = historyImages.slice(0, 2);
  const historyArchiveImages = historyImages.slice(2);
  const historyMilestones = parkTerraceHistoryMilestones;
  const ctaImage = parkTerraceImages[16];
  const heroBackdropImage =
    '/images/park-terrace/Park-Terrace-Gardens-Inwood-NYC-9-.jpg';
  const [openImageIndex, setOpenImageIndex] = useState<number | null>(null);

  const features = [
    {
      icon: Leaf,
      title: 'Lush Gardens',
      description:
        '2.67 acres of landscaped courtyards, pathways, and mature canopy trees.',
    },
    {
      icon: Trees,
      title: 'Green Living',
      description:
        'An active Green Committee supports stewardship and sustainability projects.',
    },
    {
      icon: Users,
      title: 'Community',
      description:
        'Outdoor shared spaces create a connected, resident-focused environment.',
    },
    {
      icon: HomeIcon,
      title: 'Historic Charm',
      description:
        'Classic 1940 architecture paired with carefully maintained grounds.',
    },
  ];

  const lightboxImages: LightboxImage[] = [
    {
      src: heroBackdropImage,
      alt: 'Park Terrace Gardens landscaped path and tree canopy',
      title: 'Garden Path and Canopy',
      description: 'Tree-lined path showing the garden character of Park Terrace.',
    },
    {
      src: heroPrimaryImage.imageUrl,
      alt: heroPrimaryImage.alt,
      title: heroPrimaryImage.title,
      description: heroPrimaryImage.description,
    },
    ...heroSecondaryImages.map((image) => ({
      src: image.imageUrl,
      alt: image.alt,
      title: image.title,
      description: image.description,
    })),
    ...archiveImages.map((image) => ({
      src: image.imageUrl,
      alt: image.alt,
      title: image.title,
      description: image.description,
    })),
    ...historyImages.map((image) => ({
      src: image.imageUrl,
      alt: image.alt,
      title: image.title,
      description: image.caption,
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
      <section className="relative overflow-hidden py-16 md:py-24 lg:py-28">
        <img
          src={heroBackdropImage}
          alt="Park Terrace Gardens landscaped path and tree canopy"
          className="absolute inset-0 h-full w-full object-cover"
          loading="eager"
        />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_12%_10%,rgba(205,224,198,0.38),transparent_45%),radial-gradient(circle_at_85%_22%,rgba(104,135,94,0.16),transparent_44%)]"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-background/84 via-background/56 to-background/24"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-background/46 via-background/28 to-background/42"></div>

        <div className="container relative">
          <button
            type="button"
            onClick={() => openLightbox(heroBackdropImage)}
            className="hidden md:inline-flex absolute right-4 top-4 z-20 rounded-full border border-white/30 bg-black/35 px-4 py-1.5 text-[0.62rem] font-semibold uppercase tracking-[0.18em] text-white transition hover:bg-black/50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/70"
          >
            View Photo
          </button>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <div className="space-y-8">
              <div className="space-y-2">
                <p className="inline-flex items-center rounded-full border border-accent/25 bg-card/80 px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-accent">
                  Historic Garden Cooperative
                </p>
                <h1 className="text-foreground">Park Terrace Gardens</h1>
                <p className="text-xl text-muted-foreground">
                  A distinguished 1940 garden apartment cooperative spanning 2.67
                  acres of lush landscape in Manhattan.
                </p>
              </div>

              <p className="text-lg text-muted-foreground leading-relaxed">
                Experience elegant living across five eight-story buildings with
                397 units, surrounded by mature gardens, common roof deck
                terraces, and a community deeply committed to green living.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/property">
                  <a className="no-underline">
                    <Button
                      size="lg"
                      className="w-full sm:w-auto bg-accent hover:bg-accent/90 text-accent-foreground"
                    >
                      Explore the Property
                      <ArrowRight size={16} className="ml-2" />
                    </Button>
                  </a>
                </Link>
                <Link href="/contact">
                  <a className="no-underline">
                    <Button size="lg" variant="outline" className="w-full sm:w-auto">
                      Get in Touch
                    </Button>
                  </a>
                </Link>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-3 md:gap-4">
                <div className="rounded-2xl border border-accent/20 bg-card/80 p-4 text-center shadow-sm">
                  <p className="text-3xl font-serif font-bold text-accent">1940</p>
                  <p className="text-sm text-muted-foreground">Built</p>
                </div>
                <div className="rounded-2xl border border-accent/20 bg-card/80 p-4 text-center shadow-sm">
                  <p className="text-3xl font-serif font-bold text-accent">2.67</p>
                  <p className="text-sm text-muted-foreground">Acres</p>
                </div>
                <div className="rounded-2xl border border-accent/20 bg-card/80 p-4 text-center shadow-sm">
                  <p className="text-3xl font-serif font-bold text-accent">397</p>
                  <p className="text-sm text-muted-foreground">Units</p>
                </div>
              </div>
            </div>

            {/* Hero Photo Collage */}
            <div className="relative">
              <div className="absolute -inset-7 rounded-[2.2rem] bg-gradient-to-br from-accent/25 via-accent/5 to-transparent blur-3xl"></div>
              <div className="relative grid grid-cols-2 gap-4">
                <button
                  type="button"
                  onClick={() => openLightbox(heroPrimaryImage.imageUrl)}
                  className="group relative col-span-2 overflow-hidden rounded-3xl border border-white/70 bg-card text-left shadow-[0_24px_60px_-30px_rgba(24,39,27,0.55)] transition-all hover:-translate-y-0.5 hover:shadow-[0_28px_72px_-30px_rgba(24,39,27,0.65)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/60"
                >
                  <img
                    src={heroPrimaryImage.imageUrl}
                    alt={heroPrimaryImage.alt}
                    className="h-80 w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                    loading="eager"
                  />
                  <span className="absolute right-3 top-3 rounded-full border border-white/35 bg-black/40 px-3 py-1 text-[0.62rem] font-semibold uppercase tracking-[0.18em] text-white opacity-0 transition-opacity group-hover:opacity-100 group-focus-visible:opacity-100">
                    View Large
                  </span>
                  <p className="border-t border-border bg-card/95 px-4 py-3 text-sm text-muted-foreground">
                    {heroPrimaryImage.title}
                  </p>
                </button>

                {heroSecondaryImages.map((image) => (
                  <button
                    key={image.id}
                    type="button"
                    onClick={() => openLightbox(image.imageUrl)}
                    className="group relative overflow-hidden rounded-2xl border border-white/65 bg-card text-left shadow-[0_20px_48px_-32px_rgba(24,39,27,0.6)] transition-all hover:-translate-y-0.5 hover:shadow-[0_24px_56px_-28px_rgba(24,39,27,0.65)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/60"
                  >
                    <img
                      src={image.imageUrl}
                      alt={image.alt}
                      className="h-48 w-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                      loading="lazy"
                    />
                    <span className="absolute right-2 top-2 rounded-full border border-white/30 bg-black/35 px-2.5 py-1 text-[0.58rem] font-semibold uppercase tracking-[0.15em] text-white opacity-0 transition-opacity group-hover:opacity-100 group-focus-visible:opacity-100">
                      View Large
                    </span>
                    <p className="border-t border-border bg-card/95 px-3 py-2 text-xs text-muted-foreground">
                      {image.title}
                    </p>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 md:py-28">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-foreground mb-4">Why Park Terrace Gardens</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Discover what makes our cooperative a unique and desirable place to call home.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature) => {
              const Icon = feature.icon;
              return (
                <Card
                  key={feature.title}
                  className="p-6 border-accent/10 bg-card/90 hover:-translate-y-1 hover:shadow-xl transition-all"
                >
                  <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center mb-4">
                    <Icon className="text-accent" size={24} />
                  </div>
                  <h3 className="font-serif font-bold text-lg mb-2 text-foreground">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {feature.description}
                  </p>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Archive Strip */}
      <section className="py-8 md:py-14">
        <div className="container">
          <div className="flex items-end justify-between gap-4 mb-6">
            <div>
              <p className="text-sm uppercase tracking-[0.2em] text-accent font-semibold">
                Visual Archive
              </p>
              <h2 className="text-foreground">From The Gardens</h2>
            </div>
            <a
              href={parkTerraceImageSource.articleUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm no-underline border-b border-accent/40 hover:border-accent"
            >
              Photos via {parkTerraceImageSource.name}
            </a>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {archiveImages.map((image) => (
              <button
                key={image.id}
                type="button"
                onClick={() => openLightbox(image.imageUrl)}
                className="group relative overflow-hidden rounded-2xl border border-border bg-card text-left shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/60"
              >
                <img
                  src={image.imageUrl}
                  alt={image.alt}
                  className="h-40 md:h-48 w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
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
      </section>

      {/* History Section */}
      <section className="py-20 md:py-24 bg-gradient-to-b from-accent/5 via-background to-background border-y border-border">
        <div className="container">
          <div className="max-w-3xl mb-10">
            <p className="text-sm uppercase tracking-[0.2em] text-accent font-semibold mb-2">
              History
            </p>
            <h2 className="text-foreground mb-4">The Hilltop Story</h2>
            <p className="text-muted-foreground leading-relaxed">
              Park Terrace Gardens was built in 1940 as a five-building
              development on land formerly associated with the Seaman estate.
              Historical accounts describe a landscaped interior block that
              helped define the cooperative from the start, with strong resident
              participation in garden life.
            </p>
          </div>

          <div className="grid grid-cols-1 xl:grid-cols-5 gap-8">
            <div className="xl:col-span-3 space-y-4">
              {historyMilestones.map((milestone) => (
                <Card
                  key={milestone.year + milestone.title}
                  className="p-6 bg-card/90 border-accent/20"
                >
                  <div className="flex flex-wrap items-center gap-3 mb-2">
                    <span className="inline-flex rounded-full bg-accent/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-accent">
                      {milestone.year}
                    </span>
                    <h3 className="text-xl text-foreground">{milestone.title}</h3>
                  </div>
                  <p className="text-muted-foreground">{milestone.description}</p>
                </Card>
              ))}
            </div>

            <div className="xl:col-span-2 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-1 gap-4">
              {featuredSeamanImages.map((image) => (
                <button
                  key={image.id}
                  type="button"
                  onClick={() => openLightbox(image.imageUrl)}
                  className="group relative overflow-hidden rounded-2xl border border-border bg-card text-left shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/60"
                >
                  <img
                    src={image.imageUrl}
                    alt={image.alt}
                    className="h-44 sm:h-40 xl:h-48 w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                    loading="lazy"
                  />
                  <span className="absolute right-2 top-2 rounded-full border border-white/30 bg-black/35 px-2.5 py-1 text-[0.58rem] font-semibold uppercase tracking-[0.15em] text-white opacity-0 transition-opacity group-hover:opacity-100 group-focus-visible:opacity-100">
                    View Large
                  </span>
                  <div className="p-3">
                    <p className="text-sm font-semibold text-foreground">{image.title}</p>
                    <p className="text-xs text-muted-foreground">{image.caption}</p>
                  </div>
                </button>
              ))}
            </div>
          </div>

          {historyArchiveImages.length > 0 && (
            <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
              {historyArchiveImages.map((image) => (
                <button
                  key={image.id}
                  type="button"
                  onClick={() => openLightbox(image.imageUrl)}
                  className="group relative overflow-hidden rounded-2xl border border-border bg-card text-left shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/60"
                >
                  <img
                    src={image.imageUrl}
                    alt={image.alt}
                    className="h-44 md:h-48 w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                    loading="lazy"
                  />
                  <span className="absolute right-2 top-2 rounded-full border border-white/30 bg-black/35 px-2.5 py-1 text-[0.58rem] font-semibold uppercase tracking-[0.15em] text-white opacity-0 transition-opacity group-hover:opacity-100 group-focus-visible:opacity-100">
                    View Large
                  </span>
                  <div className="p-3">
                    <p className="text-sm font-semibold text-foreground">{image.title}</p>
                    <p className="text-xs text-muted-foreground">{image.caption}</p>
                  </div>
                </button>
              ))}
            </div>
          )}

          <p className="text-sm text-muted-foreground mt-6">
            Historical material adapted from{' '}
            <a
              href={parkTerraceImageSource.articleUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium no-underline border-b border-accent/40 hover:border-accent"
            >
              {parkTerraceImageSource.name}
            </a>
            , including Seaman Mansion archive photos from{' '}
            <a
              href={parkTerraceHistorySource.articleUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium no-underline border-b border-accent/40 hover:border-accent"
            >
              {parkTerraceHistorySource.name}
            </a>
            .
          </p>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative overflow-hidden py-20 md:py-28 border-y border-border">
        <img
          src={ctaImage.imageUrl}
          alt={ctaImage.alt}
          className="absolute inset-0 h-full w-full object-cover"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/65 to-black/70"></div>
        <div className="container relative">
          <div className="max-w-2xl mx-auto text-center space-y-6 text-white">
            <h2>Ready to Learn More?</h2>
            <p className="text-lg text-white/85">
              Explore property details, browse our full gallery, or contact the
              management office for more information about living at Park Terrace
              Gardens.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Link href="/gallery">
                <a className="no-underline">
                  <Button
                    size="lg"
                    variant="outline"
                    className="w-full sm:w-auto border-white/70 bg-white/10 text-white hover:bg-white/20"
                  >
                    View Gallery
                  </Button>
                </a>
              </Link>
              <Link href="/gardens">
                <a className="no-underline">
                  <Button
                    size="lg"
                    className="w-full sm:w-auto bg-accent hover:bg-accent/90 text-accent-foreground"
                  >
                    Explore Gardens
                  </Button>
                </a>
              </Link>
            </div>
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
