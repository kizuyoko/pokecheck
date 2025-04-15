import { notFound } from "next/navigation";
import pokemonList from "../../data/pokemonList";
import PokemonProfileCard from "@/app/components/Pokemon/PokemonProfileCard";

interface PageProps {
  params: Promise<{ name: string }>;
}

export async function generateStaticParams() {
  return pokemonList.map((p) => ({ name: p.name.toLowerCase() }));
}

const PokemonPage = async ({ params }: PageProps) => {
  const { name } = await params;

  // Find the Pokémon by name from the pokemonList
  const pokemon = pokemonList.find(
    (p) => p.name.toLowerCase() === name.toLowerCase()
  );

  if (!pokemon) {
    notFound(); // Show a 404 page if Pokémon is not found
  }

  return (
    <PokemonProfileCard pokemon={pokemon} />
  );
}

export default PokemonPage;