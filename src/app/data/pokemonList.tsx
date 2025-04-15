import type { PokemonDataTS } from "../types/pokemonDataTSTypes";

const pokemonList = [
  {
    id: 1,
    name: "Bulbasaur",
    types: ["grass", "poison"],
    abilities: ["overgrow", "chlorophyll"],
    height: 7,
    weight: 69,
    stats: [
      { stat: "hp", value: 45 },
      { stat: "attack", value: 49 },
      { stat: "defense", value: 49 },
      { stat: "special-attack", value: 65 },
      { stat: "special-defense", value: 65 },
      { stat: "speed", value: 45 },
    ],
    gender_rate: 1,
    genera: ["grass", "poison"],
  },
  {
    id: 2,
    name: "Ivysaur",
    types: ["grass", "poison"],
    abilities: ["overgrow", "chlorophyll"],
    height: 10,
    weight: 130,
    stats: [
      { stat: "hp", value: 60 },
      { stat: "attack", value: 62 },
      { stat: "defense", value: 63 },
      { stat: "special-attack", value: 80 },
      { stat: "special-defense", value: 80 },
      { stat: "speed", value: 60 },
    ],
    gender_rate: 1,
    genera: ["grass", "poison"],
  },  
  {
    id: 3,
    name: "Venusaur",
    types: ["grass", "poison"],
    abilities: ["overgrow", "chlorophyll"],
    height: 20,
    weight: 1000,
    stats: [
      { stat: "hp", value: 80 },
      { stat: "attack", value: 82 },
      { stat: "defense", value: 83 },
      { stat: "special-attack", value: 100 },
      { stat: "special-defense", value: 100 },
      { stat: "speed", value: 80 },
    ],
    gender_rate: 1,
    genera: ["grass", "poison"],
  },
  {
    id: 4,
    name: "Charmander",
    types: ["fire"],
    abilities: ["blaze", "solar-power"],
    height: 6,
    weight: 85,
    stats: [
      { stat: "hp", value: 39 },
      { stat: "attack", value: 52 },
      { stat: "defense", value: 43 },
      { stat: "special-attack", value: 60 },
      { stat: "special-defense", value: 50 },
      { stat: "speed", value: 65 },
    ],
    gender_rate: 1,
    genera: ["fire"],
  },
  // Add more Pokémon data here
  {
    id: 5,  
    name: "Charmeleon",
    types: ["fire"],
    abilities: ["blaze", "solar-power"],
    height: 11,
    weight: 190,
    stats: [              
      { stat: "hp", value: 58 },
      { stat: "attack", value: 64 },
      { stat: "defense", value: 58 },
      { stat: "special-attack", value: 80 },
      { stat: "special-defense", value: 65 },
      { stat: "speed", value: 80 },
    ],
    gender_rate: 1,
    genera: ["fire"],
  },
  { 
    id: 6,
    name: "Charizard",
    types: ["fire", "flying"],
    abilities: ["blaze", "solar-power"],
    height: 17,
    weight: 905,
    stats: [
      { stat: "hp", value: 78 },
      { stat: "attack", value: 84 },
      { stat: "defense", value: 78 },
      { stat: "special-attack", value: 109 },
      { stat: "special-defense", value: 85 },
      { stat: "speed", value: 100 },
    ],
    gender_rate: 1,
    genera: ["fire", "flying"],
  },
  {
    id: 7,
    name: "Squirtle",
    types: ["water"],
    abilities: ["torrent", "rain-dish"],
    height: 5,
    weight: 90,
    stats: [
      { stat: "hp", value: 44 },
      { stat: "attack", value: 48 },
      { stat: "defense", value: 65 },
      { stat: "special-attack", value: 50 },
      { stat: "special-defense", value: 64 },
      { stat: "speed", value: 43 },
    ],
    gender_rate: 1,
    genera: ["water"],
  },
  {
    id: 8,
    name: "Wartortle",
    types: ["water"],
    abilities: ["torrent", "rain-dish"],
    height: 10,
    weight: 225,
    stats: [
      { stat: "hp", value: 59 },
      { stat: "attack", value: 63 },
      { stat: "defense", value: 80 },
      { stat: "special-attack", value: 65 },
      { stat: "special-defense", value: 80 },
      { stat: "speed", value: 58 },
    ],
    gender_rate: 1,
    genera: ["water"],
  },
  {
    id: 9,
    name: "Blastoise",
    types: ["water"],
    abilities: ["torrent", "rain-dish"],
    height: 16,
    weight: 855,
    stats: [
      { stat: "hp", value: 79 },
      { stat: "attack", value: 83 },
      { stat: "defense", value: 100 },
      { stat: "special-attack", value: 85 },
      { stat: "special-defense", value: 105 },
      { stat: "speed", value: 78 },
    ],
    gender_rate: 1,
    genera: ["water"],
  },

] as PokemonDataTS[];


export default pokemonList;