import PokemonListCard from "./PokemonListCard";
import type { Pokemon } from "../../../types/pokemon";
import SkeltonPokemonListCard from "../skelton/SkeltonPokemonListCard";

interface PokemonListProps {
  list: Pokemon[];
}

const PokemonList = ({ list }: PokemonListProps) => {
  const isLoading = false;
  return (
    <>
      {
        list.map((pokemon: Pokemon) => (
          isLoading ? (
            <SkeltonPokemonListCard
              key={pokemon.id}
            />
          ) : (
            <PokemonListCard 
              pokemon={pokemon}
              key={pokemon.id}
            /> 
          )
        ))
      }
    </>
  );
};

export default PokemonList;