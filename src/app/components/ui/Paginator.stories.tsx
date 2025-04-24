import type { Meta, StoryObj } from '@storybook/react';
import Paginator from './Paginator';

const meta : Meta<typeof Paginator> = {
  title: 'UI/Paginator',
  component: Paginator,
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <Story />
    ),
  ],
};

export default meta;

type Story = StoryObj<typeof Paginator>;

export const Default: Story = {
  args: {
    onClick: () => console.log('Page clicked'),
    buttonText: 'Next',
  },
};