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
import React, { useState } from 'react';
import { useToast } from "@/hooks/use-toast";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from '@/components/ui/alert-dialog';

type Customer = {
    id: string;
    name: string;
    email: string;
    joinDate: string;
    totalOrders: number;
    isLoyal: boolean;
    initials: string;
};

const initialCustomers: Customer[] = [
    { id: 'cus-1', name: 'Ravi Kumar', email: 'ravi.k@example.com', joinDate: '2022-03-15', totalOrders: 45, isLoyal: true, initials: 'RK' },
    { id: 'cus-2', name: 'Priya Sharma', email: 'priya.s@example.com', joinDate: '2023-01-20', totalOrders: 22, isLoyal: true, initials: 'PS' },
    { id: 'cus-3', name: 'Amit Singh', email: 'amit.s@example.com', joinDate: '2023-08-10', totalOrders: 8, isLoyal: false, initials: 'AS' },
    { id: 'cus-4', name: 'Lakshmi Devi', email: 'lakshmi.d@example.com', joinDate: '2021-11-05', totalOrders: 78, isLoyal: true, initials: 'LD' },
    { id: 'cus-5', name: 'Sanjay Reddy', email: 'sanjay.r@example.com', joinDate: '2024-02-01', totalOrders: 3, isLoyal: false, initials: 'SR' },
];

export default function CustomersPage() {
  const [customers, setCustomers] = useState<Customer[]>(initialCustomers);
  const [customerToDelete, setCustomerToDelete] = useState<Customer | null>(null);
  const { toast } = useToast();

  const handleAddCustomer = () => {
    // This is a placeholder for a proper "Add Customer" form.
    const newId = `cus-${Date.now()}`;
    const newCustomer: Customer = {
        id: newId,
        name: 'New Customer',
        email: `new.${newId}@example.com`,
        joinDate: new Date().toISOString().split('T')[0],
        totalOrders: 0,
        isLoyal: false,
        initials: 'NC'
    };
    setCustomers(current => [newCustomer, ...current]);
    toast({ title: "Customer Added!", description: "A new customer has been added. Please edit their details." });
  };

  const handleRemoveConfirm = () => {
    if (!customerToDelete) return;
    setCustomers(current => current.filter(c => c.id !== customerToDelete.id));
    toast({ title: "Customer Removed!", description: `${customerToDelete.name} has been removed.`, variant: "destructive" });
    setCustomerToDelete(null);
  };


  return (
    <div className="p-4 sm:p-6 lg:p-8">
       <div className="flex items-center justify-between mb-6">
        <div>
            <h1 className="text-2xl font-bold tracking-tight">Customers</h1>
            <p className="text-muted-foreground">View and manage your customer list.</p>
        </div>
        <Button onClick={handleAddCustomer}>
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
                        <DropdownMenuItem onClick={() => toast({ title: "Coming Soon!", description: "Viewing customer details is not yet implemented."})}>View Details</DropdownMenuItem>
                        <DropdownMenuItem className="text-destructive focus:bg-destructive/10 focus:text-destructive" onClick={() => setCustomerToDelete(customer)}>Remove</DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
      <AlertDialog open={!!customerToDelete} onOpenChange={(open) => !open && setCustomerToDelete(null)}>
        <AlertDialogContent>
            <AlertDialogHeader>
                <AlertDialogTitle>Are you sure you want to remove this customer?</AlertDialogTitle>
                <AlertDialogDescription>This action cannot be undone. This will permanently remove <span className="font-semibold">{customerToDelete?.name}</span> from your customer list.</AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
                <AlertDialogCancel onClick={() => setCustomerToDelete(null)}>Cancel</AlertDialogCancel>
                <AlertDialogAction onClick={handleRemoveConfirm} className="bg-destructive hover:bg-destructive/90">Remove</AlertDialogAction>
            </AlertDialogFooter>
        </AlertDialogContent>
    </AlertDialog>
    </div>
  )
}
