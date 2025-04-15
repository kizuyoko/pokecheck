import Card from "../ui/Card";
import Image from "next/image";
import Link from "next/link";
import { PokemonDataTS } from "../../types/pokemonDataTSTypes";
import { diplayId, displayImageUrl } from "../util/display";
interface PokemonCardProps {
  pokemon: PokemonDataTS,
  className?: string;
}

export default function PokemonListCard({ pokemon }: PokemonCardProps) {
  const { name, id} = pokemon;
  const idToDisplay = diplayId(id);
  const lowerCaseName = name.toLowerCase();
  const imageURL = displayImageUrl(id);
 
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
        <h3>{name}</h3>
        <p className="text-gray-500">#{idToDisplay}</p>
      </Link>
    </Card>
  );
}