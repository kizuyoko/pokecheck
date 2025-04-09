import  Logo from "./components/ui/Logo";
import Title from "./components/ui/Title";
import PokemonCard from "./components/PokemonCard";
import SearchBar from "./components/SearchBar";

export default function Home() {
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
      <div className="grid grid-cols-2 place-items-center sm:grid-cols-3 lg:grid-cols-4 gap-2 sm:gap-4">
        <PokemonCard pokemon={{ name: "Bulbasaur", id: "0001" }} />
        <PokemonCard pokemon={{ name: "Bulbasaur", id: "0001" }} />
        <PokemonCard pokemon={{ name: "Bulbasaur", id: "0001" }} />
        <PokemonCard pokemon={{ name: "Bulbasaur", id: "0001" }} />
      </div>
    </section>
  );
}
