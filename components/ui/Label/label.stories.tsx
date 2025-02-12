import { Meta, StoryObj } from "@storybook/react";

import { Label } from "./label";

const meta = {
  title: "ui/Label",
  component: Label,
  parameters: {
    layout: "centered",
  },

  argTypes: {
    children: { control: "text" },
    className: { control: "text" },
    htmlFor: { control: "text" },

    style: { control:{
        color: { control: "color" },
        backgroundColor: { control: "color" },
    } },
  },
} as Meta<typeof Label>;

export default meta;

type Story = StoryObj<typeof Label>;

export const Default: Story = {
    args: {
        children: "Styled Label",
        className: "text-blue-500 text-lg",

        style: {
            color: "red",
         
        }
      },
  
};
