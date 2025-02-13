import type { Meta, StoryObj } from '@storybook/react'
import { Skeleton } from './skeleton'

// Define custom props interface for the story
interface SkeletonStoryProps extends React.HTMLAttributes<HTMLDivElement> {
  width?: string
  height?: string
  borderRadius?: string
  animation?: 'pulse' | 'none'
  backgroundColor?: string
}

const meta = {
  title: 'PRIMITIVES/Skeleton',
  component: Skeleton,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    className: {
      control: 'text',
      description: 'Additional CSS classes to apply to the skeleton',
    },
    width: {
      control: { type: 'text' },
      description: 'Width of the skeleton',
      defaultValue: '200px',
      table: {
        category: 'Dimensions',
      },
    },
    height: {
      control: { type: 'text' },
      description: 'Height of the skeleton',
      defaultValue: '20px',
      table: {
        category: 'Dimensions',
      },
    },
    borderRadius: {
      control: { type: 'text' },
      description: 'Border radius of the skeleton',
      defaultValue: '0.375rem',
      table: {
        category: 'Appearance',
      },
    },
    animation: {
      control: { type: 'select' },
      options: ['pulse', 'none'],
      description: 'Animation style',
      defaultValue: 'pulse',
      table: {
        category: 'Animation',
      },
    },
    backgroundColor: {
      control: { type: 'color' },
      description: 'Background color of the skeleton',
      defaultValue: 'rgba(0, 0, 0, 0.1)',
      table: {
        category: 'Appearance',
      },
    },
  },
} satisfies Meta<SkeletonStoryProps>

export default meta
type Story = StoryObj<SkeletonStoryProps>

export const Default: Story = {
  render: (args) => {
    const { width, height, borderRadius, animation, backgroundColor, ...rest } = args
    
    const style = {
      width,
      height,
      borderRadius,
      backgroundColor,
    }

    const animationClass = animation === 'none' ? '' : 'animate-pulse'

    return (
      <Skeleton
        {...rest}
        className={`${animationClass} ${args.className || ''}`}
        style={style}
      />
    )
  },
  args: {
    width: '200px',
    height: '20px',
    borderRadius: '0.375rem',
    animation: 'pulse',
    backgroundColor: 'rgba(0, 0, 0, 0.1)',
  },
}