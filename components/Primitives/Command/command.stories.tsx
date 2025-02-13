
import { Meta, StoryObj } from '@storybook/react';
import {   Command,
  
    CommandInput,
    CommandList,
    CommandEmpty,
    CommandGroup,
    CommandItem,
    
    CommandSeparator,} from './command';


    const meta ={
        title: 'Primitives/Command',
        component: Command,
        parameters: {
            layout: 'centered',
        },
    }as Meta<typeof Command>;

    export default meta;

    type Story = StoryObj<typeof Command>;


    export const Default : Story = {
        render: () => (
            <Command>
            <CommandInput placeholder="Type a command or search..." />
            <CommandList>
              <CommandEmpty>No results found.</CommandEmpty>
              <CommandGroup heading="Suggestions">
                <CommandItem>Calendar</CommandItem>
                <CommandItem>Search Emoji</CommandItem>
                <CommandItem>Calculator</CommandItem>
              </CommandGroup>
              <CommandSeparator />
              <CommandGroup heading="Settings">
                <CommandItem>Profile</CommandItem>
                <CommandItem>Billing</CommandItem>
                <CommandItem>Settings</CommandItem>
              </CommandGroup>
            </CommandList>
          </Command>
              
        )
    }