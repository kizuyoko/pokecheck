const PokemonTypeNameSection = ({ type }: { type: string }) => {
  return (
    <h2 className="sm:pt-6 capitalize">
      {type.charAt(0).toUpperCase() + type.slice(1)}
    </h2>
  );
};

export default PokemonTypeNameSection;