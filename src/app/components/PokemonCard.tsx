import Card from "./ui/Card";
import Image from "next/image";
import Link from "next/link";
import { PokemonDataTS } from "../types/pokemonDataTSTypes";
import { diplayId } from "./util/display";
interface PokemonCardProps {
  pokemon: PokemonDataTS,
  className?: string;
}

export default function PokemonCard({ pokemon }: PokemonCardProps) {
  const { name, id, imageURL} = pokemon;
  const idToDisplay = diplayId(id);
  const lowerCaseName = name.toLowerCase();
 
  return (
    <Card href="/pokemon" className="w-full sm:w-48 lg:w-full">
      <Link href={`/pokemon/${lowerCaseName}`} className="w-full">
        <figure className="flex justify-center w-full">
          <Image
            src={imageURL}
            alt={name}
            width={96}
            height={96}
          />
        </figure>
        <h3>{name}</h3>
        <p className="text-gray-500">#{idToDisplay}</p>
      </Link>
    </Card>
  );
}