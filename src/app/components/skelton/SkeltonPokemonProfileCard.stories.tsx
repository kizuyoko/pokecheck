import { Meta, StoryObj } from '@storybook/react';
import SkeltonPokemonProfileCard from './SkeltonPokemonProfileCard';

const meta: Meta<typeof SkeltonPokemonProfileCard> = {
  title: 'Skelton/SkeltonPokemonProfileCard',
  component: SkeltonPokemonProfileCard,
  tags: ['autodocs'], 
  decorators: [
    (Story) => (
      <Story />
    ),
  ],
};

export default meta;

type Story = StoryObj<typeof SkeltonPokemonProfileCard>;

export const Default: Story = {
  args: {},
};
