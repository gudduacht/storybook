import { Meta, StoryObj } from "@storybook/react";
import { useForm } from "react-hook-form";

import {
  Form,
  FormItem,
  FormLabel,
  FormControl,
  FormDescription,
  FormMessage,
  FormField,
} from "./form";

import { Input } from "@/components/ui/InputField/input";
import { Button } from "@/components/ui/Button/button"; // Ensure correct import

const meta = {
  title: "Primitive/Form",
  component: Form,
  parameters: {
    layout: "centered",
  },
} as Meta<typeof Form>;

export default meta;

type Story = StoryObj<typeof Form>;

// ✅ Define a separate React component
const FormComponent = () => {
  const form = useForm({
    defaultValues: {
      username: "",
    },
  });

  const onSubmit = (data: { username: string }) => {
    console.log("Form Submitted:", data);
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="username"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Username</FormLabel>
              <FormControl>
                <Input placeholder="shadcn" {...field} />
              </FormControl>
              <FormDescription>
                This is your public display name.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">Submit</Button>
      </form>
    </Form>
  );
};

// ✅ Use the component inside Storybook
export const Default: Story = {
  render: () => <FormComponent />, // ✅ Using a valid React function component
};
