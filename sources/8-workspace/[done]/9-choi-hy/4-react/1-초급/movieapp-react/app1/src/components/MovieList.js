import React from 'react'

export default function MovieList ({ movies }) {
    // JS
    console.log(movies)
    const render = movies.map(item => {
        const rankClass = item.rating >= 9 ? 'good' : item.rating >= 7 ? 'soso' : 'bad'
        const iconClass = item.rating >= 9 && '💥'
        return (
            <div key={item.id}>
                <a className='movieTitle' href={item.url}><span>{iconClass}</span> {item.title}</a>
                <div className={rankClass}>평점 : {item.rating} / 10점</div>
                <img className='movieImage' src={item.large_cover_image} alt={item.tile}></img>
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
