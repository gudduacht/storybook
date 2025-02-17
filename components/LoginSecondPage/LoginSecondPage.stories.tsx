import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { LoginScreen } from './LoginSecondPage';
import { action } from '@storybook/addon-actions';

const meta = {
  title: 'Components/LoginSecondPage',
  component: LoginScreen,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  decorators: [
    (Story: React.ComponentType) => (
      <div style={{ minWidth: '800px', padding: '20px' }}>
        <Story />
      </div>
    )
  ],
} satisfies Meta<typeof LoginScreen>;

export default meta;
type Story = StoryObj<typeof LoginScreen>;

export const Default: Story = {
  args: {
    onSubmit: action('onSubmit'),
    // onSubmit: (password: string) => {
    //   console.log('Login attempted with password:', password);
    // },
  },
};

export const Loading: Story = {
  args: {
    loading: true,
    onSubmit: action('onSubmit'),
    // onSubmit: (password: string) => {
    //   console.log('Login attempted with password:', password);
    // },
  },
};

export const WithCustomClassName: Story = {
  args: {
    className: "max-w-[800px]",
    onSubmit: action('onSubmit'),
    // onSubmit: (password: string) => {
    //   console.log('Login attempted with password:', password);
    // },
  },
};