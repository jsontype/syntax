'use client';

import { useState, useEffect, useCallback } from 'react';

interface Word {
  id: number;
  english: string;
  korean: string;
  memorized: boolean;
}

interface Settings {
  interval: number;
  showOrder: 'english-first' | 'korean-first';
  displayMode: 'all' | 'memorized' | 'unmemorized';
  autoPlay: boolean;
}

interface WordCardProps {
  word: Word;
  settings: Settings;
  onNext: () => void;
  onMemorized: (id: number) => void;
}

export default function WordCard({ word, settings, onNext, onMemorized }: WordCardProps) {
  const [showEnglish, setShowEnglish] = useState<boolean>(settings.showOrder === 'english-first');
  const [isAutoPlaying, setIsAutoPlaying] = useState<boolean>(settings.autoPlay);

  // settings가 변경될 때 상태 업데이트
  useEffect(() => {
    setShowEnglish(settings.showOrder === 'english-first');
    setIsAutoPlaying(settings.autoPlay);
  }, [settings.showOrder, settings.autoPlay]);

  // 자동 재생 처리
  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setShowEnglish((prev) => !prev);
    }, settings.interval * 1000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, settings.interval]);

  // 키보드 이벤트 처리
  useEffect(() => {
    const handleKeyPress = (event: KeyboardEvent) => {
      if (event.code === 'Space') {
        event.preventDefault();
        onNext();
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [onNext]);

  const handleFlip = useCallback(() => {
    setShowEnglish((prev) => !prev);
  }, []);

  const handleAutoPlayToggle = useCallback(() => {
    setIsAutoPlaying((prev) => !prev);
  }, []);

  if (!word) return null;

  return (
    <div className="bg-white rounded-lg shadow-lg p-8">
      <div className="text-center mb-8">
        <h2 className="text-4xl font-bold mb-4">
          {showEnglish ? word.english : word.korean}
        </h2>
        <p className="text-gray-600">
          {showEnglish ? '영어' : '한국어'}
        </p>
      </div>

      <div className="flex justify-center space-x-4">
        <button
          onClick={handleFlip}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          뒤집기
        </button>

        <button
          onClick={onNext}
          className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
        >
          다음 (스페이스바)
        </button>

        <button
          onClick={handleAutoPlayToggle}
          className={`${isAutoPlaying ? 'bg-red-500' : 'bg-yellow-500'
            } text-white px-4 py-2 rounded hover:opacity-90`}
        >
          {isAutoPlaying ? '자동 중지' : '자동 시작'}
        </button>

        <label className="flex items-center space-x-2">
          <input
            type="checkbox"
            checked={word.memorized}
            onChange={() => onMemorized(word.id)}
            className="form-checkbox h-5 w-5 text-blue-500"
          />
          <span>암기 완료</span>
        </label>
      </div>
    </div>
  );
} 