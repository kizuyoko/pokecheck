import type { Meta, StoryObj } from '@storybook/react';
import  Title  from './Title';

const meta: Meta<typeof Title> = {
  title: 'UI/Title',
  component: Title,
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof Title>;

export const Default: Story = {
  args: {
    children: 'This is a title',
  },
};
