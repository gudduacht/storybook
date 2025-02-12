import type { Meta, StoryObj } from '@storybook/react'
import {
  Table,
  TableHeader,
  TableBody,
  TableFooter,
  TableHead,
  TableRow,
  TableCell,
  TableCaption,
} from './table'

const meta = {
  title: 'UI/Table',
  component: Table,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    className: {
      control: 'text',
      description: 'Additional CSS classes',
    },
  },
} satisfies Meta<typeof Table>

export default meta
type Story = StoryObj<typeof Table>

// Basic Table
export const Default: Story = {
  render: (args) => (
    <Table {...args}>
      <TableCaption>A list of your recent invoices.</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead>Invoice</TableHead>
          <TableHead>Status</TableHead>
          <TableHead>Method</TableHead>
          <TableHead className="text-right">Amount</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        <TableRow>
          <TableCell>INV001</TableCell>
          <TableCell>Paid</TableCell>
          <TableCell>Credit Card</TableCell>
          <TableCell className="text-right">$250.00</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>INV002</TableCell>
          <TableCell>Pending</TableCell>
          <TableCell>PayPal</TableCell>
          <TableCell className="text-right">$150.00</TableCell>
        </TableRow>
      </TableBody>
    </Table>
  ),
}

// Table with Footer
export const WithFooter: Story = {
  render: (args) => (
    <Table {...args}>
      <TableHeader>
        <TableRow>
          <TableHead>Product</TableHead>
          <TableHead>Quantity</TableHead>
          <TableHead>Price</TableHead>
          <TableHead className="text-right">Total</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        <TableRow>
          <TableCell>Product A</TableCell>
          <TableCell>2</TableCell>
          <TableCell>$100.00</TableCell>
          <TableCell className="text-right">$200.00</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>Product B</TableCell>
          <TableCell>1</TableCell>
          <TableCell>$150.00</TableCell>
          <TableCell className="text-right">$150.00</TableCell>
        </TableRow>
      </TableBody>
      <TableFooter>
        <TableRow>
          <TableCell colSpan={3}>Total Amount</TableCell>
          <TableCell className="text-right">$350.00</TableCell>
        </TableRow>
      </TableFooter>
    </Table>
  ),
}

// Table with Selection
export const WithSelection: Story = {
  render: (args) => (
    <Table {...args}>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[50px]">
            <input type="checkbox" role="checkbox" />
          </TableHead>
          <TableHead>Name</TableHead>
          <TableHead>Email</TableHead>
          <TableHead>Role</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        <TableRow>
          <TableCell>
            <input type="checkbox" role="checkbox" />
          </TableCell>
          <TableCell>John Doe</TableCell>
          <TableCell>john@example.com</TableCell>
          <TableCell>Admin</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>
            <input type="checkbox" role="checkbox" />
          </TableCell>
          <TableCell>Jane Smith</TableCell>
          <TableCell>jane@example.com</TableCell>
          <TableCell>User</TableCell>
        </TableRow>
      </TableBody>
    </Table>
  ),
}

// Table with Custom Styling
export const CustomStyling: Story = {
  render: (args) => (
    <Table {...args}>
      <TableHeader>
        <TableRow className="bg-primary hover:bg-primary">
          <TableHead className="text-primary-foreground">Name</TableHead>
          <TableHead className="text-primary-foreground">Status</TableHead>
          <TableHead className="text-primary-foreground">Role</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        <TableRow className="bg-muted/50">
          <TableCell>Alice Johnson</TableCell>
          <TableCell>
            <span className="inline-flex items-center rounded-full bg-green-100 px-2.5 py-0.5 text-xs font-medium text-green-800">
              Active
            </span>
          </TableCell>
          <TableCell>Developer</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>Bob Wilson</TableCell>
          <TableCell>
            <span className="inline-flex items-center rounded-full bg-yellow-100 px-2.5 py-0.5 text-xs font-medium text-yellow-800">
              Pending
            </span>
          </TableCell>
          <TableCell>Designer</TableCell>
        </TableRow>
      </TableBody>
    </Table>
  ),
}

// Table with Pagination
export const WithPagination: Story = {
  render: (args) => (
    <div className="flex flex-col gap-4">
      <Table {...args}>
        <TableHeader>
          <TableRow>
            <TableHead>ID</TableHead>
            <TableHead>Name</TableHead>
            <TableHead>Date</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {Array.from({ length: 5 }).map((_, i) => (
            <TableRow key={i}>
              <TableCell>{i + 1}</TableCell>
              <TableCell>User {i + 1}</TableCell>
              <TableCell>{new Date().toLocaleDateString()}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <div className="flex items-center justify-end space-x-2">
        <button className="px-4 py-2 border rounded hover:bg-muted">
          Previous
        </button>
        <button className="px-4 py-2 border rounded hover:bg-muted">
          Next
        </button>
      </div>
    </div>
  ),
}

// Table with Sorting Headers
export const WithSortingHeaders: Story = {
  render: (args) => (
    <Table {...args}>
      <TableHeader>
        <TableRow>
          <TableHead className="cursor-pointer hover:bg-muted/50">
            Name ↑
          </TableHead>
          <TableHead className="cursor-pointer hover:bg-muted/50">
            Age ↓
          </TableHead>
          <TableHead className="cursor-pointer hover:bg-muted/50">
            Location
          </TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        <TableRow>
          <TableCell>Alice</TableCell>
          <TableCell>25</TableCell>
          <TableCell>New York</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>Bob</TableCell>
          <TableCell>30</TableCell>
          <TableCell>London</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>Charlie</TableCell>
          <TableCell>28</TableCell>
          <TableCell>Paris</TableCell>
        </TableRow>
      </TableBody>
    </Table>
  ),
}