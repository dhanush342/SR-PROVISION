"use client";

import { useAuth } from "@/context/app-provider";
import { useRouter, usePathname } from "next/navigation";
import React, { useEffect } from "react";
import { 
  SidebarProvider, 
  Sidebar, 
  SidebarHeader, 
  SidebarContent, 
  SidebarFooter, 
  SidebarMenu, 
  SidebarMenuItem, 
  SidebarMenuButton, 
  SidebarGroup
} from "@/components/ui/sidebar";
import { 
  Avatar, 
  AvatarFallback
} from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  LayoutGrid,
  Package,
  Folder,
  ShoppingCart,
  Users,
  KeyRound,
  Settings,
  LogOut,
  Store,
} from "lucide-react";
import Link from "next/link";

function AdminChrome({ children, onLogout }: { children: React.ReactNode, onLogout: () => void }) {
  const pathname = usePathname();

  return (
    <SidebarProvider>
      <div className="flex h-screen">
        <Sidebar collapsible="icon" className="bg-sidebar">
          <SidebarHeader>
            <div className="flex items-center gap-2 p-2 justify-center group-data-[collapsible=icon]:justify-center">
              <Button variant="ghost" size="icon" asChild>
                  <Link href="/" aria-label="Home"><Store className="text-primary size-6" /></Link>
              </Button>
              <div className="group-data-[collapsible=icon]:hidden flex flex-col">
                <h2 className="font-semibold text-sm text-foreground">Srinivasa Rao</h2>
                <span className="text-xs text-muted-foreground">PROVISION STORE</span>
              </div>
            </div>
          </SidebarHeader>
          <SidebarContent>
            <SidebarMenu>
              <SidebarGroup>
                  <p className="text-xs font-semibold text-muted-foreground px-4 py-2 group-data-[collapsible=icon]:hidden">MAIN MENU</p>
                  <SidebarMenuItem>
                    <SidebarMenuButton asChild tooltip="Dashboard" isActive={pathname === '/admin'}>
                      <Link href="/admin">
                        <LayoutGrid />
                        Dashboard
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                  <SidebarMenuItem>
                    <SidebarMenuButton asChild tooltip="Products" isActive={pathname.startsWith('/admin/products')}>
                      <Link href="/admin/products">
                        <Package />
                        Products
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                  <SidebarMenuItem>
                    <SidebarMenuButton asChild tooltip="Categories" isActive={pathname.startsWith('/admin/categories')}>
                      <Link href="/admin/categories">
                        <Folder />
                        Categories
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                  <SidebarMenuItem>
                    <SidebarMenuButton asChild tooltip="Orders" isActive={pathname.startsWith('/admin/orders')}>
                       <Link href="/admin/orders">
                        <ShoppingCart />
                        Orders
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                  <SidebarMenuItem>
                    <SidebarMenuButton asChild tooltip="Customers" isActive={pathname.startsWith('/admin/customers')}>
                       <Link href="/admin/customers">
                        <Users />
                        Customers
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
              </SidebarGroup>
              <SidebarGroup>
                  <p className="text-xs font-semibold text-muted-foreground px-4 py-2 group-data-[collapsible=icon]:hidden">ADMIN</p>
                  <SidebarMenuItem>
                      <SidebarMenuButton asChild tooltip="Owner Access" isActive={pathname.startsWith('/admin/owner-access')}>
                        <Link href="/admin/owner-access">
                          <KeyRound />
                          Owner Access
                        </Link>
                      </SidebarMenuButton>
                  </SidebarMenuItem>
                  <SidebarMenuItem>
                      <SidebarMenuButton asChild tooltip="Settings" isActive={pathname.startsWith('/admin/settings')}>
                        <Link href="/admin/settings">
                          <Settings />
                          Settings
                        </Link>
                      </SidebarMenuButton>
                  </SidebarMenuItem>
              </SidebarGroup>
            </SidebarMenu>
          </SidebarContent>
          <SidebarFooter>
            <div className="flex items-center justify-between p-2.5 border-t group-data-[collapsible=icon]:p-2 group-data-[collapsible=icon]:justify-center">
                <div className="flex items-center gap-2">
                  <Avatar className="h-8 w-8">
                      <AvatarFallback>SR</AvatarFallback>
                  </Avatar>
                  <div className="text-sm group-data-[collapsible=icon]:hidden">
                      <p className="font-semibold text-foreground">S. Rao</p>
                      <p className="text-xs text-muted-foreground">Admin</p>
                  </div>
                </div>
              <Button variant="ghost" size="icon" onClick={onLogout} className="group-data-[collapsible=icon]:hidden">
                <LogOut />
              </Button>
            </div>
          </SidebarFooter>
        </Sidebar>
        <main className="flex-1 bg-muted/30 overflow-auto">
          {children}
        </main>
      </div>
    </SidebarProvider>
  )
}

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { isAuthenticated, isLoading, logout } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!isLoading && !isAuthenticated) {
      router.replace("/login");
    }
  }, [isAuthenticated, isLoading, router]);

  const handleLogout = () => {
    logout();
    router.push("/");
  };

  if (isLoading || !isAuthenticated) {
    return (
        <div className="flex h-screen w-full items-center justify-center bg-background">
            <div className="flex flex-col items-center gap-4">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
                <p className="text-muted-foreground">Loading Admin Panel...</p>
            </div>
        </div>
    );
  }

  return <AdminChrome onLogout={handleLogout}>{children}</AdminChrome>;
}
