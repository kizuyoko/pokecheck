import type { Meta, StoryObj } from "@storybook/react";
import PokemonList from "./PokemonList";
import pokemonList from "@/data/pokemonList";

const meta: Meta<typeof PokemonList> = {
  title: "List/PokemonList",
  component: PokemonList,
  tags: ["autodocs"],
  decorators: [
    (Story) => (
      <>
        {Story()}
      </>
    ),
  ],
};

export default meta;

type Story = StoryObj<typeof PokemonList>;

export const Default: Story = {
  args: {
    list: pokemonList,
  },
};

