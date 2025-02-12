import type { Meta, StoryObj } from '@storybook/react'
import { Slider } from './slider'
import { action } from '@storybook/addon-actions'
import React from 'react'

// Define custom props for the story
interface SliderStoryProps extends React.ComponentProps<typeof Slider> {
  showLabels?: boolean
  showValue?: boolean
  formatValue?: 'none' | 'percentage' | 'currency'
}

const meta = {
  title: 'PRIMITIVES/Slider',
  component: Slider,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    // Base Slider props
    defaultValue: {
      control: 'object',
      description: 'Default value(s) of the slider',
      defaultValue: [50],
    },
    min: {
      control: 'number',
      description: 'Minimum value',
      defaultValue: 0,
    },
    max: {
      control: 'number',
      description: 'Maximum value',
      defaultValue: 100,
    },
    step: {
      control: 'number',
      description: 'Step increment',
      defaultValue: 1,
    },
    disabled: {
      control: 'boolean',
      description: 'Disabled state',
      defaultValue: false,
    },
    // Story-specific controls
    showLabels: {
      table: {
        category: 'Story Controls',
      },
      control: 'boolean',
      description: 'Show min/max labels',
      defaultValue: false,
    },
    showValue: {
      table: {
        category: 'Story Controls',
      },
      control: 'boolean',
      description: 'Show current value',
      defaultValue: true,
    },
    formatValue: {
      table: {
        category: 'Story Controls',
      },
      control: 'select',
      options: ['none', 'percentage', 'currency'],
      description: 'Value format display',
      defaultValue: 'none',
    },
  },
} satisfies Meta<SliderStoryProps>

export default meta
type Story = StoryObj<SliderStoryProps>

export const Default: Story = {
  render: (args) => {
    const [value, setValue] = React.useState(args.defaultValue || [50])

    const formatDisplayValue = (val: number) => {
      switch (args.formatValue) {
        case 'percentage':
          return `${val}%`
        case 'currency':
          return `$${(val * 10).toFixed(2)}`
        default:
          return val.toString()
      }
    }

    // Separate Slider props from story props
    const { showLabels, showValue, formatValue, ...sliderProps } = args

    return (
      <div className="w-[300px] space-y-4">
        {showLabels && (
          <div className="flex justify-between">
            <label className="text-sm">{args.min}</label>
            <label className="text-sm">{args.max}</label>
          </div>
        )}
        <Slider
          {...sliderProps}
          value={value}
          onValueChange={(newValue) => {
            setValue(newValue)
            action('valueChanged')(newValue)
          }}
          onValueCommit={(newValue) => {
            action('valueCommitted')(newValue)
          }}
        />
        {showValue && (
          <div className="text-sm text-muted-foreground">
            Current value: {value.map(formatDisplayValue).join(', ')}
          </div>
        )}
      </div>
    )
  },
  args: {
    defaultValue: [50],
    min: 0,
    max: 100,
    step: 1,
    disabled: false,
    showLabels: false,
    showValue: true,
    formatValue: 'none',
  },
}