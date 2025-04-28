import type { PokemonTypeDetail } from "@/types/pokemonTypeDetail.ts";

export const pokemonTypeExample: PokemonTypeDetail = {
	damage_relations: {
		double_damage_from: ["fighting"],
		double_damage_to: [],
		half_damage_from: [],
		half_damage_to: ["rock", "steel"],
		no_damage_from: ["ghost"],
		no_damage_to: ["ghost"]
	},
	name: "normal",
  id: 1,
	pokemon: ["pidgey", "pidgeotto", "pidgeot", "rattata", "raticate", "spearow", "fearow", "jigglypuff", "wigglytuff", "meowth", "persian", "farfetchd", "doduo", "dodrio", "lickitung", "chansey", "kangaskhan", "tauros", "ditto", "eevee", "porygon", "snorlax", "sentret", "furret", "hoothoot", "noctowl", "igglybuff", "aipom", "girafarig", "dunsparce", "teddiursa", "ursaring", "porygon2", "stantler", "smeargle", "miltank", "blissey", "zigzagoon", "linoone", "taillow", "swellow", "slakoth", "vigoroth", "slaking", "whismur", "loudred", "exploud", "azurill", "skitty", "delcatty", "spinda" , "surskit", "masqrain", "swablu", "altaria", "zangoose", "seviper", "castform", "kecleon", "tangela", "tangrowth", "bidoof", "bibarel", "starly", "staravia", "staraptor", "buneary", "lopunny", "munchlax", "snorlax-gmax"],
	moves: ["pound", "double-slap", "comet-punch", "mega-punch", "pay-day", "scratch", "vice-grip", "guillotine",  "razor-wind", "swords-dance", "cut", "whirlwind", "bind", "slam", "stomp", "mega-kick", "headbutt", "horn-attack", "fury-attack", "horn-drill", "tackle", "body-slam", "wrap", "take-down", "thrash", "double-edge", "tail-whip", "leer", "growl", "roar", "sing", "supersonic", "sonic-boom", "disable", "return"	, "frustration", "screech", "charm", "sing", "attract", "sleep-talk", "heal-bell", "return", "frustration", "pound", "double-slap", "comet-punch", "mega-punch", "pay-day", "scratch", "vice-grip", "guillotine",  "razor-wind", "swords-dance", "cut", "whirlwind", "bind", "slam", "stomp", "mega-kick"],	
};

export const pokemonTypeExampleList = [pokemonTypeExample];