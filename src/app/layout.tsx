import type { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import './globals.css';


/* layout.tsx */
import Chatbot from './Chatbot';
/* ... */
< Chatbot />
                

export const metadata: Metadata = {
  title: 'MediCare Diagnostics - Professional Healthcare Laboratory',
  description: 'Leading diagnostic laboratory providing comprehensive health testing services with home collection facilities.',
  keywords: 'diagnostic lab, blood tests, health checkup, medical tests, home collection',
  openGraph: {
    title: 'MediCare Diagnostics',
    description: 'Professional Healthcare Laboratory Services',
    type: 'website',
    url: 'https://medicarediagnostics.in',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>🏥</text></svg>" />
        <meta name="theme-color" content="#0066cc" />
      </head>
      <body className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
