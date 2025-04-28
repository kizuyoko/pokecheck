import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import type { PokemonType } from '@/types/pokemon';
import { pokemonTypeExampleList } from '@/data/pokemonTypeExample';
import PokemonTypeProfileCard from '@/app/components/Type/PokemonTypeProfileCard';

interface PageProps {
  params: Promise<{ type: PokemonType }>;
}
// This interface is a promise that resolves to an object with a type property of type PokemonType, see src/app/pokemon/[name]/page.tsx for more details.

export async function generateStaticParams() {
  return pokemonTypeExampleList.map((p) => ({ type: p.name.toLowerCase() }));
};

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { type: rawType } = await params;
  const type = decodeURIComponent(rawType)
    .toLowerCase()
    .replace(/^\w/, (c) => c.toUpperCase());

  return {
    title: `Pokémon Type ${type}`,
    description: `Pokémon type ${type} information`,
  };
}


const TypePage = async({ params }: PageProps) => {
  const { type } = await params;

  if (!type) {
    notFound();
  }

  const typeDetail = pokemonTypeExampleList.find((p) => p.name.toLowerCase() === type.toLowerCase());

  if (!typeDetail) {
    notFound();
  }

  return (
    <PokemonTypeProfileCard type={typeDetail} />
  );
};

export default TypePage;