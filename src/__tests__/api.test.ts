import { fetchPokemonByName } from "@/lib/api";

const mockPokemonResponse = {
  id: 1,
  name: "bulbasaur",
  types: [ 
    { type: { name: "grass" } },
    { type: { name: "poison" } }
  ],
  abilities: [
    { ability: { name: "overgrow" } },
    { ability: { name: "chlorophyll" } }
  ],
  height: 7,
  weight: 69,
  stats: [
    { stat: { name: "speed" }, base_stat: 45 },
    { stat: { name: "special-defense" }, base_stat: 65 },
    { stat: { name: "special-attack" }, base_stat: 65 },
    { stat: { name: "defense" }, base_stat: 49 },
    { stat: { name: "attack" }, base_stat: 49 },
    { stat: { name: "hp" }, base_stat: 45 }
  ],
  species: {
    url: "https://pokeapi.co/api/v2/pokemon-species/1",
  }
};
const mockSpeciesResponse = {
  gender_rate: 4,
  genera: [
    { genus: 'Seed Pokémon', language: { name: 'en' } }
  ],
}  

describe("fetchPokemonByName", () => {
  beforeEach(() => {
    global.fetch = jest.fn((url: string) => {
      if (url === "https://pokeapi.co/api/v2/pokemon/bulbasaur") {
        return Promise.resolve({
          ok: true,
          json: () => Promise.resolve(mockPokemonResponse),
        });
      } else if (url === "https://pokeapi.co/api/v2/pokemon-species/1") {
        return Promise.resolve({
          ok: true,
          json: () => Promise.resolve(mockSpeciesResponse),
        });
      }
      return Promise.reject(new Error("Unknown URL"));
    }) as jest.Mock;
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it("fetches Pokémon data by name", async () => {
    const data = await fetchPokemonByName("bulbasaur");
    expect(data).toEqual({
      id: 1,
      name: "bulbasaur",
      types: ["grass", "poison"],
      abilities: ["overgrow", "chlorophyll"],
      height: 7,
      weight: 69,
      stats: [
        { stat: "speed", value: 45 },
        { stat: "special-defense", value: 65 },
        { stat: "special-attack", value: 65 },
        { stat: "defense", value: 49 },
        { stat: "attack", value: 49 },
        { stat: "hp", value: 45 }
      ],
      gender_rate: 4,
      genera: ["Seed Pokémon"],
    });

    expect(global.fetch).toHaveBeenCalledTimes(2);
    expect(global.fetch).toHaveBeenCalledWith("https://pokeapi.co/api/v2/pokemon/bulbasaur");
    expect(global.fetch).toHaveBeenCalledWith("https://pokeapi.co/api/v2/pokemon-species/1");
  });
});
  
    
it("throws an error when the Pokémon is not found", async () => {
  (global.fetch as jest.Mock).mockImplementationOnce(() =>
    Promise.resolve({ ok: false })
  );

  await expect(fetchPokemonByName("unknown")).rejects.toThrow(
    "Failed Pokèmon unknown fetching."
  );
});

  
