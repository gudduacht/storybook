import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import { Input } from './input';


const meta = {
  title: 'ui/Input',
  component: Input,
  parameters: {
    
    layout: 'centered',
  },
  
  tags: ['autodocs'],
args: { onClick: fn() },
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof Input>;

export const Default: Story = {
  args: {
    type: 'text',

    placeholder: 'Default',
    className: 'py-4 px-2 w-64',


  },
};


export const Email: Story = {
    args: {
        type: 'email',
        placeholder: 'm@example.com',
        className: 'py-4 px-2 w-64',
        required: true,
        title: 'Email',
       
    },
};

export const Password: Story = {
    args: {
      type: 'password',

      className: 'py-4 px-2 w-64',
      required: true,
      title: 'Password',
      
            
  
    },
  };

 