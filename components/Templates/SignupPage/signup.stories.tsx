import type { Meta, StoryObj } from '@storybook/react';
import { SignupPage } from './signup';
import { action } from '@storybook/addon-actions';

const meta = {
  title: 'Components/SignupPage',
  component: SignupPage,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof SignupPage>;

export default meta;
type Story = StoryObj<typeof SignupPage>;

export const Default: Story = {
  args: {
    onSubmit: (fullName, email, DOB) => {
        
     action(`Login attempted with: ${fullName}::${email}:: ${DOB}`);
      
    },

    loading: false
  },
};

