import { displayId } from "../util/display";
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
      <p className="text-gray-500 dark:text-gray-200">#{idToDisplay}</p>
    </>
  );
};

export default PokemonNameSection;