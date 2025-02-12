import type { Meta, StoryObj } from '@storybook/react';

import { AlertDialog,
  AlertDialogTrigger,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogAction,
  AlertDialogCancel, } from './AlertDialog';
  import { Button } from "@/components/ui/Button/button";

const meta = {
  title: 'ui/AlertDialog',
  component: AlertDialog,
  parameters: {
    
    layout: 'centered',
  },
  
  tags: ['autodocs'],
args: { },
} satisfies Meta<typeof AlertDialog>;

export default meta;
type Story = StoryObj<typeof AlertDialog>;


export const Default: Story = {
 render : () =>(<AlertDialog>
  <AlertDialogTrigger asChild>
    <Button variant="outline">Open Alert</Button>
  </AlertDialogTrigger>
  <AlertDialogContent>
    <AlertDialogHeader>
      <AlertDialogTitle>Are you sure?</AlertDialogTitle>
      <AlertDialogDescription>
        This action cannot be undone. This will permanently delete your data.
      </AlertDialogDescription>
    </AlertDialogHeader>
    <AlertDialogFooter>
      <AlertDialogCancel>Cancel</AlertDialogCancel>
      <AlertDialogAction>Continue</AlertDialogAction>
    </AlertDialogFooter>
  </AlertDialogContent>
</AlertDialog>)
};
