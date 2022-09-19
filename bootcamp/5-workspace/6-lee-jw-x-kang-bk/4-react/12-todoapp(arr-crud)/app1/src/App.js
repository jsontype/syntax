import React, { useState, useEffect, useRef } from 'react'
import './App.css'

export default function App() {
  const [todos, setTodos] = useState([])
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/todos')
      .then((res) => { return res.json() })
      .then((json) => {
        const filteredJson = json.filter((item) => { return item.userId === 1 })
        setTodos(filteredJson)
      })
  }, [])

  const [inputText, setInputText] = useState('')
  const onChange = (event) => {
    setInputText(event.target.value)
  }

  // ★★ useRef 사용 1. CRUD는 키 값에 반드시 useRef를 써야한다.
  const nextId = useRef(todos.length + 1) // todos 길이가 20일 경우 21

  // console.log(todos)
  useEffect(() => {
    console.log(todos)
  }, [todos])

  // completed: false
  // id: 1
  // title: "delectus aut autem"
  // userId: 1

  // "배열 state의 추가" 함수
  const onCreate = (event) => { 
    event.preventDefault() // = 원래 submit하는 일(action page에 정보를 넘기는 일)을 막는다.
    setTodos([{
      completed: false,
      // ★★ useRef 사용 2. onCreate할 때 반드시 useRef화된 키값의 .current 값으로 넣어줘야 한다.
      id: nextId.current,
      title: inputText,
      userId: 1
    }, ...todos])
    // setTodos(todos.concat({
    //   completed: false,
    //   id: 1,
    //   title: text,
    //   userId: 1
    // }))
    // ★★ useRef 사용 3. onCreate할 때 반드시 useRef화된 키값의 .current 값으로 넣어줘야 한다.
    nextId.current += 1
  }

  // "배열 state의 삭제" 함수
  const onDelete = (id) => {
    setTodos(todos.filter((item) => { return item.id !== id }))
  }

  // "배열 state의 수정" 함수
  const onModify = (id) => {
    setTodos(todos.map((item) => { return item.id === id ? { ...item, title: inputText } : { ...item } }))
  }
  const onChecked = (id) => {
    setTodos(todos.map((item) => { return item.id === id ? { ...item, completed: !item.completed } : { ...item } }))
  }

  const render = todos.map((item) => {
    return (
      <div className='todo' key={item.id}>
          {/* ★★ 이벤트리스너 함수에 파라미터를 넣을 때는 함수형 업데이트가 필수 {() => {method(argument)}} */}
          <input type='checkbox' checked={item.completed} onChange={() => onChecked(item.id)} ></input>
          <span className='title' onClick={() => onChecked(item.id)}>{item.title}</span>
          <span className='buttons'>
            {/* ★★ 이벤트리스너 함수에 파라미터를 넣을 때는 함수형 업데이트가 필수 {() => {method(argument)}} */}
            <button onClick={() => onModify(item.id)}>수정</button>
            <button onClick={() => onDelete(item.id)}>삭제</button>
          </span>
      </div>
    )
  })

  return (
    <div className='app'>
      {/* Input Component */}
      <h2>TODO</h2>
      <div className='input'>
        <form onSubmit={onCreate}>
            <input className="inputArea" type='text' placeholder='할 일을 적고, 추가 또는 수정 버튼을 누르세요.' value={inputText} name='title' onChange={onChange}></input>
            <button className='inputSendButton' onClick={onCreate}>Send</button>
        </form>
      </div>
      {/* Todo Component */}
      <div className='todos'>
        <div>{render}</div>
      </div>
    </div>
  )
}
