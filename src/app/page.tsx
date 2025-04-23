import  Logo from "./components/ui/Logo";
import Title from "./components/ui/Title";
import SearchBar from "./components/SearchBar";
import PokemonListHome from "./components/List/PokemonListHome";
import { pokemonNameID100 } from "@/data/pokemonNameID100";
import { getRandomPokemons } from "./components/util/display";
import SkeltonSearchBar from "./components/skelton/SkeltonSearchBar";

export default function Home() {
  const isLoading = false;
  const randomPokemonList = getRandomPokemons(4, pokemonNameID100);

  return (
    <section className="py-8 flex flex-col items-center gap-6 text-center">
      <Logo className="sm:pt-20 sm:text-8xl" />
      {isLoading ? (
        <SkeltonSearchBar 
          classNameContainer="sm:w-lg sm:mt-4 sm:mb-8"
        />
      ) : (
        <SearchBar 
          classNameContainer="sm:w-lg sm:mt-4 sm:mb-8"
          classNameText="sm:text-2xl"
        />
      )}
      <Title>
        Featured Pokémon
      </Title>
      <div className="w-full grid grid-cols-2 place-items-center sm:grid-cols-3 lg:grid-cols-4 gap-2 sm:gap-4">
        <PokemonListHome list={randomPokemonList} />
      </div>
    </section>
  );
}
