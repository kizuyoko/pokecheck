'use client';
import { pokemonNameID } from "@/data/pokemonNameID";
import PokemonList from "@/app/components/List/PokemonList";
import Title from "@/app/components/ui/Title";
import NotFound from "@/app/components/NotFound";

export default function PokemonSearchResultClient({ query }: { query: string }) {
  const results = pokemonNameID.filter((p) =>
    p.name.toLowerCase().includes(query.toLowerCase())
  );    
  return (
    <section>
      <Title className="mt-4 mb-2">Search results for: {query}</Title>
      {results.length === 0 ? (
        <NotFound type="search" />
      ) : (
        <PokemonList list={results} />
      )}
    </section>
  );
}  