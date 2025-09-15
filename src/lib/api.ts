import { POKEMON_API_URL, TYPE_API_URL, OWN_SERVER_API_URL_POKEMON, OWN_SERVER_API_URL_TYPES } from './constans';
import { PokemonTypeData, PokemonSimpleData } from '@/types/pokemon';

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

export async function fetchPokemonTypeByName(type: string) {
  const res = await fetch(`${TYPE_API_URL}/${type}`);
  if (!res.ok) {
    throw new Error(`Failed Pokèmon type ${type} fetching.`);
  }
  const data = await res.json();
  return {
    id: data.id,
    name: data.name,
    damage_relations: {
      double_damage_from: data.damage_relations.double_damage_from.map((d: { name: string }) => d.name),
      double_damage_to: data.damage_relations.double_damage_to.map((d: { name: string }) => d.name),
      half_damage_from: data.damage_relations.half_damage_from.map((d: { name: string }) => d.name),
      half_damage_to: data.damage_relations.half_damage_to.map((d: { name: string }) => d.name),
      no_damage_from: data.damage_relations.no_damage_from.map((d: { name: string }) => d.name),
      no_damage_to: data.damage_relations.no_damage_to.map((d: { name: string }) => d.name),
    },
    pokemon: data.pokemon.map((p: { pokemon: { name: string } }) => p.pokemon.name),
    moves: data.moves.map((m: { name: string }) => m.name),
  };  
}

export async function fetchOwnServerTypes(): Promise<PokemonTypeData[]> {
  const res = await fetch(OWN_SERVER_API_URL_TYPES);
  if (!res.ok) {
    throw new Error(`Failed fetching all Pokémon types.`);
  }
  return res.json();
}

export async function fetchOwnServerPokemons(): Promise<PokemonSimpleData[]> {
  const res = await fetch(OWN_SERVER_API_URL_POKEMON);  
  if (!res.ok) {
    throw new Error(`Failed fetching all Pokémon.`);
  }
  return res.json();
} 