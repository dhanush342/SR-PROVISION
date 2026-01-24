"use client";

import React, { useState } from 'react';
import { useStore } from "@/context/app-provider";
import { useToast } from "@/hooks/use-toast";
import type { Customer } from "@/lib/data";

import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { MoreVertical, Plus } from "lucide-react";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle } from '@/components/ui/alert-dialog';


export default function CustomersPage() {
  const { customers, addCustomer, deleteCustomer } = useStore();
  const [customerToDelete, setCustomerToDelete] = useState<Customer | null>(null);
  const { toast } = useToast();

  const handleAddCustomer = () => {
    const newId = `cus-${Date.now()}`;
    const newCustomer: Customer = {
        id: newId,
        name: 'New Customer',
        email: `new.${Date.now()}@example.com`,
        joinDate: new Date().toISOString().split('T')[0],
        totalOrders: 0,
        isLoyal: false,
        initials: 'NC'
    };
    addCustomer(newCustomer);
    toast({ title: "Customer Added!", description: "A new placeholder customer has been added. Please edit their details." });
  };

  const handleRemoveConfirm = () => {
    if (!customerToDelete) return;
    deleteCustomer(customerToDelete.id);
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
        <CardHeader>
            <CardTitle>All Customers</CardTitle>
            <CardDescription>A list of all customers in your records.</CardDescription>
        </CardHeader>
        <CardContent className="p-0">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Customer</TableHead>
                <TableHead className="hidden sm:table-cell">Email</TableHead>
                <TableHead className="hidden md:table-cell">Join Date</TableHead>
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
                        <div className="flex flex-col">
                          <span>{customer.name}</span>
                          <span className="text-muted-foreground text-xs sm:hidden">{customer.email}</span>
                        </div>
                    </div>
                  </TableCell>
                  <TableCell className="hidden sm:table-cell">{customer.email}</TableCell>
                  <TableCell className="hidden md:table-cell">{customer.joinDate}</TableCell>
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
                        <DropdownMenuItem onClick={() => toast({ title: "Coming Soon!", description: "Editing customer details is not yet implemented."})}>Edit Details</DropdownMenuItem>
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
