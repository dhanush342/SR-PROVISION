"use client";

import {
  Card,
  CardContent,
} from "@/components/ui/card";
import {
  Table,
  TableHeader,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { MoreVertical, Plus } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

const customers = [
    { id: 'cus-1', name: 'Ravi Kumar', email: 'ravi.k@example.com', joinDate: '2022-03-15', totalOrders: 45, isLoyal: true, initials: 'RK' },
    { id: 'cus-2', name: 'Priya Sharma', email: 'priya.s@example.com', joinDate: '2023-01-20', totalOrders: 22, isLoyal: true, initials: 'PS' },
    { id: 'cus-3', name: 'Amit Singh', email: 'amit.s@example.com', joinDate: '2023-08-10', totalOrders: 8, isLoyal: false, initials: 'AS' },
    { id: 'cus-4', name: 'Lakshmi Devi', email: 'lakshmi.d@example.com', joinDate: '2021-11-05', totalOrders: 78, isLoyal: true, initials: 'LD' },
    { id: 'cus-5', name: 'Sanjay Reddy', email: 'sanjay.r@example.com', joinDate: '2024-02-01', totalOrders: 3, isLoyal: false, initials: 'SR' },
];

export default function CustomersPage() {
  return (
    <div className="p-4 sm:p-6 lg:p-8">
       <div className="flex items-center justify-between mb-6">
        <div>
            <h1 className="text-2xl font-bold tracking-tight">Customers</h1>
            <p className="text-muted-foreground">View and manage your customer list.</p>
        </div>
        <Button>
          <Plus className="mr-2 h-4 w-4" />
          Add Customer
        </Button>
      </div>

      <Card>
        <CardContent className="p-0">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Customer</TableHead>
                <TableHead>Email</TableHead>
                <TableHead>Join Date</TableHead>
                <TableHead className="text-center">Total Orders</TableHead>
                <TableHead>Status</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {customers.map((customer) => (
                <TableRow key={customer.id}>
                  <TableCell className="font-medium">
                    <div className="flex items-center gap-3">
                        <Avatar className="h-8 w-8">
                            <AvatarFallback>{customer.initials}</AvatarFallback>
                        </Avatar>
                        {customer.name}
                    </div>
                  </TableCell>
                  <TableCell>{customer.email}</TableCell>
                  <TableCell>{customer.joinDate}</TableCell>
                  <TableCell className="text-center">{customer.totalOrders}</TableCell>
                  <TableCell>
                    {customer.isLoyal && <Badge variant="secondary">Loyal</Badge>}
                  </TableCell>
                  <TableCell className="text-right">
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="ghost" size="icon">
                          <MoreVertical className="h-4 w-4" />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <DropdownMenuItem>View Details</DropdownMenuItem>
                        <DropdownMenuItem className="text-destructive focus:bg-destructive/10 focus:text-destructive">Remove</DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  )
}
