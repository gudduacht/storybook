import type { Meta, StoryObj } from '@storybook/react'
import { Home, Settings, Users, Mail, Bell } from 'lucide-react'
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupAction,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarInput,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarProvider,
  SidebarTrigger,
} from './sidebar'

interface SidebarStoryProps {
  side: 'left' | 'right'
  variant: 'sidebar' | 'floating' | 'inset'
  collapsible: 'offcanvas' | 'icon' | 'none'
  defaultCollapsed?: boolean
  showSearch?: boolean
  showHeader?: boolean
  showFooter?: boolean
}

const meta = {
  title: 'UI/Sidebar',
  component: Sidebar,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <div style={{ height: '100vh' }}>
        <Story />
      </div>
    ),
  ],
  argTypes: {
    side: {
      control: 'radio',
      options: ['left', 'right'],
      description: 'Side of the screen to show the sidebar',
      defaultValue: 'left',
    },
    variant: {
      control: 'select',
      options: ['sidebar', 'floating', 'inset'],
      description: 'Visual variant of the sidebar',
      defaultValue: 'sidebar',
    },
    collapsible: {
      control: 'select',
      options: ['offcanvas', 'icon', 'none'],
      description: 'Collapsible behavior',
      defaultValue: 'offcanvas',
    },
    defaultCollapsed: {
      control: 'boolean',
      description: 'Whether the sidebar should be collapsed by default',
      defaultValue: false,
    },
    showSearch: {
      control: 'boolean',
      description: 'Show search input in header',
      defaultValue: true,
    },
    showHeader: {
      control: 'boolean',
      description: 'Show header section',
      defaultValue: true,
    },
    showFooter: {
      control: 'boolean',
      description: 'Show footer section',
      defaultValue: true,
    },
  },
} satisfies Meta<SidebarStoryProps>

export default meta
type Story = StoryObj<SidebarStoryProps>

const menuItems = [
  { icon: Home, label: 'Home', active: true },
  { icon: Users, label: 'Users' },
  { icon: Mail, label: 'Messages' },
  { icon: Bell, label: 'Notifications' },
  { icon: Settings, label: 'Settings' },
]

export const Default: Story = {
  render: ({
    side,
    variant,
    collapsible,
    defaultCollapsed,
    showSearch,
    showHeader,
    showFooter,
  }) => {
    return (
      <SidebarProvider defaultCollapsed={defaultCollapsed}>
        <div className="flex h-full">
          <Sidebar side={side} variant={variant} collapsible={collapsible}>
            {showHeader && (
              <SidebarHeader>
                <div className="flex items-center gap-2 px-4 py-2">
                  <div className="h-6 w-6 rounded-full bg-primary" />
                  <span className="font-semibold">Company Name</span>
                </div>
                {showSearch && (
                  <div className="px-4 py-2">
                    <SidebarInput
                      placeholder="Search..."
                      className="w-full"
                    />
                  </div>
                )}
              </SidebarHeader>
            )}

            <SidebarContent>
              <SidebarGroup>
                <SidebarGroupLabel>Main Menu</SidebarGroupLabel>
                <SidebarGroupContent>
                  <SidebarMenu>
                    {menuItems.map((item, index) => (
                      <SidebarMenuItem key={index}>
                        <SidebarMenuButton
                          isActive={item.active}
                          tooltip={item.label}
                        >
                          <item.icon />
                          <span>{item.label}</span>
                        </SidebarMenuButton>
                      </SidebarMenuItem>
                    ))}
                  </SidebarMenu>
                </SidebarGroupContent>
                <SidebarGroupAction>
                  <SidebarTrigger />
                </SidebarGroupAction>
              </SidebarGroup>
            </SidebarContent>

            {showFooter && (
              <SidebarFooter>
                <div className="flex items-center gap-2 p-4">
                  <div className="h-8 w-8 rounded-full bg-muted" />
                  <div className="flex flex-col">
                    <span className="text-sm font-medium">John Doe</span>
                    <span className="text-xs text-muted-foreground">
                      abc@example.com
                    </span>
                  </div>
                </div>
              </SidebarFooter>
            )}
          </Sidebar>

          <div className="flex-1 p-8">
            <h1 className="text-2xl font-bold">Main Content</h1>
            <p className="mt-4 text-muted-foreground">
              This is the main content area. The sidebar can be toggled using the
              trigger button or keyboard shortcut.
            </p>
          </div>
        </div>
      </SidebarProvider>
    )
  },
  args: {
    side: 'left',
    variant: 'sidebar',
    collapsible: 'offcanvas',
    defaultCollapsed: false,
    showSearch: true,
    showHeader: true,
    showFooter: true,
  },
}

export const Floating: Story = {
  ...Default,
  args: {
    ...Default.args,
    variant: 'floating',
  },
}

export const Inset: Story = {
  ...Default,
  args: {
    ...Default.args,
    variant: 'inset',
  },
}

export const IconOnly: Story = {
  ...Default,
  args: {
    ...Default.args,
    collapsible: 'icon',
    defaultCollapsed: true,
  },
}