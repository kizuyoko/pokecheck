import { notFound } from "next/navigation";
import pokemonList from "../../../data/pokemonList";
import PokemonProfileCard from "@/app/components/Pokemon/PokemonProfileCard";
import SkeltonPokemonProfileCard from "@/app/components/skelton/SkeltonPokemonProfileCard";

interface PageProps {
  params: Promise<{ name: string }>;
}

export async function generateStaticParams() {
  return pokemonList.map((p) => ({ name: p.name.toLowerCase() }));
}

const PokemonPage = async ({ params }: PageProps) => {
  const { name } = await params;
  const isLoading = false; // Simulate loading state

  // Find the Pokémon by name from the pokemonList
  const pokemon = pokemonList.find(
    (p) => p.name.toLowerCase() === name.toLowerCase()
  );

  if (!pokemon) {
    notFound(); // Show a 404 page if Pokémon is not found
  }

  return (
    <>
      {isLoading ? (
        <SkeltonPokemonProfileCard />
      ) : (
        <PokemonProfileCard pokemon={pokemon} />
      )}
    </>
  );
}

export default PokemonPage;

import { Metadata } from "next";
export async function generateMetadata({ params }: { params: { name: string } }): Promise<Metadata> {
  const name = decodeURIComponent(params.name)
    .toLowerCase()
    .replace(/^\w/, (c) => c.toUpperCase());

  return {
    title: `Pokémon ${name}`,
    description: `Pokémon ${name} information`,
  };
}