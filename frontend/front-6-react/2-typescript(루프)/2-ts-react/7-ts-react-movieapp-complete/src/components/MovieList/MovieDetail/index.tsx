import React from 'react'
import './style.css'

type MovieDetailItemProps = {
    rating: number,
    id: number,
    url: string,
    title: string,
    large_cover_image: string,
    genres: string[],
    runtime: number,
    summary: string,
}

type MovieDetailProps = {
    item: MovieDetailItemProps
}

export default function MovieDetail({ item }: MovieDetailProps) {
    const movieRank = item.rating >= 9 ? 'movieRankGood' : item.rating >= 7 ? 'movieRankSoso' : 'movieRankBad' 
    const hotIcon = item.rating >= 9 && '🔥'
    const genres = item.genres.join(', ')
    const runtime = item.runtime + "min"|| "상영시간 정보없음"
    const summary = item.summary || "줄거리 없음"      
    
    const detail = (
        <div>
            <div>{genres}</div>
            <div>{runtime}</div>
            <div><span>{hotIcon}</span> 평점 : <span className={movieRank}>{item.rating}</span> / 10</div>
            <div>{summary}</div>
        </div>
    )

    return (
        <div>{detail}</div>
    )
}
