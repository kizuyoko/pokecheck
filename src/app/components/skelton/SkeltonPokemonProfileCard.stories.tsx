import { Meta, StoryObj } from '@storybook/react';
import SkeltonPokemonProfileCard from './SkeltonPokemonProfileCard';

const meta: Meta<typeof SkeltonPokemonProfileCard> = {
  title: 'Skelton/SkeltonPokemonProfileCard',
  component: SkeltonPokemonProfileCard,
  tags: ['autodocs'], 
  decorators: [
    (Story) => (
      <div className="flex justify-center items-center h-screen">
        {Story()}
      </div>
    ),
  ],
};

export default meta;

type Story = StoryObj<typeof SkeltonPokemonProfileCard>;

export const Default: Story = {
  args: {},
};
