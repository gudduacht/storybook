import type { Meta, StoryObj } from '@storybook/react';

import Image from "next/image"

import { AspectRatio } from './aspect-ratio';


const meta = {

  title: 'Primitives/AspectRatio',

  component: AspectRatio,
  parameters: {
    
    layout: 'fullscreen',
  },

  argTypes:{
    className: { control: "text" },
    ratio: { control: "number" },
  },
  
  tags: ['autodocs'],

} satisfies Meta<typeof AspectRatio>;

export default meta;
type Story = StoryObj<typeof AspectRatio>;


export const Default: Story = {

    args:{
ratio:16/9,
className:'rounded-md object-cover shadow'
    },

render:(args)=>(
    <AspectRatio ratio={args.ratio} className={args.className}>
    <Image src="https://static.remove.bg/sample-gallery/animals/animal-animal-photography-cat-2071882-thumbnail.png" alt="Image" fill   style={{ objectFit: "cover" }}/>
  </AspectRatio>
),

};
