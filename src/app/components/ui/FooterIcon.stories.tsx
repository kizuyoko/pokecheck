import { Meta, StoryObj } from '@storybook/react';
import FooterIcon from './FooterIcon';  

const meta: Meta<typeof FooterIcon> = {
  title: 'UI/FooterIcon',
  component: FooterIcon,
  tags: ['autodocs'],
};
export default meta;  

type Story = StoryObj<typeof FooterIcon>;

export const Default: Story = {
  args: {
    href:'https://example.com',
    src:'/github.svg',
    alt: 'Example Icon',
  },
};
