<template>
  <div class="shop">
    <div>
      <h2>Shopping Mall</h2>

      <!-- Cart Summary -->
      <div style="margin-bottom: 20px; padding: 10px; border: 1px solid #ddd">
        <h3>
          장바구니: {{ cartItems.length }}개 상품 | 총액: {{ totalPrice }}원
        </h3>
        <button @click="goToCart" :disabled="cartItems.length === 0">
          장바구니 보기
        </button>
      </div>

      <!-- Products Grid -->
      <div
        style="
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
          gap: 20px;
        "
      >
        <div
          v-for="product in products"
          :key="product.id"
          style="border: 1px solid #ddd; padding: 15px"
        >
          <img
            :src="product.image"
            :alt="product.title"
            style="width: 100%; height: 200px; object-fit: cover"
          />
          <h4>{{ product.title }}</h4>
          <p>{{ product.description.slice(0, 100) }}...</p>
          <p>
            <strong>가격: {{ product.price }}원</strong>
          </p>
          <p>
            평점: {{ product.rating.rate }}점 ({{ product.rating.count }}개
            리뷰)
          </p>

          <!-- Quantity Controls -->
          <div style="margin: 10px 0">
            <label>수량: </label>
            <button @click="decreaseQuantity(product.id)">-</button>
            <span style="margin: 0 10px">{{
              getProductQuantity(product.id)
            }}</span>
            <button @click="increaseQuantity(product.id)">+</button>
          </div>

          <button
            @click="addToCart(product)"
            style="
              width: 100%;
              padding: 10px;
              background: #007bff;
              color: white;
              border: none;
            "
          >
            장바구니에 추가
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator"

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

@Component({})
export default class ShopView extends Vue {
  private products: Product[] = []
  private cartItems: CartItem[] = []
  private productQuantities: { [key: number]: number } = {}

  async mounted() {
    await this.fetchProducts()
  }

  private async fetchProducts() {
    try {
      const response = await fetch("https://fakestoreapi.com/products")
      this.products = await response.json()
      // 초기 수량을 1로 설정
      this.products.forEach((product) => {
        this.$set(this.productQuantities, product.id, 1)
      })
    } catch (error) {
      console.error("상품 데이터를 가져오는데 실패했습니다:", error)
    }
  }

  private getProductQuantity(productId: number): number {
    return this.productQuantities[productId] || 1
  }

  private increaseQuantity(productId: number) {
    const current = this.getProductQuantity(productId)
    this.$set(this.productQuantities, productId, current + 1)
  }

  private decreaseQuantity(productId: number) {
    const current = this.getProductQuantity(productId)
    if (current > 1) {
      this.$set(this.productQuantities, productId, current - 1)
    }
  }

  private addToCart(product: Product) {
    const quantity = this.getProductQuantity(product.id)
    const existingItem = this.cartItems.find(
      (item) => item.product.id === product.id
    )

    if (existingItem) {
      existingItem.quantity += quantity
    } else {
      this.cartItems.push({
        product,
        quantity,
      })
    }

    alert(`${product.title} ${quantity}개가 장바구니에 추가되었습니다!`)
  }

  private get totalPrice(): number {
    return this.cartItems.reduce((total, item) => {
      return total + item.product.price * item.quantity
    }, 0)
  }

  private goToCart() {
    // 장바구니 데이터를 localStorage에 저장
    localStorage.setItem("cartItems", JSON.stringify(this.cartItems))
    this.$router.push("/cart")
  }
}
</script>

<style scoped>
.shop {
  padding: 20px;
  max-width: 1200px;
  margin: 0 auto;
}
</style>
