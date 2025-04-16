import pokemonList from "@/data/pokemonList";
import PokemonList from "@/app/components/List/PokemonList";
import Title from "@/app/components/ui/Title";

interface PageProps {
  params: Promise<{ query: string }>;
}

export default async function SearchResultPage({ params }: PageProps) {
  const { query } = await params;

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
