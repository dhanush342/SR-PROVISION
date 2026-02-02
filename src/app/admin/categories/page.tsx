"use client";

import React, { useState } from 'react';
import { useStore } from "@/context/app-provider";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { useToast } from "@/hooks/use-toast";
import { MoreVertical, Plus } from "lucide-react";
import type { Category } from "@/lib/data";

import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetDescription, SheetFooter, SheetClose } from '@/components/ui/sheet';
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle } from '@/components/ui/alert-dialog';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";

type CategoryWithProductCount = Category & { productCount: number };

const categoryFormSchema = z.object({
  nameEn: z.string().min(1, "English name is required"),
  nameTe: z.string().min(1, "Telugu name is required"),
  nameHi: z.string().min(1, "Hindi name is required"),
});
type CategoryFormValues = z.infer<typeof categoryFormSchema>;


export default function CategoriesPage() {
  const { categories, products, addCategory, updateCategory, deleteCategory } = useStore();
  const { toast } = useToast();

  const [isSheetOpen, setSheetOpen] = useState(false);
  const [editingCategory, setEditingCategory] = useState<Category | null>(null);
  const [categoryToDelete, setCategoryToDelete] = useState<Category | null>(null);

  const form = useForm<CategoryFormValues>({
    resolver: zodResolver(categoryFormSchema),
    defaultValues: { nameEn: "", nameTe: "", nameHi: "" },
  });

  React.useEffect(() => {
    if (isSheetOpen) {
        if (editingCategory) {
          form.reset({
            nameEn: editingCategory.name.en,
            nameTe: editingCategory.name.te,
            nameHi: editingCategory.name.hi,
          });
        } else {
          form.reset({ nameEn: "", nameTe: "", nameHi: "" });
        }
    }
  }, [editingCategory, form, isSheetOpen]);

  const handleAddNew = () => {
    setEditingCategory(null);
    setSheetOpen(true);
  };

  const handleEdit = (category: Category) => {
    setEditingCategory(category);
    setSheetOpen(true);
  };
  
  const handleDeleteConfirm = async () => {
    if (!categoryToDelete) return;
    await deleteCategory(categoryToDelete.id);
    toast({ title: "Category deleted!", description: `"${categoryToDelete.name.en}" has been removed.`, variant: "destructive" });
    setCategoryToDelete(null);
  };

  async function onSubmit(data: CategoryFormValues) {
    if (editingCategory) {
      const updatedCategory: Category = { 
        ...editingCategory, 
        name: { en: data.nameEn, te: data.nameTe, hi: data.nameHi } 
      };
      await updateCategory(updatedCategory);
      toast({ title: "Category Updated!", description: `"${data.nameEn}" has been updated.` });
    } else {
      const newCategory: Omit<Category, 'id'> = {
        name: { en: data.nameEn, te: data.nameTe, hi: data.nameHi },
      };
      await addCategory(newCategory);
      toast({ title: "Category Added!", description: `"${data.nameEn}" has been added.` });
    }
    setSheetOpen(false);
  }

  const categoriesWithCount: CategoryWithProductCount[] = React.useMemo(() => {
    const counts = products.reduce((acc, product) => {
      const categoryId = product.categoryId || 'uncategorized';
      acc[categoryId] = (acc[categoryId] || 0) + 1;
      return acc;
    }, {} as Record<string, number>);
    return categories.map(cat => ({ ...cat, productCount: counts[cat.id] || 0 }));
  }, [categories, products]);

  return (
    <div className="p-4 sm:p-6 lg:p-8">
      <div className="flex items-center justify-between mb-6">
        <div>
            <h1 className="text-2xl font-bold tracking-tight">Categories</h1>
            <p className="text-muted-foreground">Manage your product categories.</p>
        </div>
        <Button onClick={handleAddNew}>
          <Plus className="mr-2 h-4 w-4" />
          Add Category
        </Button>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>All Categories</CardTitle>
          <CardDescription>A list of all product categories in your store.</CardDescription>
        </CardHeader>
        <CardContent className="p-0">
          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Category Name (EN)</TableHead>
                  <TableHead>Category Name (TE)</TableHead>
                  <TableHead>Category Name (HI)</TableHead>
                  <TableHead className="text-center">Products</TableHead>
                  <TableHead className="text-right">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {categoriesWithCount.map((category) => (
                  <TableRow key={category.id}>
                    <TableCell className="font-medium">{category.name.en}</TableCell>
                    <TableCell>{category.name.te}</TableCell>
                    <TableCell>{category.name.hi}</TableCell>
                    <TableCell className="text-center">{category.productCount}</TableCell>
                    <TableCell className="text-right">
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button variant="ghost" size="icon" aria-label={`Actions for ${category.name.en}`}>
                            <MoreVertical className="h-4 w-4" />
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                          <DropdownMenuItem onClick={() => handleEdit(category)}>Edit</DropdownMenuItem>
                          <DropdownMenuItem className="text-destructive focus:bg-destructive/10 focus:text-destructive" onClick={() => setCategoryToDelete(category)}>Delete</DropdownMenuItem>
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
                        <SheetTitle>{editingCategory ? "Edit Category" : "Add New Category"}</SheetTitle>
                        <SheetDescription>{editingCategory ? "Update the category name." : "Create a new product category."}</SheetDescription>
                    </SheetHeader>
                    <div className="py-4 space-y-4 flex-grow">
                        <FormField control={form.control} name="nameEn" render={({ field }) => (
                            <FormItem><FormLabel>Category Name (EN)</FormLabel><FormControl><Input placeholder="e.g., Dals & Pulses" {...field} /></FormControl><FormMessage /></FormItem>
                        )}/>
                        <FormField control={form.control} name="nameTe" render={({ field }) => (
                            <FormItem><FormLabel>Category Name (TE)</FormLabel><FormControl><Input placeholder="e.g., పప్పులు" {...field} /></FormControl><FormMessage /></FormItem>
                        )}/>
                         <FormField control={form.control} name="nameHi" render={({ field }) => (
                            <FormItem><FormLabel>Category Name (HI)</FormLabel><FormControl><Input placeholder="e.g., दालें" {...field} /></FormControl><FormMessage /></FormItem>
                        )}/>
                    </div>
                    <SheetFooter>
                        <SheetClose asChild><Button type="button" variant="secondary">Cancel</Button></SheetClose>
                        <Button type="submit" disabled={form.formState.isSubmitting}>{editingCategory ? "Save Changes" : "Create Category"}</Button>
                    </SheetFooter>
                </form>
            </Form>
        </SheetContent>
      </Sheet>

      <AlertDialog open={!!categoryToDelete} onOpenChange={(open) => !open && setCategoryToDelete(null)}>
        <AlertDialogContent>
            <AlertDialogHeader>
                <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
                <AlertDialogDescription>This action cannot be undone. This will permanently delete the category <span className="font-semibold">{categoryToDelete?.name.en}</span>. Products in this category will become 'uncategorized'.</AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
                <AlertDialogCancel onClick={() => setCategoryToDelete(null)}>Cancel</AlertDialogCancel>
                <AlertDialogAction onClick={handleDeleteConfirm} className="bg-destructive hover:bg-destructive/90">Delete</AlertDialogAction>
            </AlertDialogFooter>
        </AlertDialogContent>
    </AlertDialog>
    </div>
  );
}
