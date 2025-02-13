import {Meta , StoryObj} from '@storybook/react';


import {Accordion, AccordionItem, AccordionTrigger, AccordionContent} from './accordion';

const meta ={

    title: 'Primitive/Accordion',
    component: Accordion,
  parameters: {
    
    layout: 'centered',
  },


}as Meta<typeof Accordion>


export default meta;


type Story =StoryObj<typeof Accordion>;


export const Default : Story ={
render:()=>(

    <Accordion type="single" collapsible>
  <AccordionItem value="item-1">
    <AccordionTrigger>Is it accessible?</AccordionTrigger>
    <AccordionContent>
      Yes. It adheres to the WAI-ARIA design pattern.
    </AccordionContent>
  </AccordionItem>
</Accordion>

)
}