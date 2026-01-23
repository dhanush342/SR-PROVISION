import type { Metadata } from 'next';
import './globals.css';
import { AppProvider } from '@/context/app-provider';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { Toaster } from '@/components/ui/toaster';
import { cn } from '@/lib/utils';

export const metadata: Metadata = {
  title: 'Srinivasa Rao Provision - Authentic Indian Groceries in Kandukur',
  description: 'Your one-stop shop for authentic Indian groceries in Kandukur. We offer a wide range of products, from spices and lentils to rice and snacks.',
  keywords: 'Indian groceries, online grocery, Srinivasa Rao Provision, spices, lentils, rice, snacks, Kandukur',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Alegreya:ital,wght@0,400..900;1,400..900&family=Belleza&display=swap" rel="stylesheet" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "GroceryStore",
            "name": "Srinivasa Rao Provision",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "Leguntapadu Rd, opposite to sivalayam",
              "addressLocality": "Kandukur",
              "addressRegion": "Andhra Pradesh",
              "postalCode": "523105",
              "addressCountry": "IN"
            },
            "telephone": "+91-9876543210",
            "url": "https://srinivasa-rao-provision.example.com/",
            "priceRange": "$",
            "image": "https://srinivasa-rao-provision.example.com/logo.png"
          }) }}
        />
      </head>
      <body className={cn('font-body antialiased min-h-screen flex flex-col')}>
        <AppProvider>
          <Header />
          <main className="flex-grow">{children}</main>
          <Footer />
          <Toaster />
        </AppProvider>
      </body>
    </html>
  );
}
