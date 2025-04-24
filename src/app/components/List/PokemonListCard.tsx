import Card from "../ui/Card";
import Image from "next/image";
import Link from "next/link";
import type { PokemonSimpleData } from "../../../types/pokemon";
import { diplayId, displayImageUrl } from "../util/display";
interface PokemonCardProps {
  pokemon: PokemonSimpleData,
  isPriority?: boolean;
}

export default function PokemonListCard({ pokemon, isPriority }: PokemonCardProps) {
  const { name, id} = pokemon;
  const idToDisplay = diplayId(id);
  const lowerCaseName = name.toLowerCase();
  const imageURL = displayImageUrl(id);
  const capitalizedName = name.charAt(0).toUpperCase() + name.slice(1);
 
  return (
    <Card href="/pokemon" className="w-full h-full transform transition-transform duration-300 hover:scale-105 hover:shadow-lg">
      <Link href={`/pokemon/${lowerCaseName}`} className="w-full">
        <figure className="flex justify-center w-full">
          <Image
            src={imageURL}
            alt={name}
            width={120}
            height={120}
            priority={isPriority}
          />
        </figure>
        <figcaption>
          <h3>{capitalizedName}</h3>
          <p className="text-gray-500 dark:text-gray-200">#{idToDisplay}</p>
        </figcaption>  
      </Link>
    </Card>
  );
}