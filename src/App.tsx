import { DataTable } from "./components/DataTable/DataTable";
import { InputField } from "./components/InputField/InputField";

interface User {
  id: number;
  name: string;
  email: string;
  role: string;
}

const data: User[] = [
  { id: 1, name: "Alice Johnson", email: "alice@example.com", role: "Admin" },
  { id: 2, name: "Bob Smith", email: "bob@example.com", role: "Editor" },
  { id: 3, name: "Charlie Brown", email: "charlie@example.com", role: "Viewer" },
];

const columns = [
  { header: "Name", accessor: "name" as const },
  { header: "Email", accessor: "email" as const },
  { header: "Role", accessor: "role" as const },
];

function App() {
  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">Input Field</h1>
      <InputField label="Username" placeholder="Enter your name" />
      <h1 className="text-2xl font-bold mb-4">User DataTable</h1>
      <DataTable<User> data={data} columns={columns} selectable />
    </div>
  );
}

export default App;
