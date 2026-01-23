"use client";

import Image from 'next/image';
import {
  MoreVertical,
  Search,
  Upload,
  Plus,
  ChevronLeft,
  ChevronRight,
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
import { categories, Product } from '@/lib/data';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { useLanguage } from '@/context/app-provider';
import { Badge } from '@/components/ui/badge';
import React from 'react';

type ProductWithCategory = Product & { categoryName: string };

export default function AdminProductsPage() {
    const { language } = useLanguage();

    const allProducts: ProductWithCategory[] = React.useMemo(() => 
        categories.flatMap(category => 
            category.products.map(p => ({
                ...p, 
                categoryName: category.name[language],
            }))
        )
    , [language]);
    
    const productSublist = allProducts.filter(p => ['toor-dal-1', 'sona-masoori-1', 'chilli-powder-1', 'tamarind-1', 'turmeric-powder-1'].includes(p.id))
      .sort((a,b) => {
        const order = ['toor-dal-1', 'sona-masoori-1', 'chilli-powder-1', 'tamarind-1', 'turmeric-powder-1'];
        return order.indexOf(a.id) - order.indexOf(b.id);
      });

  return (
    <div className="p-4 sm:p-6 lg:p-8">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">Inventory & Products</h1>
          <p className="text-muted-foreground">
            Manage stock, prices, and catalog visibility.
          </p>
        </div>
        <div className="flex gap-2 mt-4 sm:mt-0">
          <Button variant="outline">
            <Upload className="mr-2 h-4 w-4" />
            Export CSV
          </Button>
          <Button className="bg-primary hover:bg-primary/90">
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
                placeholder="Search by product name, telugu name, or SKU..."
                className="pl-8 bg-background"
            />
            </div>
            <Select>
            <SelectTrigger className="w-full sm:w-[180px] bg-background">
                <SelectValue placeholder="All Categories" />
            </SelectTrigger>
            <SelectContent>
                <SelectItem value="all">All Categories</SelectItem>
                {categories.map((cat) => (
                    <SelectItem key={cat.id} value={cat.id}>{cat.name[language]}</SelectItem>
                ))}
            </SelectContent>
            </Select>
            <Select>
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
                {productSublist.map((product) => {
                const placeholder = PlaceHolderImages.find(p => p.id === product.imageId);
                return (
                    <TableRow key={product.id}>
                    <TableCell className="font-medium">
                        <div className="flex items-center gap-3">
                            <div className="w-12 h-12 rounded-md overflow-hidden relative bg-muted flex-shrink-0">
                                {placeholder && (
                                    <Image src={placeholder.imageUrl} alt={product.name[language]} fill className="object-cover"/>
                                )}
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
                            {product.id === 'chilli-powder-1' && (
                                <Button variant="ghost" size="sm" className="text-primary hover:bg-primary/10">
                                    <Plus className="h-3 w-3 mr-1"/> Add
                                </Button>
                            )}
                        </div>
                    </TableCell>
                    <TableCell>
                        <Switch checked={product.availability === 'in-stock'} />
                    </TableCell>
                    <TableCell className="text-right">
                        <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <Button variant="ghost" size="icon">
                            <MoreVertical className="h-4 w-4" />
                            </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                            <DropdownMenuItem>Edit</DropdownMenuItem>
                            <DropdownMenuItem>View</DropdownMenuItem>
                            <DropdownMenuItem className="text-destructive focus:bg-destructive/10 focus:text-destructive">Delete</DropdownMenuItem>
                        </DropdownMenuContent>
                        </DropdownMenu>
                    </TableCell>
                    </TableRow>
                )
                })}
            </TableBody>
            </Table>
        </div>
        <div className="flex items-center justify-between mt-4 px-2">
            <p className="text-sm text-muted-foreground">Showing 1-5 of {allProducts.length} products</p>
            <div className="flex items-center gap-1">
                <Button variant="outline" size="sm"><ChevronLeft className="h-4 w-4"/></Button>
                <Button variant="outline" size="sm" className="bg-primary text-primary-foreground hover:bg-primary/90 hover:text-primary-foreground">1</Button>
                <Button variant="ghost" size="sm">2</Button>
                <Button variant="ghost" size="sm">3</Button>
                <span className="text-muted-foreground">...</span>
                <Button variant="ghost" size="sm">12</Button>
                <Button variant="outline" size="sm"><ChevronRight className="h-4 w-4"/></Button>
            </div>
        </div>
      </div>
    </div>
  );
}
