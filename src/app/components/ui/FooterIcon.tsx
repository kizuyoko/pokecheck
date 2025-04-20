import Image from "next/image";

interface FooterIconProps {
  href: string;
  src: string;
  alt: string;
}

const FooterIcon = ({ href, src, alt }: FooterIconProps) => {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer">
      <Image 
        src={src} 
        alt={alt} 
        width={24} 
        height={24} 
        className="dark:filter dark:invert"
      />
    </a>
  );
}

export default FooterIcon;