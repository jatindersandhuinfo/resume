import { personal } from '@/lib/data';

interface HeroImageProps {
  alt: string;
}

export function HeroImage({ alt }: HeroImageProps) {
  return (
    <img
      src={personal.heroImage}
      srcSet={`${personal.heroImage} 1x, ${personal.heroImageRetina} 2x`}
      alt={alt}
      width={960}
      height={1200}
      decoding="async"
      fetchPriority="high"
      className="hero-image absolute inset-0 z-0 h-full w-full object-cover object-top"
    />
  );
}
