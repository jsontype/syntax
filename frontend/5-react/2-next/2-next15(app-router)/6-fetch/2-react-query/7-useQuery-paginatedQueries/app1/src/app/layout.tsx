import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Link from "next/link";
import "./globals.css";
import RQProviders from './RQProviders'

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {/* Header: NavBar - 상단에 고정 */}
        <div className="sticky top-0 bg-black shadow-md z-20 py-3 px-4">
          <span className="pr-3 font-medium"><Link href="/">홈</Link></span>
          <span className="pr-3 font-medium"><Link href="/movies">무비앱(SSR)</Link></span>
          <span className="pr-3 font-medium"><Link href="/movies-infinite">무비앱(무한스크롤)</Link></span>
          <span className="pr-3 font-medium"><Link href="/movies-pagination">무비앱(페이지네이션)</Link></span>
          <hr className="mt-3" />
        </div>

        {/* Main - 상단 네비게이션을 위한 패딩 추가 */}
        <div className="p-4">
          <RQProviders>
            {children}
          </RQProviders>
        </div>
      </body>
    </html>
  );
}
