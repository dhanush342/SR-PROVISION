"use client";

import { useAuth, useLanguage } from "@/context/app-provider";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { useEffect } from "react";
import { Skeleton } from "@/components/ui/skeleton";

export default function LoginPage() {
  const { login, isAuthenticated, isLoading } = useAuth();
  const { t } = useLanguage();
  const router = useRouter();
  const { toast } = useToast();

  const formSchema = z.object({
    email: z.string().email({ message: "Please enter a valid email." }),
    password: z.string().min(1, { message: "Password is required." }),
  });

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  useEffect(() => {
    if (!isLoading && isAuthenticated) {
      router.replace('/admin');
    }
  }, [isAuthenticated, isLoading, router]);

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    try {
        login(values.email, values.password);
        toast({
          title: "Login Successful!",
          description: "Welcome to the admin panel.",
        });
        router.push("/admin");
    } catch (error) {
      toast({
        variant: "destructive",
        title: t('invalidCredentials'),
        description: "Please check your email and password and try again."
      });
    }
  };

  if (isLoading || isAuthenticated) {
    return (
      <div className="container mx-auto flex min-h-[70vh] items-center justify-center px-4 py-12">
        <Card className="w-full max-w-sm shadow-2xl">
          <CardHeader>
            <Skeleton className="h-8 w-3/4 mx-auto" />
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-2">
              <Skeleton className="h-4 w-20" />
              <Skeleton className="h-10 w-full" />
            </div>
            <div className="space-y-2">
              <Skeleton className="h-4 w-20" />
              <Skeleton className="h-10 w-full" />
            </div>
            <Skeleton className="h-10 w-full" />
          </CardContent>
        </Card>
    </div>
    );
  }

  return (
    <div className="container mx-auto flex min-h-[70vh] items-center justify-center px-4 py-12">
      <Card className="w-full max-w-sm shadow-2xl">
        <CardHeader>
          <CardTitle className="font-headline text-3xl text-center text-primary">
            {t('adminLogin')}
          </CardTitle>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>{t('email')}</FormLabel>
                    <FormControl>
                      <Input placeholder="your@email.com" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>{t('password')}</FormLabel>
                    <FormControl>
                      <Input type="password" placeholder="••••••••" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button type="submit" className="w-full bg-accent text-accent-foreground hover:bg-accent/90" disabled={form.formState.isSubmitting}>
                {t('login')}
              </Button>
            </form>
          </Form>
        </CardContent>
      </Card>
    </div>
  );
}
