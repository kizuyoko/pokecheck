'use client';

import PokemonList from "../components/List/PokemonList";
import { usePokemons } from "@/lib/hooks/usePokemons";

const SearchIndexPage = () => {
  const { data: pokemons = [] } = usePokemons();
  const pokemonNameID = pokemons;

  return (
    <>
      <h2>Pokémon Search</h2>
      <p className="mb-8">Search for Pokémon by name.</p>
      <PokemonList list={pokemonNameID} />
    </>
  );
}

export default SearchIndexPage;