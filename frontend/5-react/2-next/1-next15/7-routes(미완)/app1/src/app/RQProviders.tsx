'use client'

import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { useState } from 'react'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'

export default function RQProviders({
  children,
}: {
  children: React.ReactNode
}) {
  const [queryClient] = useState(() => new QueryClient({
    // RQProvider의 defaultOption은 CSR에서 자동으로 적용이 된다. SSR의 프리패칭은 별도로 설정이 가능하다.
    defaultOptions: {
      queries: {
        staleTime: 5 * 1000, // 5초. fresh에서 stale 상태로 넘어가는 시간. (fresh = 캐시 데이터가 유효한 시간)
        // * 컴포넌트가 언마운트 되면, 자동으로 stale에서 inactive 상태로 넘어간다.
        gcTime: 5 * 60 * 1000, // 5분. inactive 상태에서, 캐시 데이터가 소멸되는 시간.
        refetchOnMount: true, // stale 상태에서, 컴포넌트가 마운트될 때 캐시 데이터를 갱신할지 여부.
        // refetchOnMount: 'always', // 컴포넌트 마운트 시 항상 새로고침 (fresh 상태여도)
        refetchOnWindowFocus: true, // stale 상태에서, 윈도우가 포커스를 얻을 때 캐시 데이터를 갱신할지 여부.
        refetchOnReconnect: true, // stale 상태에서, 네트워크가 다시 연결될 때 캐시 데이터를 갱신할지 여부.
        retry: 3, // 쿼리 실패 시 재시도 횟수.
        retryDelay: 3 * 1000, // 3초. 재시도 사이의 지연 시간.
      },
      mutations: {
        retry: 1,
      },
    },
  }));

  return (
    <QueryClientProvider client={queryClient}>
      {children}
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  )
}
