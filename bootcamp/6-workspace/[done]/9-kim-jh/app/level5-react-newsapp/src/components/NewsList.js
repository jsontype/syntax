import React from 'react'

export default function NewsList({news}) {
  const readMore = '..click read more👆'

  const render =   news.map(item => {
    const domain = item.domain || 'unknown'
    const comments = item.comments_count && '%🖌' + item.comments_count

        return (
          <div className='newsTitle' key={item.id}>
            <a href={item.url}>{item.title}</a>
            <br/>{ readMore }&nbsp;&nbsp;&nbsp;&nbsp;{ comments }
            <div className={domain === 'unknown ? unknown : normal'}>
              <br/>{domain }
            </div>
            <hr/>
          </div>
        )
    })

    return (
        <>
            {render}
        </>
    )
}


