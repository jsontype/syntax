import React from 'react'
import './TodoList.css'

export default function todoList({ todos }) {
    const modArr = () => { alert('수정되었습니다..') }
    const delArr = () => { alert('삭제되었습니다.') }
  
    const render = todos.map((item) => { 
      return (
        <div className='todo' key={item.id}>
          <div className='title'>제목 : {item.title}</div>
          <div className='body'>본문 : {item.body}</div>
          <button onClick={modArr}>수정</button>
          <button onClick={delArr}>삭제</button>
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
