import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import { Checkbox } from './Checkbox';


const meta = {
  title: 'ui/Checkbox',
  component: Checkbox,
  parameters: {
    
    layout: 'centered',
  },
  
  tags: ['autodocs'],
args: { onClick: fn() },
} satisfies Meta<typeof Checkbox>;

export default meta;
type Story = StoryObj<typeof Checkbox>;


export const Default: Story = {
  args: {


  },
};
