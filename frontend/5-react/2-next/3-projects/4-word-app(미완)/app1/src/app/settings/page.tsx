'use client';

import dynamic from 'next/dynamic';

// 로딩 컴포넌트
const Loading = () => (
  <main className="flex min-h-screen flex-col items-center justify-center p-24">
    <div className="animate-pulse">
      <p className="text-xl">설정 로딩 중...</p>
    </div>
  </main>
);

// SettingsApp 동적 임포트 (클라이언트 측에서만 실행)
const SettingsApp = dynamic(() => import('@/components/SettingsApp'), {
  ssr: false,
  loading: () => <Loading />
});

export default function SettingsPage() {
  return <SettingsApp />;
}
