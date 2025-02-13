
import {Meta, StoryObj} from "@storybook/react";
import {HoverCard, HoverCardTrigger, HoverCardContent} from "./hovercard";
import { Button } from "@/components/Primitives/Button/button";

const meta ={
    title: "Primitives/HoverCard",
    component: HoverCard,
    parameters: {
        layout: "centered",
    },
}as Meta<typeof HoverCard>;


export default meta;    

type Story = StoryObj<typeof HoverCard>;

export const Default: Story ={

    render: () => (
        <HoverCard>
  <HoverCardTrigger  >
    <Button variant="outline">Hover me</Button>
  </HoverCardTrigger>
  <HoverCardContent>
    The React Framework – created and maintained by @vercel.
  </HoverCardContent>
</HoverCard>
    )

}