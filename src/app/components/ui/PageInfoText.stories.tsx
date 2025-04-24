import type { Meta, StoryObj } from '@storybook/react';
import PageInfoText from './PageInfoText';

const meta: Meta<typeof PageInfoText> = {
  title: 'UI/PageInfoText',
  component: PageInfoText,
  tags: ['autodocs'],
  decorators: [
    (Story) => (
        <Story />
    ),
  ],
};

export default meta;

type Story = StoryObj<typeof PageInfoText>;

export const Default: Story = {
  args: {
    currentPage: 1,
    totalPages: 10,
    totalItems: 100,
    itemsPerPage: 10,
  },
  render: (args) => (
    <PageInfoText {...args} />
  ),
};