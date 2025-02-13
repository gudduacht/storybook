import type { Meta, StoryObj } from '@storybook/react'
import { 
  ToggleGroup, 
  ToggleGroupItem 
} from "./toggle-group"
import { Bold, Italic, Underline } from "lucide-react"

const meta = {
  title: 'Primitives/ToggleGroup',
  component: ToggleGroup,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    type: {
      control: 'radio',
      options: ['single', 'multiple'],
      description: 'The type of toggle group',
      defaultValue: 'single'
    },
    variant: {
      control: 'radio',
      options: ['default', 'outline'],
      description: 'The visual variant of the toggle group',
      defaultValue: 'default'
    },
    size: {
      control: 'radio',
      options: ['default', 'sm', 'lg'],
      description: 'The size of the toggle group',
      defaultValue: 'default'
    },
    disabled: {
      control: 'boolean',
      description: 'Whether the toggle group is disabled',
      defaultValue: false
    },
    defaultValue: {
      control: 'text',
      description: 'The default selected value(s)',
    }
  }
} satisfies Meta<typeof ToggleGroup>

export default meta
type Story = StoryObj<typeof ToggleGroup>

export const Default: Story = {
  args: {
    type: 'single',
    variant: 'default',
    size: 'default',
    disabled: false,
    defaultValue: 'bold'
  },
  render: (args) => (
    <ToggleGroup {...args}>
      <ToggleGroupItem value="bold" aria-label="Toggle bold">
        <Bold className="h-4 w-4" />
      </ToggleGroupItem>
      <ToggleGroupItem value="italic" aria-label="Toggle italic">
        <Italic className="h-4 w-4" />
      </ToggleGroupItem>
      <ToggleGroupItem value="underline" aria-label="Toggle underline">
        <Underline className="h-4 w-4" />
      </ToggleGroupItem>
    </ToggleGroup>
  ),
}

export const Multiple: Story = {
  args: {
    type: 'multiple',
    variant: 'default',
    size: 'default',
    disabled: false,
    defaultValue: ['bold']
  },
  render: (args) => (
    <ToggleGroup {...args}>
      <ToggleGroupItem value="bold" aria-label="Toggle bold">
        <Bold className="h-4 w-4" />
      </ToggleGroupItem>
      <ToggleGroupItem value="italic" aria-label="Toggle italic">
        <Italic className="h-4 w-4" />
      </ToggleGroupItem>
      <ToggleGroupItem value="underline" aria-label="Toggle underline">
        <Underline className="h-4 w-4" />
      </ToggleGroupItem>
    </ToggleGroup>
  ),
}

export const Outline: Story = {
  args: {
    type: 'single',
    variant: 'outline',
    size: 'default',
    disabled: false,
    defaultValue: 'bold'
  },
  render: (args) => (
    <ToggleGroup {...args}>
      <ToggleGroupItem value="bold" aria-label="Toggle bold">
        <Bold className="h-4 w-4" />
      </ToggleGroupItem>
      <ToggleGroupItem value="italic" aria-label="Toggle italic">
        <Italic className="h-4 w-4" />
      </ToggleGroupItem>
      <ToggleGroupItem value="underline" aria-label="Toggle underline">
        <Underline className="h-4 w-4" />
      </ToggleGroupItem>
    </ToggleGroup>
  ),
}

export const Disabled: Story = {
  args: {
    type: 'single',
    variant: 'default',
    size: 'default',
    disabled: true,
    defaultValue: 'bold'
  },
  render: (args) => (
    <ToggleGroup {...args}>
      <ToggleGroupItem value="bold" aria-label="Toggle bold">
        <Bold className="h-4 w-4" />
      </ToggleGroupItem>
      <ToggleGroupItem value="italic" aria-label="Toggle italic">
        <Italic className="h-4 w-4" />
      </ToggleGroupItem>
      <ToggleGroupItem value="underline" aria-label="Toggle underline">
        <Underline className="h-4 w-4" />
      </ToggleGroupItem>
    </ToggleGroup>
  ),
}

export const WithText: Story = {
  args: {
    type: 'single',
    variant: 'default',
    size: 'default',
    disabled: false,
    defaultValue: 'bold'
  },
  render: (args) => (
    <ToggleGroup {...args}>
      <ToggleGroupItem value="bold" aria-label="Toggle bold">
        <Bold className="h-4 w-4" />
        <span>Bold</span>
      </ToggleGroupItem>
      <ToggleGroupItem value="italic" aria-label="Toggle italic">
        <Italic className="h-4 w-4" />
        <span>Italic</span>
      </ToggleGroupItem>
      <ToggleGroupItem value="underline" aria-label="Toggle underline">
        <Underline className="h-4 w-4" />
        <span>Underline</span>
      </ToggleGroupItem>
    </ToggleGroup>
  ),
}

export const Small: Story = {
  args: {
    type: 'single',
    variant: 'default',
    size: 'sm',
    disabled: false,
    defaultValue: 'bold'
  },
  render: (args) => (
    <ToggleGroup {...args}>
      <ToggleGroupItem value="bold" aria-label="Toggle bold">
        <Bold className="h-4 w-4" />
      </ToggleGroupItem>
      <ToggleGroupItem value="italic" aria-label="Toggle italic">
        <Italic className="h-4 w-4" />
      </ToggleGroupItem>
      <ToggleGroupItem value="underline" aria-label="Toggle underline">
        <Underline className="h-4 w-4" />
      </ToggleGroupItem>
    </ToggleGroup>
  ),
}

export const Large: Story = {
  args: {
    type: 'single',
    variant: 'default',
    size: 'lg',
    disabled: false,
    defaultValue: 'bold'
  },
  render: (args) => (
    <ToggleGroup {...args}>
      <ToggleGroupItem value="bold" aria-label="Toggle bold">
        <Bold className="h-4 w-4" />
      </ToggleGroupItem>
      <ToggleGroupItem value="italic" aria-label="Toggle italic">
        <Italic className="h-4 w-4" />
      </ToggleGroupItem>
      <ToggleGroupItem value="underline" aria-label="Toggle underline">
        <Underline className="h-4 w-4" />
      </ToggleGroupItem>
    </ToggleGroup>
  ),
}