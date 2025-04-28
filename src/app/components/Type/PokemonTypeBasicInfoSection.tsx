import { formatTitle } from "../util/display";

interface Props {
  damage_relations?: {
    double_damage_from?: string[];
    double_damage_to?: string[];
    half_damage_from?: string[];
    half_damage_to?: string[];
    no_damage_from?: string[];
    no_damage_to?: string[];
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
                  ? relations.map((relation) => relation).join(', ')
                  : 'None'}
              </p>
          </div>
        ))}
      </div>
  </div>
  );
}

export default PokemonTypeBasicInfoSection;