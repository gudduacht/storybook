"use-client";

import type { Meta, StoryObj } from "@storybook/react";
import {
  DataTable,
  DataTableHeader,
  DataTableBody,
  DataTableHead,
  DataTableRow,
  DataTableCell,
} from "./data-table";
import {
  ColumnDef,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";

const meta = {
  title: "Components/DataTable",
  component: DataTable,
  parameters: {
    layout: "centered",
    backgrounds: {
        default: 'dark',
      },
  },
  tags: ["autodocs"],
  argTypes: {
    className: {
      control: "text",
      description: "Additional CSS classes",
    },
  },
} satisfies Meta<typeof DataTable>;

export default meta;
type Story = StoryObj<typeof DataTable>;

interface Data {
  id: number;
  name: string;
  age: number;
}

const sampleData: Data[] = [
  { id: 1, name: "John Doe", age: 30 },
  { id: 2, name: "Jane Smith", age: 25 },
  { id: 3, name: "Alice Johnson", age: 28 },
];

const columns: ColumnDef<Data>[] = [
  {
    accessorKey: "id",
    header: "ID",
    cell: ({ getValue }) => getValue(),
  },
  {
    accessorKey: "name",
    header: "Name",
    cell: ({ getValue }) => getValue(),
  },
  {
    accessorKey: "age",
    header: "Age",
    cell: ({ getValue }) => getValue(),
  },
];

export const Default: Story = {
  render: (args) => <Render {...args} columns={columns} data={sampleData} />,
};

interface DataTableProps<TData, TValue> {
  columns: ColumnDef<TData, TValue>[];
  data: TData[];
}

const Render = <TData, TValue>({
  columns,
  data,
}: DataTableProps<TData, TValue>) => {
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });
  return (
    <div className="rounded-md border">
      <DataTable>
        <DataTableHeader>
          {table.getHeaderGroups().map((headerGroup) => (
            <DataTableRow key={headerGroup.id}>
              {headerGroup.headers.map((header) => {
                return (
                  <DataTableHead key={header.id}>
                    {header.isPlaceholder
                      ? null
                      : flexRender(
                          header.column.columnDef.header,
                          header.getContext()
                        )}
                  </DataTableHead>
                );
              })}
            </DataTableRow>
          ))}
        </DataTableHeader>
        <DataTableBody>
          {table.getRowModel().rows?.length ? (
            table.getRowModel().rows.map((row) => (
              <DataTableRow
                key={row.id}
                data-state={row.getIsSelected() && "selected"}
              >
                {row.getVisibleCells().map((cell) => (
                  <DataTableCell key={cell.id}>
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </DataTableCell>
                ))}
              </DataTableRow>
            ))
          ) : (
            <DataTableRow>
              <DataTableCell
                colSpan={columns.length}
                className="h-24 text-center"
              >
                No results.
              </DataTableCell>
            </DataTableRow>
          )}
        </DataTableBody>
      </DataTable>
    </div>
  );
};
