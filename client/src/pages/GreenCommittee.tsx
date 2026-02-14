import { useState } from 'react';
import { Card } from '@/components/ui/card';
import ImageLightbox, { type LightboxImage } from '@/components/ImageLightbox';
import { Droplet, Leaf, Lightbulb, Recycle, Wind, Zap } from 'lucide-react';
import { parkTerraceImages, parkTerraceImageSource } from '@/data/parkTerraceImages';

export default function GreenCommittee() {
  const heroImage = parkTerraceImages[3];
  const missionImage = parkTerraceImages[6];
  const sideImages = [parkTerraceImages[9], parkTerraceImages[11]];
  const impactStrip = parkTerraceImages.slice(0, 4);
  const [openImageIndex, setOpenImageIndex] = useState<number | null>(null);

  const initiatives = [
    {
      icon: Zap,
      title: 'Energy Efficiency',
      text: 'Building-system tuning, lighting upgrades, and steam optimization to lower energy demand.',
    },
    {
      icon: Droplet,
      title: 'Water Conservation',
      text: 'Fixture and maintenance strategies that reduce unnecessary water use.',
    },
    {
      icon: Recycle,
      title: 'Waste Reduction',
      text: 'Resident recycling habits and lower-waste building operations.',
    },
    {
      icon: Leaf,
      title: 'Green Landscaping',
      text: 'Planting choices and garden care practices that support biodiversity.',
    },
    {
      icon: Wind,
      title: 'Air Quality',
      text: 'Cleaner building performance and more healthy outdoor shared spaces.',
    },
    {
      icon: Lightbulb,
      title: 'Resident Education',
      text: 'Practical sustainability guidance that residents can apply day to day.',
    },
  ];

  const lightboxImages: LightboxImage[] = [
    {
      src: heroImage.imageUrl,
      alt: heroImage.alt,
      title: 'Green Committee Hero View',
      description: heroImage.description,
    },
    {
      src: missionImage.imageUrl,
      alt: missionImage.alt,
      title: missionImage.title,
      description: missionImage.description,
    },
    ...sideImages.map((image) => ({
      src: image.imageUrl,
      alt: image.alt,
      title: image.title,
      description: image.description,
    })),
    ...impactStrip.map((image) => ({
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
              Sustainability Leadership
            </p>
            <h1>Green Committee</h1>
            <p className="text-lg md:text-xl text-white/90 leading-relaxed">
              Park Terrace Gardens has an active Green Committee focused on
              practical sustainability, healthier building performance, and
              long-term stewardship of shared spaces.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            <div className="space-y-8">
              <div>
                <h2 className="text-foreground mb-4">Our Mission</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  The Green Committee is composed of co-op members who advance
                  sustainability initiatives throughout Park Terrace Gardens.
                  Projects are designed to reduce environmental impact while
                  improving resident comfort and long-term building performance.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  In collaboration with the board and management, the committee
                  focuses on measurable improvements in energy use, resource
                  stewardship, and landscape quality.
                </p>
              </div>

              <div className="bg-accent/5 border border-accent/20 rounded-2xl p-6">
                <h3 className="font-serif font-bold text-xl mb-4 text-foreground">
                  Key Achievements
                </h3>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold mt-1">•</span>
                    <span>
                      Completed comprehensive energy audit work under Local Law
                      87 guidance.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold mt-1">•</span>
                    <span>
                      Implemented steam-system and efficiency upgrades across
                      operations.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold mt-1">•</span>
                    <span>
                      Reduced energy demand and emissions through coordinated
                      building improvements.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold mt-1">•</span>
                    <span>
                      Expanded water conservation and waste-reduction habits
                      among residents.
                    </span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="space-y-4">
              <button
                type="button"
                onClick={() => openLightbox(missionImage.imageUrl)}
                className="group relative overflow-hidden rounded-3xl border border-border bg-card text-left shadow-xl transition-all hover:-translate-y-0.5 hover:shadow-2xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/60"
              >
                <img
                  src={missionImage.imageUrl}
                  alt={missionImage.alt}
                  className="h-80 md:h-96 w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                  loading="lazy"
                />
                <span className="absolute right-3 top-3 rounded-full border border-white/35 bg-black/40 px-3 py-1 text-[0.62rem] font-semibold uppercase tracking-[0.18em] text-white opacity-0 transition-opacity group-hover:opacity-100 group-focus-visible:opacity-100">
                  View Large
                </span>
                <p className="px-4 py-3 text-sm text-muted-foreground">
                  Resident stewardship and landscape health are central to the
                  committee&apos;s work.
                </p>
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

          <div className="mb-16">
            <h2 className="text-foreground mb-8">Sustainability Initiatives</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {initiatives.map((initiative) => {
                const Icon = initiative.icon;
                return (
                  <Card
                    key={initiative.title}
                    className="p-6 border-accent/15 bg-card/90 hover:-translate-y-1 hover:shadow-xl transition-all"
                  >
                    <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center mb-4">
                      <Icon className="text-accent" size={24} />
                    </div>
                    <h3 className="font-serif font-bold text-base mb-2 text-foreground">
                      {initiative.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {initiative.text}
                    </p>
                  </Card>
                );
              })}
            </div>
          </div>

          <div className="mb-16">
            <h2 className="text-foreground mb-8">On The Grounds</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {impactStrip.map((image) => (
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
            <h2 className="text-foreground mb-6">Environmental Impact</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <p className="text-4xl font-serif font-bold text-accent mb-2">
                  Grade A
                </p>
                <p className="text-muted-foreground">
                  Improved energy performance rating after multi-year upgrades.
                </p>
              </div>
              <div>
                <p className="text-4xl font-serif font-bold text-accent mb-2">
                  30%+
                </p>
                <p className="text-muted-foreground">
                  Reduction in energy consumption and associated emissions.
                </p>
              </div>
              <div>
                <p className="text-4xl font-serif font-bold text-accent mb-2">
                  2.67
                </p>
                <p className="text-muted-foreground">
                  Acres of shared green space supported by resident stewardship.
                </p>
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
