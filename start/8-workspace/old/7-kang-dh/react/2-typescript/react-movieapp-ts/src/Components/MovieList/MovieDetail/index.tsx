import React from 'react'

type MovieDetailItemProps = {
    id: number,
    rating: number,
    url?: string,
    title: string,
    large_cover_image?: string, // ?는 없어도 된다는 뜻. 있으면 쓰고.. 옵셔널 체이닝
    genres: string[],
    runtime: number,
    summary: string,
    year: number,
    synopsis: string,
}

type MovieDetailProps = {
    item: MovieDetailItemProps,
}

export default function MovieDetail({ item }: MovieDetailProps) {
  return (
    <>
        <div>장르 : {item.genres.join(', ')}</div>
        <div>상영시간 : {item.runtime}분</div>
        <div>줄거리 : {item.summary}</div>
        <div>제목 : {item.title}</div>
        <div>년도 : {item.year}년</div>
    </>
  )
}
