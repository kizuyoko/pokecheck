import Image from 'next/image';

const PokemonTypeImageSection = ({ type }: { type: string }) => {
  return (
    <figure>
      <Image
        src={`/type_icons/${type}.svg`}
        alt={type}
        width={200}
        height={200}
        priority={true}
        className={`p-4${type === "dark" ? " dark:filter dark:invert" : ""}`}
      />
      <figcaption className="sr-only">{type}</figcaption>
    </figure>
  );
};

export default PokemonTypeImageSection;