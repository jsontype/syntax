<template>
  <v-container>
    <v-row>
      <v-col cols="12">
        <!-- Hero Section -->
        <v-card class="mb-6" elevation="4">
          <v-img
            height="300"
            src="https://via.placeholder.com/1200x300/1976D2/ffffff?text=Movie+App"
          >
            <v-card-title class="align-end">
              <div>
                <div class="text-h3 text-white mb-2">🎬 Movie App</div>
                <div class="text-h6 text-white opacity-75">
                  Vue Property Decorator + Class API로 구현된 영화 앱
                </div>
              </div>
            </v-card-title>
          </v-img>
        </v-card>

        <!-- Feature Cards -->
        <v-row>
          <v-col
            v-for="feature in features"
            :key="feature.title"
            cols="12"
            sm="6"
            md="4"
          >
            <v-card height="280" @click="navigateToPage(feature.route)">
              <v-card-text class="text-center pa-6">
                <v-icon size="64" :color="feature.color" class="mb-4">
                  {{ feature.icon }}
                </v-icon>
                <div class="text-h5 mb-2">{{ feature.title }}</div>
                <div class="text-body-2 text--secondary">
                  {{ feature.description }}
                </div>
              </v-card-text>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="primary" text>
                  바로가기
                  <v-icon right>mdi-arrow-right</v-icon>
                </v-btn>
                <v-spacer></v-spacer>
              </v-card-actions>
            </v-card>
          </v-col>
        </v-row>

        <!-- Stats Section -->
        <v-card class="mt-6" elevation="2">
          <v-card-title>
            <v-icon left color="primary">mdi-chart-line</v-icon>
            앱 통계
          </v-card-title>
          <v-card-text>
            <v-row>
              <v-col
                v-for="stat in stats"
                :key="stat.label"
                cols="6"
                md="3"
                class="text-center"
              >
                <div class="text-h4" :class="`${stat.color}--text`">
                  {{ stat.value }}
                </div>
                <div class="text-body-2 text--secondary">
                  {{ stat.label }}
                </div>
              </v-col>
            </v-row>

            <!-- Todo 진행률 표시 -->
            <v-divider class="my-4"></v-divider>
            <div class="text-subtitle-1 mb-2">할 일 완료율</div>
            <v-progress-linear
              :value="completionRate"
              color="success"
              height="12"
              rounded
              class="mb-2"
            >
              <template v-slot:default="{ value }">
                <strong class="white--text">{{ Math.ceil(value) }}%</strong>
              </template>
            </v-progress-linear>
            <div class="text-caption text--secondary text-center">
              {{ completedTodos }} / {{ totalTodos }} 할 일 완료
            </div>
          </v-card-text>
        </v-card>

        <!-- Recent Activity -->
        <v-card class="mt-6" elevation="2">
          <v-card-title>
            <v-icon left color="success">mdi-clock-outline</v-icon>
            최근 활동
          </v-card-title>
          <v-card-text>
            <v-timeline dense>
              <v-timeline-item
                v-for="activity in recentActivities"
                :key="activity.id"
                :color="activity.color"
                small
              >
                <template v-slot:opposite>
                  <span class="text-caption">{{ activity.time }}</span>
                </template>
                <div>
                  <div class="text-body-1">{{ activity.title }}</div>
                  <div class="text-caption text--secondary">
                    {{ activity.description }}
                  </div>
                </div>
              </v-timeline-item>
            </v-timeline>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { mapGetters } from "vuex";

@Component({
  name: "HomePage",
  computed: {
    ...mapGetters([
      "totalTodos",
      "completedTodos",
      "pendingTodos",
      "completionRate",
      "cartItemsCount",
      "cartTotalPrice",
    ]),
  },
})
export default class HomePage extends Vue {
  // Vuex getters
  totalTodos!: number;
  completedTodos!: number;
  pendingTodos!: number;
  completionRate!: number;
  cartItemsCount!: number;
  cartTotalPrice!: number;
  features = [
    {
      title: "영화 검색",
      description: "좋아하는 영화를 검색하고 상세 정보를 확인하세요",
      icon: "mdi-movie-search",
      color: "primary",
      route: "/movie",
    },
    {
      title: "즐겨찾기",
      description: "마음에 드는 영화를 즐겨찾기에 추가해보세요",
      icon: "mdi-heart",
      color: "red",
      route: "/movie",
    },
    {
      title: "할 일 관리",
      description: "볼 영화 목록을 할 일로 관리하세요",
      icon: "mdi-check-circle",
      color: "success",
      route: "/todo",
    },
    {
      title: "쇼핑",
      description: "영화 관련 상품을 둘러보세요",
      icon: "mdi-shopping",
      color: "orange",
      route: "/shopping",
    },
    {
      title: "장바구니",
      description: "선택한 상품들을 확인하세요",
      icon: "mdi-cart",
      color: "purple",
      route: "/cart",
    },
    {
      title: "정보",
      description: "앱에 대한 자세한 정보를 확인하세요",
      icon: "mdi-information",
      color: "info",
      route: "/about",
    },
  ];

  // Computed property로 실시간 통계 제공
  get stats() {
    return [
      {
        label: "총 할일",
        value: this.totalTodos.toString(),
        color: "info",
      },
      {
        label: "완료된 할일",
        value: this.completedTodos.toString(),
        color: "success",
      },
      {
        label: "장바구니 상품",
        value: this.cartItemsCount.toString(),
        color: "orange",
      },
      {
        label: "장바구니 총액",
        value: this.formatCartTotal(),
        color: "purple",
      },
    ];
  }

  recentActivities = [
    {
      id: 1,
      title: "아바타: 물의 길 즐겨찾기 추가",
      description: "새로운 영화를 즐겨찾기에 추가했습니다.",
      time: "5분 전",
      color: "red",
    },
    {
      id: 2,
      title: "탑건: 매버릭 검색",
      description: "인기 영화를 검색했습니다.",
      time: "1시간 전",
      color: "primary",
    },
    {
      id: 3,
      title: "할 일 완료",
      description: "'미니언즈 보기' 할 일을 완료했습니다.",
      time: "3시간 전",
      color: "success",
    },
    {
      id: 4,
      title: "쇼핑 목록 업데이트",
      description: "새로운 상품을 장바구니에 추가했습니다.",
      time: "1일 전",
      color: "orange",
    },
  ];

  // Methods
  public navigateToPage(route: string): void {
    this.$router.push(route);
  }

  public formatCartTotal(): string {
    if (this.cartTotalPrice === 0) return "0원";
    return new Intl.NumberFormat("ko-KR", {
      style: "currency",
      currency: "KRW",
      maximumFractionDigits: 0,
    }).format(this.cartTotalPrice);
  }

  // Lifecycle hooks
  public mounted(): void {
    console.log("HomePage mounted with class-API!");
  }
}
</script>

<style scoped>
.v-card {
  transition: transform 0.2s, box-shadow 0.2s;
  cursor: pointer;
}

.v-card:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15) !important;
}
</style>
