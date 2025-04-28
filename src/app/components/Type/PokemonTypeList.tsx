import { pokemonTypeNameID } from "@/data/pokemonTypeNameID";
import { typeToDisplay } from "../util/display";
import TypeIcon from "../ui/TypeIcon";

const PokemonTypeList = () => {

  return (
    <div className="grid grid-cols-4 sm:grid-cols-9 md:gap-6 gap-4">
      {pokemonTypeNameID.map((type) => (
        <div key={type.id} className="flex flex-col items-center gap-1">
          <TypeIcon 
            type={type.name}
            size={42}
            className="w-8 h-8 sm:w-12 sm:h-12"
          />
          <p className="text-gray-500 dark:text-gray-200">{typeToDisplay(type.name)}</p>
        </div>      
      ))}
    </div>
  );
};
export default PokemonTypeList;