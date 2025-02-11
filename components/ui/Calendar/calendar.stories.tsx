
import { Meta, StoryObj } from '@storybook/react';

import { Calendar } from './calendar';



const meta = {
    title: 'ui/calendar',
    component: Calendar,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
} as Meta<typeof Calendar>;

export default meta;

type Story = StoryObj<typeof Calendar>;


export const Default: Story = {

    args: {
        showOutsideDays:false,
         
    }

}
