import PokemonList from "../components/List/PokemonList";
import { pokemonNameID } from "@/data/pokemonNameID";

const SearchIndexPage = () => {
  return (
    <>
      <h2>Pokémon Search</h2>
      <p className="mb-8">Search for Pokémon by name.</p>
      <PokemonList list={pokemonNameID} />
    </>
  );
}

export default SearchIndexPage;