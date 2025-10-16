import Vue from "vue"
import Vuex from "vuex"

Vue.use(Vuex)

interface Product {
  id: number
  title: string
  price: number
  description: string
  category: string
  image: string
  rating: {
    rate: number
    count: number
  }
}

interface CartItem {
  product: Product
  quantity: number
}

interface Todo {
  id: number
  text: string
  checked: boolean
}

interface RootState {
  cartItems: CartItem[]
  productQuantities: { [key: number]: number }
  todos: Todo[]
}

export default new Vuex.Store<RootState>({
  state: {
    cartItems: [],
    productQuantities: {},
    todos: [
      { id: 1, text: "buy a car", checked: false },
      { id: 2, text: "play games", checked: false },
    ],
  },
  getters: {
    cartItemsCount: (state) => state.cartItems.length,
    totalPrice: (state) => {
      return state.cartItems.reduce((total, item) => {
        return total + item.product.price * item.quantity
      }, 0)
    },
    totalQuantity: (state) => {
      return state.cartItems.reduce((total, item) => total + item.quantity, 0)
    },
    getProductQuantity: (state) => (productId: number) => {
      return state.productQuantities[productId] || 1
    },
    // Todos getters
    totalTodos: (state) => state.todos.length,
    completedTodos: (state) =>
      state.todos.filter((todo) => todo.checked).length,
    pendingTodos: (state) => state.todos.filter((todo) => !todo.checked).length,
  },
  mutations: {
    SET_PRODUCT_QUANTITY(
      state,
      { productId, quantity }: { productId: number; quantity: number }
    ) {
      Vue.set(state.productQuantities, productId, quantity)
    },
    ADD_TO_CART(
      state,
      { product, quantity }: { product: Product; quantity: number }
    ) {
      const existingItem = state.cartItems.find(
        (item) => item.product.id === product.id
      )

      if (existingItem) {
        existingItem.quantity += quantity
      } else {
        state.cartItems.push({
          product,
          quantity,
        })
      }
    },
    UPDATE_CART_ITEM_QUANTITY(
      state,
      { productId, quantity }: { productId: number; quantity: number }
    ) {
      const item = state.cartItems.find((item) => item.product.id === productId)
      if (item) {
        item.quantity = quantity
      }
    },
    REMOVE_FROM_CART(state, productId: number) {
      state.cartItems = state.cartItems.filter(
        (item) => item.product.id !== productId
      )
    },
    CLEAR_CART(state) {
      state.cartItems = []
    },
    // Todos mutations
    ADD_TODO(state, { text }: { text: string }) {
      state.todos.push({
        id: Date.now(),
        text,
        checked: false,
      })
    },
    DELETE_TODO(state, id: number) {
      state.todos = state.todos.filter((todo) => todo.id !== id)
    },
    TOGGLE_TODO(state, id: number) {
      const todo = state.todos.find((todo) => todo.id === id)
      if (todo) {
        todo.checked = !todo.checked
      }
    },
  },
  actions: {
    setProductQuantity({ commit }, payload) {
      commit("SET_PRODUCT_QUANTITY", payload)
    },
    addToCart({ commit }, payload) {
      commit("ADD_TO_CART", payload)
    },
    updateCartItemQuantity({ commit }, payload) {
      commit("UPDATE_CART_ITEM_QUANTITY", payload)
    },
    removeFromCart({ commit }, productId: number) {
      commit("REMOVE_FROM_CART", productId)
    },
    clearCart({ commit }) {
      commit("CLEAR_CART")
    },
    // Todos actions
    addTodo({ commit }, text: string) {
      commit("ADD_TODO", { text })
    },
    deleteTodo({ commit }, id: number) {
      commit("DELETE_TODO", id)
    },
    toggleTodo({ commit }, id: number) {
      commit("TOGGLE_TODO", id)
    },
  },
  modules: {},
})
