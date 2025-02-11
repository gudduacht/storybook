import {Meta, StoryObj} from "@storybook/react";

import {
    Popover,
    PopoverTrigger,
    PopoverContent,
  } from "./popover";


const meta = {
    title: "ui/Popover",
    component: Popover,
    parameters: {
      layout: "centered",
    },  } as Meta<typeof Popover>;

    export default meta;


    type Story = StoryObj<typeof Popover>;

    export const Default: Story ={
        render: ()=>(<Popover>
            <PopoverTrigger>Open</PopoverTrigger>
            <PopoverContent>Place content for the popover here.</PopoverContent>
          </Popover>)
            }