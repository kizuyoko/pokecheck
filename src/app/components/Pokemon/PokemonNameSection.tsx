import { diplayId } from "../util/display";
type Props = {
  id: number;
  name: string;
};

const PokemonNameSection = ({ name, id }: Props) => {
  const idToDisplay = diplayId(id);
  const capitalizedName = name.charAt(0).toUpperCase() + name.slice(1);

  return (
    <>
      <h2 className="sm:pt-6">{capitalizedName}</h2>
      <p className="text-gray-500">#{idToDisplay}</p>
    </>
  );
};

export default PokemonNameSection;