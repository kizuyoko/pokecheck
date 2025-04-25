import Image from "next/image";
import type { PokemonType } from "@/types/pokemon";

type Props = {
  type: PokemonType; 
  size?: number; 
  className?: string;
};  

const TypeIcon = ({ type, size=32, className }: Props) => {
  return (
    <Image 
      src={`/type_icons/${type}.svg`}
      alt={type}
      width={size}
      height={size}
      loading="lazy"
      className={className}
    />
  );
};

export default TypeIcon;