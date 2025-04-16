import PokemonListCard from "./PokemonListCard";
import { Meta, StoryObj } from "@storybook/react";
import pokemonList from "@/data/pokemonList";

const pokemon = pokemonList[0]; 

const meta: Meta<typeof PokemonListCard> = {
  title: "List/PokemonListCard",  
  component: PokemonListCard,
  tags: ["autodocs"],
}

export default meta;

type Story = StoryObj<typeof PokemonListCard>;

export const Default: Story = {
  args: {
    pokemon
  }
};