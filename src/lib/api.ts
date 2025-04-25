import { POKEMON_API_URL } from './constans';

export async function fetchPokemonByName(name: string) {
  const res = await fetch(`${POKEMON_API_URL}/${name}`);
  if (!res.ok) {
    throw new Error(`Failed Pokèmon ${name} fetching.`);
  }
  const data = await res.json();

  const speciesRes = await fetch(data.species.url);
  const speciesData = await speciesRes.json();

  return {
    id: data.id,
    name: data.name,
    types: data.types.map((t: { type: { name: string } }) => t.type.name), // ["grass", "poison"]
    abilities: data.abilities.map((a: {ability:{ name:string }}) => a.ability.name),
    height: data.height,
    weight: data.weight,
    stats: data.stats.map((s: { stat: { name: string }; base_stat: number }) => ({
      stat: s.stat.name,
      value: s.base_stat,
    })),
    gender_rate: speciesData.gender_rate,
    genera: speciesData.genera
      .filter((g: {genus: string, language: {name: string}}) => g.language.name === 'en') // filter by language
      .map((g: {genus: string}) => g.genus), // ["Seed Pokémon"]
  };
}