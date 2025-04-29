import PokemonListCard from "./PokemonListCard";
import type { PokemonSimpleData } from "@/types/pokemon";
import SkeltonPokemonListCard from "../skelton/SkeltonPokemonListCard";

interface PokemonListProps {
  list: PokemonSimpleData[];
}

const PokemonListHome = ({ list }: PokemonListProps) => {
  const isLoading = false;
  return (
    <div className="w-full grid grid-cols-2 place-items-center sm:grid-cols-3 lg:grid-cols-4 gap-2 sm:gap-4">
      {
        list.map((pokemon: PokemonSimpleData, index: number) => (
          isLoading ? (
            <SkeltonPokemonListCard
              key={pokemon.id}
            />
          ) : (
            <PokemonListCard 
              pokemon={pokemon}
              key={pokemon.id}
              isPriority={index === 0}
            /> 
          )
        ))
      }
    </div>
  );
};

export default PokemonListHome;