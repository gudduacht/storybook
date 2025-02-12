import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import { action } from '@storybook/addon-actions';
import { Button } from './button';


const meta = {

  title: 'UI/Button',

  component: Button,
  parameters: {
    
    layout: 'centered',
  },
  
  tags: ['autodocs'],
args: { onClick: fn() },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof Button>;


export const Default: Story = {
  args: {
    variant: 'default',
    size: 'sm',
    disabled: false,
onClick: action('default  click'),
children: 'Default',

  },
};

export const Secondary: Story = {
    args: {
      variant: 'secondary',
      size: 'sm',
      disabled: false,
  onClick: action('secondary  click'),
  children: 'Secondary',
  
    },
  };
  

  export const Destructive: Story = {
    args: {
      variant: 'destructive',
      size: 'sm',
      disabled: false,
  onClick: action('destructive  click'),
  children: 'Destructive', 
    },
  };
  export const Outline: Story = {
    args: {
      variant: 'outline',
      size: 'sm',
      disabled: false,
  onClick: action('outline  click'),
  children: 'Outline',
  
    },
  };
  



