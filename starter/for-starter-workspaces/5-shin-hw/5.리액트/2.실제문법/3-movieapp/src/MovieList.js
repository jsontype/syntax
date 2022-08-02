import React from 'react'
import './MovieList.css'

export default function MovieList({movieList}) {    

    const render = movieList.map((item) => {
        const rates = item.rating === 0 ? '평점 없음' :  `${item.rating}/10`

        return (
            <div className='movie' key={item.id}>                
                <img className='movieImage' src={item.large_cover_image} alt={item.title}></img> 
                <a className='movieTitle' href={item.url}>
                    { item.rating >= 8 && '🔥' } {item.title}&nbsp;
                    <span className='movieYear'>({item.year})</span>
                    <div className='movieRating'>
                        <span className={item.rating >= 8 ? 'good' : item.rating >= 6 ? 'soso' : 'bad' }>{rates}(평점: {item.rating}/10)</span>
                    </div>
                </a>
                <div className='movieGenre'>{item.genres.join(', ')}</div>
            </div>
        )
    })

    return (
        <div>
            {render}
        </div>
    )
}
