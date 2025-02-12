import type { Meta, StoryObj } from '@storybook/react'
import { RadioGroup, RadioGroupItem } from './radio-group'

interface RadioGroupStoryProps {
  defaultValue?: string
  disabled?: boolean
  orientation?: 'horizontal' | 'vertical'
  required?: boolean
  variant?: 'default' | 'cards' | 'custom'
  showDescription?: boolean
  showPrice?: boolean
}

const meta: Meta<RadioGroupStoryProps> = {
  title: 'PRIMITIVES/RadioGroup',
  component: RadioGroup,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    defaultValue: {
      control: 'select',
      options: ['option-1', 'option-2', 'option-3'],
      description: 'The default selected value',
      defaultValue: 'option-1'
    },
    disabled: {
      control: 'boolean',
      description: 'Whether the radio group is disabled',
      defaultValue: false
    },
    orientation: {
      control: 'radio',
      options: ['horizontal', 'vertical'],
      description: 'The orientation of the radio group',
      defaultValue: 'vertical'
    },
    required: {
      control: 'boolean',
      description: 'Whether the radio group is required',
      defaultValue: false
    },
    variant: {
      control: 'select',
      options: ['default', 'cards', 'custom'],
      description: 'The visual style variant',
      defaultValue: 'default'
    },
    showDescription: {
      control: 'boolean',
      description: 'Show description text under labels',
      defaultValue: false
    },
    showPrice: {
      control: 'boolean',
      description: 'Show price information',
      defaultValue: false
    }
  }
} satisfies Meta<RadioGroupStoryProps>

export default meta
type Story = StoryObj<RadioGroupStoryProps>

export const Default: Story = {
  args: {
    defaultValue: 'option-1',
    disabled: false,
    orientation: 'vertical',
    required: false,
    variant: 'default',
    showDescription: false,
  },
  render: ({ 
    defaultValue, 
    disabled, 
    orientation, 
    required,
    variant,
    showDescription,
  }) => {
    const getClassName = () => {
      const baseClass = orientation === 'horizontal' ? 'flex space-x-4' : 'space-y-4'
      if (variant === 'cards') return `${baseClass} w-[400px]`
      return baseClass
    }

    const getItemClassName = () => {
      if (variant === 'cards') return 'flex items-center space-x-3 rounded-lg border p-4 w-full'
      if (variant === 'custom') return 'flex items-center space-x-2 text-blue-500'
      return 'flex items-center space-x-2'
    }

    const items = [
      { value: 'option-1', label: 'Option 1', description: 'Description for option 1', price: '$10' },
      { value: 'option-2', label: 'Option 2', description: 'Description for option 2', price: '$20' },
      { value: 'option-3', label: 'Option 3', description: 'Description for option 3', price: '$30' }
    ]

    return (
      <RadioGroup
        defaultValue={defaultValue}
        disabled={disabled}
        required={required}
        className={getClassName()}
        name="radio-group"
      >
        {items.map((item) => (
          <div key={item.value} className={getItemClassName()}>
            <RadioGroupItem value={item.value} id={item.value} />
            <div className="flex flex-1 flex-col">
              <label
                htmlFor={item.value}
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                {item.label}
              </label>
              {showDescription && (
                <p className="text-sm text-muted-foreground mt-1.5">
                  {item.description}
                </p>
              )}
            </div>
        
          </div>
        ))}
      </RadioGroup>
    )
  }
}