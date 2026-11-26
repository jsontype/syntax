<template>
  <v-container fluid class="about-page">
    <v-row justify="center">
      <v-col cols="12" md="10" lg="8">
        <!-- 페이지 헤더 -->
        <div class="text-center mb-8">
          <v-avatar size="100" color="primary" class="mb-4">
            <v-icon size="50" dark>mdi-information-outline</v-icon>
          </v-avatar>
          <h1 class="display-1 font-weight-bold primary--text mb-2">
            About Us
          </h1>
          <p class="subtitle-1 grey--text">
            Vue 2 + Vuetify 2 + TypeScript로 만든 멀티 기능 앱
          </p>
        </div>

        <!-- 프로젝트 소개 카드 -->
        <v-card elevation="4" class="mb-6">
          <v-card-title class="primary white--text">
            <v-icon left dark>mdi-rocket-launch</v-icon>
            프로젝트 소개
          </v-card-title>
          <v-card-text class="pa-6">
            <v-row>
              <v-col cols="12" md="6">
                <div class="mb-4">
                  <h3 class="text-h6 mb-2">🎯 주요 기능</h3>
                  <v-list dense>
                    <v-list-item>
                      <v-list-item-icon>
                        <v-icon color="primary">mdi-check</v-icon>
                      </v-list-item-icon>
                      <v-list-item-content>
                        <v-list-item-title>영화 검색 및 관리</v-list-item-title>
                      </v-list-item-content>
                    </v-list-item>
                    <v-list-item>
                      <v-list-item-icon>
                        <v-icon color="primary">mdi-check</v-icon>
                      </v-list-item-icon>
                      <v-list-item-content>
                        <v-list-item-title>할일 목록 관리</v-list-item-title>
                      </v-list-item-content>
                    </v-list-item>
                    <v-list-item>
                      <v-list-item-icon>
                        <v-icon color="primary">mdi-check</v-icon>
                      </v-list-item-icon>
                      <v-list-item-content>
                        <v-list-item-title>쇼핑카트 기능</v-list-item-title>
                      </v-list-item-content>
                    </v-list-item>
                    <v-list-item>
                      <v-list-item-icon>
                        <v-icon color="primary">mdi-check</v-icon>
                      </v-list-item-icon>
                      <v-list-item-content>
                        <v-list-item-title>통합 대시보드</v-list-item-title>
                      </v-list-item-content>
                    </v-list-item>
                  </v-list>
                </div>
              </v-col>
              <v-col cols="12" md="6">
                <div class="mb-4">
                  <h3 class="text-h6 mb-2">💻 기술 스택</h3>
                  <v-chip-group column>
                    <v-chip color="success" outlined>
                      <v-icon left>mdi-vuejs</v-icon>
                      Vue 2
                    </v-chip>
                    <v-chip color="info" outlined>
                      <v-icon left>mdi-material-design</v-icon>
                      Vuetify 2
                    </v-chip>
                    <v-chip color="primary" outlined>
                      <v-icon left>mdi-language-typescript</v-icon>
                      TypeScript
                    </v-chip>
                    <v-chip color="warning" outlined>
                      <v-icon left>mdi-database</v-icon>
                      Vuex
                    </v-chip>
                    <v-chip color="error" outlined>
                      <v-icon left>mdi-router</v-icon>
                      Vue Router
                    </v-chip>
                  </v-chip-group>
                </div>
              </v-col>
            </v-row>
          </v-card-text>
        </v-card>

        <!-- 개발자 정보 -->
        <v-card elevation="4" class="mb-6">
          <v-card-title class="success white--text">
            <v-icon left dark>mdi-account-circle</v-icon>
            개발자 정보
          </v-card-title>
          <v-card-text class="pa-6">
            <v-row align="center">
              <v-col cols="12" md="4" class="text-center">
                <v-avatar size="120" color="gradient">
                  <v-icon size="60" dark>mdi-account</v-icon>
                </v-avatar>
              </v-col>
              <v-col cols="12" md="8">
                <h3 class="text-h5 mb-2">김지연</h3>
                <p class="text-body-1 grey--text mb-4">
                  Vue.js와 TypeScript를 활용한 프론트엔드 개발자
                </p>

                <!-- 인터랙티브 입력 필드 -->
                <v-card outlined class="pa-4 mb-4">
                  <v-card-subtitle>실시간 입력 테스트</v-card-subtitle>
                  <InputField :name="name" @update-name="updateName" />
                  <v-alert
                    v-if="name !== 'Initial Name'"
                    type="success"
                    dense
                    class="mt-2"
                  >
                    입력된 이름: {{ name }}
                  </v-alert>
                </v-card>

                <div class="d-flex flex-wrap">
                  <v-btn
                    color="primary"
                    class="mr-2 mb-2"
                    @click="showContact = !showContact"
                  >
                    <v-icon left>mdi-email</v-icon>
                    연락처 보기
                  </v-btn>
                  <v-btn
                    color="success"
                    class="mr-2 mb-2"
                    @click="showSkills = !showSkills"
                  >
                    <v-icon left>mdi-code-tags</v-icon>
                    기술 스택
                  </v-btn>
                </div>
              </v-col>
            </v-row>

            <!-- 연락처 정보 (토글) -->
            <v-expand-transition>
              <v-card v-show="showContact" outlined class="mt-4">
                <v-card-text>
                  <v-row>
                    <v-col cols="12" sm="6">
                      <v-list-item>
                        <v-list-item-icon>
                          <v-icon color="primary">mdi-email</v-icon>
                        </v-list-item-icon>
                        <v-list-item-content>
                          <v-list-item-title
                            >jiyeon.kim@example.com</v-list-item-title
                          >
                        </v-list-item-content>
                      </v-list-item>
                    </v-col>
                    <v-col cols="12" sm="6">
                      <v-list-item>
                        <v-list-item-icon>
                          <v-icon color="success">mdi-github</v-icon>
                        </v-list-item-icon>
                        <v-list-item-content>
                          <v-list-item-title
                            >github.com/jiyeon-kim</v-list-item-title
                          >
                        </v-list-item-content>
                      </v-list-item>
                    </v-col>
                  </v-row>
                </v-card-text>
              </v-card>
            </v-expand-transition>

            <!-- 기술 스택 (토글) -->
            <v-expand-transition>
              <v-card v-show="showSkills" outlined class="mt-4">
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
          <v-card-title class="info white--text">
            <v-icon left dark>mdi-chart-line</v-icon>
            프로젝트 현황
          </v-card-title>
          <v-card-text class="pa-6">
            <v-row>
              <v-col cols="6" md="3">
                <div class="text-center">
                  <div class="text-h4 primary--text">4</div>
                  <div class="caption">주요 페이지</div>
                </div>
              </v-col>
              <v-col cols="6" md="3">
                <div class="text-center">
                  <div class="text-h4 success--text">100%</div>
                  <div class="caption">반응형 지원</div>
                </div>
              </v-col>
              <v-col cols="6" md="3">
                <div class="text-center">
                  <div class="text-h4 warning--text">5</div>
                  <div class="caption">사용된 기술</div>
                </div>
              </v-col>
              <v-col cols="6" md="3">
                <div class="text-center">
                  <div class="text-h4 error--text">∞</div>
                  <div class="caption">확장 가능성</div>
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
import { Vue, Component } from "vue-property-decorator"
import InputField from "@/components/Movies/InputField/index.vue"

@Component({
  components: {
    InputField,
  },
})
export default class AboutView extends Vue {
  private name: string = "Initial Name"
  private showContact = false
  private showSkills = false

  private updateName(newName: string): void {
    this.name = newName
  }

  // 생명주기 메서드
  beforeDestroy() {
    console.log("AboutView: beforeDestroy")
  }

  destroyed() {
    console.log("AboutView: destroyed")
  }
}
</script>

<style scoped>
.about-page {
  background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
  min-height: 100vh;
  padding: 20px 0;
}

.v-card {
  transition: transform 0.3s ease-in-out;
}

.v-card:hover {
  transform: translateY(-2px);
}
</style>
