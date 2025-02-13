import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import { action } from "@storybook/addon-actions";
import { Badge } from "./badge";

const meta = {
  title: "Primitives/Button",

  component: Badge,
  parameters: {
    layout: "centered",
  },

  tags: ["autodocs"],
  args: { onClick: fn() },
} satisfies Meta<typeof Badge>;

export default meta;
type Story = StoryObj<typeof Badge>;

export const Default: Story = {
  args: {
    variant: "default",

    onClick: action("default  click"),
    children: "Default",
  },
};

export const Secondary: Story = {
  args: {
    variant: "secondary",

    children: "Secondary",
  },
};

export const Destructive: Story = {
  args: {
    variant: "destructive",

    children: "Destructive",
  },
};
export const Outline: Story = {
  args: {
    variant: "outline",

    children: "Outline",
  },
};
