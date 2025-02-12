import { Meta, StoryObj } from "@storybook/react";

import { InputOTP, InputOTPGroup, InputOTPSlot ,InputOTPSeparator} from "./input-otp";

const meta = {
  title: "ui/InputOtp",
  component: InputOTP,
  parameters: {
    layout: "centered",
  }
} as Meta<typeof InputOTP>;

export default meta;

type Story = StoryObj<typeof InputOTP>;

export const Default: Story = {
  render: () => (
    <InputOTP maxLength={6} pattern="[0-9]*">
      <InputOTPGroup>
        <InputOTPSlot index={0} />
        <InputOTPSlot index={1} />
        <InputOTPSlot index={2} />

        <InputOTPSlot index={3} />
        <InputOTPSlot index={4} />
        <InputOTPSlot index={5} />
      </InputOTPGroup>
    </InputOTP>
  ),
};
export const Seperator: Story = {
  render: () => (
    <InputOTP maxLength={6} pattern="[0-9]*">
      <InputOTPGroup>
        <InputOTPSlot index={0} />
        <InputOTPSlot index={1} />
        <InputOTPSlot index={2} />
        </InputOTPGroup>
        <InputOTPSeparator/>
        <InputOTPGroup>
        <InputOTPSlot index={3} />
        <InputOTPSlot index={4} />
        <InputOTPSlot index={5} />
      </InputOTPGroup>
    </InputOTP>
  )
};