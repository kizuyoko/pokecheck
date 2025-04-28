import { Meta, StoryObj } from '@storybook/react';
import PokemonTypeProfileCard from './PokemonTypeProfileCard';
import { pokemonTypeExample } from "@/data/pokemonTypeExample";
const meta: Meta<typeof PokemonTypeProfileCard> = {
  title: 'Type/PokemonTypeProfileCard',
  component: PokemonTypeProfileCard,
  tags: ['autodocs'],
};
export default meta;
type Story = StoryObj<typeof PokemonTypeProfileCard>;

export const Default: Story = {
  args: {
    type: pokemonTypeExample,
  },
};






