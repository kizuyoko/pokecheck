import Card from "../ui/Card";
import Image from "next/image";
import Link from "next/link";
import type { Pokemon } from "../../../types/pokemon";
import { diplayId, displayImageUrl } from "../util/display";
interface PokemonCardProps {
  pokemon: Pokemon,
  className?: string;
}

export default function PokemonListCard({ pokemon }: PokemonCardProps) {
  const { name, id} = pokemon;
  const idToDisplay = diplayId(id);
  const lowerCaseName = name.toLowerCase();
  const imageURL = displayImageUrl(id);
  const capitalizedName = name.charAt(0).toUpperCase() + name.slice(1);
 
  return (
    <Card href="/pokemon" className="w-full">
      <Link href={`/pokemon/${lowerCaseName}`} className="w-full">
        <figure className="flex justify-center w-full">
          <Image
            src={imageURL}
            alt={name}
            width={120}
            height={120}
          />
        </figure>
        <figcaption>
          <h3>{capitalizedName}</h3>
          <p className="text-gray-500">#{idToDisplay}</p>
        </figcaption>  
      </Link>
    </Card>
  );
}