import pokemonList from "@/data/pokemonList";
import PokemonList from "@/app/components/List/PokemonList";
import Title from "@/app/components/ui/Title";

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

  const results = pokemonList.filter((p) =>
    p.name.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <section>
      <Title className="mt-4 mb-2">Search results for: {query}</Title>
      {results.length === 0 ? (
        <p>No Pokémon found.</p>
      ) : (
        <div className="grid grid-cols-2 place-items-center sm:grid-cols-3 lg:grid-cols-4 gap-2 sm:gap-4">
        <PokemonList list={results} />
      </div>
      )}
    </section>
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

