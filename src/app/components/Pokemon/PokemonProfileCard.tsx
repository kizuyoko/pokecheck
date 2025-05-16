import Card from  "../ui/Card";
import type { Pokemon } from "../../../types/pokemon";
import PokemonImageSection from "./PokemonImageSection";
import PokemonNameSection from "./PokemonNameSection";
import PokemonBasicInfoSection from "./PokemonBasicInfoSection";
import PokemonStatsSection from "./PokemonStatsSection";
import FavoriteButton from "../ui/FavoriteButton";

type Props = {
  pokemon: Pokemon;
};

const PokemonProfileCard = ({ pokemon }: Props) => {
  return (
    <Card className="flex flex-col md:flex-row md:items-start gap-x-12 relative">
      <div className="items-center flex justify-center">
        <PokemonImageSection
          id={pokemon.id} 
          name={pokemon.name}
        />
      </div>
      <div className="flex flex-col">
        <PokemonNameSection 
          name={pokemon.name}
          id={pokemon.id}
        />
        <div className="pokemon-details">
          <PokemonBasicInfoSection 
            height={pokemon.height}
            weight={pokemon.weight}
            types={pokemon.types}
            gender_rate={pokemon.gender_rate}
            genera={pokemon.genera}
          />
          <PokemonStatsSection 
            abilities={pokemon.abilities}
            stats={pokemon.stats}
          />
        </div> 
      </div>
      <FavoriteButton 
        name={pokemon.name} 
        classsNameButton="absolute right-4 top-4"
        size={28}
      />
    </Card>
  );
};

export default PokemonProfileCard;