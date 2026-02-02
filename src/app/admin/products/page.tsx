
"use client";

import Image from 'next/image';
import React, { useState, useMemo, useEffect } from 'react';
import { MoreVertical, Search, Upload, Plus, ChevronLeft, ChevronRight, X, Edit, Eye, Trash2 } from 'lucide-react';
import { useForm, useFieldArray } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";

import { useLanguage, useStore } from '@/context/app-provider';
import type { Product } from '@/lib/data';
import { useToast } from "@/hooks/use-toast";

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Switch } from '@/components/ui/switch';
import { Badge } from '@/components/ui/badge';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from '@/components/ui/table';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetDescription, SheetFooter, SheetClose } from '@/components/ui/sheet';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle } from '@/components/ui/alert-dialog';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";


type ProductWithCategoryName = Product & { categoryName: string };

const productFormSchema = z.object({
  id: z.string().optional(),
  nameEn: z.string().min(1, "English name is required"),
  nameTe: z.string().min(1, "Telugu name is required"),
  nameHi: z.string().min(1, "Hindi name is required"),
  categoryId: z.string().min(1, "Category is required"),
  imageUrl: z.string().url({ message: "Please enter a valid URL." }),
  options: z.array(z.object({
    quantity: z.string().min(1, "Quantity is required"),
    price: z.coerce.number().min(0.01, "Price must be greater than 0"),
  })).min(1, "At least one pricing option is required"),
});
type ProductFormValues = z.infer<typeof productFormSchema>;


export default function AdminProductsPage() {
    const { language } = useLanguage();
    const { toast } = useToast();
    const { products, categories, addProduct, updateProduct, deleteProduct } = useStore();
    
    const [searchQuery, setSearchQuery] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('all');
    const [selectedStatus, setSelectedStatus] = useState('all');
    const [currentPage, setCurrentPage] = useState(1);
    const productsPerPage = 10;
    
    const [isSheetOpen, setSheetOpen] = useState(false);
    const [editingProduct, setEditingProduct] = useState<Product | null>(null);
    const [productToDelete, setProductToDelete] = useState<Product | null>(null);
    const [productToView, setProductToView] = useState<ProductWithCategoryName | null>(null);

    const form = useForm<ProductFormValues>({
        resolver: zodResolver(productFormSchema),
        defaultValues: { nameEn: "", nameTe: "", nameHi: "", categoryId: "", imageUrl: "", options: [{ quantity: "", price: 0 }] },
    });

    const { fields, append, remove } = useFieldArray({
        control: form.control,
        name: "options",
    });

    useEffect(() => {
        if (isSheetOpen) {
            if (editingProduct) {
                form.reset({
                    id: editingProduct.id,
                    nameEn: editingProduct.name.en,
                    nameTe: editingProduct.name.te,
                    nameHi: editingProduct.name.hi,
                    categoryId: editingProduct.categoryId,
                    imageUrl: editingProduct.imageUrl,
                    options: editingProduct.options,
                });
            } else {
                form.reset({ id: `prod-${Date.now()}`, nameEn: "", nameTe: "", nameHi: "", categoryId: "", imageUrl: "", options: [{ quantity: "1kg", price: 0 }] });
            }
        }
    }, [isSheetOpen, editingProduct, form]);

    const productsWithCategory: ProductWithCategoryName[] = useMemo(() => {
        const categoryMap = new Map(categories.map(c => [c.id, c.name[language]]));
        categoryMap.set('uncategorized', 'Uncategorized');
        return products.map(p => ({
            ...p,
            categoryName: categoryMap.get(p.categoryId) || "Uncategorized"
        }));
    }, [products, categories, language]);
    
    const filteredProducts = useMemo(() => {
        return productsWithCategory
            .filter(product => {
                const query = searchQuery.toLowerCase();
                return (
                    product.name.en.toLowerCase().includes(query) ||
                    product.name.te.toLowerCase().includes(query) ||
                    product.name.hi.toLowerCase().includes(query)
                );
            })
            .filter(product => selectedCategory === 'all' || product.categoryId === selectedCategory)
            .filter(product => selectedStatus === 'all' || product.availability === selectedStatus);
    }, [productsWithCategory, searchQuery, selectedCategory, selectedStatus]);

    const totalPages = Math.ceil(filteredProducts.length / productsPerPage);
    const currentProducts = filteredProducts.slice((currentPage - 1) * productsPerPage, currentPage * productsPerPage);

    const handlePageChange = (page: number) => {
        if (page > 0 && page <= totalPages) {
            setCurrentPage(page);
        }
    };
    
    const handleStatusChange = (productId: string, checked: boolean) => {
        const product = products.find(p => p.id === productId);
        if(product) {
            updateProduct({ ...product, availability: checked ? 'in-stock' : 'out-of-stock' });
            toast({ title: "Status updated!", description: `${product.name.en} is now ${checked ? 'in stock' : 'out of stock'}.` });
        }
    };

    const handleDeleteConfirm = () => {
        if (!productToDelete) return;
        deleteProduct(productToDelete.id);
        toast({ title: "Product deleted!", description: `${productToDelete.name.en} has been removed.`, variant: "destructive" });
        setProductToDelete(null);
    };

    const handleAddNew = () => {
        setEditingProduct(null);
        setSheetOpen(true);
    };

    const handleEdit = (product: Product) => {
        setEditingProduct(product);
        setSheetOpen(true);
    };
    
    function onSubmit(data: ProductFormValues) {
        if (editingProduct) {
            const updated: Product = {
                ...editingProduct,
                name: { en: data.nameEn, te: data.nameTe, hi: data.nameHi },
                categoryId: data.categoryId,
                imageUrl: data.imageUrl,
                options: data.options,
            };
            updateProduct(updated);
            toast({ title: "Product Updated!", description: `"${data.nameEn}" has been updated.` });
        } else {
            const newProduct: Product = {
                id: data.id || `prod-${Date.now()}`,
                name: { en: data.nameEn, te: data.nameTe, hi: data.nameHi },
                categoryId: data.categoryId,
                imageUrl: data.imageUrl,
                options: data.options,
                availability: 'in-stock',
            };
            addProduct(newProduct);
            toast({ title: "Product Added!", description: `"${data.nameEn}" has been added.` });
        }
        setSheetOpen(false);
    }
    
    const handleExportCSV = () => {
        if (filteredProducts.length === 0) {
            toast({ title: "Nothing to Export", description: "There are no products in the current view.", variant: 'destructive' });
            return;
        }
        const csvHeader = "ID,Name (EN),Name (TE),Name (HI),Category,Availability,Image URL,Pricing Variants\n";
        const csvRows = filteredProducts.map(p => {
            const options = p.options.map(o => `${o.quantity}:${o.price}`).join(' | ');
            return `"${p.id}","${p.name.en}","${p.name.te}","${p.name.hi}","${p.categoryName}","${p.availability}","${p.imageUrl}","${options}"`;
        }).join('\n');

        const csvString = `${csvHeader}${csvRows}`;
        const blob = new Blob([csvString], { type: 'text/csv;charset=utf-8;' });
        const link = document.createElement('a');
        const url = URL.createObjectURL(blob);
        link.setAttribute('href', url);
        link.setAttribute('download', 'products.csv');
        link.style.visibility = 'hidden';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        toast({ title: "Exported to CSV!", description: "Product list has been downloaded." });
    };

  return (
    <div className="p-4 sm:p-6 lg:p-8">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-4">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">Inventory & Products</h1>
          <p className="text-muted-foreground">Manage stock, prices, and catalog visibility.</p>
        </div>
        <div className="flex gap-2 self-end sm:self-center">
          <Button variant="outline" onClick={handleExportCSV}>
            <Upload className="mr-2 h-4 w-4" />
            Export
          </Button>
          <Button onClick={handleAddNew}>
            <Plus className="mr-2 h-4 w-4" />
            Add Product
          </Button>
        </div>
      </div>
      <div className="bg-card p-4 rounded-lg border">
        <div className="flex flex-col sm:flex-row gap-2 mb-4">
            <div className="relative w-full sm:max-w-xs">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
                placeholder="Search by product name..."
                className="pl-8 bg-background"
                value={searchQuery}
                onChange={(e) => { setCurrentPage(1); setSearchQuery(e.target.value); }}
            />
            </div>
            <Select value={selectedCategory} onValueChange={(value) => { setCurrentPage(1); setSelectedCategory(value); }}>
            <SelectTrigger className="w-full sm:w-[180px] bg-background">
                <SelectValue placeholder="All Categories" />
            </SelectTrigger>
            <SelectContent>
                <SelectItem value="all">All Categories</SelectItem>
                {categories.map((cat) => ( <SelectItem key={cat.id} value={cat.id}>{cat.name[language]}</SelectItem> ))}
                 <SelectItem value="uncategorized">Uncategorized</SelectItem>
            </SelectContent>
            </Select>
            <Select value={selectedStatus} onValueChange={(value) => { setCurrentPage(1); setSelectedStatus(value); }}>
            <SelectTrigger className="w-full sm:w-[180px] bg-background">
                <SelectValue placeholder="All Status" />
            </SelectTrigger>
            <SelectContent>
                <SelectItem value="all">All Status</SelectItem>
                <SelectItem value="in-stock">In Stock</SelectItem>
                <SelectItem value="out-of-stock">Out of Stock</SelectItem>
            </SelectContent>
            </Select>
        </div>

        <div className="border rounded-lg overflow-x-auto">
            <Table>
            <TableHeader>
                <TableRow>
                <TableHead className="w-[300px]">Product Name</TableHead>
                <TableHead>Category</TableHead>
                <TableHead>Pricing</TableHead>
                <TableHead>Status</TableHead>
                <TableHead className="text-right">Actions</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                {currentProducts.length > 0 ? currentProducts.map((product) => (
                    <TableRow key={product.id}>
                    <TableCell className="font-medium">
                        <div className="flex items-center gap-3">
                            <div className="w-12 h-12 rounded-md overflow-hidden bg-muted flex-shrink-0">
                                <Image src={product.imageUrl} alt={product.name.en} width={48} height={48} className="object-cover w-full h-full" />
                            </div>
                            <div>
                                <div className="font-semibold line-clamp-1">{product.name.en}</div>
                                <div className="text-sm text-muted-foreground line-clamp-1">{product.name.te}</div>
                            </div>
                        </div>
                    </TableCell>
                    <TableCell>
                        <Badge variant="secondary">{product.categoryName}</Badge>
                    </TableCell>
                    <TableCell>
                        <div className="flex flex-wrap gap-1 items-center">
                            {product.options.map((option, index) => (
                                <Badge key={index} variant="outline" className="font-mono text-xs">
                                    {option.quantity} | ₹{option.price}
                                </Badge>
                            ))}
                        </div>
                    </TableCell>
                    <TableCell>
                        <Switch checked={product.availability === 'in-stock'} onCheckedChange={(checked) => handleStatusChange(product.id, checked)} aria-label={`Toggle status for ${product.name.en}`}/>
                    </TableCell>
                    <TableCell className="text-right">
                        <DropdownMenu>
                        <DropdownMenuTrigger asChild><Button variant="ghost" size="icon" aria-label={`Actions for ${product.name.en}`}><MoreVertical className="h-4 w-4" /></Button></DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                            <DropdownMenuItem onClick={() => handleEdit(product)}><Edit className="mr-2 h-4 w-4" />Edit</DropdownMenuItem>
                            <DropdownMenuItem onClick={() => setProductToView(product)}><Eye className="mr-2 h-4 w-4" />View</DropdownMenuItem>
                            <DropdownMenuItem className="text-destructive focus:bg-destructive/10 focus:text-destructive" onClick={() => setProductToDelete(product)}>
                                <Trash2 className="mr-2 h-4 w-4" />Delete
                            </DropdownMenuItem>
                        </DropdownMenuContent>
                        </DropdownMenu>
                    </TableCell>
                    </TableRow>
                )) : (
                  <TableRow>
                    <TableCell colSpan={5} className="h-24 text-center">No products found.</TableCell>
                  </TableRow>
                )}
            </TableBody>
            </Table>
        </div>
        <div className="flex items-center justify-between mt-4 px-2">
            <p className="text-sm text-muted-foreground">
                Showing {filteredProducts.length > 0 ? (currentPage-1) * productsPerPage + 1 : 0} - {Math.min(currentPage * productsPerPage, filteredProducts.length)} of {filteredProducts.length} products
            </p>
            {totalPages > 1 && (
                <div className="flex items-center gap-1">
                    <Button variant="outline" size="sm" onClick={() => handlePageChange(currentPage - 1)} disabled={currentPage === 1} aria-label="Go to previous page"><ChevronLeft className="h-4 w-4"/></Button>
                    <span className="text-sm font-medium">{currentPage} / {totalPages}</span>
                    <Button variant="outline" size="sm" onClick={() => handlePageChange(currentPage + 1)} disabled={currentPage === totalPages} aria-label="Go to next page"><ChevronRight className="h-4 w-4"/></Button>
                </div>
            )}
        </div>
      </div>

        <Sheet open={isSheetOpen} onOpenChange={setSheetOpen}>
            <SheetContent className="sm:max-w-lg">
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col h-full">
                        <SheetHeader>
                            <SheetTitle>{editingProduct ? "Edit Product" : "Add New Product"}</SheetTitle>
                            <SheetDescription>{editingProduct ? "Update the product details." : "Fill out the details for the new product."}</SheetDescription>
                        </SheetHeader>
                        <ScrollArea className="h-[calc(100%-150px)] pr-6 -mr-6">
                        <div className="grid gap-4 py-4">
                            <FormField control={form.control} name="id" render={({ field }) => (
                                <FormItem><FormLabel>Product ID</FormLabel><FormControl><Input placeholder="e.g., toor-dal-1" {...field} disabled={!!editingProduct} /></FormControl><FormMessage /></FormItem>
                            )}/>
                            <FormField control={form.control} name="nameEn" render={({ field }) => (
                                <FormItem><FormLabel>Product Name (EN)</FormLabel><FormControl><Input placeholder="e.g., Toor Dal" {...field} /></FormControl><FormMessage /></FormItem>
                            )}/>
                            <FormField control={form.control} name="nameTe" render={({ field }) => (
                                <FormItem><FormLabel>Product Name (TE)</FormLabel><FormControl><Input placeholder="e.g., కంది పప్పు" {...field} /></FormControl><FormMessage /></FormItem>
                            )}/>
                             <FormField control={form.control} name="nameHi" render={({ field }) => (
                                <FormItem><FormLabel>Product Name (HI)</FormLabel><FormControl><Input placeholder="e.g., अरहर की दाल" {...field} /></FormControl><FormMessage /></FormItem>
                            )}/>
                             <FormField control={form.control} name="imageUrl" render={({ field }) => (
                                <FormItem><FormLabel>Image URL</FormLabel><FormControl><Input placeholder="https://example.com/image.jpg" {...field} /></FormControl><FormMessage /></FormItem>
                            )}/>
                            <FormField control={form.control} name="categoryId" render={({ field }) => (
                                <FormItem><FormLabel>Category</FormLabel>
                                    <Select onValueChange={field.onChange} value={field.value} defaultValue={editingProduct?.categoryId}>
                                        <FormControl><SelectTrigger><SelectValue placeholder="Select a category" /></SelectTrigger></FormControl>
                                        <SelectContent>{categories.map(cat => <SelectItem key={cat.id} value={cat.id}>{cat.name[language]}</SelectItem>)}</SelectContent>
                                    </Select><FormMessage />
                                </FormItem>
                            )}/>
                            <div>
                                <FormLabel>Pricing Variants</FormLabel>
                                {fields.map((field, index) => (
                                    <div key={field.id} className="flex items-end gap-2 mt-2">
                                        <FormField control={form.control} name={`options.${index}.quantity`} render={({ field }) => (
                                            <FormItem className="flex-1"><FormControl><Input placeholder="e.g., 500g" {...field} /></FormControl><FormMessage/></FormItem>
                                        )}/>
                                        <FormField control={form.control} name={`options.${index}.price`} render={({ field }) => (
                                            <FormItem className="w-28"><FormControl><Input type="number" step="0.01" placeholder="Price (₹)" {...field} /></FormControl><FormMessage/></FormItem>
                                        )}/>
                                        <Button type="button" variant="destructive" size="icon" onClick={() => remove(index)} disabled={fields.length <= 1} aria-label="Remove price variant"><X className="h-4 w-4" /></Button>
                                    </div>
                                ))}
                                <Button type="button" variant="outline" size="sm" className="mt-2" onClick={() => append({ quantity: '', price: 0 })}><Plus className="mr-2 h-4 w-4" /> Add Variant</Button>
                                <FormMessage>{form.formState.errors.options?.root?.message}</FormMessage>
                            </div>
                        </div>
                        </ScrollArea>
                        <SheetFooter className="pt-4 border-t mt-auto">
                            <SheetClose asChild><Button type="button" variant="secondary">Cancel</Button></SheetClose>
                            <Button type="submit" disabled={form.formState.isSubmitting}>{editingProduct ? "Save Changes" : "Save Product"}</Button>
                        </SheetFooter>
                    </form>
                </Form>
            </SheetContent>
        </Sheet>

        <AlertDialog open={!!productToDelete} onOpenChange={(open) => !open && setProductToDelete(null)}>
            <AlertDialogContent>
                <AlertDialogHeader>
                    <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
                    <AlertDialogDescription>This action cannot be undone. This will permanently delete the product <span className="font-semibold">{productToDelete?.name.en}</span>.</AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                    <AlertDialogCancel onClick={() => setProductToDelete(null)}>Cancel</AlertDialogCancel>
                    <AlertDialogAction onClick={handleDeleteConfirm} className="bg-destructive hover:bg-destructive/90">Delete</AlertDialogAction>
                </AlertDialogFooter>
            </AlertDialogContent>
        </AlertDialog>

        <Dialog open={!!productToView} onOpenChange={(open) => !open && setProductToView(null)}>
            <DialogContent className="sm:max-w-md">
                <DialogHeader>
                    <DialogTitle>{productToView?.name.en}</DialogTitle>
                    <DialogDescription>{productToView?.name.te} / {productToView?.name.hi}</DialogDescription>
                </DialogHeader>
                <div className="mt-4 grid gap-4">
                    <div className="w-full h-48 rounded-md overflow-hidden bg-muted relative">
                        {productToView && <Image src={productToView.imageUrl} alt={productToView.name.en} fill style={{objectFit:"cover"}} />}
                    </div>
                    <div className="text-sm"><strong>Category:</strong> <Badge variant="secondary">{productToView?.categoryName}</Badge></div>
                    <div className="text-sm"><strong>Status:</strong> <Badge variant={productToView?.availability === 'in-stock' ? 'default' : 'destructive'}>{productToView?.availability}</Badge></div>
                    <div>
                        <h4 className="text-sm font-semibold mb-2">Pricing:</h4>
                        <div className="flex flex-wrap gap-2">
                        {productToView?.options.map((opt, i) => (
                            <Badge key={i} variant="outline" className="font-mono text-base py-1 px-3">{opt.quantity} - ₹{opt.price}</Badge>
                        ))}
                        </div>
                    </div>
                </div>
            </DialogContent>
        </Dialog>
    </div>
  );
}

    