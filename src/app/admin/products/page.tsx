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
import React, { useState, useMemo } from 'react';

type ProductWithCategory = Product & { categoryName: string; categoryId: string };

export default function AdminProductsPage() {
    const { language } = useLanguage();
    
    const [searchQuery, setSearchQuery] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('all');
    const [selectedStatus, setSelectedStatus] = useState('all');
    const [currentPage, setCurrentPage] = useState(1);
    const productsPerPage = 5;

    const allProducts: ProductWithCategory[] = useMemo(() => 
        categories.flatMap(category => 
            category.products.map(p => ({
                ...p, 
                categoryName: category.name[language],
                categoryId: category.id,
            }))
        )
    , [language]);
    
    const filteredProducts = useMemo(() => {
        return allProducts
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
                return selectedStatus === 'all' || product.availability === selectedStatus;
            });
    }, [allProducts, searchQuery, selectedCategory, selectedStatus]);

    const totalPages = Math.ceil(filteredProducts.length / productsPerPage);
    const indexOfLastProduct = currentPage * productsPerPage;
    const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
    const currentProducts = filteredProducts.slice(indexOfFirstProduct, indexOfLastProduct);

    const handlePageChange = (page: number) => {
        if (page > 0 && page <= totalPages) {
            setCurrentPage(page);
        }
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
                <Button
                    key={index}
                    variant={currentPage === number ? "default" : "ghost"}
                    size="sm"
                    onClick={() => handlePageChange(number)}
                >
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
          <Button>
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
                onChange={(e) => {
                  setSearchQuery(e.target.value);
                  setCurrentPage(1);
                }}
            />
            </div>
            <Select value={selectedCategory} onValueChange={(value) => {
              setSelectedCategory(value);
              setCurrentPage(1);
            }}>
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
            <Select value={selectedStatus} onValueChange={(value) => {
              setSelectedStatus(value);
              setCurrentPage(1);
            }}>
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
                {currentProducts.length > 0 ? currentProducts.map((product) => {
                const placeholder = PlaceHolderImages.find(p => p.id === product.imageId);
                return (
                    <TableRow key={product.id}>
                    <TableCell className="font-medium">
                        <div className="flex items-center gap-3">
                            <div className="w-12 h-12 rounded-md overflow-hidden bg-muted flex-shrink-0">
                                {placeholder && (
                                    <Image src={placeholder.imageUrl} alt={product.name[language]} width={48} height={48} className="object-cover w-full h-full"/>
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
                }) : (
                  <TableRow>
                    <TableCell colSpan={5} className="h-24 text-center">
                      No products found.
                    </TableCell>
                  </TableRow>
                )}
            </TableBody>
            </Table>
        </div>
        <div className="flex items-center justify-between mt-4 px-2">
            <p className="text-sm text-muted-foreground">
                Showing {filteredProducts.length > 0 ? indexOfFirstProduct + 1 : 0}
                -
                {Math.min(indexOfLastProduct, filteredProducts.length)} of {filteredProducts.length} products
            </p>
            {totalPages > 1 && (
                <div className="flex items-center gap-1">
                    <Button variant="outline" size="sm" onClick={() => handlePageChange(currentPage - 1)} disabled={currentPage === 1}>
                        <ChevronLeft className="h-4 w-4"/>
                    </Button>
                    {renderPageNumbers()}
                    <Button variant="outline" size="sm" onClick={() => handlePageChange(currentPage + 1)} disabled={currentPage === totalPages}>
                        <ChevronRight className="h-4 w-4"/>
                    </Button>
                </div>
            )}
        </div>
      </div>
    </div>
  );
}
