"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useAuth, useLanguage } from "@/context/app-provider";
import { useRouter } from "next/navigation";

export default function AdminPage() {
  const { logout } = useAuth();
  const { t } = useLanguage();
  const router = useRouter();

  const handleLogout = () => {
    logout();
    router.push("/");
  };

  return (
    <div className="container mx-auto px-4 py-12">
      <Card className="shadow-lg">
        <CardHeader className="flex flex-row items-center justify-between">
            <div>
                <CardTitle className="font-headline text-3xl text-primary">{t('adminDashboard')}</CardTitle>
                <CardDescription>{t('welcomeAdmin')}</CardDescription>
            </div>
            <Button onClick={handleLogout} variant="destructive">
                {t('logout')}
            </Button>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground">
            {t('productManagement')}
          </p>
           <div className="mt-8 border-2 border-dashed border-border rounded-lg p-8 text-center">
                <h3 className="text-lg font-semibold text-foreground">Product Management Interface</h3>
                <p className="text-sm text-muted-foreground mt-2">The UI for adding, editing, and deleting products would be implemented here.</p>
                <Button className="mt-4 bg-accent text-accent-foreground hover:bg-accent/90">Add New Product</Button>
            </div>
        </CardContent>
      </Card>
    </div>
  );
}
