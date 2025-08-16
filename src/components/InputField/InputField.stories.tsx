import type { Meta, StoryObj } from "@storybook/react-vite";
import { InputField } from "./InputField";

const meta: Meta<typeof InputField> = {
  title: "Components/InputField",
  component: InputField,
  tags: ["autodocs"],
};
export default meta;

type Story = StoryObj<typeof InputField>;

export const Default: Story = {
  args: {
    label: "Username",
    placeholder: "Enter username",
  },
};

export const Error: Story = {
  args: {
    label: "Email",
    invalid: true,
    errorMessage: "Invalid email address",
  },
};

export const Password: Story = {
  args: {
    label: "Password",
    placeholder: "Enter password",
  },
};
