import PokemonListCard from "./PokemonListCard";
import { PokemonDataTS } from "../../types/pokemonDataTSTypes";

interface PokemonListProps {
  list: PokemonDataTS[];
}

const PokemonList = ({ list }: PokemonListProps) => {
  return (
    <>
      {
        list.map((pokemon: PokemonDataTS) => (
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