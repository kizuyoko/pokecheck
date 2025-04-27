import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import type { PokemonType } from '@/types/pokemon';
import { pokemonTypeExampleList } from '@/data/pokemonTypeExanple';

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
    title: `Pokémon ${type}`,
    description: `Pokémon ${type} information`,
  };
}


const TypePage = async({ params }: PageProps) => {
  const { type } = await params;

  if (!type) {
    notFound();
  }

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-4xl font-bold">Type Page - {type}</h1>
      <p className="text-lg">This is the type page.</p>
    </div>
  );
};

export default TypePage;