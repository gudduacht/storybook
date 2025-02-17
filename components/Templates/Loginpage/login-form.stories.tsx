import type { Meta, StoryObj } from '@storybook/react';
import { LoginForm } from './login-form';
import { action } from '@storybook/addon-actions';

const meta = {
  title: 'Components/LoginForm',
  component: LoginForm,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <div style={{ width: '500px', maxWidth: '100%' }}>
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof LoginForm>;

export default meta;
type Story = StoryObj<typeof LoginForm>;

export const Default: Story = {
  args: {
    onSubmit: action('onSubmit'),
  },
};

export const Loading: Story = {
  args: {
    loading: true,
    onSubmit: action('onSubmit'),
    // onSubmit: (email, dob) => {
    //   console.log('Login attempted with:', { email, dob });
    // },
  },
};

export const WithCustomClassName: Story = {
  args: {
    className: "max-w-[980px]",
    onSubmit: action('onSubmit'),
    // onSubmit: (email, password) => {
    //   console.log('Login attempted with:', { email, password });
    // },
  },
};