import React from 'react'

export default function MovieList ({ movies }) {
    const render = movies.map(item => {
        // JS    
        const movieRankClass = item.rating >= 9 ? 'good' : item.rating >= 7 ? 'soso' : 'bad'
        const hotIcon = item.rating >= 9 && '💥'

        // XML
        return (
            <div key={item.id}>
                <a className='movieTitle' href={item.url}>{hotIcon} {item.title}</a>
                <div>평점 : <span className={movieRankClass}>{item.rating}</span> / 10점</div>
                <img src={item.large_cover_image} alt={item.title}></img>
            </div>
        )
    })
    
    return (
        <>
            {render}
        </>
    )
}
