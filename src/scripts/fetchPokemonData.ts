import axios from "axios";

const fetchPokemon = async (name: string) => {
  try {
    const [pokemonRes, speciesRes] = await Promise.all([
      axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`),
      axios.get(`https://pokeapi.co/api/v2/pokemon-species/${name}`),
    ]);

    const pokemon = pokemonRes.data;
    const species = speciesRes.data;

    const simplified = {
      id: pokemon.id,
      name: pokemon.name,
      types: pokemon.types.map((typeObj: { type: { name: string } }) => typeObj.type.name),
      abilities: pokemon.abilities.map((ab: { ability: { name: string } }) => ab.ability.name),
      height: pokemon.height,
      weight: pokemon.weight,
      stats: pokemon.stats.map((s: { stat: { name: string }, base_stat: number }) => ({
        stat: s.stat.name,
        value: s.base_stat,
      })),
      gender_rate: species.gender_rate,
      genera: species.genera
        .filter((g: { language: { name: string } }) => g.language.name === "en")
        .map((g: { genus: string }) => g.genus),
    };

    console.log(JSON.stringify(simplified, null, 2));
  } catch (err) {
    console.error("Fale to fetch data! ", err);
  }
};

//fetchPokemon("venusaur");
const pokemonNames = [
  "bulbasaur",
  "ivysaur",
  "venusaur",
  "charmander",
  "charmeleon",
  "charizard",
  "squirtle",
  "wartortle",
  "blastoise",
  "caterpie",
  "metapod",
  "butterfree",
  "weedle",
  "kakuna",
  "beedrill",
];
const fetchAllPokemon = async () => {
  for (const name of pokemonNames) {
    await fetchPokemon(name);
  }
}
fetchAllPokemon();
