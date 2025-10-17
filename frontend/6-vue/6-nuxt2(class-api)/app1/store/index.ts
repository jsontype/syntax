export interface Todo {
  id: number;
  text: string;
  checked: boolean;
  createdAt: Date;
}

export interface RootState {
  todos: Todo[];
}

// State
export const state = (): RootState => ({
  todos: [],
});

// Getters
export const getters = {
  totalTodos: (state: RootState) => state.todos.length,

  completedTodos: (state: RootState) =>
    state.todos.filter((todo) => todo.checked).length,

  pendingTodos: (state: RootState) =>
    state.todos.filter((todo) => !todo.checked).length,

  completionRate: (state: RootState) => {
    if (state.todos.length === 0) return 0;
    return Math.round(
      (state.todos.filter((todo) => todo.checked).length / state.todos.length) *
        100
    );
  },
};

// Mutations
export const mutations = {
  ADD_TODO(state: RootState, text: string) {
    const newTodo: Todo = {
      id: Date.now(),
      text,
      checked: false,
      createdAt: new Date(),
    };
    state.todos.push(newTodo);
  },

  DELETE_TODO(state: RootState, id: number) {
    const index = state.todos.findIndex((todo) => todo.id === id);
    if (index > -1) {
      state.todos.splice(index, 1);
    }
  },

  TOGGLE_TODO(state: RootState, id: number) {
    const todo = state.todos.find((todo) => todo.id === id);
    if (todo) {
      todo.checked = !todo.checked;
    }
  },

  CLEAR_COMPLETED(state: RootState) {
    state.todos = state.todos.filter((todo) => !todo.checked);
  },

  LOAD_TODOS_FROM_STORAGE(state: RootState, todos: Todo[]) {
    state.todos = todos;
  },
};

// Actions
export const actions = {
  addTodo({ commit }: any, text: string) {
    commit("ADD_TODO", text);
    this.dispatch("saveTodosToStorage");
  },

  deleteTodo({ commit }: any, id: number) {
    commit("DELETE_TODO", id);
    this.dispatch("saveTodosToStorage");
  },

  toggleTodo({ commit }: any, id: number) {
    commit("TOGGLE_TODO", id);
    this.dispatch("saveTodosToStorage");
  },

  clearCompleted({ commit }: any) {
    commit("CLEAR_COMPLETED");
    this.dispatch("saveTodosToStorage");
  },

  loadTodosFromStorage({ commit }: any) {
    if (process.client) {
      try {
        const stored = localStorage.getItem("nuxt-todos");
        if (stored) {
          const todos = JSON.parse(stored).map((todo: any) => ({
            ...todo,
            createdAt: new Date(todo.createdAt),
          }));
          commit("LOAD_TODOS_FROM_STORAGE", todos);
        }
      } catch (error) {
        console.error("Failed to load todos from storage:", error);
      }
    }
  },

  saveTodosToStorage({ state }: any) {
    if (process.client) {
      try {
        localStorage.setItem("nuxt-todos", JSON.stringify(state.todos));
      } catch (error) {
        console.error("Failed to save todos to storage:", error);
      }
    }
  },
};
