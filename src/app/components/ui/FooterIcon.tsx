import Image from "next/image";

interface FooterIconProps {
  href: string;
  src: string;
  alt: string;
}

export default function FooterIcon({ href, src, alt }: FooterIconProps) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer">
      <Image src={src} alt={alt} width={24} height={24} />
    </a>
  );
}