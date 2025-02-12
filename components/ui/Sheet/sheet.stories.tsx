import type { Meta, StoryObj } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetFooter,
  SheetClose,
} from './sheet'
import { Button } from '../Button/button'
import * as React from 'react'

interface StoryProps {
  side: 'top' | 'right' | 'bottom' | 'left'
  showHeader: boolean
  showFooter: boolean
  showDescription: boolean
  title: string
  description: string
}

const meta = {
  title: 'UI/Sheet',
  component: Sheet,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Sheet>

export default meta
type Story = StoryObj<StoryProps>

export const Default: Story = {
  args: {
    side: 'right',
    showHeader: true,
    showFooter: true,
    showDescription: true,
    title: 'Sheet Title',
    description: 'This is a description of the sheet.',
  },
  argTypes: {
    side: {
      control: 'radio',
      options: ['top', 'right', 'bottom', 'left'],
      description: 'The side the sheet appears from',
    },
    showHeader: {
      control: 'boolean',
      description: 'Show/hide the header section',
    },
    showFooter: {
      control: 'boolean',
      description: 'Show/hide the footer section',
    },
    showDescription: {
      control: 'boolean',
      description: 'Show/hide the description',
    },
    title: {
      control: 'text',
      description: 'Sheet title',
    },
    description: {
      control: 'text',
      description: 'Sheet description',
    },
  },
  render: ({ side, showHeader, showFooter, showDescription, title, description }) => {
    const [open, setOpen] = React.useState(false)

    return (
      <Sheet open={open} onOpenChange={setOpen}>
        <SheetTrigger asChild>
          <Button variant="outline" onClick={action('triggerClicked')}>
            Open Sheet
          </Button>
        </SheetTrigger>
        <SheetContent side={side}>
          {showHeader && (
            <SheetHeader>
              <SheetTitle>{title}</SheetTitle>
              {showDescription && (
                <SheetDescription>{description}</SheetDescription>
              )}
            </SheetHeader>
          )}
          <div className="py-6">
            <p>Your sheet content goes here</p>
            <p>Sheet state: {open ? 'Open' : 'Closed'}</p>
          </div>
          {showFooter && (
            <SheetFooter>
              <SheetClose asChild>
                <Button variant="outline" onClick={action('cancelClicked')}>
                  Cancel
                </Button>
              </SheetClose>
              <Button onClick={action('saveClicked')}>Save changes</Button>
            </SheetFooter>
          )}
        </SheetContent>
      </Sheet>
    )
  },
}