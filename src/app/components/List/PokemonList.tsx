import PokemonListCard from "./PokemonListCard";
import type { Pokemon } from "../../../types/pokemon";

interface PokemonListProps {
  list: Pokemon[];
}

const PokemonList = ({ list }: PokemonListProps) => {
  return (
    <>
      {
        list.map((pokemon: Pokemon) => (
          <PokemonListCard 
            pokemon={pokemon}
            key={pokemon.id}
          />  
        ))
      }
    </>
  );
};

export default PokemonList;