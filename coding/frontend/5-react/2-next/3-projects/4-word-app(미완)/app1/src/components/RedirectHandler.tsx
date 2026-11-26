'use client';

import { useEffect } from 'react';
import { usePathname, useRouter } from 'next/navigation';

export default function RedirectHandler() {
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    // movies 경로로 접근하면 홈으로 리다이렉션
    if (pathname.includes('/movies') && pathname !== '/') {
      router.replace('/');
    }
  }, [pathname, router]);

  // 이 컴포넌트는 UI를 렌더링하지 않습니다
  return null;
} 