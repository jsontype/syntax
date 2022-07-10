import React, { useState } from 'react';

const MovieForm = ({ addMovie }) => {
    const [movieTitle, setMovieTitle] = useState('')
    const [movieYear, setMovieYear] = useState('')
    const [titleError, setTitleError] = useState('')
    const [yearError, setYearError] = useState('')

    // 인풋을 초기화 시킴
    const resetForm = () => {
        setMovieTitle('')
        setMovieYear('')
    }

    const validationForm = () => {
        resetErrors()
        let validated = true
        if (!movieTitle) {
            setTitleError('영화 제목을 넣어주세요')
            validated = false
        }
        if (!movieYear) {
            setYearError('개봉 년도을 넣어주세요')
            validated = false
        }
        return validated
    }

    const resetErrors = () => {
        setTitleError('')
        setYearError('')
    }

    const onSubmit = (event) => {    
      event.preventDefault()
        if (validationForm()) {
            addMovie({
                id: Date.now(),
                title: movieTitle,
                year: movieYear,
            })
            resetForm()        
        }
    }
  
    return (
        <form onSubmit={onSubmit}>
            <input
                type="text"
                value={movieTitle}
                placeholder="영화제목"
                onChange={e => setMovieTitle(e.target.value)}
            /><br />
            <div style={{color: 'red'}}>{titleError}</div>          
            <input
                type="number"
                value={movieYear}
                placeholder="개봉년도"
                onChange={e => setMovieYear(e.target.value)}
            /><br />
            <div style={{color: 'red'}}>{yearError}</div>
            <button type="submit">영화추가</button>
        </form>
    )
}

export default MovieForm