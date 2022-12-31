import React, { useReducer, createContext, useContext, useRef } from 'react'

const initialTodos = [
  {
    id: 1,
    text: '프로젝트 생성하기',
    done: true
  },
  {
    id: 2,
    text: '컴포넌트 스타일링하기',
    done: true
  },
  {
    id: 3,
    text: 'Context 만들기',
    done: false
  },
  {
    id: 4,
    text: '기능 구현하기',
    done: false
  }
]

function todoReducer(state, action) {
  switch (action.type) {
    case 'CREATE':
      return state.concat(action.todo)
    case 'TOGGLE':
      return state.map(todo => todo.id === action.id ? { ...todo, done: !todo.done } : todo)
    case 'REMOVE':
      return state.filter(todo => todo.id !== action.id)
    default:
      throw new Error(`Unhandled action type: ${action.type}`)
  }
}

const TodoStateContext = createContext()
const TodoDispatchContext = createContext()
const TodoNextIdContext = createContext()

export function TodoProvider({ children }) {
  const [state, dispatch] = useReducer(todoReducer, initialTodos)
  const nextId = useRef(5)

  return (
    <TodoStateContext.Provider value={state}>
      <TodoDispatchContext.Provider value={dispatch}>
        <TodoNextIdContext.Provider value={nextId}>
          {children}
        </TodoNextIdContext.Provider>
      </TodoDispatchContext.Provider>
    </TodoStateContext.Provider>
  )
}

// useTodoState 커스텀 훅
export function useTodoState() {
  const context = useContext(TodoStateContext)
  // App 컴포넌트에서 모든 내용을 TodoProvider로 감싸지 않으면 모든 커스텀 훅을 사용할 수 없으므로, 에러를 발생시키도록 한다.
  if (!context) {
    throw new Error('Cannot find TodoProvider')
  }
  return context
}

// useTodoDispatch 커스텀 훅
export function useTodoDispatch() {
  const context = useContext(TodoDispatchContext)
  // App 컴포넌트에서 모든 내용을 TodoProvider로 감싸지 않으면 모든 커스텀 훅을 사용할 수 없으므로, 에러를 발생시키도록 한다.
  if (!context) {
    throw new Error('Cannot find TodoProvider')
  }
  return context
}

// useTodoNextId 커스텀 훅
export function useTodoNextId() {
  const context = useContext(TodoNextIdContext)
  // App 컴포넌트에서 모든 내용을 TodoProvider로 감싸지 않으면 모든 커스텀 훅을 사용할 수 없으므로, 에러를 발생시키도록 한다.
  if (!context) {
    throw new Error('Cannot find TodoProvider')
  }
  return context
}
