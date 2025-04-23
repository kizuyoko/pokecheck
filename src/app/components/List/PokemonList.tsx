import PokemonListCard from "./PokemonListCard";
import type { PokemonSimpleData } from "@/types/pokemon";
import SkeltonPokemonListCard from "../skelton/SkeltonPokemonListCard";

interface PokemonListProps {
  list: PokemonSimpleData[];
}

const PokemonList = ({ list }: PokemonListProps) => {
  const isLoading = false;
  return (
    <>
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
    </>
  );
};

export default PokemonList;