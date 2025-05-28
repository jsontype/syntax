// 영화 목록 데이터 패칭
export async function getMovies(sort: string, limit: string) {
  const controller = new AbortController()
  const timeoutId = setTimeout(() => controller.abort(), 2500)
  try {
    const res = await fetch(
      `https://yts.mx/api/v2/list_movies.json?sort_by=${sort}&limit=${limit}`,
      {
        signal: controller.signal,
        headers: {
          Accept: "application/json",
          "Cache-Control": "max-age=300",
          Connection: "keep-alive",
        },
        cache: "no-store",
      }
    )
    clearTimeout(timeoutId)
    if (!res.ok) {
      throw new Error(`API 요청 실패: ${res.status}`)
    }
    const data = await res.json()
    return data.data.movies
  } catch (error) {
    clearTimeout(timeoutId)
    throw error
  }
}
