import type { Metadata } from 'next';
import './globals.css';
import { AppProvider } from '@/context/app-provider';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { Toaster } from '@/components/ui/toaster';
import { cn } from '@/lib/utils';

export const metadata: Metadata = {
  title: 'Srinivasa Rao Provision Online - Authentic Indian Groceries',
  description: 'Your one-stop shop for authentic Indian groceries. We offer a wide range of products, from spices and lentils to rice and snacks. Order online for a taste of home.',
  keywords: 'Indian groceries, online grocery, Srinivasa Rao Provision, spices, lentils, rice, snacks',
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
            "@type": "LocalBusiness",
            "name": "Srinivasa Rao Provision Online",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "123 Main Street",
              "addressLocality": "Your City",
              "addressRegion": "Your State",
              "postalCode": "000000",
              "addressCountry": "IN"
            },
            "telephone": "+91-9876543210",
            "url": "https://your-website.com",
            "priceRange": "$$",
            "image": "https://your-website.com/logo.png"
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
