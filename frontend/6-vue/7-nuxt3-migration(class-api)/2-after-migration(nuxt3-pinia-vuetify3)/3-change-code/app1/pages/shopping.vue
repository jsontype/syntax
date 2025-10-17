<template>
  <v-container>
    <!-- Header Section -->
    <v-row class="mb-4">
      <v-col cols="12">
        <div class="d-flex justify-space-between align-center">
          <div>
            <h1 class="text-h3 font-weight-bold mb-2">쇼핑몰</h1>
            <p class="text-subtitle-1 text-medium-emphasis">
              다양한 제품을 둘러보고 장바구니에 추가해보세요
            </p>
          </div>
          <v-btn color="primary" size="large" :to="'/cart'" class="cart-btn">
            <v-icon start>mdi-cart</v-icon>
            장바구니 ({{ cartItemsCount }})
          </v-btn>
        </div>
      </v-col>
    </v-row>

    <!-- Filter Section -->
    <v-row class="mb-4">
      <v-col cols="12" md="6">
        <v-text-field
          v-model="searchQuery"
          label="제품 검색"
          prepend-inner-icon="mdi-magnify"
          variant="outlined"
          density="compact"
          clearable
        ></v-text-field>
      </v-col>
      <v-col cols="12" md="6">
        <v-select
          v-model="selectedCategory"
          :items="categoryItems"
          label="카테고리 선택"
          variant="outlined"
          density="compact"
          clearable
        ></v-select>
      </v-col>
    </v-row>

    <!-- Products Grid -->
    <v-row>
      <v-col
        v-for="product in filteredProducts"
        :key="product.id"
        cols="12"
        sm="6"
        md="4"
        lg="3"
      >
        <v-card class="product-card" elevation="2">
          <v-img
            :src="product.image"
            height="200"
            class="text-white align-end product-image"
            gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
          >
            <template v-slot:placeholder>
              <v-row class="fill-height ma-0" align="center" justify="center">
                <v-progress-circular
                  indeterminate
                  color="grey-lighten-5"
                ></v-progress-circular>
              </v-row>
            </template>
          </v-img>

          <v-card-title class="product-title">
            {{ product.name }}
          </v-card-title>

          <v-card-subtitle class="product-category">
            {{ product.category }}
          </v-card-subtitle>

          <v-card-text class="product-description">
            <p>{{ product.description }}</p>
            <div class="price-section">
              <span class="price">{{ formatPrice(product.price) }}</span>
            </div>
          </v-card-text>

          <v-card-actions class="px-4 pb-4">
            <div
              class="d-flex align-center justify-space-between"
              style="width: 100%"
            >
              <!-- Quantity Control -->
              <div class="d-flex align-center">
                <v-btn
                  icon="mdi-minus"
                  size="small"
                  @click="
                    updateQuantity(
                      product.id,
                      getProductQuantity(product.id) - 1
                    )
                  "
                  :disabled="getProductQuantity(product.id) <= 1"
                ></v-btn>

                <v-text-field
                  :model-value="getProductQuantity(product.id)"
                  type="number"
                  min="1"
                  max="99"
                  style="width: 60px"
                  class="mx-2 text-center"
                  hide-details
                  density="compact"
                  @update:model-value="
                    updateQuantity(product.id, parseInt($event) || 1)
                  "
                ></v-text-field>

                <v-btn
                  icon="mdi-plus"
                  size="small"
                  @click="
                    updateQuantity(
                      product.id,
                      getProductQuantity(product.id) + 1
                    )
                  "
                  :disabled="getProductQuantity(product.id) >= 99"
                ></v-btn>
              </div>

              <!-- Add to Cart Button -->
              <v-btn
                :color="isInCart(product.id) ? 'success' : 'primary'"
                :loading="loading"
                @click="
                  handleAddToCart(product, getProductQuantity(product.id))
                "
              >
                <v-icon start>
                  {{ isInCart(product.id) ? "mdi-check" : "mdi-cart-plus" }}
                </v-icon>
                {{ isInCart(product.id) ? "추가됨" : "담기" }}
              </v-btn>
            </div>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>

    <!-- Empty State -->
    <v-row v-if="filteredProducts.length === 0" class="mt-8">
      <v-col cols="12" class="text-center">
        <v-icon size="64" color="grey-lighten-2">mdi-package-variant</v-icon>
        <h3 class="text-medium-emphasis mt-4">검색 결과가 없습니다</h3>
        <p class="text-medium-emphasis">
          다른 검색어나 카테고리를 시도해보세요
        </p>
      </v-col>
    </v-row>

    <!-- Snackbar -->
    <v-snackbar
      v-model="snackbar.show"
      :color="snackbar.color"
      timeout="3000"
      location="top right"
    >
      {{ snackbar.message }}
      <template v-slot:actions>
        <v-btn variant="text" @click="snackbar.show = false"> 닫기 </v-btn>
      </template>
    </v-snackbar>
  </v-container>
</template>

<script lang="ts">
import { Component, Vue } from "vue-facing-decorator";
import type { Product } from "~/store";

interface SnackbarState {
  show: boolean;
  message: string;
  color: string;
}

@Component
export default class ShoppingPage extends Vue {
  // Data properties
  private searchQuery: string = "";
  private selectedCategory: string = "";
  private loading: boolean = false;
  private productQuantities: { [productId: number]: number } = {};
  private snackbar: SnackbarState = {
    show: false,
    message: "",
    color: "success",
  };

  // Vuex computed properties (direct access)
  get allProducts(): Product[] {
    return this.$store.getters.allProducts;
  }

  get cartItemsCount(): number {
    return this.$store.getters.cartItemsCount;
  }

  get productCategories(): string[] {
    return this.$store.getters.productCategories;
  }

  // Computed properties
  get filteredProducts(): Product[] {
    let products = this.allProducts || [];

    // Filter by search query
    if (this.searchQuery) {
      const query = this.searchQuery.toLowerCase();
      products = products.filter(
        (product) =>
          product.name.toLowerCase().includes(query) ||
          (product.description &&
            product.description.toLowerCase().includes(query)) ||
          (product.category && product.category.toLowerCase().includes(query))
      );
    }

    // Filter by category
    if (this.selectedCategory) {
      products = products.filter(
        (product) => product.category === this.selectedCategory
      );
    }

    return products;
  }

  get categoryItems() {
    const categories = this.productCategories || [];
    return categories.map((category) => ({
      title: category,
      value: category,
    }));
  }

  // Lifecycle hooks
  async mounted() {
    await this.$store.dispatch("loadCartFromStorage");

    // Initialize product quantities
    this.allProducts.forEach((product) => {
      this.productQuantities[product.id] = 1;
    });
  }

  // Methods
  public formatPrice(price: number): string {
    return new Intl.NumberFormat("ko-KR", {
      style: "currency",
      currency: "KRW",
    }).format(price);
  }

  public isInCart(productId: number): boolean {
    return !!this.$store.getters.getCartItem(productId);
  }

  public getProductQuantity(productId: number): number {
    return this.productQuantities[productId] || 1;
  }

  public updateQuantity(productId: number, quantity: number): void {
    if (quantity < 1) quantity = 1;
    if (quantity > 99) quantity = 99;
    this.productQuantities[productId] = quantity;
  }

  public async handleAddToCart(
    product: Product,
    quantity: number = 1
  ): Promise<void> {
    this.loading = true;

    try {
      // 수량과 함께 장바구니에 추가
      await this.$store.dispatch("addToCartWithQuantity", {
        product,
        quantity,
      });

      this.showSnackbar(
        `${product.name} ${quantity}개가 장바구니에 추가되었습니다`,
        "success"
      );
    } catch (error) {
      this.showSnackbar("상품 추가 중 오류가 발생했습니다", "error");
      console.error("Add to cart error:", error);
    } finally {
      this.loading = false;
    }
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
.product-card {
  height: 100%;
  display: flex;
  flex-direction: column;
  transition: transform 0.2s ease-in-out;
}

.product-card:hover {
  transform: translateY(-2px);
}

.product-image {
  border-radius: 4px 4px 0 0;
}

.product-title {
  font-size: 1.1rem;
  font-weight: 600;
  line-height: 1.3;
  padding-bottom: 8px;
}

.product-category {
  color: #666;
  font-size: 0.85rem;
  padding-top: 0;
}

.product-description {
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.product-description p {
  font-size: 0.9rem;
  color: #666;
  margin-bottom: 16px;
  line-height: 1.4;
}

.price-section {
  margin-top: auto;
}

.price {
  font-size: 1.2rem;
  font-weight: 700;
  color: #1976d2;
}

.cart-btn {
  font-weight: 600;
}

/* Responsive adjustments */
@media (max-width: 960px) {
  .product-title {
    font-size: 1rem;
  }

  .price {
    font-size: 1.1rem;
  }
}
</style>
