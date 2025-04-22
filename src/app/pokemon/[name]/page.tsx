import { notFound } from 'next/navigation';
import pokemonList from "@/data/pokemonList";
import PokemonProfileClient from "./PokemonProfileClient";
import { Metadata } from "next";

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

const PokemonPage = async ({ params }: PageProps) => {
  const { name } = await params;
// await params is used because of temporary promise in the function signature. If you use the above code, you can just use params.name directly.
  // const { name } = params; // If you use the above code, you can just use params.name directly.
  if (!name) notFound();

  return (
    <PokemonProfileClient name={name} />
  );
};

export default PokemonPage;
