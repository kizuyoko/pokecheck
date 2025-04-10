import Card from "./ui/Card";
import Image from "next/image";
import Link from "next/link";
import { PokemonDataTS } from "../types/pokemonDataTSTypes";
interface PokemonCardProps {
  pokemon: PokemonDataTS,
  className?: string;
}

export default function PokemonCard({ pokemon }: PokemonCardProps) {
  const { name, id, imageURL} = pokemon;
  const displayID = id.toString().padStart(4, "0"); // Pad the ID with leading zeros
  // Convert name to lowercase
  const lowerCaseName = name.toLowerCase();
 
  return (
    <Card href="/pokemon" className="w-full sm:w-48 lg:w-56">
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
        <p className="text-gray-500">#{displayID}</p>
      </Link>
    </Card>
  );
}