import PokemonSearchResultClient from "./PokemonSearchResultClient";

// This interface is a promise that resolves to an object with a name property of type string. But actually, it is not nessesary to use a promise here, because the params are already a promise in the function signature. If you get error after update the Vercel version, you can use the following code instead (Some async/await functions below are not necessary neither, don't forget to fix it in pokemon/page.tsx as well):

/* 
interface PageProps {
  params: { query: string }; 
}
*/ 
interface PageProps {
  params: Promise<{ query: string }>;
}

export default async function SearchResultPage({ params }: PageProps) {
  const { query } = await params; //await params is used because of temporary promise in the function signature. If you use the above code, you can just use params.name directly.

  return (
    <PokemonSearchResultClient query={query} />
  );
}

import { Metadata } from "next";

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const {query: rawQuery } = await params;
  //await params is used because of temporary promise in the function signature. If you use the above code, you can just use params.name directly.
  const query = decodeURIComponent(rawQuery)

  return {
    title: `Pokémon ${query}`,
    description: `Pokémon ${query} information`,
  };
}

