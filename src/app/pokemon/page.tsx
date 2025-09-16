'use client';
import PokemonList from "../components/List/PokemonList";
import { usePokemons } from "@/lib/hooks/usePokemons";

const PokemonIndexPage = () => {
  const { data: pokemons = [] } = usePokemons();
  const pokemonNameID = pokemons; 
  return (
    <>
      <h2>Pokémon</h2>
      <PokemonList list={pokemonNameID} />
    </>
  );
}

export default PokemonIndexPage;