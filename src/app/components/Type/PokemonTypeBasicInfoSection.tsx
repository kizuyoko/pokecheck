import { formatTitle } from "../util/display";

interface PokemonTypeNameID {
  name: string;
  url: string;
};

interface Props {
  damage_relations?: {
    double_damage_from?: PokemonTypeNameID[];
    double_damage_to?: PokemonTypeNameID[];
    half_damage_from?: PokemonTypeNameID[];
    half_damage_to?: PokemonTypeNameID[];
    no_damage_from?: PokemonTypeNameID[];
    no_damage_to?: PokemonTypeNameID[];
  };
}

const PokemonTypeBasicInfoSection = ({ damage_relations }: Props) => {
  return (
    <div className="pokemon-property min-w-[250px] max-w-sm">
      <h3 className="text-2xl mb-2">Damage Relations</h3>
      <div>
        {Object.entries(damage_relations || {}).map(([key, relations]) => (
          <div key={key} className="">
            <h4 className="text-lg, font-semibold">{formatTitle(key)}</h4>
            <p className="pb-2 text-lg sm:text-xl">
                {relations && relations.length > 0
                  ? relations.map((relation) => relation.name).join(', ')
                  : 'None'}
              </p>
          </div>
        ))}
      </div>
  </div>
  );
}

export default PokemonTypeBasicInfoSection;