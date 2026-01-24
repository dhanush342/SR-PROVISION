import type { Metadata } from 'next';
import './globals.css';
import { AppProvider } from '@/context/app-provider';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { Toaster } from '@/components/ui/toaster';
import { cn } from '@/lib/utils';
import { Alegreya, Belleza } from 'next/font/google';

const alegreya = Alegreya({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-alegreya',
});

const belleza = Belleza({
  subsets: ['latin'],
  weight: '400',
  display: 'swap',
  variable: '--font-belleza',
});

export const metadata: Metadata = {
  title: 'Srinivasa Rao Provision - Quality Groceries',
  description: 'Quality groceries, fresh staples, and authentic spices at wholesale prices in Kavali. Visit us directly for quick pickup.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "GroceryStore",
            "name": "Srinivasa Rao Provision",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "Near Anjaneyaswami Statue, Vengal Rao Nagar",
              "addressLocality": "Kavali",
              "addressRegion": "Andhra Pradesh",
              "postalCode": "524201",
              "addressCountry": "IN"
            },
            "telephone": "+91-9876543210",
            "url": "https://srinivasa-rao-provision.example.com/",
            "priceRange": "$",
            "image": "https://srinivasa-rao-provision.example.com/logo.png"
          }) }}
        />
      </head>
      <body className={cn('font-body antialiased min-h-screen flex flex-col', alegreya.variable, belleza.variable)}>
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
