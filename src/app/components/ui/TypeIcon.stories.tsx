import { Meta, StoryObj } from '@storybook/react';
import TypeIcon from './TypeIcon';

const meta: Meta<typeof TypeIcon> = {
  title: 'UI/TypeIcon',
  component: TypeIcon,
  tags: ['autodocs'],
};
export default meta;

type Story = StoryObj<typeof TypeIcon>;

export const Default: Story = {
  args: {
    type: 'grass',
  },
};