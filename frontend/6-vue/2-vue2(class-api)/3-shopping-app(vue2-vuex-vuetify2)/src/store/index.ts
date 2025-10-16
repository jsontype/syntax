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

interface RootState {
  cartItems: CartItem[]
  productQuantities: { [key: number]: number }
}

export default new Vuex.Store<RootState>({
  state: {
    cartItems: [],
    productQuantities: {},
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
  },
  modules: {},
})
