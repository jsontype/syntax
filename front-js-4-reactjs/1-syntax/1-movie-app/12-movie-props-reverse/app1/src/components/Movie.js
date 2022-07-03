import React from 'react'

// ★원래 이런 방식이었으나, 보다 더 간편하게 바꾸면 아래와 같다.
// const Movie = (props) => {
//     return (
//         // 아래 div 태그의 키는 컴포넌트 부르는 쪽에 넣어준다.
//         <div className='movie'>
//             <div className='movie-title'>{props.movie.title}</div>
//             <div className='movie-year'>{props.movie.year}</div>
//         </div>
//     )
// }

const Movie = ({ movie }) => {
    return (
        // 아래 div 태그의 키는 컴포넌트 부르는 쪽에 넣어준다.
        <div className='movie'>
            <div className='movie-title'>{movie.title}</div>
            <div className='movie-year'>{movie.year}</div>
        </div>
    )
}

export default Movie