import { Meta, StoryObj } from '@storybook/react';
import PokemonTypeList from './PokemonTypeList';
import { pokemonTypeNameID } from "@/data/pokemonTypeNameID";

const meta: Meta<typeof PokemonTypeList> = {
  title: 'Type/PokemonTypeList',
  component: PokemonTypeList,
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <section className="py-8 flex flex-col items-center gap-6 text-center">
        {Story()}
      </section>
    ),
  ],
};

export default meta;

type Story = StoryObj<typeof PokemonTypeList>;

export const Default: Story = {
  args: {
    types: pokemonTypeNameID,
    isLoading: false,
    error: null,
  },
};