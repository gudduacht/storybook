import { Meta, StoryObj } from "@storybook/react";

import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem
} from "./dropdown-menu";
import { Button } from "@/components/Primitives/Button/button";

const meta = {
  title: "Primitives/Dropdown-menu",
  component: DropdownMenu,
  parameters: {
    layout: "centered",
  },

  argTypes:{
    children: {
      control: {
        type: 'text'
      }
    }
  }
} as Meta<typeof DropdownMenu>;

export default meta;

type Story = StoryObj<typeof DropdownMenu>;

export const Default: Story = {
  render: () => (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline">open</Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuLabel>My Account</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem>Profile</DropdownMenuItem>
        <DropdownMenuItem>Billing</DropdownMenuItem>
        <DropdownMenuItem>Team</DropdownMenuItem>
        <DropdownMenuItem>Subscription</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  ),
};



export const RadioGroup: Story = {
    render: () => (
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="outline">open</Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuLabel>Radio Position</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuRadioGroup defaultValue="profile" value="profile">
            <DropdownMenuRadioItem value="profile">Profile</DropdownMenuRadioItem>
            <DropdownMenuRadioItem value="billing">Billing</DropdownMenuRadioItem>
            <DropdownMenuRadioItem value="team">Team</DropdownMenuRadioItem>
            <DropdownMenuRadioItem value="subscription">Subscription</DropdownMenuRadioItem>
            </DropdownMenuRadioGroup>
    
        </DropdownMenuContent>
      </DropdownMenu>
    ),
  };
