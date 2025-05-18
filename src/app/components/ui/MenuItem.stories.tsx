import { Meta, StoryObj } from '@storybook/react';
import MenuItem from './MenuItem';  

const meta: Meta<typeof MenuItem> = {
  title: 'UI/MenuItem',
  component: MenuItem,
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <ul className='w-8'>
        <Story />
      </ul>
    ),
  ],  
};
export default meta;  

type Story = StoryObj<typeof MenuItem>;

export const Default: Story = {
  args: {
    text: 'Pokémon',
    href: '/pokemon',
    iconSrc: '/pokeball.svg',
    imageSize: 26,
  },
};