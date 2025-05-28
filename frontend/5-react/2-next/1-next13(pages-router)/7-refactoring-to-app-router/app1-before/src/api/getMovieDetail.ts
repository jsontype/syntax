// 영화 상세 데이터 패칭
export async function getMovieDetail(id: string) {
  try {
    const response = await fetch(
      `https://yts.mx/api/v2/movie_details.json?movie_id=${id}`,
      { cache: "no-store" }
    )
    if (!response.ok) {
      throw new Error("Failed to fetch movie detail")
    }
    const data = await response.json()
    return data.data.movie
  } catch (error) {
    console.error(error)
    return null
  }
}
