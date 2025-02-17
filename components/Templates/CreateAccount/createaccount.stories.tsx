import type { Meta, StoryObj } from '@storybook/react';
import { CreateAccount } from './createAccount';
import { action } from '@storybook/addon-actions';

const meta = {
  title: 'Components/CreateAccount',
  component: CreateAccount,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof CreateAccount>;

export default meta;
type Story = StoryObj<typeof CreateAccount>;

export const Default: Story = {
  args: {

    
    onSubmit: (password, conformPassword) => {
        
     action(`create account attempted with: ${password}::${ conformPassword}`);
      
    },


  },
};

