
import type { Meta, StoryObj } from '@storybook/react';

import {  Alert,AlertTitle, AlertDescription } from './alert';


const meta = {
  title: 'Primitives/Alert',
  component: Alert,
  parameters: {
    
    layout: 'centered',
  },
  
  tags: ['autodocs'],

} satisfies Meta<typeof Alert>;

export default meta;
type Story = StoryObj<typeof Alert>;


export const Default: Story = {

 args:{
    variant:'default',

    children:(   <Alert >
   
        <AlertTitle>Error</AlertTitle>
        <AlertDescription>
          Your session has expired. Please log in again.
        </AlertDescription>
      </Alert>)
 }



};

export const Destructive: Story = {

    
    args:{
        variant:'destructive',
  
        children:(   <Alert >
  
            <AlertTitle>Error</AlertTitle>
            <AlertDescription>
              Your session has expired. Please log in again.
            </AlertDescription>
          </Alert>)
     }
    };
