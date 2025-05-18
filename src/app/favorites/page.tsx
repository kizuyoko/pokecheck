'use client';

import { useSelector } from "react-redux";
import { RootState } from "@/stores/store";
import Card from "../components/ui/Card";
import Title from "../components/ui/Title";
import PokemonList from "../components/List/PokemonList";
import { pokemonNameID } from "@/data/pokemonNameID";

const FavoritePage = () => {
  const favorites = useSelector((state: RootState) => state.favorites);
  const favoritePokemons = pokemonNameID.filter(pokemon => favorites.includes(pokemon.name));

  if (favoritePokemons.length === 0) {
    return (
      <Card className="p-10 flex flex-col items-center justify-center">
        <Title className="text-center mb-3">You have no favorite Pokémon yet.</Title>
      </Card>
    )
  }

  return (
    <>
      <h2>Your Favorite Pokémons</h2>
      <PokemonList 
        list={favoritePokemons}
      />
    </>
  );
}; 

export default FavoritePage;