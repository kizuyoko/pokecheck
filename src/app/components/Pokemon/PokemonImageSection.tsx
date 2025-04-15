import Image from "next/image";
import { displayImageUrl } from "../../components/util/display";

type Props = {
  id: number;
  name: string;
};

const PokemonImageSection = ({ id, name }: Props) => {
  const imageURL = displayImageUrl(id);

  return (
    <Image 
      src={imageURL} 
      alt={name} 
      width={343} 
      height={343} 
    />
  );
};

export default PokemonImageSection;
