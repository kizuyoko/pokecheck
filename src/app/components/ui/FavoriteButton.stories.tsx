import { Meta, StoryObj } from '@storybook/react';
import FavoriteButton from './FavoriteButton';

const meta: Meta<typeof FavoriteButton> = {
  title: 'UI/FavoriteButton',
  component: FavoriteButton,
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof FavoriteButton>;

export const Default: Story = {
  args: {
    name: 'Pikachu'
  }
};