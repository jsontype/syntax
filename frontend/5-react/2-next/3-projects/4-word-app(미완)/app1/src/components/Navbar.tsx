'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const pathname = usePathname();

  return (
    <nav className="bg-gray-800 text-white p-4">
      <div className="container mx-auto flex justify-between">
        <div className="text-xl font-bold">단어 암기 앱</div>
        <ul className="flex space-x-4">
          <li>
            <Link
              href="/"
              className={`hover:text-blue-300 ${pathname === '/' ? 'text-blue-300' : ''}`}
            >
              홈
            </Link>
          </li>
          <li>
            <Link
              href="/settings"
              className={`hover:text-blue-300 ${pathname === '/settings' ? 'text-blue-300' : ''}`}
            >
              설정
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
} 