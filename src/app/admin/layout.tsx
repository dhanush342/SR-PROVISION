"use client";

import { useAuth, useLanguage } from "@/context/app-provider";
import { useRouter } from "next/navigation";
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
import { Skeleton } from "@/components/ui/skeleton";

function AdminChrome({ children, onLogout }: { children: React.ReactNode, onLogout: () => void }) {
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
                    <SidebarMenuButton tooltip="Dashboard">
                      <LayoutGrid />
                      Dashboard
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                  <SidebarMenuItem>
                    <SidebarMenuButton tooltip="Products" isActive>
                      <Package />
                      Products
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                  <SidebarMenuItem>
                    <SidebarMenuButton tooltip="Categories">
                      <Folder />
                      Categories
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                  <SidebarMenuItem>
                    <SidebarMenuButton tooltip="Orders">
                      <ShoppingCart />
                      Orders
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                  <SidebarMenuItem>
                    <SidebarMenuButton tooltip="Customers">
                      <Users />
                      Customers
                    </SidebarMenuButton>
                  </SidebarMenuItem>
              </SidebarGroup>
              <SidebarGroup>
                  <p className="text-xs font-semibold text-muted-foreground px-4 py-2 group-data-[collapsible=icon]:hidden">ADMIN</p>
                  <SidebarMenuItem>
                      <SidebarMenuButton tooltip="Owner Access">
                      <KeyRound />
                      Owner Access
                      </SidebarMenuButton>
                  </SidebarMenuItem>
                  <SidebarMenuItem>
                      <SidebarMenuButton tooltip="Settings">
                      <Settings />
                      Settings
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
