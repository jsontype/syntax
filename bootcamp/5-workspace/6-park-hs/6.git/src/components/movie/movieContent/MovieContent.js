import React from 'react'
import './MovieContent.css'

export default function MovieContent({item}) {
  const renderTorrent = item.torrents.map((item, index) => {
    return (
      <span key={item.hash}>
        <a href={item.url}>링크#{index + 1}</a> &nbsp;
      </span>
    )
  })

  return (
    <div className='movieContent'>
      <div><span className="contentSubTitle">타이틀:</span> {item.title_long}</div>
      <div><span className="contentSubTitle">장르:</span> {item.genres.join(', ')}</div>
      <div><span className="contentSubTitle">런타임:</span> {item.runtime}분</div>
      <div><span className="contentSubTitle">평점:</span> {item.rating}/10점</div>
      <div><span className="contentSubTitle">시놉시스:</span> <br/>{item.synopsis}</div>
      <hr />
      <div><span className="contentSubTitle">토렌트:</span> {renderTorrent}</div>
    </div>
  )
}
