import type { Meta, StoryObj } from '@storybook/react';
import Paginators from './Paginators';

const meta: Meta<typeof Paginators> = {
  title: 'UI/Paginators',
  component: Paginators,
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <Story />
    ),
  ],
};

export default meta;

type Story = StoryObj<typeof Paginators>;

export const Default: Story = {
  args: {
    currentPage: 1,
    totalPages: 10,
    onPreviousPage: () => console.log('Previous page clicked'),
    onNextPage: () => console.log('Next page clicked'),
  },
};