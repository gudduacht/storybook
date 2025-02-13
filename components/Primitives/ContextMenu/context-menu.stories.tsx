import {Meta, StoryObj} from "@storybook/react";
import {
    ContextMenu,
    ContextMenuContent,
    ContextMenuItem,
    ContextMenuTrigger,
  } from "./context-menu";


const meta = {
  title: "Primitives/ContextMenu",
  component: ContextMenu,
  parameters: {
    layout: "centered",
  },  } as Meta<typeof ContextMenu>;

  export default meta;


  type Story = StoryObj<typeof ContextMenu>;

  export const Default: Story ={
    render: ()=>(
      <ContextMenu>
  <ContextMenuTrigger className="flex h-[150px] w-[300px] items-center justify-center rounded-md border border-dashed text-sm">Right click</ContextMenuTrigger>
  <ContextMenuContent>
    <ContextMenuItem>Profile</ContextMenuItem>
    <ContextMenuItem>Billing</ContextMenuItem>
    <ContextMenuItem>Team</ContextMenuItem>
    <ContextMenuItem>Subscription</ContextMenuItem>
  </ContextMenuContent>
</ContextMenu>
    )
  }