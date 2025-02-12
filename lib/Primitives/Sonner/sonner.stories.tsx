import type { Meta, StoryObj } from '@storybook/react'
import { Toaster } from './sonner'
import { toast } from 'sonner'
import { Button } from '@/lib/Primitives/Button/button'
import { useTheme } from 'next-themes'

type ToasterTheme = "system" | "light" | "dark"
type ToastType = 'default' | 'success' | 'error' | 'info' | 'warning' | 'action' | 'promise' | 'custom'

// Define the props type including our custom story props
type StoryProps = Omit<React.ComponentProps<typeof Toaster>, 'theme'> & {
  theme?: ToasterTheme;
  toastType: ToastType;
}

const meta = {
  title: 'PRIMITIVES/Sonner',
  component: Toaster,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    theme: {
      control: 'radio',
      options: ['system', 'light', 'dark'] as ToasterTheme[],
      description: 'The theme of the toaster',
      defaultValue: 'system'
    },
    position: {
      control: 'select',
      options: [
        'top-left',
        'top-right',
        'bottom-left',
        'bottom-right',
        'top-center',
        'bottom-center'
      ],
      description: 'The position of the toaster',
      defaultValue: 'bottom-right'
    },
    expand: {
      control: 'boolean',
      description: 'Whether to expand the toaster',
      defaultValue: false
    },
    duration: {
      control: 'number',
      description: 'The duration of the toast in milliseconds',
      defaultValue: 4000
    },
    visibleToasts: {
      control: 'number',
      description: 'The number of visible toasts',
      defaultValue: 3
    },
    closeButton: {
      control: 'boolean',
      description: 'Whether to show the close button',
      defaultValue: true
    },
    offset: {
      control: 'number',
      description: 'The offset from the edge of the screen',
      defaultValue: 32
    },
    toastType: {
      control: 'select',
      options: ['default', 'success', 'error', 'info', 'warning', 'action', 'promise', 'custom'] as ToastType[],
      description: 'Type of toast to display',
      defaultValue: 'default',
      table: {
        category: 'Story Controls'
      }
    }
  },
} satisfies Meta<StoryProps>

export default meta
type Story = StoryObj<StoryProps>

const ToasterDemo = ({ 
  args, 
  children 
}: { 
  args: Partial<StoryProps>, 
  children: React.ReactNode 
}) => {
  const { theme: themeHook } = useTheme()
  const { toastType, theme, ...toasterProps } = args
  
  return (
    <div>
      {children}
      <Toaster {...toasterProps} theme={(theme || themeHook) as ToasterTheme} />
    </div>
  )
}

export const Default: Story = {
  args: {
    position: 'bottom-right',
    expand: false,
    duration: 4000,
    visibleToasts: 3,
    closeButton: true,
    offset: 32,
    theme: 'system',
    toastType: 'default'
  },
  render: (args) => {
    const showToast = () => {
      switch (args.toastType) {
        case 'success':
          toast.success('Success message', {
            description: 'Operation completed successfully',
          })
          break
        case 'error':
          toast.error('Error message', {
            description: 'Something went wrong',
          })
          break
        case 'info':
          toast.info('Info message', {
            description: 'Here is some information',
          })
          break
        case 'warning':
          toast.warning('Warning message', {
            description: 'Please be careful',
          })
          break
        case 'action':
          toast('Item deleted', {
            description: 'The item has been deleted.',
            action: {
              label: 'Undo',
              onClick: () => console.log('Undo clicked'),
            },
          })
          break
        case 'promise':
          toast.promise(
            new Promise((resolve) => setTimeout(resolve, 2000)),
            {
              loading: 'Loading...',
              success: 'Data loaded successfully',
              error: 'Error loading data',
            }
          )
          break
        case 'custom':
          toast('Custom styled toast', {
            description: 'This toast has custom styling',
            className: 'bg-purple-500 text-white',
          })
          break
        default:
          toast('Default toast message', {
            description: 'This is a default toast notification',
          })
      }
    }

    return (
      <ToasterDemo args={args}>
        <div className="flex flex-col gap-4">
          <Button onClick={showToast}>
            Show {args.toastType} Toast
          </Button>
        </div>
      </ToasterDemo>
    )
  },
}