import Image from "next/image";

type Props = {
  type: string; 
};  

const typeIcon = ({ type }: Props) => {
  return (
    <Image 
      src={`/type_icons/${type}.svg`}
      alt={type}
      width={32}
      height={32}
      loading="lazy"
    />
  );
};

export default typeIcon;