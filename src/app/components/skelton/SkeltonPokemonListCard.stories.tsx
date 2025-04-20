import { Meta, StoryObj } from '@storybook/react';
import SkeltonPokemonListCard from './SkeltonPokemonListCard';

const meta: Meta<typeof SkeltonPokemonListCard> = {
  title: 'Skelton/SkeltonPokemonListCard',
  component: SkeltonPokemonListCard,
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <div className="grid grid-cols-2 place-items-center sm:grid-cols-3 lg:grid-cols-4 gap-2 sm:gap-4">
        {Story()}
      </div>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof SkeltonPokemonListCard>;

export const Default: Story = {
  args: {},
};

