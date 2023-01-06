import React from 'react'

type MovieListProps = {
    movies: []
}

export default function MovieList ({ movies }: MovieListProps) {
    // JS
    console.log(movies)
    const render = movies.map((item: { rating: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | React.ReactFragment | null | undefined; id: React.Key | null | undefined; url: string | undefined; title: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | React.ReactFragment | React.ReactPortal | null | undefined; large_cover_image: string | undefined; tile: string | undefined }) => {
        const rankClass = item.rating && item.rating >= 9 ? 'good' : item.rating && item.rating >= 7 ? 'soso' : 'bad'
        const iconClass = item.rating && item.rating >= 9 && '💥'
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
