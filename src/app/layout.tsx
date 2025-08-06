import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Antonio Carbone - AI Engineer & Innovation Leader',
  description: 'AI Engineer specializing in Machine Learning, Deep Learning, and intelligent systems. Building the future with artificial intelligence.',
  keywords: ['AI Engineer', 'Machine Learning', 'Deep Learning', 'Antonio Carbone', 'Artificial Intelligence', 'PyTorch', 'TensorFlow'],
  authors: [{ name: 'Antonio Carbone' }],
  openGraph: {
    title: 'Antonio Carbone - AI Engineer',
    description: 'AI Engineer specializing in Machine Learning, Deep Learning, and intelligent systems.',
    url: 'https://antoniocarbone.com',
    siteName: 'Antonio Carbone Portfolio',
    locale: 'en_US',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="min-h-screen flex flex-col">
          <Header />
          <main className="flex-grow">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}