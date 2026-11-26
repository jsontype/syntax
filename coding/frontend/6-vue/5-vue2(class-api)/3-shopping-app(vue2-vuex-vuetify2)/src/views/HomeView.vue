<template>
  <v-container fluid>
    <v-row justify="center">
      <v-col cols="12">
        <!-- 페이지 제목 -->
        <div class="text-center mb-8">
          <h1 class="display-2 font-weight-bold primary--text">
            <v-icon size="48" color="primary" class="mr-3"
              >mdi-view-dashboard</v-icon
            >
            대시보드
          </h1>
          <p class="subtitle-1 grey--text">
            쇼핑카트와 할일 현황을 한눈에 확인하세요
          </p>
        </div>
      </v-col>
    </v-row>

    <v-row>
      <!-- 쇼핑카트 현황 카드 -->
      <v-col cols="12" md="6">
        <v-card elevation="4" class="ma-2">
          <v-card-title class="primary white--text">
            <v-icon left dark>mdi-cart</v-icon>
            쇼핑카트 현황
          </v-card-title>

          <v-card-text class="pa-6">
            <v-row>
              <v-col cols="4">
                <div class="text-center">
                  <v-avatar size="60" color="blue lighten-2">
                    <v-icon size="30" dark>mdi-package-variant</v-icon>
                  </v-avatar>
                  <div class="text-h5 mt-2">{{ cartItemsCount }}</div>
                  <div class="caption grey--text">상품 종류</div>
                </div>
              </v-col>
              <v-col cols="4">
                <div class="text-center">
                  <v-avatar size="60" color="green lighten-2">
                    <v-icon size="30" dark>mdi-counter</v-icon>
                  </v-avatar>
                  <div class="text-h5 mt-2">{{ totalQuantity }}</div>
                  <div class="caption grey--text">총 수량</div>
                </div>
              </v-col>
              <v-col cols="4">
                <div class="text-center">
                  <v-avatar size="60" color="orange lighten-2">
                    <v-icon size="30" dark>mdi-currency-krw</v-icon>
                  </v-avatar>
                  <div class="text-h6 mt-2">
                    {{ totalPrice.toLocaleString() }}원
                  </div>
                  <div class="caption grey--text">총 금액</div>
                </div>
              </v-col>
            </v-row>
          </v-card-text>

          <v-card-actions class="pa-4">
            <v-btn @click="goToShop" color="primary" outlined class="mr-2">
              <v-icon left>mdi-shopping</v-icon>
              쇼핑하러 가기
            </v-btn>
            <v-btn
              @click="goToCart"
              :disabled="cartItemsCount === 0"
              color="primary"
            >
              <v-icon left>mdi-cart</v-icon>
              장바구니 보기
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>

      <!-- 할일 현황 카드 -->
      <v-col cols="12" md="6">
        <v-card elevation="4" class="ma-2">
          <v-card-title class="success white--text">
            <v-icon left dark>mdi-check-circle</v-icon>
            할일 현황
          </v-card-title>

          <v-card-text class="pa-6">
            <v-row>
              <v-col cols="4">
                <div class="text-center">
                  <v-avatar size="60" color="info">
                    <v-icon size="30" dark>mdi-clipboard-list</v-icon>
                  </v-avatar>
                  <div class="text-h5 mt-2">{{ totalTodos }}</div>
                  <div class="caption grey--text">전체</div>
                </div>
              </v-col>
              <v-col cols="4">
                <div class="text-center">
                  <v-avatar size="60" color="success">
                    <v-icon size="30" dark>mdi-check</v-icon>
                  </v-avatar>
                  <div class="text-h5 mt-2">{{ completedTodos }}</div>
                  <div class="caption grey--text">완료</div>
                </div>
              </v-col>
              <v-col cols="4">
                <div class="text-center">
                  <v-avatar size="60" color="warning">
                    <v-icon size="30" dark>mdi-clock-outline</v-icon>
                  </v-avatar>
                  <div class="text-h5 mt-2">{{ pendingTodos }}</div>
                  <div class="caption grey--text">진행중</div>
                </div>
              </v-col>
            </v-row>

            <!-- 진행률 표시 -->
            <div class="mt-4">
              <div class="d-flex justify-space-between align-center mb-2">
                <span class="subtitle-2">완료율</span>
                <span class="subtitle-2">{{ completionPercentage }}%</span>
              </div>
              <v-progress-linear
                :value="completionPercentage"
                color="success"
                height="8"
                rounded
              ></v-progress-linear>
            </div>
          </v-card-text>

          <v-card-actions class="pa-4">
            <v-btn @click="goToTodos" color="success" outlined>
              <v-icon left>mdi-check-circle</v-icon>
              할일 관리하기
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator"
import { mapGetters } from "vuex"

@Component({
  computed: {
    ...mapGetters([
      "cartItemsCount",
      "totalPrice",
      "totalQuantity",
      "totalTodos",
      "completedTodos",
      "pendingTodos",
    ]),
  },
})
export default class HomeView extends Vue {
  // Vuex getters
  cartItemsCount!: number
  totalPrice!: number
  totalQuantity!: number
  totalTodos!: number
  completedTodos!: number
  pendingTodos!: number

  get completionPercentage() {
    if (this.totalTodos === 0) return 0
    return Math.round((this.completedTodos / this.totalTodos) * 100)
  }

  private goToShop() {
    this.$router.push("/shop")
  }

  private goToCart() {
    this.$router.push("/cart")
  }

  private goToTodos() {
    this.$router.push("/todos")
  }
}
</script>

<style scoped>
.home {
  padding: 20px;
  max-width: 800px;
  margin: 0 auto;
}

.summary-card {
  background: white;
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 20px;
  margin-bottom: 20px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.summary-card h2 {
  margin-top: 0;
  color: #333;
}

.stats {
  margin: 15px 0;
}

.stat-item {
  display: flex;
  justify-content: space-between;
  padding: 8px 0;
  border-bottom: 1px solid #eee;
}

.stat-item:last-child {
  border-bottom: none;
}

.label {
  font-weight: 500;
  color: #666;
}

.value {
  font-weight: bold;
  color: #333;
}

.value.completed {
  color: #28a745;
}

.value.pending {
  color: #dc3545;
}

.nav-button {
  padding: 10px 15px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  margin-right: 10px;
  margin-top: 10px;
  font-weight: 500;
}

.shop-btn {
  background: #007bff;
  color: white;
}

.cart-btn {
  background: #28a745;
  color: white;
}

.cart-btn:disabled {
  background: #6c757d;
  cursor: not-allowed;
}

.todos-btn {
  background: #17a2b8;
  color: white;
}

/* Vuetify provides all necessary styling */
</style>
