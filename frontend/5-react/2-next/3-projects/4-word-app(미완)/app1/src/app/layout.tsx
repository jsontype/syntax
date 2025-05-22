import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Navbar from '@/components/Navbar';
import RedirectHandler from '@/components/RedirectHandler';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: '단어 암기 앱',
  description: '단어 암기를 위한 앱입니다',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <body className={inter.className} suppressHydrationWarning>
        <Navbar />
        <RedirectHandler />
        {children}
      </body>
    </html>
  );
}
