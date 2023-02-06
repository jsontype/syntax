import React from 'react'

export default function MovieDetail ({ item }) {
  const rank = item.rating >= 9 ? "good" : item.rating >= 7 ? "soso" : "bad"

  return (
    <div className="movieDetail">
      무비 상세정보
      <div className="genre">장르 : {item.genres.join(", ")}</div>
      <div className={rank}>
        평점 : {item.rating || "(평점없음)"} / 10
      </div>
    </div>
  )
}
