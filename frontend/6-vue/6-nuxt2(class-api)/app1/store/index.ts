export interface Todo {
  id: number;
  text: string;
  checked: boolean;
  createdAt: Date;
}

export interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  description?: string;
  category?: string;
}

export interface CartItem {
  id: number;
  product: Product;
  quantity: number;
}

export interface RootState {
  todos: Todo[];
  products: Product[];
  cart: CartItem[];
}

// State
export const state = (): RootState => ({
  todos: [],
  products: [
    {
      id: 1,
      name: "iPhone 15 Pro",
      price: 1490000,
      image:
        "https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=300&h=300&fit=crop",
      description: "최신 A17 Pro 칩이 탑재된 프리미엄 스마트폰",
      category: "스마트폰",
    },
    {
      id: 2,
      name: "MacBook Air M2",
      price: 1690000,
      image:
        "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=300&h=300&fit=crop",
      description: "M2 칩으로 더욱 강력해진 MacBook Air",
      category: "노트북",
    },
    {
      id: 3,
      name: "AirPods Pro 2세대",
      price: 359000,
      image:
        "https://images.unsplash.com/photo-1606220945770-b5b6c2c55bf1?w=300&h=300&fit=crop",
      description: "향상된 액티브 노이즈 캐슬링 기능",
      category: "이어폰",
    },
    {
      id: 4,
      name: "iPad Pro 12.9",
      price: 1749000,
      image:
        "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=300&h=300&fit=crop",
      description: "M2 칩이 탑재된 프로급 태블릿",
      category: "태블릿",
    },
    {
      id: 5,
      name: "Apple Watch Series 9",
      price: 599000,
      image:
        "https://images.unsplash.com/photo-1579586337278-3f436f25d4d6?w=300&h=300&fit=crop",
      description: "건강과 피트니스를 위한 스마트워치",
      category: "웨어러블",
    },
    {
      id: 6,
      name: "Mac Studio",
      price: 2890000,
      image:
        "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=300&h=300&fit=crop",
      description: "M1 Ultra 칩으로 구동되는 데스크톱",
      category: "데스크톱",
    },
  ],
  cart: [],
});

// Getters
export const getters = {
  // Todo getters
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

  // Shopping getters
  allProducts: (state: RootState) => state.products,

  cartItems: (state: RootState) => state.cart,

  cartItemsCount: (state: RootState) =>
    state.cart.reduce((total, item) => total + item.quantity, 0),

  cartTotalPrice: (state: RootState) =>
    state.cart.reduce(
      (total, item) => total + item.product.price * item.quantity,
      0
    ),

  getCartItem: (state: RootState) => (productId: number) =>
    state.cart.find((item) => item.product.id === productId),

  productsByCategory: (state: RootState) => (category?: string) => {
    if (!category) return state.products;
    return state.products.filter((product) => product.category === category);
  },

  productCategories: (state: RootState) => {
    const categories = state.products
      .map((product) => product.category)
      .filter(Boolean);
    return [...new Set(categories)];
  },
};

// Mutations
export const mutations = {
  // Todo mutations
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

  // Cart mutations
  ADD_TO_CART(state: RootState, product: Product) {
    const existingItem = state.cart.find(
      (item) => item.product.id === product.id
    );

    if (existingItem) {
      existingItem.quantity++;
    } else {
      const newCartItem: CartItem = {
        id: Date.now(),
        product,
        quantity: 1,
      };
      state.cart.push(newCartItem);
    }
  },

  ADD_TO_CART_WITH_QUANTITY(
    state: RootState,
    { product, quantity }: { product: Product; quantity: number }
  ) {
    const existingItem = state.cart.find(
      (item) => item.product.id === product.id
    );

    if (existingItem) {
      existingItem.quantity += quantity;
    } else {
      const newCartItem: CartItem = {
        id: Date.now(),
        product,
        quantity,
      };
      state.cart.push(newCartItem);
    }
  },

  REMOVE_FROM_CART(state: RootState, productId: number) {
    const index = state.cart.findIndex((item) => item.product.id === productId);
    if (index > -1) {
      state.cart.splice(index, 1);
    }
  },

  UPDATE_CART_ITEM_QUANTITY(
    state: RootState,
    { productId, quantity }: { productId: number; quantity: number }
  ) {
    const item = state.cart.find((item) => item.product.id === productId);
    if (item) {
      if (quantity <= 0) {
        // Remove item if quantity is 0 or less
        const index = state.cart.indexOf(item);
        state.cart.splice(index, 1);
      } else {
        item.quantity = quantity;
      }
    }
  },

  CLEAR_CART(state: RootState) {
    state.cart = [];
  },

  LOAD_CART_FROM_STORAGE(state: RootState, cart: CartItem[]) {
    state.cart = cart;
  },
};

// Actions
export const actions = {
  // Todo actions
  addTodo({ commit, dispatch }: any, text: string) {
    commit("ADD_TODO", text);
    dispatch("saveTodosToStorage");
  },

  deleteTodo({ commit, dispatch }: any, id: number) {
    commit("DELETE_TODO", id);
    dispatch("saveTodosToStorage");
  },

  toggleTodo({ commit, dispatch }: any, id: number) {
    commit("TOGGLE_TODO", id);
    dispatch("saveTodosToStorage");
  },

  clearCompleted({ commit, dispatch }: any) {
    commit("CLEAR_COMPLETED");
    dispatch("saveTodosToStorage");
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

  // Cart actions
  addToCart({ commit, dispatch }: any, product: Product) {
    commit("ADD_TO_CART", product);
    dispatch("saveCartToStorage");
  },

  addToCartWithQuantity(
    { commit, dispatch }: any,
    { product, quantity }: { product: Product; quantity: number }
  ) {
    commit("ADD_TO_CART_WITH_QUANTITY", { product, quantity });
    dispatch("saveCartToStorage");
  },

  removeFromCart({ commit, dispatch }: any, productId: number) {
    commit("REMOVE_FROM_CART", productId);
    dispatch("saveCartToStorage");
  },

  updateCartItemQuantity(
    { commit, dispatch }: any,
    { productId, quantity }: { productId: number; quantity: number }
  ) {
    commit("UPDATE_CART_ITEM_QUANTITY", { productId, quantity });
    dispatch("saveCartToStorage");
  },

  clearCart({ commit, dispatch }: any) {
    commit("CLEAR_CART");
    dispatch("saveCartToStorage");
  },

  loadCartFromStorage({ commit }: any) {
    if (process.client) {
      try {
        const stored = localStorage.getItem("nuxt-cart");
        if (stored) {
          const cart = JSON.parse(stored);
          commit("LOAD_CART_FROM_STORAGE", cart);
        }
      } catch (error) {
        console.error("Failed to load cart from storage:", error);
      }
    }
  },

  saveCartToStorage({ state }: any) {
    if (process.client) {
      try {
        localStorage.setItem("nuxt-cart", JSON.stringify(state.cart));
      } catch (error) {
        console.error("Failed to save cart to storage:", error);
      }
    }
  },
};
