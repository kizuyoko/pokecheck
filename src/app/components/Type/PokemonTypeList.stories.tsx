import { Meta, StoryObj } from '@storybook/react';
import PokemonTypeList from './PokemonTypeList';

const meta: Meta<typeof PokemonTypeList> = {
  title: 'Type/PokemonTypeList',
  component: PokemonTypeList,
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof PokemonTypeList>;

export const Default: Story = {
  render: () => (
    <PokemonTypeList />
  ),
};