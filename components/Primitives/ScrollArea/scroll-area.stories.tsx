import type { Meta, StoryObj } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { ScrollArea, ScrollBar } from './scroll-area'

interface ScrollAreaStoryProps {
  orientation?: 'vertical' | 'horizontal' | 'both'
  height?: string
  width?: string
  className?: string
  content?: string
}

const meta = {
  title: 'Primitives/ScrollArea',
  component: ScrollArea,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    orientation: {
      control: 'radio',
      options: ['vertical', 'horizontal', 'both'],
      description: 'The scroll direction',
      defaultValue: 'vertical'
    },
    height: {
      control: 'text',
      description: 'Height of the scroll area',
      defaultValue: '200px'
    },
    width: {
      control: 'text',
      description: 'Width of the scroll area',
      defaultValue: '350px'
    },
    className: {
      control: 'text',
      description: 'Additional CSS classes'
    },
    content: {
      control: 'text',
      description: 'Content to display (for demo purposes)',
    }
  }
} satisfies Meta<ScrollAreaStoryProps>

export default meta
type Story = StoryObj<ScrollAreaStoryProps>

const DEMO_CONTENT = `
  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor 
  incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis 
  nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
  Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore 
  eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt 
  in culpa qui officia deserunt mollit anim id est laborum.

  Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium 
  doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore 
  veritatis et quasi architecto beatae vitae dicta sunt explicabo.
`.repeat(3)

export const Default: Story = {
  args: {
    orientation: 'vertical',
    height: '200px',
    width: '350px',
    content: DEMO_CONTENT
  },
  render: ({ orientation = 'vertical', height, width, content = DEMO_CONTENT }) => (
    <ScrollArea 
      className="rounded-md border p-4"
      style={{ height, width }}
    >
      <div 
        className={orientation === 'horizontal' ? "flex w-[600px] gap-4" : "text-sm"}
        onScroll={action('scrolled')}
      >
        {orientation === 'horizontal' ? (
          Array.from({ length: 5 }).map((_, i) => (
            <div
              key={i}
              className="w-[150px] shrink-0 rounded-md border p-4"
            >
              <div className="text-sm">Card {i + 1}</div>
              <div className="mt-2 text-sm text-muted-foreground">
                This is a scrollable card demonstrating horizontal scroll
              </div>
            </div>
          ))
        ) : (
          content
        )}
      </div>
      {(orientation === 'vertical' || orientation === 'both') && (
        <ScrollBar orientation="vertical" />
      )}
      {(orientation === 'horizontal' || orientation === 'both') && (
        <ScrollBar orientation="horizontal" />
      )}
    </ScrollArea>
  ),
}