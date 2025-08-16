/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";
import type { DataTableProps, Column } from "./DataTable.types";

export const DataTable = <T extends { id: string | number }>({
  data,
  columns,
  loading = false,
  selectable = false,
  onRowSelect,
}: DataTableProps<T>) => {
  const [selectedRows, setSelectedRows] = useState<T[]>([]);
  const [sortKey, setSortKey] = useState<string | null>(null);
  const [sortOrder, setSortOrder] = useState<"asc" | "desc">("asc");

  const handleSort = (col: Column<T>) => {
    if (!col.accessor) return;
    const newOrder = sortKey === col.accessor && sortOrder === "asc" ? "desc" : "asc";
    setSortKey(String(col.accessor));
    setSortOrder(newOrder);
  };

  const sortedData = [...data].sort((a, b) => {
    if (!sortKey) return 0;
    const valA = (a as any)[sortKey];
    const valB = (b as any)[sortKey];
    return sortOrder === "asc" ? valA > valB ? 1 : -1 : valA < valB ? 1 : -1;
  });

  const toggleSelect = (row: T) => {
    let updated;
    if (selectedRows.includes(row)) {
      updated = selectedRows.filter(r => r !== row);
    } else {
      updated = [...selectedRows, row];
    }
    setSelectedRows(updated);
    onRowSelect?.(updated);
  };

  if (loading) return <p className="p-4 text-gray-500">Loading...</p>;
  if (!data.length) return <p className="p-4 text-gray-400">No data available</p>;

  return (
    <table className="w-full border border-gray-200 rounded-lg">
      <thead className="bg-gray-100">
        <tr>
          {selectable && <th className="p-2">Select</th>}
          {columns.map(col => (
            <th key={col.header} className="p-2 cursor-pointer" onClick={() => handleSort(col)}>
              {col.header} {sortKey === col.accessor ? (sortOrder === "asc" ? "⬆️" : "⬇️") : ""}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {sortedData.map(row => (
          <tr key={row.id} className="border-t">
            {selectable && (
              <td className="p-2">
                <input
                  type="checkbox"
                  checked={selectedRows.includes(row)}
                  onChange={() => toggleSelect(row)}
                />
              </td>
            )}
            {columns.map(col => (
              <td key={col.header} className="p-2">{col.cell ? col.cell(row) : (row as any)[col.accessor!]}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};
