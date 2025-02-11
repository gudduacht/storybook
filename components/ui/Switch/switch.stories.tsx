import type { Meta, StoryObj } from '@storybook/react'
import { Switch } from './switch'
import { useState } from 'react'

const meta = {
  title: 'UI/Switch',
  component: Switch,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    checked: {
      control: 'boolean',
      description: 'The controlled checked state of the switch',
    },
    defaultChecked: {
      control: 'boolean',
      description: 'The default checked state when initially rendered',
      defaultValue: false,
    },
    disabled: {
      control: 'boolean',
      description: 'Whether the switch is disabled',
      defaultValue: false,
    },
    required: {
      control: 'boolean',
      description: 'Whether the switch is required in a form',
      defaultValue: false,
    },
    onCheckedChange: {
      action: 'checked changed',
      description: 'Event handler called when the checked state changes',
    },
    className: {
      control: 'text',
      description: 'Additional CSS classes to apply to the switch',
    },
  },
} satisfies Meta<typeof Switch>

export default meta
type Story = StoryObj<typeof Switch>

// Default Switch
export const Default: Story = {
  args: {
    defaultChecked: false,
    disabled: false,
  },
}

// Controlled Switch
export const Controlled: Story = {
  render: (args) => {
    const [checked, setChecked] = useState(false)
    return (
      <div className="flex items-center space-x-2">
        <Switch
          {...args}
          checked={checked}
          onCheckedChange={setChecked}
        />
        <span className="text-sm">
          Switch is {checked ? 'on' : 'off'}
        </span>
      </div>
    )
  },
}

// Disabled Switch
export const Disabled: Story = {
  args: {
    disabled: true,
    defaultChecked: false,
  },
}

// Disabled and Checked Switch
export const DisabledChecked: Story = {
  args: {
    disabled: true,
    defaultChecked: true,
  },
}

// Required Switch
export const Required: Story = {
  args: {
    required: true,
  },
  render: (args) => (
    <form
      onSubmit={(e) => {
        e.preventDefault()
        alert('Form submitted!')
      }}
      className="flex flex-col space-y-4"
    >
      <div className="flex items-center space-x-2">
        <Switch {...args} id="terms" />
        <label htmlFor="terms" className="text-sm">
          Accept terms and conditions
        </label>
      </div>
      <button
        type="submit"
        className="px-4 py-2 bg-primary text-primary-foreground rounded"
      >
        Submit
      </button>
    </form>
  ),
}

// Switch with Label
export const WithLabel: Story = {
  render: (args) => (
    <div className="flex items-center space-x-2">
      <Switch {...args} id="airplane-mode" />
      <label
        htmlFor="airplane-mode"
        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
      >
        Airplane Mode
      </label>
    </div>
  ),
}

// Switch with Description
export const WithDescription: Story = {
  render: (args) => (
    <div className="flex space-x-2">
      <Switch {...args} id="notifications" />
      <div className="grid gap-1.5 leading-none">
        <label
          htmlFor="notifications"
          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
        >
          Push Notifications
        </label>
        <p className="text-sm text-muted-foreground">
          Receive notifications when updates are available.
        </p>
      </div>
    </div>
  ),
}

// Multiple Switches
export const MultipleOptions: Story = {
  render: (args) => (
    <div className="space-y-4">
      <div className="flex items-center space-x-2">
        <Switch {...args} id="wifi" />
        <label htmlFor="wifi" className="text-sm">
          Wi-Fi
        </label>
      </div>
      <div className="flex items-center space-x-2">
        <Switch {...args} id="bluetooth" />
        <label htmlFor="bluetooth" className="text-sm">
          Bluetooth
        </label>
      </div>
      <div className="flex items-center space-x-2">
        <Switch {...args} id="mobile-data" />
        <label htmlFor="mobile-data" className="text-sm">
          Mobile Data
        </label>
      </div>
    </div>
  ),
}

// Custom Styled Switch
export const CustomStyled: Story = {
  render: (args) => (
    <Switch
      {...args}
      className="data-[state=checked]:bg-green-500 data-[state=unchecked]:bg-gray-200"
    />
  ),
}

// Form Integration Example
export const FormIntegration: Story = {
  render: (args) => {
    const [formData, setFormData] = useState({
      notifications: false,
      updates: false,
      marketing: false,
    })

    return (
      <form
        onSubmit={(e) => {
          e.preventDefault()
          alert('Form Data: ' + JSON.stringify(formData, null, 2))
        }}
        className="space-y-6"
      >
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <div className="space-y-0.5">
              <label className="text-sm font-medium">
                Notification Preferences
              </label>
              <p className="text-sm text-muted-foreground">
                Manage your notification settings
              </p>
            </div>
          </div>
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Switch
                {...args}
                id="notifications"
                checked={formData.notifications}
                onCheckedChange={(checked) =>
                  setFormData((prev) => ({ ...prev, notifications: checked }))
                }
              />
              <label htmlFor="notifications" className="text-sm">
                Push Notifications
              </label>
            </div>
            <div className="flex items-center space-x-2">
              <Switch
                {...args}
                id="updates"
                checked={formData.updates}
                onCheckedChange={(checked) =>
                  setFormData((prev) => ({ ...prev, updates: checked }))
                }
              />
              <label htmlFor="updates" className="text-sm">
                Product Updates
              </label>
            </div>
            <div className="flex items-center space-x-2">
              <Switch
                {...args}
                id="marketing"
                checked={formData.marketing}
                onCheckedChange={(checked) =>
                  setFormData((prev) => ({ ...prev, marketing: checked }))
                }
              />
              <label htmlFor="marketing" className="text-sm">
                Marketing Emails
              </label>
            </div>
          </div>
        </div>
        <button
          type="submit"
          className="px-4 py-2 bg-primary text-primary-foreground rounded"
        >
          Save Preferences
        </button>
      </form>
    )
  },
}