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
      quality={75}
      sizes="(max-width: 1024px) 100vw, (max-width: 1536px) 100vw, 680px"
      className="hero-image z-0 object-cover object-top"
    />
  );
}
