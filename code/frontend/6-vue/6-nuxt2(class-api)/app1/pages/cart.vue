<template>
  <v-container>
    <!-- Header Section -->
    <v-row class="mb-4">
      <v-col cols="12">
        <div class="d-flex justify-space-between align-center">
          <div>
            <h1 class="display-1 font-weight-bold mb-2">장바구니</h1>
            <p class="subtitle-1 grey--text">
              선택한 상품들을 확인하고 주문을 진행하세요
            </p>
          </div>
          <v-btn color="primary" outlined :to="'/shopping'">
            <v-icon left>mdi-arrow-left</v-icon>
            쇼핑 계속하기
          </v-btn>
        </div>
      </v-col>
    </v-row>

    <!-- Cart Content -->
    <v-row v-if="cartItems.length > 0">
      <!-- Cart Items -->
      <v-col cols="12" md="8">
        <v-card class="mb-4">
          <v-card-title class="pb-2">
            <span>상품 목록</span>
            <v-spacer></v-spacer>
            <v-btn
              color="error"
              text
              small
              @click="handleClearCart"
              :loading="loading"
            >
              <v-icon left small>mdi-delete</v-icon>
              전체 삭제
            </v-btn>
          </v-card-title>

          <v-divider></v-divider>

          <v-list class="pa-0">
            <v-list-item
              v-for="(item, index) in cartItems"
              :key="item.id"
              class="cart-item"
            >
              <v-list-item-avatar size="80" class="mr-4">
                <v-img
                  :src="item.product.image"
                  :alt="item.product.name"
                  aspect-ratio="1"
                >
                  <template v-slot:placeholder>
                    <v-row
                      class="fill-height ma-0"
                      align="center"
                      justify="center"
                    >
                      <v-progress-circular
                        indeterminate
                        color="grey lighten-5"
                      ></v-progress-circular>
                    </v-row>
                  </template>
                </v-img>
              </v-list-item-avatar>

              <v-list-item-content>
                <v-list-item-title class="font-weight-bold">
                  {{ item.product.name }}
                </v-list-item-title>
                <v-list-item-subtitle class="mb-2">
                  {{ item.product.category }}
                </v-list-item-subtitle>
                <v-list-item-subtitle class="product-description">
                  {{ item.product.description }}
                </v-list-item-subtitle>
                <div class="price-info mt-2">
                  <span class="unit-price"
                    >단가: {{ formatPrice(item.product.price) }}</span
                  >
                  <span class="total-price ml-4 font-weight-bold">
                    소계: {{ formatPrice(item.product.price * item.quantity) }}
                  </span>
                </div>
              </v-list-item-content>

              <v-list-item-action class="cart-actions">
                <div class="quantity-controls mb-2">
                  <v-btn
                    icon
                    small
                    @click="updateQuantity(item.product.id, item.quantity - 1)"
                    :disabled="loading"
                  >
                    <v-icon>mdi-minus</v-icon>
                  </v-btn>

                  <v-text-field
                    :value="item.quantity"
                    type="number"
                    min="1"
                    max="99"
                    class="quantity-input mx-2"
                    hide-details
                    dense
                    @input="
                      updateQuantity(item.product.id, parseInt($event) || 1)
                    "
                    :disabled="loading"
                  ></v-text-field>

                  <v-btn
                    icon
                    small
                    @click="updateQuantity(item.product.id, item.quantity + 1)"
                    :disabled="loading"
                  >
                    <v-icon>mdi-plus</v-icon>
                  </v-btn>
                </div>

                <v-btn
                  icon
                  color="error"
                  @click="handleRemoveItem(item.product.id)"
                  :loading="loading"
                >
                  <v-icon>mdi-delete</v-icon>
                </v-btn>
              </v-list-item-action>
            </v-list-item>
          </v-list>
        </v-card>
      </v-col>

      <!-- Order Summary -->
      <v-col cols="12" md="4">
        <v-card class="order-summary sticky-summary">
          <v-card-title class="pb-2">주문 요약</v-card-title>
          <v-divider></v-divider>

          <v-card-text>
            <div class="summary-row">
              <span>상품 개수:</span>
              <span class="font-weight-bold">{{ cartItemsCount }}개</span>
            </div>

            <div class="summary-row">
              <span>상품 종류:</span>
              <span class="font-weight-bold">{{ cartItems.length }}종</span>
            </div>

            <v-divider class="my-3"></v-divider>

            <div class="summary-row total-row">
              <span class="font-weight-bold">총 결제 금액:</span>
              <span class="font-weight-bold text-h6 primary--text">
                {{ formatPrice(cartTotalPrice) }}
              </span>
            </div>
          </v-card-text>

          <v-card-actions class="px-4 pb-4">
            <v-btn
              color="primary"
              block
              large
              @click="handleCheckout"
              :loading="loading"
            >
              <v-icon left>mdi-credit-card</v-icon>
              주문하기
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>

    <!-- Empty Cart State -->
    <v-row v-else>
      <v-col cols="12" class="text-center py-12">
        <v-icon size="120" color="grey lighten-2">mdi-cart-outline</v-icon>
        <h2 class="grey--text mt-6 mb-4">장바구니가 비어있습니다</h2>
        <p class="grey--text mb-6">쇼핑을 시작해보세요!</p>
        <v-btn color="primary" large :to="'/shopping'">
          <v-icon left>mdi-shopping</v-icon>
          쇼핑하러 가기
        </v-btn>
      </v-col>
    </v-row>

    <!-- Success Dialog -->
    <v-dialog v-model="orderDialog" max-width="400" persistent>
      <v-card>
        <v-card-title class="justify-center">
          <v-icon large color="success" class="mr-2">mdi-check-circle</v-icon>
          주문 완료
        </v-card-title>

        <v-card-text class="text-center">
          <p class="mb-2">주문이 성공적으로 완료되었습니다!</p>
          <p class="grey--text">
            총 결제 금액: <strong>{{ formatPrice(orderTotal) }}</strong>
          </p>
        </v-card-text>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="primary" @click="closeOrderDialog">확인</v-btn>
          <v-spacer></v-spacer>
        </v-card-actions>
      </v-card>
    </v-dialog>

    <!-- Snackbar -->
    <v-snackbar
      v-model="snackbar.show"
      :color="snackbar.color"
      timeout="3000"
      top
      right
    >
      {{ snackbar.message }}
      <template v-slot:action="{ attrs }">
        <v-btn text v-bind="attrs" @click="snackbar.show = false"> 닫기 </v-btn>
      </template>
    </v-snackbar>
  </v-container>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { mapGetters, mapActions } from "vuex";
import { CartItem } from "~/store";

interface SnackbarState {
  show: boolean;
  message: string;
  color: string;
}

@Component({
  computed: {
    ...mapGetters(["cartItems", "cartItemsCount", "cartTotalPrice"]),
  },
  methods: {
    ...mapActions([
      "updateCartItemQuantity",
      "removeFromCart",
      "clearCart",
      "loadCartFromStorage",
    ]),
  },
})
export default class CartPage extends Vue {
  // Data properties
  private loading: boolean = false;
  private orderDialog: boolean = false;
  private orderTotal: number = 0;
  private snackbar: SnackbarState = {
    show: false,
    message: "",
    color: "success",
  };

  // Computed properties from Vuex
  cartItems!: CartItem[];
  cartItemsCount!: number;
  cartTotalPrice!: number;

  // Vuex actions
  updateCartItemQuantity!: (payload: {
    productId: number;
    quantity: number;
  }) => void;
  removeFromCart!: (productId: number) => void;
  clearCart!: () => void;
  loadCartFromStorage!: () => void;

  // Lifecycle hooks
  async mounted() {
    await this.loadCartFromStorage();
  }

  // Methods
  public formatPrice(price: number): string {
    return new Intl.NumberFormat("ko-KR", {
      style: "currency",
      currency: "KRW",
    }).format(price);
  }

  public async updateQuantity(
    productId: number,
    quantity: number
  ): Promise<void> {
    if (quantity < 1) {
      await this.handleRemoveItem(productId);
      return;
    }

    this.loading = true;

    try {
      await this.updateCartItemQuantity({ productId, quantity });
      this.showSnackbar("수량이 업데이트되었습니다", "success");
    } catch (error) {
      this.showSnackbar("수량 업데이트 중 오류가 발생했습니다", "error");
      console.error("Update quantity error:", error);
    } finally {
      this.loading = false;
    }
  }

  public async handleRemoveItem(productId: number): Promise<void> {
    this.loading = true;

    try {
      await this.removeFromCart(productId);
      this.showSnackbar("상품이 장바구니에서 제거되었습니다", "success");
    } catch (error) {
      this.showSnackbar("상품 제거 중 오류가 발생했습니다", "error");
      console.error("Remove item error:", error);
    } finally {
      this.loading = false;
    }
  }

  public async handleClearCart(): Promise<void> {
    if (!confirm("장바구니를 비우시겠습니까?")) {
      return;
    }

    this.loading = true;

    try {
      await this.clearCart();
      this.showSnackbar("장바구니가 비워졌습니다", "success");
    } catch (error) {
      this.showSnackbar("장바구니 비우기 중 오류가 발생했습니다", "error");
      console.error("Clear cart error:", error);
    } finally {
      this.loading = false;
    }
  }

  public async handleCheckout(): Promise<void> {
    if (this.cartItems.length === 0) {
      this.showSnackbar("장바구니가 비어있습니다", "warning");
      return;
    }

    this.loading = true;

    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000));

      this.orderTotal = this.cartTotalPrice;
      await this.clearCart();
      this.orderDialog = true;
    } catch (error) {
      this.showSnackbar("주문 처리 중 오류가 발생했습니다", "error");
      console.error("Checkout error:", error);
    } finally {
      this.loading = false;
    }
  }

  public closeOrderDialog(): void {
    this.orderDialog = false;
    this.orderTotal = 0;
    this.$router.push("/shopping");
  }

  private showSnackbar(message: string, color: string = "success"): void {
    this.snackbar = {
      show: true,
      message,
      color,
    };
  }
}
</script>

<style scoped>
.cart-item {
  padding: 16px;
  min-height: 120px;
}

.cart-actions {
  display: flex;
  flex-direction: column;
  align-items: center;
  min-width: 120px;
}

.quantity-controls {
  display: flex;
  align-items: center;
  justify-content: center;
}

.quantity-input {
  max-width: 60px;
}

.quantity-input >>> input {
  text-align: center;
}

.product-description {
  max-width: 400px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.price-info {
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
}

.unit-price {
  color: #666;
  font-size: 0.9rem;
}

.total-price {
  color: #1976d2;
  font-size: 1rem;
}

.order-summary {
  position: sticky;
  top: 20px;
}

.summary-row {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 12px;
}

.total-row {
  font-size: 1.1rem;
}

/* Responsive adjustments */
@media (max-width: 960px) {
  .cart-actions {
    min-width: 100px;
  }

  .price-info {
    flex-direction: column;
    gap: 4px;
  }

  .order-summary {
    position: relative;
    top: auto;
  }

  .quantity-controls {
    flex-direction: column;
    gap: 8px;
  }
}

@media (max-width: 600px) {
  .cart-item {
    padding: 12px;
  }

  .product-description {
    max-width: 250px;
  }
}
</style>
