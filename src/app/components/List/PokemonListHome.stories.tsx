import { Meta, StoryObj } from '@storybook/react';
import PokemonListHome from './PokemonListHome';
import { pokemonNameID } from '@/data/pokemonNameID';
import { getRandomPokemons } from '@/app/components/util/display';

const randomPokemonList = getRandomPokemons(4, pokemonNameID);

const meta: Meta<typeof PokemonListHome> = {
  title: 'List/PokemonListHome',
  component: PokemonListHome,
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <>
        {Story()}
      </>
    ),
  ],
};

export default meta;

type Story = StoryObj<typeof PokemonListHome>;

export const Default: Story = {
  args: {
    list: randomPokemonList,
  },
  render: (args) => (
    <PokemonListHome {...args} />
  ),
};

