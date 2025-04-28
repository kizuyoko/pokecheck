import type { PokemonTypeDetail } from "@/types/pokemonTypeDetail";
import Card from "../ui/Card";
import PokemonTypeImageSection from "./PokemonTypeImageSection";
import PokemonTypeNameSection from "./PokemonTypeNameSection";
import PokemonTypeBasicInfoSection from "./PokemonTypeBasicInfoSection";
import PokemonTypeMovesSection from "./PokemonTypeMovesSection";
import PokemonTypePokemonSection from "./PokemonTypePokemonSection";



type Props = {
  type: PokemonTypeDetail;
};

const PokemonTypeProfileCard = ({ type }: Props) => {
  return (
    <Card className="flex flex-col md:flex-row md:items-start gap-x-12">
      <div className="items-center flex justify-center">
        <PokemonTypeImageSection type={type.name} />
      </div>
      <div className="flex flex-col">
        <PokemonTypeNameSection type={type.name} />
        <div className="pokemon-details">
          <PokemonTypeBasicInfoSection 
            damage_relations={type.damage_relations}
          />
          <div className="pokemon-property max-w-[380px]">
            <PokemonTypePokemonSection
              pokemon={type.pokemon.map(p => ({ name: p.pokemon.name, url: p.pokemon.url }))}
            />
            <PokemonTypeMovesSection  
              moves={type.moves}
            />
          </div>
        </div>
      </div>
    </Card>
  );
};

export default PokemonTypeProfileCard;