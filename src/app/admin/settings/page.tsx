"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
  CardFooter,
} from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

const settingsFormSchema = z.object({
  storeName: z.string().min(1, "Store name is required"),
  address: z.string().min(1, "Address is required"),
  phone: z.string().optional(),
  email: z.string().email("Invalid email address").optional(),
});

type SettingsFormValues = z.infer<typeof settingsFormSchema>;

export default function SettingsPage() {
    const { toast } = useToast();

    const form = useForm<SettingsFormValues>({
        resolver: zodResolver(settingsFormSchema),
        defaultValues: {
            storeName: "Srinivasa Rao Provision",
            address: "Near Anjaneyaswami Statue, Vengal Rao Nagar, Kavali, Andhra Pradesh 524201",
            phone: "+91-9876543210",
            email: "contact@srprovision.example.com",
        },
    });

    function onSubmit(data: SettingsFormValues) {
        // In a real app, you would save these settings to a database.
        console.log(data);
        toast({
            title: "Settings Saved!",
            description: "Your store settings have been updated.",
        });
    }

    return (
        <div className="p-4 sm:p-6 lg:p-8">
            <h1 className="text-2xl font-bold tracking-tight mb-6">Settings</h1>
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)}>
                    <Card className="max-w-2xl">
                        <CardHeader>
                            <CardTitle>Store Details</CardTitle>
                            <CardDescription>
                                Manage your store's public information.
                            </CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            <FormField
                                control={form.control}
                                name="storeName"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Store Name</FormLabel>
                                        <FormControl>
                                            <Input placeholder="Your Store Name" {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                             <FormField
                                control={form.control}
                                name="address"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Address</FormLabel>
                                        <FormControl>
                                            <Textarea placeholder="Your store's full address" {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <FormField
                                    control={form.control}
                                    name="phone"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Contact Phone</FormLabel>
                                            <FormControl>
                                                <Input placeholder="Store phone number" {...field} />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                                <FormField
                                    control={form.control}
                                    name="email"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Contact Email</FormLabel>
                                            <FormControl>
                                                <Input placeholder="Store contact email" {...field} />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                            </div>
                        </CardContent>
                        <CardFooter className="border-t px-6 py-4">
                            <Button type="submit">Save Changes</Button>
                        </CardFooter>
                    </Card>
                </form>
            </Form>
        </div>
    );
}
