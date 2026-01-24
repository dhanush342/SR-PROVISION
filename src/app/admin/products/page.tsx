"use client";

import Image from 'next/image';
import {
  MoreVertical,
  Search,
  Upload,
  Plus,
  ChevronLeft,
  ChevronRight,
  X,
  Eye,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Table,
  TableHeader,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
} from '@/components/ui/table';
import { Input } from '@/components/ui/input';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Switch } from '@/components/ui/switch';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { categories as staticCategories, Product } from '@/lib/data';
import { useLanguage } from '@/context/app-provider';
import { Badge } from '@/components/ui/badge';
import React, { useState, useMemo, useEffect } from 'react';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetDescription,
  SheetFooter,
  SheetClose,
} from '@/components/ui/sheet';
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
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogDescription,
} from "@/components/ui/dialog";
import { useForm, useFieldArray } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { useToast } from "@/hooks/use-toast";
import { ScrollArea } from '@/components/ui/scroll-area';

type ProductWithCategory = Product & { categoryName: string; categoryId: string };

const productFormSchema = z.object({
  nameEn: z.string().min(1, "English name is required"),
  nameTe: z.string().min(1, "Telugu name is required"),
  nameHi: z.string().min(1, "Hindi name is required"),
  categoryId: z.string().min(1, "Category is required"),
  imageUrl: z.string().url("Please enter a valid image URL"),
  options: z.array(z.object({
    quantity: z.string().min(1, "Quantity is required"),
    price: z.coerce.number().min(0, "Price must be positive"),
  })).min(1, "At least one pricing option is required"),
});
type ProductFormValues = z.infer<typeof productFormSchema>;


export default function AdminProductsPage() {
    const { language } = useLanguage();
    const { toast } = useToast();
    
    const [searchQuery, setSearchQuery] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('all');
    const [selectedStatus, setSelectedStatus] = useState('all');
    const [currentPage, setCurrentPage] = useState(1);
    const productsPerPage = 10;

    const initialProducts = useMemo(() => 
        staticCategories.flatMap(category => 
            category.products.map(p => ({
                ...p, 
                categoryName: category.name[language],
                categoryId: category.id,
            }))
        )
    , [language]);
    
    const [products, setProducts] = useState<ProductWithCategory[]>(initialProducts);
    const [isSheetOpen, setSheetOpen] = useState(false);
    const [editingProduct, setEditingProduct] = useState<ProductWithCategory | null>(null);
    const [productToDelete, setProductToDelete] = useState<ProductWithCategory | null>(null);
    const [productToView, setProductToView] = useState<ProductWithCategory | null>(null);

    const form = useForm<ProductFormValues>({
        resolver: zodResolver(productFormSchema),
        defaultValues: {
            nameEn: "",
            nameTe: "",
            nameHi: "",
            categoryId: "",
            imageUrl: "",
            options: [{ quantity: "", price: 0 }],
        },
    });

    const { fields, append, remove } = useFieldArray({
        control: form.control,
        name: "options",
    });

    useEffect(() => {
        if (editingProduct) {
            form.reset({
                nameEn: editingProduct.name.en,
                nameTe: editingProduct.name.te,
                nameHi: editingProduct.name.hi,
                categoryId: editingProduct.categoryId,
                imageUrl: editingProduct.imageUrl,
                options: editingProduct.options,
            });
        } else {
            form.reset({
                nameEn: "",
                nameTe: "",
                nameHi: "",
                categoryId: "",
                imageUrl: "",
                options: [{ quantity: "", price: 0 }],
            });
        }
    }, [editingProduct, form]);

    const filteredProducts = useMemo(() => {
        const categoryMap = new Map(staticCategories.map(c => [c.id, c.name[language]]));
        return products
            .map(p => ({...p, categoryName: categoryMap.get(p.categoryId) || p.categoryName }))
            .filter(product => {
                const query = searchQuery.toLowerCase();
                const nameEn = product.name.en || '';
                const nameTe = product.name.te || '';
                
                return (
                    nameEn.toLowerCase().includes(query) ||
                    nameTe.toLowerCase().includes(query)
                );
            })
            .filter(product => {
                return selectedCategory === 'all' || product.categoryId === selectedCategory;
            })
            .filter(product => {
                return selectedStatus === 'all' || (product.availability === selectedStatus);
            });
    }, [products, searchQuery, selectedCategory, selectedStatus, language]);

    const totalPages = Math.ceil(filteredProducts.length / productsPerPage);
    const indexOfLastProduct = currentPage * productsPerPage;
    const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
    const currentProducts = filteredProducts.slice(indexOfFirstProduct, indexOfLastProduct);

    const handlePageChange = (page: number) => {
        if (page > 0 && page <= totalPages) {
            setCurrentPage(page);
        }
    };
    
    const handleStatusChange = (productId: string, checked: boolean) => {
        setProducts(currentProducts => 
            currentProducts.map(p => 
                p.id === productId 
                ? { ...p, availability: checked ? 'in-stock' : 'out-of-stock' } 
                : p
            )
        );
        toast({ title: "Status updated!" });
    };

    const handleDeleteConfirm = () => {
        if (!productToDelete) return;
        setProducts(currentProducts => 
            currentProducts.filter(p => p.id !== productToDelete.id)
        );
        toast({ title: "Product deleted!", description: `${productToDelete.name.en} has been removed.`, variant: "destructive" });
        setProductToDelete(null);
    };

    const handleAddNew = () => {
        setEditingProduct(null);
        setSheetOpen(true);
    };

    const handleEdit = (product: ProductWithCategory) => {
        setEditingProduct(product);
        setSheetOpen(true);
    };
    
    function onSubmit(data: ProductFormValues) {
        const categoryName = staticCategories.find(c => c.id === data.categoryId)?.name[language] || '';

        if (editingProduct) {
            // Update existing product
            const updatedProduct: ProductWithCategory = {
                ...editingProduct,
                name: { en: data.nameEn, te: data.nameTe, hi: data.nameHi },
                categoryId: data.categoryId,
                categoryName: categoryName,
                imageUrl: data.imageUrl,
                options: data.options,
            };
            setProducts(products.map(p => p.id === editingProduct.id ? updatedProduct : p));
            toast({ title: "Product Updated!", description: `${data.nameEn} has been updated.` });
        } else {
            // Add new product
            const newProduct: ProductWithCategory = {
                id: `prod-${Date.now()}`,
                name: { en: data.nameEn, te: data.nameTe, hi: data.nameHi },
                categoryId: data.categoryId,
                categoryName: categoryName,
                imageUrl: data.imageUrl,
                options: data.options,
                availability: 'in-stock',
            };
            setProducts(currentProducts => [newProduct, ...currentProducts]);
            toast({ title: "Product Added!", description: `${data.nameEn} has been added.` });
        }
        setSheetOpen(false);
        setEditingProduct(null);
    }
    
    const handleExportCSV = () => {
        const csvHeader = "ID,Name (EN),Name (TE),Name (HI),Category,Availability,Pricing Variants\n";
        const csvRows = filteredProducts.map(p => {
            const options = p.options.map(o => `${o.quantity}:${o.price}`).join(' | ');
            return `${p.id},"${p.name.en}","${p.name.te}","${p.name.hi}","${p.categoryName}",${p.availability},"${options}"`;
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

    const renderPageNumbers = () => {
        const pageNumbers = [];
        const maxPagesToShow = 3;
        
        if (totalPages <= 1) return null;

        if (totalPages <= maxPagesToShow + 2) {
            for (let i = 1; i <= totalPages; i++) {
                pageNumbers.push(i);
            }
        } else {
            if (currentPage <= maxPagesToShow) {
                for (let i = 1; i <= maxPagesToShow + 1; i++) {
                    pageNumbers.push(i);
                }
                pageNumbers.push('...');
                pageNumbers.push(totalPages);
            } else if (currentPage > totalPages - maxPagesToShow) {
                pageNumbers.push(1);
                pageNumbers.push('...');
                for (let i = totalPages - maxPagesToShow; i <= totalPages; i++) {
                    pageNumbers.push(i);
                }
            } else {
                pageNumbers.push(1);
                pageNumbers.push('...');
                for (let i = currentPage - 1; i <= currentPage + 1; i++) {
                    pageNumbers.push(i);
                }
                pageNumbers.push('...');
                pageNumbers.push(totalPages);
            }
        }

        return pageNumbers.map((number, index) =>
            typeof number === 'number' ? (
                <Button key={index} variant={currentPage === number ? "default" : "ghost"} size="sm" onClick={() => handlePageChange(number)}>
                    {number}
                </Button>
            ) : (
                <span key={index} className="px-2 py-1 text-sm">...</span>
            )
        );
    };

  return (
    <div className="p-4 sm:p-6 lg:p-8">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">Inventory &amp; Products</h1>
          <p className="text-muted-foreground">Manage stock, prices, and catalog visibility.</p>
        </div>
        <div className="flex gap-2 mt-4 sm:mt-0">
          <Button variant="outline" onClick={handleExportCSV}>
            <Upload className="mr-2 h-4 w-4" />
            Export CSV
          </Button>
          <Button onClick={handleAddNew}>
            <Plus className="mr-2 h-4 w-4" />
            Add New Product
          </Button>
        </div>
      </div>
      <div className="bg-card p-4 rounded-lg border">
        <div className="flex flex-col sm:flex-row gap-2 mb-4">
            <div className="relative w-full sm:max-w-xs">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
                placeholder="Search by product name, telugu name..."
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
                {staticCategories.map((cat) => ( <SelectItem key={cat.id} value={cat.id}>{cat.name[language]}</SelectItem> ))}
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

        <div className="border rounded-lg">
            <Table>
            <TableHeader>
                <TableRow>
                <TableHead>Product Name</TableHead>
                <TableHead>Category</TableHead>
                <TableHead>Pricing Variants (Qty - Price)</TableHead>
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
                                <Image src={product.imageUrl} alt={product.name.en} width={48} height={48} className="object-cover w-full h-full" onError={(e) => { e.currentTarget.src = 'https://picsum.photos/seed/error/48/48' }}/>
                            </div>
                            <div>
                                <div className="font-semibold">{product.name.en}</div>
                                <div className="text-sm text-muted-foreground">{product.name.te}</div>
                            </div>
                        </div>
                    </TableCell>
                    <TableCell>
                        <Badge variant="secondary">{product.categoryName}</Badge>
                    </TableCell>
                    <TableCell>
                        <div className="flex flex-wrap gap-1 items-center">
                            {product.options.map((option, index) => (
                                <Badge key={index} variant="outline" className="font-mono text-sm">
                                    {option.quantity} | ₹{option.price}
                                </Badge>
                            ))}
                        </div>
                    </TableCell>
                    <TableCell>
                        <Switch checked={product.availability === 'in-stock'} onCheckedChange={(checked) => handleStatusChange(product.id, checked)} />
                    </TableCell>
                    <TableCell className="text-right">
                        <DropdownMenu>
                        <DropdownMenuTrigger asChild><Button variant="ghost" size="icon"><MoreVertical className="h-4 w-4" /></Button></DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                            <DropdownMenuItem onClick={() => handleEdit(product)}>Edit</DropdownMenuItem>
                            <DropdownMenuItem onClick={() => setProductToView(product)}>View</DropdownMenuItem>
                            <DropdownMenuItem className="text-destructive focus:bg-destructive/10 focus:text-destructive" onClick={() => setProductToDelete(product)}>
                                Delete
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
                Showing {filteredProducts.length > 0 ? indexOfFirstProduct + 1 : 0} - {Math.min(indexOfLastProduct, filteredProducts.length)} of {filteredProducts.length} products
            </p>
            {totalPages > 1 && (
                <div className="flex items-center gap-1">
                    <Button variant="outline" size="sm" onClick={() => handlePageChange(currentPage - 1)} disabled={currentPage === 1}><ChevronLeft className="h-4 w-4"/></Button>
                    {renderPageNumbers()}
                    <Button variant="outline" size="sm" onClick={() => handlePageChange(currentPage + 1)} disabled={currentPage === totalPages}><ChevronRight className="h-4 w-4"/></Button>
                </div>
            )}
        </div>
      </div>

        <Sheet open={isSheetOpen} onOpenChange={setSheetOpen}>
            <SheetContent className="sm:max-w-lg">
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)}>
                        <SheetHeader>
                            <SheetTitle>{editingProduct ? "Edit Product" : "Add New Product"}</SheetTitle>
                            <SheetDescription>{editingProduct ? "Update the product details." : "Fill out the details for the new product."}</SheetDescription>
                        </SheetHeader>
                        <ScrollArea className="h-[calc(100vh-150px)] pr-6">
                        <div className="grid gap-4 py-4">
                            <FormField control={form.control} name="nameEn" render={({ field }) => (
                                <FormItem><FormLabel>Product Name (EN)</FormLabel><FormControl><Input placeholder="e.g., Toor Dal" {...field} /></FormControl><FormMessage /></FormItem>
                            )}/>
                            <FormField control={form.control} name="nameTe" render={({ field }) => (
                                <FormItem><FormLabel>Product Name (TE)</FormLabel><FormControl><Input placeholder="e.g., కంది పప్పు" {...field} /></FormControl><FormMessage /></FormItem>
                            )}/>
                             <FormField control={form.control} name="nameHi" render={({ field }) => (
                                <FormItem><FormLabel>Product Name (HI)</FormLabel><FormControl><Input placeholder="e.g., अरहर की दाल" {...field} /></FormControl><FormMessage /></FormItem>
                            )}/>
                            <FormField control={form.control} name="categoryId" render={({ field }) => (
                                <FormItem><FormLabel>Category</FormLabel>
                                    <Select onValueChange={field.onChange} value={field.value}>
                                        <FormControl><SelectTrigger><SelectValue placeholder="Select a category" /></SelectTrigger></FormControl>
                                        <SelectContent>{staticCategories.map(cat => <SelectItem key={cat.id} value={cat.id}>{cat.name[language]}</SelectItem>)}</SelectContent>
                                    </Select><FormMessage />
                                </FormItem>
                            )}/>
                             <FormField control={form.control} name="imageUrl" render={({ field }) => (
                                <FormItem><FormLabel>Image URL</FormLabel><FormControl><Input placeholder="https://example.com/image.jpg" {...field} /></FormControl><FormMessage /></FormItem>
                            )}/>
                            <div>
                                <FormLabel>Pricing Variants</FormLabel>
                                {fields.map((field, index) => (
                                    <div key={field.id} className="flex items-end gap-2 mt-2">
                                        <FormField control={form.control} name={`options.${index}.quantity`} render={({ field }) => (
                                            <FormItem className="flex-1"><FormControl><Input placeholder="e.g., 500g" {...field} /></FormControl><FormMessage/></FormItem>
                                        )}/>
                                        <FormField control={form.control} name={`options.${index}.price`} render={({ field }) => (
                                            <FormItem className="flex-1"><FormControl><Input type="number" placeholder="Price (₹)" {...field} /></FormControl><FormMessage/></FormItem>
                                        )}/>
                                        <Button type="button" variant="destructive" size="icon" onClick={() => remove(index)} disabled={fields.length <= 1}><X className="h-4 w-4" /></Button>
                                    </div>
                                ))}
                                <Button type="button" variant="outline" size="sm" className="mt-2" onClick={() => append({ quantity: '', price: 0 })}><Plus className="mr-2 h-4 w-4" /> Add Variant</Button>
                            </div>
                        </div>
                        </ScrollArea>
                        <SheetFooter>
                            <SheetClose asChild><Button type="button" variant="secondary">Cancel</Button></SheetClose>
                            <Button type="submit">{editingProduct ? "Save Changes" : "Save Product"}</Button>
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
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>{productToView?.name.en}</DialogTitle>
                    <DialogDescription>{productToView?.name.te} / {productToView?.name.hi}</DialogDescription>
                </DialogHeader>
                <div className="mt-4 grid gap-4">
                    <div className="w-full h-48 rounded-md overflow-hidden bg-muted relative">
                        {productToView && <Image src={productToView.imageUrl} alt={productToView.name.en} layout="fill" objectFit="cover" onError={(e) => { e.currentTarget.src = 'https://picsum.photos/seed/error/400/300' }}/>}
                    </div>
                    <div className="text-sm"><strong>Category:</strong> <Badge variant="secondary">{productToView?.categoryName}</Badge></div>
                    <div className="text-sm"><strong>Status:</strong> <Badge variant={productToView?.availability === 'in-stock' ? 'secondary' : 'destructive'}>{productToView?.availability}</Badge></div>
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

    