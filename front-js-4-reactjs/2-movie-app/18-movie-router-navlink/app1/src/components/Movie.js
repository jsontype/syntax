import React from 'react'

const Movie = ({ movie, removeMovie }) => {
    return (
        // 아래 div 태그의 키는 컴포넌트 부르는 쪽에 넣어준다.
        <div className='movie'>
            <div className='movie-title'>
                {movie.title}
                <span className='movie-year'>
                    ({movie.year})
                </span>
            </div>
            <div className='movie-year'>
                <button onClick={() => removeMovie(movie.id)}>삭제</button>
            </div>
        </div>
    )
}

export default Movie