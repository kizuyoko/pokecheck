import {  Meta, StoryObj } from '@storybook/react';

import Button from './Button';

const meta: Meta<typeof Button> = {
  title: 'UI/Button',
  component: Button,
  tags: ['autodocs'],
};
export default meta;
type Story = StoryObj<typeof Button>;
export const Default: Story = {
  args: { 
    text: 'Click Me',
    onClickButton: () => alert('Button clicked!'),
  },
};