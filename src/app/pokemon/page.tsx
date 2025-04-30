import PokemonList from "../components/List/PokemonList";
import { pokemonNameID } from "@/data/pokemonNameID";

const PokemonIndexPage = () => {
  return (
    <>
      <h2>Pokémon</h2>
      <PokemonList list={pokemonNameID} />
    </>
  );
}

export default PokemonIndexPage;