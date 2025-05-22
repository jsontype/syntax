'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { useAppStore } from '@/store/useAppStore';

export default function SettingsApp() {
  const [isReady, setIsReady] = useState(false);
  const router = useRouter();

  // Zustand 스토어에서 설정 상태와 액션 가져오기
  const settings = useAppStore((state) => state.settings);
  const updateSettings = useAppStore((state) => state.updateSettings);

  // 컴포넌트 마운트 시 준비 상태 설정
  useEffect(() => {
    setIsReady(true);
  }, []);

  // 설정 변경 핸들러
  const handleSettingChange = <K extends keyof typeof settings>(
    key: K,
    value: typeof settings[K]
  ) => {
    updateSettings({ [key]: value });
  };

  // 초기 로딩 중 빈 화면 표시
  if (!isReady) {
    return <div className="p-8">설정 로딩 중...</div>;
  }

  return (
    <main className="flex min-h-screen flex-col items-center p-8 pt-24">
      <div className="w-full max-w-md bg-white rounded-lg shadow-lg p-8">
        <h1 className="text-2xl font-bold mb-6">설정</h1>

        <div className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              표시 순서
            </label>
            <select
              value={settings.showOrder}
              onChange={(e) => handleSettingChange('showOrder', e.target.value as 'a-first' | 'b-first')}
              className="w-full p-2 border rounded"
            >
              <option value="a-first">영어 → 한국어</option>
              <option value="b-first">한국어 → 영어</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              자동 전환 간격 (초)
            </label>
            <input
              type="range"
              min="1"
              max="10"
              value={settings.interval}
              onChange={(e) => handleSettingChange('interval', Number(e.target.value))}
              className="w-full"
            />
            <div className="text-sm text-gray-500">{settings.interval}초</div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              표시 모드
            </label>
            <select
              value={settings.displayMode}
              onChange={(e) => handleSettingChange('displayMode', e.target.value as 'all' | 'memorized' | 'unmemorized')}
              className="w-full p-2 border rounded"
            >
              <option value="all">전체 표시</option>
              <option value="memorized">암기 완료 항목만</option>
              <option value="unmemorized">암기할 항목만</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              단어 텍스트 색상
            </label>
            <input
              type="color"
              value={settings.textColor}
              onChange={(e) => handleSettingChange('textColor', e.target.value)}
              className="w-full h-10"
            />
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <input
                type="checkbox"
                id="autoPlay"
                checked={settings.autoPlay}
                onChange={(e) => handleSettingChange('autoPlay', e.target.checked)}
                className="h-4 w-4 text-blue-500"
              />
              <label htmlFor="autoPlay" className="ml-2 text-sm text-gray-700">
                자동 재생
              </label>
            </div>

            <div className="flex items-center">
              <input
                type="checkbox"
                id="autoNext"
                checked={settings.autoNext}
                onChange={(e) => handleSettingChange('autoNext', e.target.checked)}
                className="h-4 w-4 text-blue-500"
              />
              <label htmlFor="autoNext" className="ml-2 text-sm text-gray-700">
                자동 다음 단어
              </label>
            </div>
          </div>

          <button
            onClick={() => router.push('/')}
            className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
          >
            홈으로 돌아가기
          </button>
        </div>
      </div>
    </main>
  );
} 