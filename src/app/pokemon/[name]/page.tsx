import { notFound } from 'next/navigation';
import pokemonList from "@/data/pokemonList";
import PokemonProfileClient from "./PokemonProfileClient";

export async function generateStaticParams() {
  return pokemonList.map((p) => ({ name: p.name.toLowerCase() }));
}

export async function generateMetadata({ params }: { params: { name: string } }) {
  const name = decodeURIComponent(params.name)
    .toLowerCase()
    .replace(/^\w/, (c) => c.toUpperCase());

  return {
    title: `Pokémon ${name}`,
    description: `Pokémon ${name} information`,
  };
}

const PokemonPage = ({ params }: { params: { name: string } }) => {
  const { name } = params;

  if (!name) notFound();

  return (
    <PokemonProfileClient name={name} />
  );
};

export default PokemonPage;
