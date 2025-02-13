import { Meta, StoryObj } from "@storybook/react";

import { Progress } from "./progress";

const meta = {
  title: "Primitive/Progress",
  component: Progress,
  parameters: {
    layout: "centered",
  },

  argTypes: {
    value: {
      control: "number",
    },
    className: {
        control: "text", 
      },
   
  },
} as Meta<typeof Progress>;

export default meta;

type Story = StoryObj<typeof Progress>;

export const Default: Story = {
  render: (args) => <Progress {...args} />,

  args:{value:50,
    className: "bg-green-500"
  }
};
