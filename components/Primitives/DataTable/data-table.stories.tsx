import type { Meta, StoryObj } from '@storybook/react'
import { DataTable } from './data-table'
import { ColumnDef } from '@tanstack/react-table'
import { Checkbox } from "@/components/Primitives/CheckBox/Checkbox"

interface Payment {
  id: string
  amount: number
  status: "pending" | "processing" | "success" | "failed"
  email: string
}

const meta = {
  title: 'Primitives/DataTable',
  component: DataTable<Payment, unknown>,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof DataTable<Payment, unknown>>

export default meta
type Story = StoryObj<typeof DataTable<Payment, unknown>>

// Generate more example data
const data: Payment[] = Array.from({ length: 100 }, (_, i) => ({
  id: `${i + 1}`,
  amount: Math.floor(Math.random() * 1000),
  status: ["pending", "processing", "success", "failed"][
    Math.floor(Math.random() * 4)
  ] as Payment["status"],
  email: `user${i + 1}@example.com`,
}))

const columns: ColumnDef<Payment, unknown>[] = [
  {
    id: "select",
    header: ({ table }) => (
      <Checkbox
        checked={table.getIsAllPageRowsSelected()}
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label="Select all"
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label="Select row"
      />
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "id",
    header: "ID",
    cell: ({ row }) => <div className="w-[80px]">{row.getValue("id")}</div>,
  },
  {
    accessorKey: "email",
    header: "Email",
    cell: ({ row }) => (
      <div className="flex items-center gap-2">
        <div className="font-medium">{row.getValue("email")}</div>
      </div>
    ),
  },
  {
    accessorKey: "amount",
    header: "Amount",
    cell: ({ row }) => {
      const amount = parseFloat(row.getValue("amount"))
      const formatted = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
      }).format(amount)
      return <div className="text-right font-medium">{formatted}</div>
    },
  },
  {
    accessorKey: "status",
    header: "Status",
    cell: ({ row }) => {
      const status = row.getValue("status") as Payment["status"]
      return (
        <div className="flex w-[100px] items-center">
          <span
            className={`inline-flex items-center rounded-full px-2 py-1 text-xs font-medium ${
              {
                pending: "bg-yellow-100 text-yellow-800",
                processing: "bg-blue-100 text-blue-800",
                success: "bg-green-100 text-green-800",
                failed: "bg-red-100 text-red-800",
              }[status]
            }`}
          >
            {status}
          </span>
        </div>
      )
    },
  },
]

export const Default: Story = {
  args: {
    data,
    columns,
  },
}

export const WithoutFilters: Story = {
  args: {
    data,
    columns,
    showFilters: false,
  },
}

export const WithoutPagination: Story = {
  args: {
    data: data.slice(0, 5),
    columns,
    showPagination: false,
  },
}

export const CustomStyling: Story = {
  args: {
    data,
    columns,
    className: "border-2 border-primary",
  },
}