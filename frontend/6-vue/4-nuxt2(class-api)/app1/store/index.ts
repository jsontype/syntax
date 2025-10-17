export interface Todo {
  id: number
  text: string
  checked: boolean
  createdAt: string
}

export interface RootState {
  todos: Todo[]
}

let nextId = 1

export const state = (): RootState => ({
  todos: [],
})

export const getters = {
  totalTodos: (state: RootState): number => state.todos.length,

  completedTodos: (state: RootState): number =>
    state.todos.filter((todo) => todo.checked).length,

  pendingTodos: (state: RootState): number =>
    state.todos.filter((todo) => !todo.checked).length,

  completionRate: (state: RootState): number => {
    if (state.todos.length === 0) return 0
    return Math.round(
      (state.todos.filter((todo) => todo.checked).length / state.todos.length) *
        100
    )
  },
}

export const mutations = {
  ADD_TODO(state: RootState, text: string) {
    const newTodo: Todo = {
      id: nextId++,
      text,
      checked: false,
      createdAt: new Date().toISOString(),
    }
    state.todos.push(newTodo)
  },

  DELETE_TODO(state: RootState, id: number) {
    const index = state.todos.findIndex((todo) => todo.id === id)
    if (index > -1) {
      state.todos.splice(index, 1)
    }
  },

  TOGGLE_TODO(state: RootState, id: number) {
    const todo = state.todos.find((todo) => todo.id === id)
    if (todo) {
      todo.checked = !todo.checked
    }
  },

  LOAD_TODOS(state: RootState, todos: Todo[]) {
    state.todos = todos
    // nextId 업데이트
    if (todos.length > 0) {
      nextId = Math.max(...todos.map((todo) => todo.id)) + 1
    }
  },
}

export const actions = {
  addTodo({ commit }: any, text: string) {
    commit("ADD_TODO", text)
    // 로컬 스토리지에 저장
    if (process.client) {
      localStorage.setItem("todos", JSON.stringify(this.state.todos))
    }
  },

  deleteTodo({ commit }: any, id: number) {
    commit("DELETE_TODO", id)
    // 로컬 스토리지에 저장
    if (process.client) {
      localStorage.setItem("todos", JSON.stringify(this.state.todos))
    }
  },

  toggleTodo({ commit }: any, id: number) {
    commit("TOGGLE_TODO", id)
    // 로컬 스토리지에 저장
    if (process.client) {
      localStorage.setItem("todos", JSON.stringify(this.state.todos))
    }
  },

  loadTodos({ commit }: any) {
    if (process.client) {
      const stored = localStorage.getItem("todos")
      if (stored) {
        try {
          const todos = JSON.parse(stored)
          commit("LOAD_TODOS", todos)
        } catch (error) {
          console.error("할 일 목록 로딩 실패:", error)
        }
      }
    }
  },
}
