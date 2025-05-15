import { displayId } from "../util/display";
import FavoriteButton from "../ui/FavoriteButton";

type Props = {
  id: number;
  name: string;
};

const PokemonNameSection = ({ name, id }: Props) => {
  const idToDisplay = displayId(id);
  const capitalizedName = name.charAt(0).toUpperCase() + name.slice(1);

  return (
    <>
      <h2 className="sm:pt-6">{capitalizedName}</h2>
      <div className="flex">
        <FavoriteButton name={name} />
        <p className="text-gray-500 dark:text-gray-200 ml-2">#{idToDisplay}</p>
      </div>
    </>
  );
};

export default PokemonNameSection;