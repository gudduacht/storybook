import type { Meta, StoryObj } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
  SelectSeparator,
} from './select'

// Define custom props interface for the story
interface SelectStoryProps {
  onValueChange?: (value: string) => void
  disabled?: boolean
  placeholder?: string
  label?: string
  showSeparator?: boolean
  defaultValue?: string
}

const meta = {
  title: 'PRIMITIVES/Select',
  component: Select,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    onValueChange: {
      action: 'valueChanged',
      description: 'Called when the value changes'
    },
    disabled: {
      control: 'boolean',
      description: 'Whether the select is disabled',
    },
    placeholder: {
      control: 'text',
      description: 'Placeholder text when no option is selected',
    },
    label: {
      control: 'text',
      description: 'Label for the select group',
    },
    showSeparator: {
      control: 'boolean',
      description: 'Show separator between groups',
    },
    defaultValue: {
      control: 'text',
      description: 'Default selected value',
    },
  },
} satisfies Meta<SelectStoryProps>

export default meta
type Story = StoryObj<SelectStoryProps>

export const Default: Story = {
  args: {
    disabled: false,
    placeholder: 'Select an option',
    label: 'Fruits',
    showSeparator: true,
    defaultValue: '',
  },
  render: ({ 
    disabled, 
    placeholder, 
    label, 
    showSeparator, 
    defaultValue,
    onValueChange = action('onValueChange')
  }) => (
    <Select 
      defaultValue={defaultValue} 
      disabled={disabled}
      onValueChange={onValueChange}
    >
      <SelectTrigger className="w-[280px]">
        <SelectValue placeholder={placeholder} />
      </SelectTrigger>
      <SelectContent>
        {label && (
          <SelectGroup>
            <SelectLabel>{label}</SelectLabel>
            <SelectItem value="apple">Apple</SelectItem>
            <SelectItem value="banana">Banana</SelectItem>
            <SelectItem value="orange">Orange</SelectItem>
          </SelectGroup>
        )}
        {showSeparator && <SelectSeparator />}
        <SelectGroup>
          <SelectLabel>Vegetables</SelectLabel>
          <SelectItem value="carrot">Carrot</SelectItem>
          <SelectItem value="potato">Potato</SelectItem>
          <SelectItem value="tomato">Tomato</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  ),
}