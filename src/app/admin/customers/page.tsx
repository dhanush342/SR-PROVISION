"use client";

import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
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
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetDescription, SheetFooter, SheetClose } from '@/components/ui/sheet';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Switch } from '@/components/ui/switch';


const customerFormSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Invalid email address"),
  isLoyal: z.boolean(),
});
type CustomerFormValues = z.infer<typeof customerFormSchema>;

export default function CustomersPage() {
  const { customers, addCustomer, updateCustomer, deleteCustomer } = useStore();
  const [customerToDelete, setCustomerToDelete] = useState<Customer | null>(null);
  const [editingCustomer, setEditingCustomer] = useState<Customer | null>(null);
  const [isSheetOpen, setSheetOpen] = useState(false);
  const { toast } = useToast();

  const form = useForm<CustomerFormValues>({
    resolver: zodResolver(customerFormSchema),
    defaultValues: { name: "", email: "", isLoyal: false },
  });

  React.useEffect(() => {
    if (isSheetOpen) {
      if (editingCustomer) {
        form.reset({
          name: editingCustomer.name,
          email: editingCustomer.email,
          isLoyal: editingCustomer.isLoyal,
        });
      } else {
        form.reset({ name: "", email: "", isLoyal: false });
      }
    }
  }, [isSheetOpen, editingCustomer, form]);

  const handleAddNew = () => {
    setEditingCustomer(null);
    setSheetOpen(true);
  };
  
  const handleEdit = (customer: Customer) => {
    setEditingCustomer(customer);
    setSheetOpen(true);
  };

  const handleRemoveConfirm = async () => {
    if (!customerToDelete) return;
    await deleteCustomer(customerToDelete.id);
    toast({ title: "Customer Removed!", description: `${customerToDelete.name} has been removed.`, variant: "destructive" });
    setCustomerToDelete(null);
  };

  async function onSubmit(data: CustomerFormValues) {
    if (editingCustomer) {
      const updatedCustomer: Customer = {
        ...editingCustomer,
        ...data,
        initials: data.name.split(' ').map(n => n[0]).join('').toUpperCase(),
      };
      await updateCustomer(updatedCustomer);
      toast({ title: "Customer Updated!", description: `Details for ${data.name} have been updated.` });
    } else {
        const newCustomer: Omit<Customer, 'id'> = {
            ...data,
            joinDate: new Date().toISOString().split('T')[0],
            totalOrders: 0,
            initials: data.name.split(' ').map(n => n[0]).join('').toUpperCase()
        };
        await addCustomer(newCustomer);
        toast({ title: "Customer Added!", description: `${data.name} has been added to your records.` });
    }
    setSheetOpen(false);
  }


  return (
    <div className="p-4 sm:p-6 lg:p-8">
       <div className="flex items-center justify-between mb-6">
        <div>
            <h1 className="text-2xl font-bold tracking-tight">Customers</h1>
            <p className="text-muted-foreground">View and manage your customer list.</p>
        </div>
        <Button onClick={handleAddNew}>
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
          <div className="overflow-x-auto">
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
                          <Button variant="ghost" size="icon" aria-label={`Actions for ${customer.name}`}>
                            <MoreVertical className="h-4 w-4" />
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                          <DropdownMenuItem onClick={() => handleEdit(customer)}>Edit Details</DropdownMenuItem>
                          <DropdownMenuItem className="text-destructive focus:bg-destructive/10 focus:text-destructive" onClick={() => setCustomerToDelete(customer)}>Remove</DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </CardContent>
      </Card>
      
      <Sheet open={isSheetOpen} onOpenChange={setSheetOpen}>
        <SheetContent className="sm:max-w-md">
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col h-full">
                    <SheetHeader>
                        <SheetTitle>{editingCustomer ? "Edit Customer" : "Add New Customer"}</SheetTitle>
                        <SheetDescription>{editingCustomer ? "Update customer details." : "Create a new customer record."}</SheetDescription>
                    </SheetHeader>
                    <div className="py-4 space-y-4 flex-grow">
                        <FormField control={form.control} name="name" render={({ field }) => (
                            <FormItem><FormLabel>Full Name</FormLabel><FormControl><Input placeholder="e.g., Ravi Kumar" {...field} /></FormControl><FormMessage /></FormItem>
                        )}/>
                        <FormField control={form.control} name="email" render={({ field }) => (
                            <FormItem><FormLabel>Email Address</FormLabel><FormControl><Input placeholder="e.g., ravi.k@example.com" {...field} /></FormControl><FormMessage /></FormItem>
                        )}/>
                         <FormField control={form.control} name="isLoyal" render={({ field }) => (
                            <FormItem className="flex flex-row items-center justify-between rounded-lg border p-3 shadow-sm">
                              <div className="space-y-0.5">
                                <FormLabel>Loyalty Member</FormLabel>
                                <FormMessage />
                              </div>
                              <FormControl><Switch checked={field.value} onCheckedChange={field.onChange} /></FormControl>
                            </FormItem>
                        )}/>
                    </div>
                    <SheetFooter>
                        <SheetClose asChild><Button type="button" variant="secondary">Cancel</Button></SheetClose>
                        <Button type="submit" disabled={form.formState.isSubmitting}>{editingCustomer ? "Save Changes" : "Create Customer"}</Button>
                    </SheetFooter>
                </form>
            </Form>
        </SheetContent>
      </Sheet>

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
