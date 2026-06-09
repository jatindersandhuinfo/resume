import Image from 'next/image';
import { personal } from '@/lib/data';

interface HeroImageProps {
  alt: string;
}

export function HeroImage({ alt }: HeroImageProps) {
  return (
    <Image
      src={personal.heroImage}
      alt={alt}
      fill
      priority
      loading="eager"
      quality={100}
      sizes="(max-width: 640px) calc(100vw - 40px), (max-width: 1280px) calc(100vw - 80px), 1152px"
      className="hero-image z-0 object-cover object-top"
    />
  );
}
