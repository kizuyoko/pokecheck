import { notFound } from "next/navigation";
import pokemonList from "../../../data/pokemonList";
import PokemonProfileCard from "@/app/components/Pokemon/PokemonProfileCard";
import SkeltonPokemonProfileCard from "@/app/components/skelton/SkeltonPokemonProfileCard";

interface PageProps {
  params: Promise<{ name: string }>;
}

// This interface is a promise that resolves to an object with a name property of type string. But actually, it is not nessesary to use a promise here, because the params are already a promise in the function signature. If you get error after update the Vercel version, you can use the following code instead (Some async/await functions below are not necessary neither, don't forget to fix it in search/page.tsx as well):

/* 
interface PageProps {
  params: { name: string }; 
}
*/  

export async function generateStaticParams() {
  return pokemonList.map((p) => ({ name: p.name.toLowerCase() }));
}

const PokemonPage = async ({ params }: PageProps) => {
  const { name } = await params; //await params is used because of temporary promise in the function signature. If you use the above code, you can just use params.name directly.
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

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { name: rawName } = await params;
  //await params is used because of temporary promise in the function signature. If you use the above code, you can just use params.name directly.
  const name = decodeURIComponent(rawName)
    .toLowerCase()
    .replace(/^\w/, (c) => c.toUpperCase());

  return {
    title: `Pokémon ${name}`,
    description: `Pokémon ${name} information`,
  };
}