import type { Pokemon } from "../types/pokemon";

const pokemonList = [
  {
    "id": 1,
    "name": "bulbasaur",
    "types": [
      "grass",
      "poison"
    ],
    "abilities": [
      "overgrow",
      "chlorophyll"
    ],
    "height": 7,
    "weight": 69,
    "stats": [
      {
        "stat": "hp",
        "value": 45
      },
      {
        "stat": "attack",
        "value": 49
      },
      {
        "stat": "defense",
        "value": 49
      },
      {
        "stat": "special-attack",
        "value": 65
      },
      {
        "stat": "special-defense",
        "value": 65
      },
      {
        "stat": "speed",
        "value": 45
      }
    ],
    "gender_rate": 1,
    "genera": [
      "Seed Pokémon"
    ]
  },
  {
    "id": 2,
    "name": "ivysaur",
    "types": [        
      "grass",        
      "poison"
    ],
    "abilities": [
      "overgrow",
      "chlorophyll"
    ],
    "height": 10,
    "weight": 130,
    "stats": [
      {
        "stat": "hp",
        "value": 60
      },
      {
        "stat": "attack",
        "value": 62
      },
      {
        "stat": "defense",
        "value": 63
      },
      {
        "stat": "special-attack",
        "value": 80
      },
      {
        "stat": "special-defense",
        "value": 80
      },
      {
        "stat": "speed",
        "value": 60
      }
    ],
    "gender_rate": 1,
    "genera": [
      "Seed Pokémon"
    ]
  },  
  {
    "id": 3,
    "name": "venusaur",
    "types": [
      "grass",
      "poison"
    ],
    "abilities": [
      "overgrow",
      "chlorophyll"
    ],
    "height": 20,
    "weight": 1000,
    "stats": [
      {
        "stat": "hp",
        "value": 80
      },
      {
        "stat": "attack",
        "value": 82
      },
      {
        "stat": "defense",
        "value": 83
      },
      {
        "stat": "special-attack",
        "value": 100
      },
      {
        "stat": "special-defense",
        "value": 100
      },
      {
        "stat": "speed",
        "value": 80
      }
    ],
    "gender_rate": 1,
    "genera": [
      "Seed Pokémon"
    ]
  },
  {
    "id": 4,
    "name": "charmander",
    "types": [
      "fire"
    ],
    "abilities": [
      "blaze",
      "solar-power"
    ],
    "height": 6,
    "weight": 85,
    "stats": [
      {
        "stat": "hp",
        "value": 39
      },
      {
        "stat": "attack",
        "value": 52
      },
      {
        "stat": "defense",
        "value": 43
      },
      {
        "stat": "special-attack",
        "value": 60
      },
      {
        "stat": "special-defense",
        "value": 50
      },
      {
        "stat": "speed",
        "value": 65
      }
    ],
    "gender_rate": 1,
    "genera": [
      "Lizard Pokémon"
    ]
  },
  {
    "id": 5,
    "name": "charmeleon",
    "types": [
      "fire"
    ],
    "abilities": [
      "blaze",
      "solar-power"
    ],
    "height": 11,
    "weight": 190,
    "stats": [
      {
        "stat": "hp",
        "value": 58
      },
      {
        "stat": "attack",
        "value": 64
      },
      {
        "stat": "defense",
        "value": 58
      },
      {
        "stat": "special-attack",
        "value": 80
      },
      {
        "stat": "special-defense",
        "value": 65
      },
      {
        "stat": "speed",
        "value": 80
      }
    ],
    "gender_rate": 1,
    "genera": [
      "Flame Pokémon"
    ]
  },
  {
    "id": 6,
    "name": "charizard",
    "types": [
      "fire",
      "flying"
    ],
    "abilities": [
      "blaze",
      "solar-power"
    ],
    "height": 17,
    "weight": 905,
    "stats": [
      {
        "stat": "hp",
        "value": 78
      },
      {
        "stat": "attack",
        "value": 84
      },
      {
        "stat": "defense",
        "value": 78
      },
      {
        "stat": "special-attack",
        "value": 109
      },
      {
        "stat": "special-defense",
        "value": 85
      },
      {
        "stat": "speed",
        "value": 100
      }
    ],
    "gender_rate": 1,
    "genera": [
      "Flame Pokémon"
    ]
  },
  {
    "id": 7,
    "name": "squirtle",
    "types": [
      "water"
    ],
    "abilities": [
      "torrent",
      "rain-dish"
    ],
    "height": 5,
    "weight": 90,
    "stats": [
      {
        "stat": "hp",
        "value": 44
      },
      {
        "stat": "attack",
        "value": 48
      },
      {
        "stat": "defense",
        "value": 65
      },
      {
        "stat": "special-attack",
        "value": 50
      },
      {
        "stat": "special-defense",
        "value": 64
      },
      {
        "stat": "speed",
        "value": 43
      }
    ],
    "gender_rate": 1,
    "genera": [
      "Tiny Turtle Pokémon"
    ]
  },
  {
    "id": 8,
    "name": "wartortle",
    "types": [
      "water"
    ],
    "abilities": [
      "torrent",
      "rain-dish"
    ],
    "height": 10,
    "weight": 225,
    "stats": [
      {
        "stat": "hp",
        "value": 59
      },
      {
        "stat": "attack",
        "value": 63
      },
      {
        "stat": "defense",
        "value": 80
      },
      {
        "stat": "special-attack",
        "value": 65
      },
      {
        "stat": "special-defense",
        "value": 80
      },
      {
        "stat": "speed",
        "value": 58
      }
    ],
    "gender_rate": 1,
    "genera": [
      "Turtle Pokémon"
    ]
  },
  {
    "id": 9,
    "name": "blastoise",
    "types": [
      "water"
    ],
    "abilities": [
      "torrent",
      "rain-dish"
    ],
    "height": 16,
    "weight": 855,
    "stats": [
      {
        "stat": "hp",
        "value": 79
      },
      {
        "stat": "attack",
        "value": 83
      },
      {
        "stat": "defense",
        "value": 100
      },
      {
        "stat": "special-attack",
        "value": 85
      },
      {
        "stat": "special-defense",
        "value": 105
      },
      {
        "stat": "speed",
        "value": 78
      }
    ],
    "gender_rate": 1,
    "genera": [
      "Shellfish Pokémon"
    ]
  },
  {
    "id": 10,
    "name": "caterpie",
    "types": [
      "bug"
    ],
    "abilities": [
      "shield-dust",
      "run-away"
    ],
    "height": 3,
    "weight": 29,
    "stats": [
      {
        "stat": "hp",
        "value": 45
      },
      {
        "stat": "attack",
        "value": 30
      },
      {
        "stat": "defense",
        "value": 35
      },
      {
        "stat": "special-attack",
        "value": 20
      },
      {
        "stat": "special-defense",
        "value": 20
      },
      {
        "stat": "speed",
        "value": 45
      }
    ],
    "gender_rate": 4,
    "genera": [
      "Worm Pokémon"
    ]
  },
  {
    "id": 11,
    "name": "metapod",
    "types": [
      "bug"
    ],
    "abilities": [
      "shed-skin"
    ],
    "height": 7,
    "weight": 99,
    "stats": [
      {
        "stat": "hp",
        "value": 50
      },
      {
        "stat": "attack",
        "value": 20
      },
      {
        "stat": "defense",
        "value": 55
      },
      {
        "stat": "special-attack",
        "value": 25
      },
      {
        "stat": "special-defense",
        "value": 25
      },
      {
        "stat": "speed",
        "value": 30
      }
    ],
    "gender_rate": 4,
    "genera": [
      "Cocoon Pokémon"
    ]
  },
  {
    "id": 12,
    "name": "butterfree",
    "types": [
      "bug",
      "flying"
    ],
    "abilities": [
      "compound-eyes",
      "tinted-lens"
    ],
    "height": 11,
    "weight": 320,
    "stats": [
      {
        "stat": "hp",
        "value": 60
      },
      {
        "stat": "attack",
        "value": 45
      },
      {
        "stat": "defense",
        "value": 50
      },
      {
        "stat": "special-attack",
        "value": 90
      },
      {
        "stat": "special-defense",
        "value": 80
      },
      {
        "stat": "speed",
        "value": 70
      }
    ],
    "gender_rate": 4,
    "genera": [
      "Butterfly Pokémon"
    ]
  },
  {
    "id": 13,
    "name": "weedle",
    "types": [
      "bug",
      "poison"
    ],
    "abilities": [
      "shield-dust",
      "run-away"
    ],
    "height": 3,
    "weight": 32,
    "stats": [
      {
        "stat": "hp",
        "value": 40
      },
      {
        "stat": "attack",
        "value": 35
      },
      {
        "stat": "defense",
        "value": 30
      },
      {
        "stat": "special-attack",
        "value": 20
      },
      {
        "stat": "special-defense",
        "value": 20
      },
      {
        "stat": "speed",
        "value": 50
      }
    ],
    "gender_rate": 4,
    "genera": [
      "Hairy Bug Pokémon"
    ]
  },
  {
    "id": 14,
    "name": "kakuna",
    "types": [
      "bug",
      "poison"
    ],
    "abilities": [
      "shed-skin"
    ],
    "height": 6,
    "weight": 100,
    "stats": [
      {
        "stat": "hp",
        "value": 45
      },
      {
        "stat": "attack",
        "value": 25
      },
      {
        "stat": "defense",
        "value": 50
      },
      {
        "stat": "special-attack",
        "value": 25
      },
      {
        "stat": "special-defense",
        "value": 25
      },
      {
        "stat": "speed",
        "value": 35
      }
    ],
    "gender_rate": 4,
    "genera": [
      "Cocoon Pokémon"
    ]
  },
  {
    "id": 15,
    "name": "beedrill",
    "types": [
      "bug",
      "poison"
    ],
    "abilities": [
      "swarm",
      "sniper"
    ],
    "height": 10,
    "weight": 295,
    "stats": [
      {
        "stat": "hp",
        "value": 65
      },
      {
        "stat": "attack",
        "value": 90
      },
      {
        "stat": "defense",
        "value": 40
      },
      {
        "stat": "special-attack",
        "value": 45
      },
      {
        "stat": "special-defense",
        "value": 80
      },
      {
        "stat": "speed",
        "value": 75
      }
    ],
    "gender_rate": 4,
    "genera": [
      "Poison Bee Pokémon"
    ]
  }

] as Pokemon[];


export default pokemonList;