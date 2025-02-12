import type { Meta, StoryObj } from '@storybook/react'
import { ResizablePanelGroup, ResizablePanel, ResizableHandle } from './resizable'

interface ResizableStoryProps {
  direction?: 'horizontal' | 'vertical'
  withHandle?: boolean
  minSizes?: number[]
  defaultSizes?: number[]
}

const ResizableDemo: React.FC<ResizableStoryProps> = ({
  direction = 'horizontal',
  withHandle = true,
  minSizes = [20, 20],
  defaultSizes = [33, 67]
}) => (
  <div style={{ 
    width: direction === 'horizontal' ? '600px' : '400px', 
    height: direction === 'horizontal' ? '400px' : '600px'
  }}>
    <ResizablePanelGroup
      direction={direction}
      className="rounded-lg border"
    >
      <ResizablePanel
        defaultSize={defaultSizes[0]}
        minSize={minSizes[0]}
      >
        <div className="flex h-full items-center justify-center p-6">
          <span className="font-semibold">Panel 1</span>
        </div>
      </ResizablePanel>
      <ResizableHandle withHandle={withHandle} />
      <ResizablePanel
        defaultSize={defaultSizes[1]}
        minSize={minSizes[1]}
      >
        <div className="flex h-full items-center justify-center p-6">
          <span className="font-semibold">Panel 2</span>
        </div>
      </ResizablePanel>
    </ResizablePanelGroup>
  </div>
)

const meta: Meta<ResizableStoryProps> = {
  title: 'PRIMITIVES/Resizable',
  component: ResizableDemo,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    direction: {
      control: 'radio',
      options: ['horizontal', 'vertical'],
      description: 'The direction of the resize panels',
      defaultValue: 'horizontal'
    },
    withHandle: {
      control: 'boolean',
      description: 'Show grip handle on resize bar',
      defaultValue: true
    },
    minSizes: {
      control: 'object',
      description: 'Minimum sizes for each panel (in %)',
      defaultValue: [20, 20]
    },
    defaultSizes: {
      control: 'object',
      description: 'Default sizes for each panel (in %)',
      defaultValue: [33, 67]
    }
  }
}

export default meta
type Story = StoryObj<ResizableStoryProps>

export const Default: Story = {
  args: {
    direction: 'horizontal',
    withHandle: true,
    minSizes: [20, 20],
    defaultSizes: [33, 67]
  }
}

export const ThreePanels: Story = {
  args: {
    direction: 'horizontal',
    withHandle: true,
    minSizes: [15, 15, 15],
    defaultSizes: [30, 40, 30]
  },
  render: ({ direction = 'horizontal', withHandle = true, minSizes = [15, 15, 15], defaultSizes = [30, 40, 30] }) => (
    <div style={{ 
      width: direction === 'horizontal' ? '800px' : '400px', 
      height: direction === 'horizontal' ? '400px' : '800px'
    }}>
      <ResizablePanelGroup
        direction={direction}
        className="rounded-lg border"
      >
        <ResizablePanel
          defaultSize={defaultSizes[0]}
          minSize={minSizes[0]}
        >
          <div className="flex h-full items-center justify-center p-6">
            <span className="font-semibold">Panel 1</span>
          </div>
        </ResizablePanel>
        <ResizableHandle withHandle={withHandle} />
        <ResizablePanel
          defaultSize={defaultSizes[1]}
          minSize={minSizes[1]}
        >
          <div className="flex h-full items-center justify-center p-6">
            <span className="font-semibold">Panel 2</span>
          </div>
        </ResizablePanel>
        <ResizableHandle withHandle={withHandle} />
        <ResizablePanel
          defaultSize={defaultSizes[2]}
          minSize={minSizes[2]}
        >
          <div className="flex h-full items-center justify-center p-6">
            <span className="font-semibold">Panel 3</span>
          </div>
        </ResizablePanel>
      </ResizablePanelGroup>
    </div>
  )
}