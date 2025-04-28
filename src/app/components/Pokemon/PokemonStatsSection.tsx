type Props = {
  abilities: string[];
  stats: {
    stat: string;
    value: number;
  }[];
};

const PokemonStatsSection = ({ abilities, stats }: Props) => {
  return (
    <div>
      <div className="pokemon-property">
        <h3>Abilities:</h3>
        <ul className="list-disc list-inside">
          {abilities.map((ability) => (
            <li 
              key={ability}
              className="pl-2 text-lg sm:text-xl"
            >
              {ability}
            </li>
          ))}
        </ul>
      </div>
      <div className="pokemon-property">
        <h3>Stats</h3>
        <ul className="list-disc list-inside">
          {stats.map((stat) => (
            <li 
              key={stat.stat}
              className="pl-2 text-lg sm:text-xl"
            >
              {stat.stat}: {stat.value}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default PokemonStatsSection;