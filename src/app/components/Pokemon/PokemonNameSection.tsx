import { diplayId } from "../util/display";
type Props = {
  id: number;
  name: string;
};

const PokemonNameSection = ({ name, id }: Props) => {
  const idToDisplay = diplayId(id);

  return (
    <>
      <h2 className="sm:pt-6">{name}</h2>
      <p className="text-gray-500">#{idToDisplay}</p>
    </>
  );
};

export default PokemonNameSection;