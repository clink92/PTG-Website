import {
  type TouchEvent,
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';

export interface LightboxImage {
  src: string;
  alt: string;
  title?: string;
  description?: string;
}

interface ImageLightboxProps {
  images: LightboxImage[];
  openIndex: number | null;
  onClose: () => void;
}

export default function ImageLightbox({
  images,
  openIndex,
  onClose,
}: ImageLightboxProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const touchStartX = useRef<number | null>(null);
  const touchStartY = useRef<number | null>(null);

  const isOpen = openIndex !== null && images.length > 0;
  const activeImage = useMemo(() => images[activeIndex], [images, activeIndex]);

  useEffect(() => {
    if (openIndex === null || images.length === 0) {
      return;
    }

    const safeIndex = Math.max(0, Math.min(openIndex, images.length - 1));
    setActiveIndex(safeIndex);
  }, [openIndex, images.length]);

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [isOpen]);

  const showPrevious = useCallback(() => {
    if (images.length < 2) {
      return;
    }
    setActiveIndex((currentIndex) =>
      currentIndex === 0 ? images.length - 1 : currentIndex - 1,
    );
  }, [images.length]);

  const showNext = useCallback(() => {
    if (images.length < 2) {
      return;
    }
    setActiveIndex((currentIndex) =>
      currentIndex === images.length - 1 ? 0 : currentIndex + 1,
    );
  }, [images.length]);

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      } else if (event.key === 'ArrowLeft') {
        showPrevious();
      } else if (event.key === 'ArrowRight') {
        showNext();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose, showNext, showPrevious]);

  const handleTouchStart = (event: TouchEvent<HTMLDivElement>) => {
    touchStartX.current = event.changedTouches[0]?.clientX ?? null;
    touchStartY.current = event.changedTouches[0]?.clientY ?? null;
  };

  const handleTouchEnd = (event: TouchEvent<HTMLDivElement>) => {
    if (touchStartX.current === null || touchStartY.current === null) {
      return;
    }

    const deltaX = (event.changedTouches[0]?.clientX ?? 0) - touchStartX.current;
    const deltaY = (event.changedTouches[0]?.clientY ?? 0) - touchStartY.current;

    touchStartX.current = null;
    touchStartY.current = null;

    if (Math.abs(deltaX) < 56 || Math.abs(deltaX) < Math.abs(deltaY)) {
      return;
    }

    if (deltaX > 0) {
      showPrevious();
    } else {
      showNext();
    }
  };

  if (!isOpen || !activeImage) {
    return null;
  }

  return (
    <div className="fixed inset-0 z-[120] animate-in fade-in duration-200">
      <div
        className="absolute inset-0 bg-black/90 backdrop-blur-sm"
        onClick={onClose}
      ></div>

      <div className="relative flex h-full w-full items-center justify-center p-3 sm:p-6 lg:p-10">
        <div
          className="relative flex w-full max-w-6xl flex-col overflow-hidden rounded-3xl border border-white/15 bg-black/35 shadow-[0_36px_90px_-28px_rgba(0,0,0,0.75)]"
          role="dialog"
          aria-modal="true"
          aria-label={activeImage.title ? `${activeImage.title} image preview` : 'Image preview'}
          onClick={(event) => event.stopPropagation()}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          <button
            type="button"
            onClick={onClose}
            className="absolute right-3 top-3 z-20 rounded-full border border-white/25 bg-black/40 p-2 text-white transition hover:bg-black/65 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/70"
            aria-label="Close image preview"
          >
            <X size={18} />
          </button>

          {images.length > 1 && (
            <>
              <button
                type="button"
                onClick={showPrevious}
                className="absolute left-3 top-1/2 z-20 -translate-y-1/2 rounded-full border border-white/25 bg-black/40 p-2 text-white transition hover:bg-black/65 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/70"
                aria-label="Previous image"
              >
                <ChevronLeft size={20} />
              </button>
              <button
                type="button"
                onClick={showNext}
                className="absolute right-3 top-1/2 z-20 -translate-y-1/2 rounded-full border border-white/25 bg-black/40 p-2 text-white transition hover:bg-black/65 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/70"
                aria-label="Next image"
              >
                <ChevronRight size={20} />
              </button>
            </>
          )}

          <div className="relative">
            <img
              src={activeImage.src}
              alt={activeImage.alt}
              className="h-[58vh] w-full bg-black/20 object-contain md:h-[64vh]"
              loading="eager"
            />
            <p className="absolute bottom-3 left-3 rounded-full border border-white/20 bg-black/45 px-3 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-white/90">
              {activeIndex + 1} / {images.length}
            </p>
          </div>

          {(activeImage.title || activeImage.description) && (
            <div className="space-y-2 border-t border-white/10 bg-black/55 px-5 py-4 text-white">
              {activeImage.title && (
                <p className="text-base font-semibold sm:text-lg">{activeImage.title}</p>
              )}
              {activeImage.description && (
                <p className="text-sm text-white/85 sm:text-base">
                  {activeImage.description}
                </p>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
