import type { Meta, StoryObj } from '@storybook/react'
import { Button } from "@/components/ui/Button/button"
import {
  Toast,
  ToastAction,
  ToastClose,
  ToastDescription,
  ToastProvider,
  ToastTitle,
  ToastViewport,
} from "./toast"
import { useToast } from "./hooks/use-toast"
import { Toaster } from "./toaster"

const meta = {
  title: 'UI/Toast',
  component: Toast,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'radio',
      options: ['default', 'destructive'],
      description: 'The visual style of the toast',
      defaultValue: 'default'
    },
    duration: {
      control: 'number',
      description: 'Duration in milliseconds',
      defaultValue: 5000
    },
    className: {
      control: 'text',
      description: 'Additional CSS classes'
    },
    title: {
      control: 'text',
      description: 'Toast title'
    },
  },
  decorators: [
    (Story) => (
      <>
        <ToastProvider>
          <Story />
          <ToastViewport />
        </ToastProvider>
        <Toaster />
      </>
    ),
  ],
} satisfies Meta<typeof Toast>

export default meta
type Story = StoryObj<typeof Toast>

// Wrapper component to use hooks
const ToastDemo = () => {
  const { toast } = useToast()

  return (
    <div className="flex flex-col gap-4">
      <Button
        onClick={() => {
          toast({
            title: "Default Toast",
            description: "This is a default toast message",
          })
        }}
      >
        Show Default Toast
      </Button>
    </div>
  )
}

// Wrapper for demonstrating different variants
const ToastVariantsDemo = () => {
  const { toast } = useToast()

  return (
    <div className="flex flex-col gap-4">
      <Button
        variant="default"
        onClick={() => {
          toast({
            variant: "default",
            title: "Default Toast",
            description: "This is a default toast message",
          })
        }}
      >
        Default Toast
      </Button>

      <Button
        variant="destructive"
        onClick={() => {
          toast({
            variant: "destructive",
            title: "Error",
            description: "Something went wrong!",
          })
        }}
      >
        Destructive Toast
      </Button>

      <Button
        variant="outline"
        onClick={() => {
          toast({
            title: "Toast with Action",
            description: "This toast has an action button",
            action: (
              <ToastAction altText="Try again" onClick={() => alert("Action clicked")}>
                Try again
              </ToastAction>
            ),
          })
        }}
      >
        Toast with Action
      </Button>
    </div>
  )
}

// Story for demonstrating static toast structure
export const ToastStructure: Story = {
  render: () => (
    <Toast>
      <div className="grid gap-1">
        <ToastTitle>Toast Title</ToastTitle>
        <ToastDescription>Toast description goes here</ToastDescription>
      </div>
      <ToastClose />
    </Toast>
  ),
}

// Story for demonstrating dynamic toast usage
export const DynamicToast: Story = {
  render: () => <ToastDemo />,
}

// Story for demonstrating different variants
export const ToastVariants: Story = {
  render: () => <ToastVariantsDemo />,
}

// Story for demonstrating complex toast with action
const ComplexToastDemo = () => {
  const { toast } = useToast()

  return (
    <Button
      onClick={() => {
        toast({
          title: "Scheduled: Catch up",
          description: "Friday, February 10, 2024 at 5:57 PM",
          action: (
            <ToastAction altText="Goto schedule to undo">Undo</ToastAction>
          ),
        })
      }}
    >
      Show Complex Toast
    </Button>
  )
}

export const ComplexToast: Story = {
  render: () => <ComplexToastDemo />,
}

// Story for demonstrating multiple toasts
const MultipleToastsDemo = () => {
  const { toast } = useToast()

  const showMultipleToasts = () => {
    toast({
      title: "First Toast",
      description: "This is the first toast",
    })

    setTimeout(() => {
      toast({
        title: "Second Toast",
        description: "This is the second toast",
        variant: "default",
      })
    }, 1000)
  }

  return (
    <Button onClick={showMultipleToasts}>
      Show Multiple Toasts
    </Button>
  )
}

export const MultipleToasts: Story = {
  render: () => <MultipleToastsDemo />,
}

// Story for demonstrating toast with custom duration
const CustomDurationToastDemo = () => {
  const { toast } = useToast()

  return (
    <Button
      onClick={() => {
        toast({
          title: "Custom Duration",
          description: "This toast will disappear in 10 seconds",
          duration: 10000, 
        })
      }}
    >
      Show Long Duration Toast
    </Button>
  )
}

export const CustomDurationToast: Story = {
  render: () => <CustomDurationToastDemo />,
}

// Story for demonstrating programmatic toast dismissal
const DismissableToastDemo = () => {
  const { toast } = useToast()

  const showDismissableToast = () => {
    const { dismiss } = toast({
      title: "Dismissable Toast",
      description: "This toast can be dismissed programmatically",
    })

    // Automatically dismiss after 3 seconds
    setTimeout(dismiss, 3000)
  }

  return (
    <Button onClick={showDismissableToast}>
      Show Auto-dismissing Toast
    </Button>
  )
}

export const DismissableToast: Story = {
  render: (args) => <DismissableToastDemo  {...args}/>,
}