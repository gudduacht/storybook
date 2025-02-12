import type { Meta, StoryObj } from '@storybook/react';
import { LoginForm } from './login-form';

const meta = {
  title: 'UI/LoginForm',
  component: LoginForm,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof LoginForm>;

export default meta;
type Story = StoryObj<typeof LoginForm>;

export const Default: Story = {
  args: {
    onSubmit: (email, password) => {
      console.log('Login attempted with:', { email, password });
    },
  },
};

export const Loading: Story = {
  args: {
    loading: true,
    onSubmit: (email, password) => {
      console.log('Login attempted with:', { email, password });
    },
  },
};

export const WithCustomClassName: Story = {
  args: {
    className: "max-w-[980px]",
    onSubmit: (email, password) => {
      console.log('Login attempted with:', { email, password });
    },
  },
};