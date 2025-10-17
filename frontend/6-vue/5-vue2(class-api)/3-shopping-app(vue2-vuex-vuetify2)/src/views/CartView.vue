<template>
  <div class="cart">
    <div>
      <h2>장바구니</h2>

      <div
        v-if="cartItemsCount === 0"
        style="text-align: center; margin: 50px 0"
      >
        <p>장바구니가 비어있습니다.</p>
        <button
          @click="goToShop"
          style="
            padding: 10px 20px;
            background: #007bff;
            color: white;
            border: none;
            margin-top: 10px;
          "
        >
          쇼핑하러 가기
        </button>
      </div>

      <div v-else>
        <!-- Cart Items -->
        <div
          v-for="item in cartItems"
          :key="item.product.id"
          style="
            border: 1px solid #ddd;
            padding: 15px;
            margin-bottom: 10px;
            display: flex;
            align-items: center;
          "
        >
          <img
            :src="item.product.image"
            :alt="item.product.title"
            style="
              width: 80px;
              height: 80px;
              object-fit: cover;
              margin-right: 15px;
            "
          />

          <div style="flex: 1">
            <h4>{{ item.product.title }}</h4>
            <p>단가: {{ item.product.price }}원</p>
            <p>소계: {{ item.product.price * item.quantity }}원</p>
          </div>

          <div style="display: flex; align-items: center; gap: 10px">
            <button @click="decreaseCartQuantity(item.product.id)">-</button>
            <span>{{ item.quantity }}</span>
            <button @click="increaseCartQuantity(item.product.id)">+</button>
            <button
              @click="removeFromCartHandler(item.product.id)"
              style="
                background: #dc3545;
                color: white;
                border: none;
                padding: 5px 10px;
              "
            >
              삭제
            </button>
          </div>
        </div>

        <!-- Cart Summary -->
        <div
          style="border-top: 2px solid #007bff; padding: 20px; margin-top: 20px"
        >
          <h3>총 상품 개수: {{ totalQuantity }}개</h3>
          <h3>총 결제 금액: {{ totalPrice }}원</h3>
          <div style="margin-top: 15px">
            <button
              @click="clearCartHandler"
              style="
                background: #6c757d;
                color: white;
                border: none;
                padding: 10px 20px;
                margin-right: 10px;
              "
            >
              장바구니 비우기
            </button>
            <button
              @click="checkout"
              style="
                background: #28a745;
                color: white;
                border: none;
                padding: 10px 20px;
              "
            >
              주문하기
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator"
import { mapGetters, mapActions } from "vuex"

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

@Component({
  computed: {
    ...mapGetters(["cartItemsCount", "totalPrice", "totalQuantity"]),
    cartItems() {
      return this.$store.state.cartItems
    },
  },
  methods: {
    ...mapActions(["updateCartItemQuantity", "removeFromCart", "clearCart"]),
  },
})
export default class CartView extends Vue {
  // Vuex getters (computed에서 매핑됨)
  cartItemsCount!: number
  totalPrice!: number
  totalQuantity!: number
  cartItems!: CartItem[]

  // Vuex actions (methods에서 매핑됨)
  updateCartItemQuantity!: (payload: {
    productId: number
    quantity: number
  }) => void
  removeFromCart!: (productId: number) => void
  clearCart!: () => void

  private increaseCartQuantity(productId: number) {
    const item = this.cartItems.find((item) => item.product.id === productId)
    if (item) {
      this.updateCartItemQuantity({ productId, quantity: item.quantity + 1 })
    }
  }

  private decreaseCartQuantity(productId: number) {
    const item = this.cartItems.find((item) => item.product.id === productId)
    if (item && item.quantity > 1) {
      this.updateCartItemQuantity({ productId, quantity: item.quantity - 1 })
    }
  }

  private removeFromCartHandler(productId: number) {
    this.removeFromCart(productId)
  }

  private clearCartHandler() {
    if (confirm("장바구니를 비우시겠습니까?")) {
      this.clearCart()
    }
  }

  private checkout() {
    if (this.cartItemsCount === 0) {
      alert("장바구니가 비어있습니다.")
      return
    }

    alert(
      `총 ${this.totalQuantity}개 상품, ${this.totalPrice}원이 주문되었습니다!`
    )
    this.clearCart()
  }

  private goToShop() {
    this.$router.push("/shop")
  }
}
</script>

<style scoped>
.cart {
  padding: 20px;
  max-width: 1200px;
  margin: 0 auto;
}
</style>
