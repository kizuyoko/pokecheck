import type { Meta, StoryObj } from "@storybook/react";
import PokemonList from "./PokemonList";
import pokemonList from "@/data/pokemonList";

const meta: Meta<typeof PokemonList> = {
  title: "List/PokemonList",
  component: PokemonList,
  tags: ["autodocs"],
  decorators: [
    (Story) => (
      <div className="grid grid-cols-2 place-items-center sm:grid-cols-3 lg:grid-cols-4 gap-2 sm:gap-4">
        {Story()}
      </div>
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

