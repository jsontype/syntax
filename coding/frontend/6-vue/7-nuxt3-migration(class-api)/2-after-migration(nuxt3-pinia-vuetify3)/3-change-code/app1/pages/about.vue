<template>
  <v-container fluid class="about-page">
    <v-row justify="center">
      <v-col cols="12">
        <!-- 페이지 헤더 -->
        <div class="text-center mb-8">
          <v-avatar size="100" color="primary" class="mb-4">
            <v-icon size="50">mdi-information-outline</v-icon>
          </v-avatar>
          <h1 class="text-h3 font-weight-bold text-primary mb-2">About Us</h1>
          <p class="text-subtitle-1 text-medium-emphasis">
            Nuxt 3 + Vuetify 3 + TypeScript로 만든 멀티 기능 앱
          </p>
        </div>

        <!-- 프로젝트 소개 카드 -->
        <v-card elevation="4" class="mb-6">
          <v-card-title class="bg-primary text-white">
            <v-icon start>mdi-rocket-launch</v-icon>
            프로젝트 소개
          </v-card-title>
          <v-card-text class="pa-6">
            <v-row>
              <v-col cols="12" md="6">
                <div class="mb-4">
                  <h3 class="text-h6 mb-2">🎯 주요 기능</h3>
                  <v-list density="compact">
                    <v-list-item
                      prepend-icon="mdi-check"
                      title="영화 검색 및 관리"
                    />
                    <v-list-item
                      prepend-icon="mdi-check"
                      title="할일 목록 관리"
                    />
                    <v-list-item
                      prepend-icon="mdi-check"
                      title="쇼핑카트 기능"
                    />
                    <v-list-item
                      prepend-icon="mdi-check"
                      title="통합 대시보드"
                    />
                  </v-list>
                </div>
              </v-col>
              <v-col cols="12" md="6">
                <div class="mb-4">
                  <h3 class="text-h6 mb-2">💻 기술 스택</h3>
                  <v-chip-group column>
                    <v-chip
                      color="success"
                      variant="outlined"
                      prepend-icon="mdi-vuejs"
                    >
                      Vue 3
                    </v-chip>
                    <v-chip
                      color="info"
                      variant="outlined"
                      prepend-icon="mdi-material-design"
                    >
                      Vuetify 3
                    </v-chip>
                    <v-chip
                      color="primary"
                      variant="outlined"
                      prepend-icon="mdi-language-typescript"
                    >
                      TypeScript
                    </v-chip>
                    <v-chip
                      color="warning"
                      variant="outlined"
                      prepend-icon="mdi-database"
                    >
                      Vuex
                    </v-chip>
                    <v-chip
                      color="error"
                      variant="outlined"
                      prepend-icon="mdi-router"
                    >
                      Nuxt Router
                    </v-chip>
                  </v-chip-group>
                </div>
              </v-col>
            </v-row>
          </v-card-text>
        </v-card>

        <!-- 개발자 정보 -->
        <v-card elevation="4" class="mb-6">
          <v-card-title class="bg-success text-white">
            <v-icon start>mdi-account-circle</v-icon>
            개발자 정보
          </v-card-title>
          <v-card-text class="pa-6">
            <v-row align="center">
              <v-col cols="12" md="4" class="text-center">
                <v-avatar size="120" color="gradient">
                  <v-icon size="60">mdi-account</v-icon>
                </v-avatar>
              </v-col>
              <v-col cols="12" md="8">
                <h3 class="text-h5 mb-2">김지연</h3>
                <p class="text-body-1 text-medium-emphasis mb-4">
                  Vue.js와 TypeScript를 활용한 프론트엔드 개발자
                </p>

                <div class="d-flex flex-wrap">
                  <v-btn
                    color="primary"
                    class="mr-2 mb-2"
                    prepend-icon="mdi-email"
                    @click="showContact = !showContact"
                  >
                    연락처 보기
                  </v-btn>
                  <v-btn
                    color="success"
                    class="mr-2 mb-2"
                    prepend-icon="mdi-code-tags"
                    @click="showSkills = !showSkills"
                  >
                    기술 스택
                  </v-btn>
                </div>
              </v-col>
            </v-row>

            <!-- 연락처 정보 (토글) -->
            <v-expand-transition>
              <v-card v-show="showContact" variant="outlined" class="mt-4">
                <v-card-text>
                  <v-row>
                    <v-col cols="12" sm="6">
                      <v-list-item
                        prepend-icon="mdi-email"
                        title="jiyeon.kim@example.com"
                      />
                    </v-col>
                    <v-col cols="12" sm="6">
                      <v-list-item
                        prepend-icon="mdi-github"
                        title="github.com/jiyeon-kim"
                      />
                    </v-col>
                  </v-row>
                </v-card-text>
              </v-card>
            </v-expand-transition>

            <!-- 기술 스택 (토글) -->
            <v-expand-transition>
              <v-card v-show="showSkills" variant="outlined" class="mt-4">
                <v-card-text>
                  <v-row>
                    <v-col cols="12" sm="6" md="3">
                      <div class="text-center">
                        <v-progress-circular
                          :value="90"
                          size="80"
                          color="success"
                          :width="8"
                        >
                          90%
                        </v-progress-circular>
                        <p class="mt-2">Vue.js</p>
                      </div>
                    </v-col>
                    <v-col cols="12" sm="6" md="3">
                      <div class="text-center">
                        <v-progress-circular
                          :value="85"
                          size="80"
                          color="primary"
                          :width="8"
                        >
                          85%
                        </v-progress-circular>
                        <p class="mt-2">TypeScript</p>
                      </div>
                    </v-col>
                    <v-col cols="12" sm="6" md="3">
                      <div class="text-center">
                        <v-progress-circular
                          :value="80"
                          size="80"
                          color="info"
                          :width="8"
                        >
                          80%
                        </v-progress-circular>
                        <p class="mt-2">Vuetify</p>
                      </div>
                    </v-col>
                    <v-col cols="12" sm="6" md="3">
                      <div class="text-center">
                        <v-progress-circular
                          :value="75"
                          size="80"
                          color="warning"
                          :width="8"
                        >
                          75%
                        </v-progress-circular>
                        <p class="mt-2">Vuex</p>
                      </div>
                    </v-col>
                  </v-row>
                </v-card-text>
              </v-card>
            </v-expand-transition>
          </v-card-text>
        </v-card>

        <!-- 프로젝트 통계 -->
        <v-card elevation="4">
          <v-card-title class="bg-info text-white">
            <v-icon start>mdi-chart-line</v-icon>
            프로젝트 현황
          </v-card-title>
          <v-card-text class="pa-6">
            <v-row>
              <v-col cols="6" md="3">
                <div class="text-center">
                  <div class="text-h4 text-primary">4</div>
                  <div class="text-caption">주요 페이지</div>
                </div>
              </v-col>
              <v-col cols="6" md="3">
                <div class="text-center">
                  <div class="text-h4 text-success">100%</div>
                  <div class="text-caption">반응형 지원</div>
                </div>
              </v-col>
              <v-col cols="6" md="3">
                <div class="text-center">
                  <div class="text-h4 text-warning">5</div>
                  <div class="text-caption">사용된 기술</div>
                </div>
              </v-col>
              <v-col cols="6" md="3">
                <div class="text-center">
                  <div class="text-h4 text-error">∞</div>
                  <div class="text-caption">확장 가능성</div>
                </div>
              </v-col>
            </v-row>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import { Component, Vue } from "vue-facing-decorator";

@Component
export default class AboutView extends Vue {
  private name: string = "Initial Name";
  private showContact = false;
  private showSkills = false;

  private updateName(newName: string): void {
    this.name = newName;
  }

  // 생명주기 메서드 (Vue3)
  beforeUnmount() {
    console.log("AboutView: beforeUnmount");
  }

  unmounted() {
    console.log("AboutView: unmounted");
  }
}
</script>

<style scoped>
.about-page {
  min-height: 100vh;
  padding: 20px 0;
  background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
}

.v-card {
  transition: all 0.3s ease-in-out;
  border-radius: 12px !important;
}

.v-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15) !important;
}

/* 아바타 그라디언트 효과 */
.v-avatar.gradient {
  background: linear-gradient(45deg, #667eea 0%, #764ba2 100%) !important;
}

/* 반응형 간격 개선 */
@media (max-width: 600px) {
  .about-page {
    padding: 10px 0;
  }

  .v-card-text {
    padding: 16px !important;
  }

  .display-1 {
    font-size: 2rem !important;
  }
}

/* 스킬 진행률 원형 차트 개선 */
.v-progress-circular {
  margin: 0 auto;
}

/* 카드 헤더 개선 */
.v-card-title {
  border-radius: 12px 12px 0 0 !important;
}

/* 칩 그룹 간격 개선 */
.v-chip-group {
  gap: 8px;
}

.v-chip {
  margin: 4px !important;
}

/* 리스트 아이템 호버 효과 */
.v-list-item:hover {
  background-color: rgba(0, 0, 0, 0.04);
  border-radius: 8px;
}

/* 확장 애니메이션 카드 스타일링 */
.v-expand-transition-enter-active,
.v-expand-transition-leave-active {
  transition: all 0.3s ease-in-out;
}

/* 텍스트 선택 방지 */
.v-progress-circular,
.v-chip,
.v-btn {
  user-select: none;
}
</style>
