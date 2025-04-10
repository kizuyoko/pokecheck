import PokemonCard from "./PokemonCard";
import { PokemonDataTS } from "../types/pokemonDataTSTypes";

interface PokemonListProps {
  list: PokemonDataTS[];
}

const PokemonList = ({ list }: PokemonListProps) => {
  return (
    <>
      {
        list.map((pokemon: PokemonDataTS) => (
          <PokemonCard 
            pokemon={pokemon}
            key={pokemon.id}
          />  
        ))
      }
    </>
  );
};

export default PokemonList;