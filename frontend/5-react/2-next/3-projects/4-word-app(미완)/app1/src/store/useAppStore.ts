import { create } from "zustand"
import { persist } from "zustand/middleware"

// 기본 타입 정의
export interface Word {
  id: number
  a: string
  b: string
  memorized: boolean
}

export interface Settings {
  showOrder: "a-first" | "b-first"
  interval: number
  displayMode: "all" | "memorized" | "unmemorized"
  autoPlay: boolean
  autoNext: boolean
  textColor: string
}

// 앱 상태 인터페이스
interface AppState {
  // 상태
  words: Word[]
  currentIndex: number
  showA: boolean
  isLoading: boolean
  isAutoPlaying: boolean
  settings: Settings

  // 액션
  setWords: (words: Word[]) => void
  setCurrentIndex: (index: number) => void
  setShowA: (show: boolean) => void
  setIsLoading: (loading: boolean) => void
  setIsAutoPlaying: (playing: boolean) => void
  updateSettings: (settings: Partial<Settings>) => void
  toggleMemorized: (wordId: number) => void
  resetMemorizedStatus: () => void
}

// 기본 설정값
const defaultSettings: Settings = {
  showOrder: "a-first",
  interval: 3,
  displayMode: "all",
  autoPlay: false,
  autoNext: false,
  textColor: "#000000",
}

// Zustand 스토어 생성
export const useAppStore = create<AppState>()(
  persist(
    (set) => ({
      // 초기 상태
      words: [],
      currentIndex: 0,
      showA: true,
      isLoading: true,
      isAutoPlaying: false,
      settings: defaultSettings,

      // 액션 메서드
      setWords: (words) => set({ words }),

      setCurrentIndex: (index) => set({ currentIndex: index }),

      setShowA: (show) => set({ showA: show }),

      setIsLoading: (loading) => set({ isLoading: loading }),

      setIsAutoPlaying: (playing) => set({ isAutoPlaying: playing }),

      updateSettings: (newSettings) =>
        set((state) => ({
          settings: { ...state.settings, ...newSettings },
        })),

      toggleMemorized: (wordId) =>
        set((state) => ({
          words: state.words.map((word) =>
            word.id === wordId ? { ...word, memorized: !word.memorized } : word
          ),
        })),

      resetMemorizedStatus: () =>
        set((state) => ({
          words: state.words.map((word) => ({ ...word, memorized: false })),
        })),
    }),
    {
      name: "word-app-storage",
    }
  )
)
