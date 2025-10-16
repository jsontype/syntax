<template>
  <div class="cart">
    <div>
      <h2>장바구니</h2>
      
      <div v-if="cartItems.length === 0" style="text-align: center; margin: 50px 0;">
        <p>장바구니가 비어있습니다.</p>
        <button @click="goToShop" style="padding: 10px 20px; background: #007bff; color: white; border: none; margin-top: 10px;">
          쇼핑하러 가기
        </button>
      </div>

      <div v-else>
        <!-- Cart Items -->
        <div v-for="item in cartItems" :key="item.product.id" style="border: 1px solid #ddd; padding: 15px; margin-bottom: 10px; display: flex; align-items: center;">
          <img :src="item.product.image" :alt="item.product.title" style="width: 80px; height: 80px; object-fit: cover; margin-right: 15px;"/>
          
          <div style="flex: 1;">
            <h4>{{ item.product.title }}</h4>
            <p>단가: {{ item.product.price }}원</p>
            <p>소계: {{ item.product.price * item.quantity }}원</p>
          </div>
          
          <div style="display: flex; align-items: center; gap: 10px;">
            <button @click="decreaseQuantity(item.product.id)">-</button>
            <span>{{ item.quantity }}</span>
            <button @click="increaseQuantity(item.product.id)">+</button>
            <button @click="removeFromCart(item.product.id)" style="background: #dc3545; color: white; border: none; padding: 5px 10px;">
              삭제
            </button>
          </div>
        </div>

        <!-- Cart Summary -->
        <div style="border-top: 2px solid #007bff; padding: 20px; margin-top: 20px;">
          <h3>총 상품 개수: {{ totalQuantity }}개</h3>
          <h3>총 결제 금액: {{ totalPrice }}원</h3>
          <div style="margin-top: 15px;">
            <button @click="clearCart" style="background: #6c757d; color: white; border: none; padding: 10px 20px; margin-right: 10px;">
              장바구니 비우기
            </button>
            <button @click="checkout" style="background: #28a745; color: white; border: none; padding: 10px 20px;">
              주문하기
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
}

interface CartItem {
  product: Product;
  quantity: number;
}

@Component({})
export default class CartView extends Vue {
  private cartItems: CartItem[] = [];

  mounted() {
    this.loadCartItems();
  }

  private loadCartItems() {
    const savedCart = localStorage.getItem('cartItems');
    if (savedCart) {
      this.cartItems = JSON.parse(savedCart);
    }
  }

  private saveCartItems() {
    localStorage.setItem('cartItems', JSON.stringify(this.cartItems));
  }

  private increaseQuantity(productId: number) {
    const item = this.cartItems.find(item => item.product.id === productId);
    if (item) {
      item.quantity++;
      this.saveCartItems();
    }
  }

  private decreaseQuantity(productId: number) {
    const item = this.cartItems.find(item => item.product.id === productId);
    if (item && item.quantity > 1) {
      item.quantity--;
      this.saveCartItems();
    }
  }

  private removeFromCart(productId: number) {
    this.cartItems = this.cartItems.filter(item => item.product.id !== productId);
    this.saveCartItems();
  }

  private clearCart() {
    if (confirm('장바구니를 비우시겠습니까?')) {
      this.cartItems = [];
      this.saveCartItems();
    }
  }

  private checkout() {
    if (this.cartItems.length === 0) {
      alert('장바구니가 비어있습니다.');
      return;
    }
    
    alert(`총 ${this.totalQuantity}개 상품, ${this.totalPrice}원이 주문되었습니다!`);
    this.cartItems = [];
    this.saveCartItems();
  }

  private goToShop() {
    this.$router.push('/shop');
  }

  private get totalQuantity(): number {
    return this.cartItems.reduce((total, item) => total + item.quantity, 0);
  }

  private get totalPrice(): number {
    return this.cartItems.reduce((total, item) => {
      return total + (item.product.price * item.quantity);
    }, 0);
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
