import type { Meta, StoryObj } from '@storybook/react'
import { Separator } from './separator'

interface SeparatorStoryProps {
  orientation: 'horizontal' | 'vertical'
  decorative: boolean
  className?: string
  showContent: boolean
}

const meta = {
  title: 'UI/Separator',
  component: Separator,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Separator>

export default meta
type Story = StoryObj<SeparatorStoryProps>

export const Default: Story = {
  args: {
    orientation: 'horizontal',
    decorative: true,
    showContent: true,
  },
  argTypes: {
    orientation: {
      control: 'radio',
      options: ['horizontal', 'vertical'],
      description: 'The orientation of the separator',
    },
    decorative: {
      control: 'boolean',
      description: 'Whether the separator is decorative or semantic',
    },
    className: {
      control: 'text',
      description: 'Additional CSS classes',
    },
    showContent: {
      control: 'boolean',
      description: 'Show example content around separator',
    },
  },
  render: ({ orientation, decorative, className, showContent }) => (
    <div className={orientation === 'horizontal' ? 'w-[300px]' : 'h-[200px] flex'}>
      {showContent && (
        <>
          <div className={orientation === 'horizontal' ? 'space-y-1' : 'flex h-full items-center'}>
            <div>Navigation</div>
            <Separator
              orientation={orientation}
              decorative={decorative}
              className={className}
            />
            <div>Links</div>
          </div>
        </>
      )}
      {!showContent && (
        <Separator
          orientation={orientation}
          decorative={decorative}
          className={className}
        />
      )}
    </div>
  ),
}