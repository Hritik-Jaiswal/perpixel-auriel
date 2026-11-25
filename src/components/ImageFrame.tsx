import Image from "next/image";

export default function ImageFrame({ src, alt, className = "", priority = false }: { src: string; alt: string; className?: string; priority?: boolean }) {
  return <div className={`image-frame ${className}`}><Image src={src} alt={alt} fill sizes="(min-width: 1200px) 1200px, (min-width: 760px) 760px, 100vw" className="cover-image" priority={priority} /></div>;
}
