import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { pokemonTypeExampleList } from '@/data/pokemonTypeExample';
import PokemonTypeProfileClient from './PokemonTypeProfileClient';
interface PageProps {
  params: Promise<{ type: string }>;
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

  return (
    <PokemonTypeProfileClient type={type} />
  );
};

export default TypePage;