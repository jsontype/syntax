import React from 'react'

export default function MovieList({movies}) {
    const render = movies.map(item => {
        const movieRank = item.rating >= 9 ? 'movieRankGood' : item.rating >= 7 ? 'movieRankSoso' : 'movieRankBad' 
        const hotIcon = item.rating >= 9 && '🔥'
        return (
          <div key={item.id}>
            <a className='movieTitle' href={item.url}>{item.title}</a>
            <div><span>{hotIcon}</span> 평점 : <span className={movieRank}>{item.rating}</span> / 10</div>
            <img src={item.large_cover_image} alt={item.title} /> 
          </div>
        )
    })

    return (
        <>
            {render}
        </>
    )
}


