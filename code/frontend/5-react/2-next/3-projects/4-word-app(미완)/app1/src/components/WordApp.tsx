'use client';

import { useEffect, useCallback, useState } from 'react';
import { useAppStore, Word } from '@/store/useAppStore';

export default function WordApp() {
  // 로컬 상태
  const [mounted, setMounted] = useState(false);

  // Zustand 스토어에서 상태 가져오기
  const words = useAppStore((state) => state.words);
  const currentIndex = useAppStore((state) => state.currentIndex);
  const showA = useAppStore((state) => state.showA);
  const isLoading = useAppStore((state) => state.isLoading);
  const isAutoPlaying = useAppStore((state) => state.isAutoPlaying);
  const settings = useAppStore((state) => state.settings);

  // Zustand 스토어에서 액션 가져오기
  const setWords = useAppStore((state) => state.setWords);
  const setCurrentIndex = useAppStore((state) => state.setCurrentIndex);
  const setShowA = useAppStore((state) => state.setShowA);
  const setIsLoading = useAppStore((state) => state.setIsLoading);
  const setIsAutoPlaying = useAppStore((state) => state.setIsAutoPlaying);
  const updateSettings = useAppStore((state) => state.updateSettings);
  const toggleMemorized = useAppStore((state) => state.toggleMemorized);
  const resetMemorizedStatus = useAppStore((state) => state.resetMemorizedStatus);

  // 컴포넌트 마운트 시 초기화
  useEffect(() => {
    setMounted(true);
  }, []);

  // 단어 불러오기
  useEffect(() => {
    if (!mounted) return;

    async function fetchWords() {
      try {
        setIsLoading(true);

        // 기본 단어 배열 (API 오류 시 사용할 폴백)
        const defaultWords = [
          { id: 1, a: "apple", b: "사과", memorized: false },
          { id: 2, a: "book", b: "책", memorized: false },
          { id: 3, a: "cat", b: "고양이", memorized: false }
        ];

        // API 호출
        const response = await fetch('/api/words');
        let data = defaultWords;

        if (response.ok) {
          data = await response.json();
        } else {
          console.error('API 응답 오류');
        }

        setWords(data);
        setShowA(settings.showOrder === 'a-first');
      } catch (error) {
        console.error('단어 로드 실패:', error);

        // 에러 발생 시 기본 단어 배열로 설정
        setWords([
          { id: 1, a: "apple", b: "사과", memorized: false },
          { id: 2, a: "book", b: "책", memorized: false },
          { id: 3, a: "cat", b: "고양이", memorized: false }
        ]);
      } finally {
        setIsLoading(false);
      }
    }

    fetchWords();
  }, [mounted, setIsLoading, setWords, settings.showOrder, setShowA]);

  // 자동 재생
  useEffect(() => {
    if (!mounted || !isAutoPlaying) return;

    const timer = window.setInterval(() => {
      setShowA((prev) => {
        // 현재 B면 다음 단어로
        if (!prev && settings.autoNext) {
          handleNext();
          return true; // 다음 단어의 A를 보여줌
        }
        return !prev; // A면 B로, B면 A로
      });
    }, settings.interval * 1000);

    return () => window.clearInterval(timer);
  }, [mounted, isAutoPlaying, settings.interval, settings.autoNext]);

  // 필터링된 단어 목록
  const filteredWords = useCallback(() => {
    switch (settings.displayMode) {
      case 'memorized':
        return words.filter(word => word.memorized);
      case 'unmemorized':
        return words.filter(word => !word.memorized);
      default:
        return words;
    }
  }, [words, settings.displayMode])();

  const currentWord = filteredWords[currentIndex];

  // 다음 단어로 이동
  const handleNext = useCallback(() => {
    if (filteredWords.length === 0) return;

    // 자동 재생중이 아니고 현재 A를 보고 있으면 B를 보여줌
    if (!isAutoPlaying && showA) {
      setShowA(false);
      return;
    }

    // 현재 인덱스가 마지막 단어인 경우 0으로 설정, 아니면 다음 단어로
    if (currentIndex >= filteredWords.length - 1) {
      setCurrentIndex(0); // 첫 번째 단어로 돌아가기
    } else {
      setCurrentIndex(currentIndex + 1);
    }

    setShowA(settings.showOrder === 'a-first'); // 다음 단어로 넘어갈 때 설정에 따라 A 또는 B부터 보여주기
  }, [filteredWords.length, currentIndex, showA, isAutoPlaying, settings.showOrder, setCurrentIndex, setShowA]);

  // 단어 뒤집기
  const handleFlip = useCallback(() => {
    setShowA(!showA);
  }, [showA, setShowA]);

  // 암기 상태 토글
  const handleToggleMemorized = useCallback(() => {
    if (!currentWord) return;
    toggleMemorized(currentWord.id);
  }, [currentWord, toggleMemorized]);

  // 자동 재생 토글
  const handleAutoPlayToggle = useCallback(() => {
    setIsAutoPlaying(!isAutoPlaying);
  }, [isAutoPlaying, setIsAutoPlaying]);

  // 표시 모드 변경
  const handleFilterChange = useCallback((filter: 'all' | 'memorized' | 'unmemorized') => {
    updateSettings({ displayMode: filter });
    setCurrentIndex(0); // 필터 변경 시 첫 단어부터 보기
  }, [updateSettings, setCurrentIndex]);

  // 암기 상태 초기화
  const handleResetProgress = useCallback(() => {
    if (window.confirm('모든 암기 상태를 초기화하시겠습니까?')) {
      resetMemorizedStatus();
    }
  }, [resetMemorizedStatus]);

  // 키보드 단축키
  useEffect(() => {
    if (!mounted) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.code === 'Space') {
        e.preventDefault();
        handleNext();
      } else if (e.code === 'KeyF') {
        e.preventDefault();
        handleFlip();
      } else if (e.code === 'Enter') {
        e.preventDefault();
        handleToggleMemorized();
      } else if (e.code === 'KeyA') {
        e.preventDefault();
        handleAutoPlayToggle();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [mounted, handleNext, handleFlip, handleToggleMemorized, handleAutoPlayToggle]);

  // 컴포넌트가 마운트되지 않았거나 로딩 중이면 로딩 화면 표시
  if (!mounted || isLoading) {
    return (
      <main className="flex min-h-screen flex-col items-center justify-center p-24">
        <p>단어 로딩 중...</p>
      </main>
    );
  }

  if (words.length === 0) {
    return (
      <main className="flex min-h-screen flex-col items-center justify-center p-24">
        <p>단어가 없습니다</p>
      </main>
    );
  }

  if (filteredWords.length === 0) {
    return (
      <main className="flex min-h-screen flex-col items-center justify-center pt-24 p-8">
        <h1 className="text-4xl font-bold mb-8">단어 암기 앱</h1>
        <p>{settings.displayMode === 'memorized' ? '암기 완료된' : '암기할'} 단어가 없습니다</p>
        <div className="mt-4 flex gap-2">
          <button
            onClick={() => handleFilterChange('all')}
            className="bg-blue-500 text-white px-4 py-2 rounded"
          >
            전체 보기
          </button>
          <button
            onClick={handleResetProgress}
            className="bg-red-500 text-white px-4 py-2 rounded"
            disabled={words.filter(w => w.memorized).length === 0}
          >
            초기화
          </button>
        </div>
      </main>
    );
  }

  const memorizedCount = words.filter(w => w.memorized).length;
  const unmemorizedCount = words.length - memorizedCount;

  return (
    <main className="flex min-h-screen flex-col items-center justify-center pt-24 p-8">
      <div className="w-full max-w-md bg-white rounded-lg shadow-lg p-8 mb-4">
        <div className="text-center mb-8">
          <h2
            className={`text-4xl font-bold mb-4`}
            style={{ color: settings.textColor }}
          >
            {showA ? currentWord.a : currentWord.b}
          </h2>
        </div>

        <div className="flex flex-wrap justify-center gap-4">
          <button
            onClick={handleFlip}
            className="bg-blue-500 text-white px-4 py-2 rounded"
          >
            {showA ? 'A→B' : 'B→A'} (F)
          </button>

          <button
            onClick={handleNext}
            className="bg-green-500 text-white px-4 py-2 rounded"
          >
            다음 ({currentIndex + 1}/{filteredWords.length}) (Space)
          </button>

          <button
            onClick={handleToggleMemorized}
            className={`${currentWord.memorized ? 'bg-yellow-500' : 'bg-gray-300'
              } text-black px-4 py-2 rounded`}
          >
            {currentWord.memorized ? '암기 완료' : '암기'} (Enter)
          </button>

          <button
            onClick={handleAutoPlayToggle}
            className={`${isAutoPlaying ? 'bg-red-500' : 'bg-purple-500'
              } text-white px-4 py-2 rounded`}
          >
            {isAutoPlaying ? '자동 중지' : '자동 시작'} (A)
          </button>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-lg p-4 w-full max-w-md mb-4">
        <div className="mb-2">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            자동 전환 간격 (초)
          </label>
          <input
            type="range"
            min="1"
            max="10"
            value={settings.interval}
            onChange={(e) => updateSettings({ interval: Number(e.target.value) })}
            className="w-full"
          />
          <span className="text-sm text-gray-500">{settings.interval}초</span>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            표시 단어
          </label>
          <div className="flex gap-2">
            <button
              onClick={() => handleFilterChange('all')}
              className={`px-2 py-1 text-sm rounded text-black ${settings.displayMode === 'all' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
            >
              전체 ({words.length})
            </button>
            <button
              onClick={() => handleFilterChange('memorized')}
              className={`px-2 py-1 text-sm rounded text-black ${settings.displayMode === 'memorized' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
            >
              암기 완료 ({memorizedCount})
            </button>
            <button
              onClick={() => handleFilterChange('unmemorized')}
              className={`px-2 py-1 text-sm rounded text-black ${settings.displayMode === 'unmemorized' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
            >
              미암기 ({unmemorizedCount})
            </button>
          </div>
        </div>
      </div>

      <button
        onClick={handleResetProgress}
        className={`bg-red-500 text-white px-4 py-2 rounded ${memorizedCount === 0 ? 'opacity-50 cursor-not-allowed' : ''}`}
        disabled={memorizedCount === 0}
      >
        암기 상태 초기화
      </button>
    </main>
  );
} 