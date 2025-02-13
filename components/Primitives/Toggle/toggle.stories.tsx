import type { Meta, StoryObj } from '@storybook/react'
import { Toggle } from "./toggle"
import { Bold, Italic, Underline } from "lucide-react"

const meta = {
  title: 'Primitives/Toggle',
  component: Toggle,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'radio',
      options: ['default', 'outline'],
      description: 'The visual style of the toggle',
      defaultValue: 'default'
    },
    size: {
      control: 'radio',
      options: ['default', 'sm', 'lg'],
      description: 'The size of the toggle',
      defaultValue: 'default'
    },
    disabled: {
      control: 'boolean',
      description: 'Whether the toggle is disabled',
      defaultValue: false
    },
    pressed: {
      control: 'boolean',
      description: 'The controlled pressed state of the toggle',
      defaultValue: false
    },
    defaultPressed: {
      control: 'boolean',
      description: 'The default pressed state of the toggle',
      defaultValue: false
    },
    asChild: {
      control: 'boolean',
      description: 'Whether to render as child',
      defaultValue: false
    },
    onPressedChange: { action: 'pressed changed' }
  }
} satisfies Meta<typeof Toggle>

export default meta
type Story = StoryObj<typeof Toggle>

export const Default: Story = {
  args: {
    variant: 'default',
    size: 'default',
    disabled: false,
    defaultPressed: false,
  },
  render: (args) => (
    <Toggle {...args}>
      <Bold className="h-4 w-4" />
    </Toggle>
  ),
}

export const WithText: Story = {
  args: {
    variant: 'default',
    size: 'default',
    disabled: false,
    defaultPressed: false,
  },
  render: (args) => (
    <Toggle {...args}>
      <Bold className="h-4 w-4" />
      <span>Bold</span>
    </Toggle>
  ),
}

export const Outline: Story = {
  args: {
    variant: 'outline',
    size: 'default',
    disabled: false,
    defaultPressed: false,
  },
  render: (args) => (
    <Toggle {...args}>
      <Italic className="h-4 w-4" />
      <span>Italic</span>
    </Toggle>
  ),
}

export const Small: Story = {
  args: {
    variant: 'default',
    size: 'sm',
    disabled: false,
    defaultPressed: false,
  },
  render: (args) => (
    <Toggle {...args}>
      <Underline className="h-4 w-4" />
    </Toggle>
  ),
}

export const Large: Story = {
  args: {
    variant: 'default',
    size: 'lg',
    disabled: false,
    defaultPressed: false,
  },
  render: (args) => (
    <Toggle {...args}>
      <Bold className="h-4 w-4" />
      <span>Bold</span>
    </Toggle>
  ),
}

export const Disabled: Story = {
  args: {
    variant: 'default',
    size: 'default',
    disabled: true,
    defaultPressed: false,
  },
  render: (args) => (
    <Toggle {...args}>
      <Bold className="h-4 w-4" />
      <span>Bold</span>
    </Toggle>
  ),
}

export const Pressed: Story = {
  args: {
    variant: 'default',
    size: 'default',
    disabled: false,
    defaultPressed: true,
  },
  render: (args) => (
    <Toggle {...args}>
      <Bold className="h-4 w-4" />
      <span>Bold</span>
    </Toggle>
  ),
}

export const IconVariants: Story = {
  render: () => (
    <div className="flex items-center gap-2">
      <Toggle aria-label="Toggle bold">
        <Bold className="h-4 w-4" />
      </Toggle>
      <Toggle aria-label="Toggle italic">
        <Italic className="h-4 w-4" />
      </Toggle>
      <Toggle aria-label="Toggle underline">
        <Underline className="h-4 w-4" />
      </Toggle>
    </div>
  ),
}

export const AllVariants: Story = {
  render: () => (
    <div className="flex flex-col gap-4">
      <div className="flex items-center gap-2">
        <Toggle variant="default" aria-label="Toggle bold">
          <Bold className="h-4 w-4" />
        </Toggle>
        <Toggle variant="outline" aria-label="Toggle italic">
          <Italic className="h-4 w-4" />
        </Toggle>
      </div>
      <div className="flex items-center gap-2">
        <Toggle size="sm" aria-label="Toggle bold">
          <Bold className="h-4 w-4" />
        </Toggle>
        <Toggle size="default" aria-label="Toggle italic">
          <Italic className="h-4 w-4" />
        </Toggle>
        <Toggle size="lg" aria-label="Toggle underline">
          <Underline className="h-4 w-4" />
        </Toggle>
      </div>
    </div>
  ),
}