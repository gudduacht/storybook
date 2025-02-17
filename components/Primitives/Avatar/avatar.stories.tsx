import type { Meta, StoryObj } from '@storybook/react';

import {  Avatar, AvatarImage } from './avatar';


const meta = {

  title: 'Primitives/Avatar',

  component: Avatar,
  parameters: {
    
    layout: 'centered',
  },
  
  tags: ['autodocs'],

  argTypes :{
    className :{control: "text"},
    children :{control: "text"},

 
  }

} satisfies Meta<typeof Avatar>;

export default meta;
type Story = StoryObj<typeof Avatar>;


export const Default: Story = {


    render: (args)=>(
        <Avatar className={args.className}>
        <AvatarImage src="https://static.remove.bg/sample-gallery/animals/animal-animal-photography-cat-2071882-thumbnail.png" alt="User Avatar" />
      </Avatar>
    ),

    args:{
        className :'bg-gray-200  text-black rounded-2xl',
       
    }
    


 
};
