'use client';

import  Logo from "./components/ui/Logo";
import Title from "./components/ui/Title";
import SearchBar from "./components/SearchBar";
import PokemonListHome from "./components/List/PokemonListHome";
import { getRandomPokemons } from "./components/util/display";
import SkeltonSearchBar from "./components/skelton/SkeltonSearchBar";
import PokemonTypeList from "./components/Type/PokemonTypeList";
import { usePokemons } from "@/lib/hooks/usePokemons";

export default function Home() {
  const { data: pokemons = [], isLoading } = usePokemons();
  const randomPokemonList = getRandomPokemons(4, pokemons);

  return (
    <section className="py-8 flex flex-col items-center gap-6 text-center">
      <Logo className="sm:pt-8 sm:text-8xl" />
      {isLoading ? (
        <SkeltonSearchBar 
          classNameContainer="sm:w-lg sm:mt-4 sm:mb-8"
        />
      ) : (
        <SearchBar 
          classNameContainer="sm:w-lg sm:mt-4"
          classNameText="sm:text-2xl"
        />
      )}
      <Title className="sm:mt-8">
        Featured Pokémon
      </Title>
      <PokemonListHome list={randomPokemonList} />
      <Title className="sm:mt-8">
        Pokémon Types
      </Title>
      <PokemonTypeList />
    </section>
  );
}
