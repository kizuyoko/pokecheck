import { notFound } from "next/navigation";
import Card from "../../components/ui/Card";
import Image from "next/image";
import pokemonList from "../../data/pokemonList";
import { FC } from "react";

interface PageProps {
  params: {
    name: string;
  };
}

const PokemonPage: FC<PageProps> = ({ params }) => {
  const { name } = params;

  // Find the Pokémon by name from the pokemonList
  const pokemon = pokemonList.find((p) => p.name.toLowerCase() === name.toLowerCase());

  if (!pokemon) {
    notFound(); // Show a 404 page if Pokémon is not found
  }

  return (
    <Card className="flex flex-col items-center">
      <h2>{pokemon.name}</h2>
      <Image
        src={pokemon.imageURL}
        alt={pokemon.name}
        width={96}
        height={96}
      />
      <p className="text-gray-500">#{pokemon.id.toString().padStart(4, "0")}</p>
    </Card>
  );
}

export default PokemonPage;