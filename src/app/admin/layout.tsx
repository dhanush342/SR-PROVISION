"use client";

import { useAuth } from "@/context/app-provider";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { Skeleton } from "@/components/ui/skeleton";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { isAuthenticated, isLoading } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!isLoading && !isAuthenticated) {
      router.replace("/login");
    }
  }, [isAuthenticated, isLoading, router]);

  if (isLoading || !isAuthenticated) {
    return (
        <div className="container mx-auto px-4 py-12">
            <div className="space-y-4">
                <Skeleton className="h-12 w-1/2" />
                <Skeleton className="h-8 w-3/4" />
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
                    <Skeleton className="h-48" />
                    <Skeleton className="h-48" />
                </div>
            </div>
        </div>
    );
  }

  return <>{children}</>;
}
