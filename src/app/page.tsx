import  Logo from "./components/ui/Logo";
import Title from "./components/ui/Title";
import SearchBar from "./components/SearchBar";
import PokemonList from "./components/List/PokemonList";
import pokemonList from "../data/pokemonList";

export default function Home() {
  const randomPokemonList = pokemonList.sort(() => 0.5 - Math.random()).slice(0, 4);

  return (
    <section className="py-8 flex flex-col items-center gap-6 text-center">
      <Logo className="sm:pt-20 sm:text-8xl" />
      <SearchBar 
        classNameContainer="sm:w-lg sm:mt-4 sm:mb-8"
        classNameText="sm:text-2xl"
        classNameIcon="sm:h-8 sm:w-8"
      />
      <Title>
        Featured Pokémon
      </Title>
      <div className="w-full grid grid-cols-2 place-items-center sm:grid-cols-3 lg:grid-cols-4 gap-2 sm:gap-4">
        <PokemonList list={randomPokemonList} />
      </div>
    </section>
  );
}
