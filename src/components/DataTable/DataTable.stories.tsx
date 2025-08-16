import type { Meta, StoryObj } from "@storybook/react-vite";
import { DataTable } from "./DataTable";

interface User {
  id: number;
  name: string;
  email: string;
}

const data: User[] = [
  { id: 1, name: "Alice", email: "alice@test.com" },
  { id: 2, name: "Bob", email: "bob@test.com" },
  { id: 3, name: "Charlie", email: "charlie@test.com" },
];

const columns = [
  { header: "Name", accessor: "name" as const },
  { header: "Email", accessor: "email" as const },
];

const meta: Meta<typeof DataTable<User>> = {
  title: "Components/DataTable",
  component: DataTable,
  tags: ["autodocs"],
};
export default meta;

type Story = StoryObj<typeof DataTable<User>>;

export const Default: Story = {
  args: {
    data,
    columns,
  },
};

export const Selectable: Story = {
  args: {
    data,
    columns,
    selectable: true,
  },
};

export const Loading: Story = {
  args: {
    data: [],
    columns,
    loading: true,
  },
};

export const Empty: Story = {
  args: {
    data: [],
    columns,
  },
};
