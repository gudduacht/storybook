
import {Meta, StoryObj} from '@storybook/react';

import { Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious} from './carousel';


const meta = {
    title: 'primitives/Carousal',
    component: Carousel,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
}as Meta<typeof Carousel>;

export default meta;

type Story = StoryObj<typeof Carousel> ;


export const Default : Story = {
    render: () => (
        <Carousel orientation='horizontal'>
  <CarouselContent>
    <CarouselItem>1</CarouselItem>
    <CarouselItem>2</CarouselItem>
    <CarouselItem>3</CarouselItem>
  </CarouselContent>
  <CarouselPrevious />
  <CarouselNext />
</Carousel>
    ),


}
