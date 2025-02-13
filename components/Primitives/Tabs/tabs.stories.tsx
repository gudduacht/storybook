import type { Meta, StoryObj } from '@storybook/react'
import { Tabs, TabsList, TabsTrigger, TabsContent } from "./tabs"
import { Button } from "@/components/Primitives/Button/button"
import { cn } from "@/lib/utils"
import * as React from "react"

const meta = {
  title: 'Primitives/Tabs',
  component: Tabs,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    defaultValue: {
      control: 'text',
      description: 'The value of the tab that should be active when initially rendered',
    },
    value: {
      control: 'text',
      description: 'The controlled value of the tab to activate',
    },
    onValueChange: {
      action: 'valueChanged',
      description: 'Event handler called when the value changes',
    },
    dir: {
      control: 'radio',
      options: ['ltr', 'rtl'],
      description: 'The reading direction of the tabs',
      defaultValue: 'ltr',
    },
    activationMode: {
      control: 'radio',
      options: ['automatic', 'manual'],
      description: 'The activation mode of the tabs',
      defaultValue: 'automatic',
    },
  },
} satisfies Meta<typeof Tabs>

export default meta
type Story = StoryObj<typeof Tabs>

// Default tabs example
export const Default: Story = {
  render: (args) => (
    <Tabs defaultValue="account" className="w-[400px]" {...args}>
      <TabsList className="grid w-full grid-cols-2">
        <TabsTrigger value="account">Account</TabsTrigger>
        <TabsTrigger value="password">Password</TabsTrigger>
      </TabsList>
      <TabsContent value="account">
        <div className="space-y-4">
          <h4 className="text-sm font-medium">Account Settings</h4>
          <p className="text-sm text-muted-foreground">
            Configure your account preferences here.
          </p>
        </div>
      </TabsContent>
      <TabsContent value="password">
        <div className="space-y-4">
          <h4 className="text-sm font-medium">Password Settings</h4>
          <p className="text-sm text-muted-foreground">
            Change your password here.
          </p>
        </div>
      </TabsContent>
    </Tabs>
  ),
}

// Multiple tabs example
export const MultipleTabs: Story = {
  args: {
    orientation: "horizontal"
  },

  render: (args) => (
    <Tabs defaultValue="tab1" className="w-[400px]" {...args}>
      <TabsList className="grid w-full grid-cols-3">
        <TabsTrigger value="tab1">Tab 1</TabsTrigger>
        <TabsTrigger value="tab2">Tab 2</TabsTrigger>
        <TabsTrigger value="tab3">Tab 3</TabsTrigger>
      </TabsList>
      <TabsContent value="tab1">
        <div className="p-4 bg-muted/50 rounded-lg">Content 1</div>
      </TabsContent>
      <TabsContent value="tab2">
        <div className="p-4 bg-muted/50 rounded-lg">Content 2</div>
      </TabsContent>
      <TabsContent value="tab3">
        <div className="p-4 bg-muted/50 rounded-lg">Content 3</div>
      </TabsContent>
    </Tabs>
  )
}

// Disabled tabs example
export const DisabledTabs: Story = {
  render: (args) => (
    <Tabs defaultValue="active" className="w-[400px]" {...args}>
      <TabsList className="grid w-full grid-cols-3">
        <TabsTrigger value="active">Active</TabsTrigger>
        <TabsTrigger value="disabled" disabled>
          Disabled
        </TabsTrigger>
        <TabsTrigger value="active2">Active 2</TabsTrigger>
      </TabsList>
      <TabsContent value="active">
        <div className="p-4">This tab is active</div>
      </TabsContent>
      <TabsContent value="disabled">
        <div className="p-4">This tab is disabled</div>
      </TabsContent>
      <TabsContent value="active2">
        <div className="p-4">This is another active tab</div>
      </TabsContent>
    </Tabs>
  ),
}

// Vertical orientation example
export const VerticalTabs: Story = {
  render: (args) => (
    <Tabs
      defaultValue="tab1"
      orientation="vertical"
      className="w-[400px] flex gap-4"
      {...args}
    >
      <TabsList className="flex flex-col h-auto">
        <TabsTrigger value="tab1">Profile</TabsTrigger>
        <TabsTrigger value="tab2">Settings</TabsTrigger>
        <TabsTrigger value="tab3">Messages</TabsTrigger>
      </TabsList>
      <div className="flex-1">
        <TabsContent value="tab1">
          <div className="p-4 bg-muted/50 rounded-lg">Profile Content</div>
        </TabsContent>
        <TabsContent value="tab2">
          <div className="p-4 bg-muted/50 rounded-lg">Settings Content</div>
        </TabsContent>
        <TabsContent value="tab3">
          <div className="p-4 bg-muted/50 rounded-lg">Messages Content</div>
        </TabsContent>
      </div>
    </Tabs>
  ),
}

// Controlled tabs example
export const ControlledTabs: Story = {
  render: () => {
    const [value, setValue] = React.useState('tab1')
    return (
      <Tabs value={value} onValueChange={setValue} className="w-[400px]">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="tab1">Tab 1</TabsTrigger>
          <TabsTrigger value="tab2">Tab 2</TabsTrigger>
          <TabsTrigger value="tab3">Tab 3</TabsTrigger>
        </TabsList>
        <TabsContent value="tab1">
          <div className="space-y-4">
            <h4 className="text-sm font-medium">Current Tab: {value}</h4>
            <Button onClick={() => setValue('tab2')}>
              Go to Tab 2 Programmatically
            </Button>
          </div>
        </TabsContent>
        <TabsContent value="tab2">
          <div className="space-y-4">
            <h4 className="text-sm font-medium">Current Tab: {value}</h4>
            <Button onClick={() => setValue('tab3')}>
              Go to Tab 3 Programmatically
            </Button>
          </div>
        </TabsContent>
        <TabsContent value="tab3">
          <div className="space-y-4">
            <h4 className="text-sm font-medium">Current Tab: {value}</h4>
            <Button onClick={() => setValue('tab1')}>
              Go to Tab 1 Programmatically
            </Button>
          </div>
        </TabsContent>
      </Tabs>
    )
  },
}

// Custom styled tabs
export const CustomStyledTabs: Story = {
  render: (args) => (
    <Tabs defaultValue="tab1" className="w-[400px]" {...args}>
      <TabsList className="grid w-full grid-cols-3 bg-blue-100 p-1">
        <TabsTrigger 
          value="tab1" 
          className="data-[state=active]:bg-blue-500 data-[state=active]:text-white"
        >
          Custom 1
        </TabsTrigger>
        <TabsTrigger 
          value="tab2"
          className="data-[state=active]:bg-blue-500 data-[state=active]:text-white"
        >
          Custom 2
        </TabsTrigger>
        <TabsTrigger 
          value="tab3"
          className="data-[state=active]:bg-blue-500 data-[state=active]:text-white"
        >
          Custom 3
        </TabsTrigger>
      </TabsList>
      <TabsContent value="tab1" className="border p-4 rounded-lg mt-2">
        Custom styled content 1
      </TabsContent>
      <TabsContent value="tab2" className="border p-4 rounded-lg mt-2">
        Custom styled content 2
      </TabsContent>
      <TabsContent value="tab3" className="border p-4 rounded-lg mt-2">
        Custom styled content 3
      </TabsContent>
    </Tabs>
  ),
}

// RTL (Right-to-Left) example
export const RTLTabs: Story = {
  render: (args) => (
    <Tabs defaultValue="tab1" dir="rtl" className="w-[400px]" {...args}>
      <TabsList className="grid w-full grid-cols-3">
        <TabsTrigger value="tab1">Tab 1</TabsTrigger>
        <TabsTrigger value="tab2">Tab 2</TabsTrigger>
        <TabsTrigger value="tab3">Tab 3</TabsTrigger>
      </TabsList>
      <TabsContent value="tab1">
        <div className="p-4 text-right">RTL Content 1</div>
      </TabsContent>
      <TabsContent value="tab2">
        <div className="p-4 text-right">RTL Content 2</div>
      </TabsContent>
      <TabsContent value="tab3">
        <div className="p-4 text-right">RTL Content 3</div>
      </TabsContent>
    </Tabs>
  ),
}