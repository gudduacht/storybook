import {Meta, StoryObj} from "@storybook/react";

import { Drawer,
 
    DrawerTrigger,
    DrawerClose,
    DrawerContent,
    DrawerHeader,
    DrawerFooter,
    DrawerTitle,
    DrawerDescription,} from './drawer';

    import { Button } from "@/lib/Primitives/Button/button";

    const meta ={
        title:'primitives/Drawer',
        component:Drawer,
        parameters:{
            layout:'centered',
        },
    }as Meta<typeof Drawer>;


    export default meta;

    type Story = StoryObj<typeof Drawer>;

    export const Default : Story ={

        render:()=>(
            <Drawer>
  <DrawerTrigger>Open</DrawerTrigger>
  <DrawerContent>
    <DrawerHeader>
      <DrawerTitle>Are you absolutely sure?</DrawerTitle>
      <DrawerDescription>This action cannot be undone.</DrawerDescription>
    </DrawerHeader>
    <DrawerFooter>
      <Button>Submit</Button>
      <DrawerClose>
        <Button variant="outline">Cancel</Button>
      </DrawerClose>
    </DrawerFooter>
  </DrawerContent>
</Drawer>

        )
    }