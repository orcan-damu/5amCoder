import './globals.css';
import type { Metadata } from 'next';
import { Inter, Space_Grotesk } from 'next/font/google';
import { ThemeProvider } from "@/components/theme-provider";
import { Toaster } from "@/components/ui/toaster";
import { Navbar } from "@/components/navbar";

// Initialize fonts
const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-space-grotesk',
});

export const metadata: Metadata = {
  title: '5AM Coder - Start Your Day with Code',
  description: 'Join the 5AM Coder movement and transform your coding journey. Learn to code with clarity, commitment, and community.',
  keywords: ['coding', 'programming', 'education', '5AM', 'learning', 'developer', 'tech', 'software'],
  authors: [{ name: 'Sasi Varna Kumar' }],
  viewport: 'width=device-width, initial-scale=1, maximum-scale=1',
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
    { media: '(prefers-color-scheme: dark)', color: '#171717' }
  ],
  openGraph: {
    type: 'website',
    title: '5AM Coder - Transform Your Coding Journey',
    description: 'Join a community of passionate developers who start their day with purpose.',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: '5AM Coder Preview'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: '5AM Coder - Transform Your Coding Journey',
    description: 'Join a community of passionate developers who start their day with purpose.',
    images: ['/og-image.png'],
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning className={`${inter.variable} ${spaceGrotesk.variable}`}>
      <head>
        {/* Preload fonts */}
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        
        {/* Preload critical assets */}
        <link
          rel="preload"
          href="/coding-animation.json"
          as="fetch"
          crossOrigin="anonymous"
        />
        
        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/icon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        
        {/* PWA manifest */}
        <link rel="manifest" href="/manifest.json" />
      </head>
      <body className={`${inter.className} antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          <main className="relative min-h-screen">
            {/* Background gradient */}
            <div 
              className="fixed inset-0 bg-gradient-to-br from-background to-background/80 pointer-events-none"
              aria-hidden="true"
            />
            
            {/* Content */}
            <div className="relative z-10">
              <Navbar />
              {children}
            </div>
          </main>
          <Toaster />
        </ThemeProvider>
        
        {/* Cookie consent if needed */}
        {/* <CookieConsent /> */}
      </body>
    </html>
  );
}