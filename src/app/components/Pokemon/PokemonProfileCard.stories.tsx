import type { Meta, StoryObj } from "@storybook/react";
import PokemonProfileCard from "./PokemonProfileCard";  
import pokemonList from "@/data/pokemonList";

const pokemon = pokemonList[0]; 

const meta: Meta<typeof PokemonProfileCard> = {
  title: "Pokemon/PokemonProfileCard",    
  component: PokemonProfileCard,
  tags: ["autodocs"], 

};

export default meta;

type Story = StoryObj<typeof PokemonProfileCard>;

export const Default: Story = {
  args: {
    pokemon,
  },
};