import React from "react"
import PropTypes from "prop-types"

function Movie({ id, year, title, summary, poster }) {
    return <h4>{title}</h4>
}

Movie.propTypes = {
    id: PropTypes.number.isRequired,
    year: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired
}

// 아래 코딩을 해두면 Movie.js를 임포트했을 때, <Movie /> 로 꺼낼 수 있음 : App.js에서 꺼내고 있음
export default Movie