import Image from "next/image";
import type { PokemonType } from "@/types/pokemon";
import Link from "next/link";

type Props = {
  type: PokemonType; 
  size?: number; 
  className?: string;
};  

const TypeIcon = ({ type, size=32, className }: Props) => {
  return (
    <Link href={`/type/${type}`} className="transform transition-transform duration-300 hover:scale-130">
      <Image 
        src={`/type_icons/${type}.svg`}
        alt={type}
        width={size}
        height={size}
        loading="lazy"
        className={className}
      />
    </Link>
  );
};

export default TypeIcon;