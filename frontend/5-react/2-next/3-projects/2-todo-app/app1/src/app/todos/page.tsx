"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import { AuthUser } from "@/lib/auth"
import { api, type Todo } from "@/lib/api"
import { ArrowUpTrayIcon } from "@heroicons/react/24/outline"

type Filter = "all" | "active" | "completed"

export default function Todos() {
  const router = useRouter()
  const [user, setUser] = useState<AuthUser | null>(null)
  const [todos, setTodos] = useState<Todo[]>([])
  const [filter, setFilter] = useState<Filter>("all")
  const [loading, setLoading] = useState(true)
  const [newTodo, setNewTodo] = useState("")
  const [editingId, setEditingId] = useState<number | null>(null)
  const [editingText, setEditingText] = useState("")

  useEffect(() => {
    fetch("/api/auth/check")
      .then(res => res.json())
      .then(data => {
        if (!data.user) {
          router.push("/")
        } else {
          setUser(data.user)
          api.getTodos().then(setTodos)
        }
      })
      .finally(() => setLoading(false))
  }, [router])

  const handleAddTodo = () => {
    if (!newTodo.trim()) return
    const newId = Math.max(0, ...todos.map(t => t.id)) + 1
    const newTodoItem: Todo = {
      id: newId,
      userId: user?.id || 1,
      title: newTodo,
      completed: false
    }
    setTodos([newTodoItem, ...todos])
    setNewTodo("")
  }

  const handleToggleTodo = (id: number) => {
    setTodos(todos.map(todo =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ))
  }

  const handleEditTodo = (id: number) => {
    const todo = todos.find(t => t.id === id)
    if (todo) {
      setEditingId(id)
      setEditingText(todo.title)
    }
  }

  const handleSaveEdit = (id: number) => {
    setTodos(todos.map(todo =>
      todo.id === id ? { ...todo, title: editingText } : todo
    ))
    setEditingId(null)
  }

  const handleDeleteTodo = (id: number) => {
    setTodos(todos.filter(todo => todo.id !== id))
  }

  const handleSaveAll = () => {
    alert("TODO: 할일 목록을 저장하기 위한 POST API가 필요합니다.")
  }

  const filteredTodos = todos.filter((todo) => {
    if (filter === "active") return !todo.completed
    if (filter === "completed") return todo.completed
    return true
  })

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    )
  }

  if (!user) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen">
        <h2 className="text-2xl font-bold mb-4">로그인이 필요합니다</h2>
        <p className="text-gray-600 mb-4">할일 목록을 보려면 로그인해주세요.</p>
      </div>
    )
  }

  return (
    <div className="p-8">
      <div className="max-w-2xl mx-auto">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold">할 일</h1>
          <button
            onClick={handleSaveAll}
            className="p-2 text-gray-600 hover:text-blue-300"
            title="저장"
          >
            <ArrowUpTrayIcon className="w-6 h-6" />
          </button>
        </div>

        <div className="flex gap-2 mb-6">
          <input
            type="text"
            value={newTodo}
            onChange={(e) => setNewTodo(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && handleAddTodo()}
            placeholder="새로운 할 일을 입력하세요"
            className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
          />
          <button
            onClick={handleAddTodo}
            className="px-4 py-2 bg-blue-700 text-white rounded-lg hover:bg-pink-600"
          >
            추가
          </button>
        </div>

        <div className="flex gap-2 mb-6">
          <button
            onClick={() => setFilter("all")}
            className={`px-4 py-2 rounded-lg ${filter === "all"
              ? "bg-pink-500 text-white"
              : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
          >
            전체
          </button>
          <button
            onClick={() => setFilter("active")}
            className={`px-4 py-2 rounded-lg ${filter === "active"
              ? "bg-pink-500 text-white"
              : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
          >
            진행중
          </button>
          <button
            onClick={() => setFilter("completed")}
            className={`px-4 py-2 rounded-lg ${filter === "completed"
              ? "bg-pink-500 text-white"
              : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
          >
            완료
          </button>
        </div>

        <div className="space-y-2">
          {filteredTodos.map((todo) => (
            <div
              key={todo.id}
              className="flex items-center gap-2 p-4 bg-white rounded-lg shadow"
            >
              <input
                type="checkbox"
                checked={todo.completed}
                onChange={() => handleToggleTodo(todo.id)}
                className="w-5 h-5 text-pink-500 rounded focus:ring-pink-500"
              />
              {editingId === todo.id ? (
                <input
                  type="text"
                  value={editingText}
                  onChange={(e) => setEditingText(e.target.value)}
                  onBlur={() => handleSaveEdit(todo.id)}
                  onKeyPress={(e) => e.key === 'Enter' && handleSaveEdit(todo.id)}
                  className="flex-1 px-2 py-1 border text-gray-700 border-gray-500 rounded focus:outline-none focus:ring-2 focus:ring-pink-500"
                  autoFocus
                />
              ) : (
                <span
                  onClick={() => handleEditTodo(todo.id)}
                  className={`flex-1 cursor-pointer ${todo.completed ? "line-through text-gray-500" : "text-black"
                    }`}
                >
                  {todo.title}
                </span>
              )}
              <button
                onClick={() => handleDeleteTodo(todo.id)}
                className="p-2 text-black hover:text-red-500"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
} 