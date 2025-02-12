import type { Meta, StoryObj } from '@storybook/react';
import { Textarea } from './textarea';

const meta = {
  title: 'PRIMITIVES/Textarea',
  component: Textarea,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    placeholder: {
      control: 'text',
      description: 'Placeholder text',
    },
    disabled: {
      control: 'boolean',
      description: 'Whether the textarea is disabled',
    },
    rows: {
      control: { type: 'number', min: 1, max: 20 },
      description: 'Number of visible text lines',
    },
    value: {
      control: 'text',
      description: 'The value of the textarea',
    },
    className: {
      control: 'text',
      description: 'Additional CSS classes',
    },
    readOnly: {
      control: 'boolean',
      description: 'Whether the textarea is read-only',
    },
    maxLength: {
      control: 'number',
      description: 'Maximum number of characters allowed',
    },
    required: {
      control: 'boolean',
      description: 'Whether the textarea is required',
    },
    onChange: { action: 'changed' },
    onFocus: { action: 'focused' },
    onBlur: { action: 'blurred' },
  },
} satisfies Meta<typeof Textarea>;

export default meta;
type Story = StoryObj<typeof Textarea>;

export const Default: Story = {
  args: {
    placeholder: 'Enter your text here...',
    disabled: false,
    rows: 4,
    value: '',
    className: '',
    readOnly: false,
    maxLength: undefined,
    required: false,
  },
};
