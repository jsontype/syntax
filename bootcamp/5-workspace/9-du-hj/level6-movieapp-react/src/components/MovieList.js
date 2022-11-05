import React from 'react'
import './MovieList.css'

export default function MovieList ({ movies }) {
    // JS
    console.log(movies)

    const render = movies.map((item) => {
        const movieRankClass = item.rating === 0
            ? 'movieRankNone'
            : item.rating >= 9
                ? 'movieRankGood'
                : item.rating >= 7
                    ? 'movieRankSoso'
                    : 'movieRankBad'
        
        const movieHotIcon = (item.rating && item.rating >= 9) && '💥'
        
        return (
            <div key={item.id}>
                <a className='movieTitle' href={item.url}>{movieHotIcon || ''} {item.title}</a>
                <div>평점 : <span className={movieRankClass}>{item.rating}</span> / 10</div>
                <img src={item.large_cover_image || item.background_image} alt={item.title}></img>                
            </div>
        )
    })

    // XML
    return (
        <>
            {render}
        </>
    )
}
