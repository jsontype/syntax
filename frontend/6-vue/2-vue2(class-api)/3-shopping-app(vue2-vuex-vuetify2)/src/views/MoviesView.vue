<template>
  <v-container fluid class="movies-page">
    <v-row>
      <!-- 페이지 헤더 -->
      <v-col cols="12">
        <div class="text-center mb-6">
          <v-avatar size="80" color="red darken-2" class="mb-4">
            <v-icon size="40" dark>mdi-movie</v-icon>
          </v-avatar>
          <h1 class="display-1 font-weight-bold red--text text--darken-2 mb-2">
            {{ title }}
          </h1>
          <p class="subtitle-1 grey--text">
            YTS API를 활용한 영화 검색 및 정보 제공 서비스
          </p>

          <!-- 제목 변경 버튼 -->
          <v-btn @click="onClick" color="red darken-2" outlined class="mt-2">
            <v-icon left>mdi-refresh</v-icon>
            {{ title === "Movies List" ? "제목 변경" : "원래 제목" }}
          </v-btn>
        </div>
      </v-col>

      <!-- 입력 섹션 -->
      <v-col cols="12">
        <v-card elevation="3" class="mb-6">
          <v-card-title class="orange white--text">
            <v-icon left dark>mdi-account-edit</v-icon>
            사용자 정보 입력
          </v-card-title>
          <v-card-text class="pa-6">
            <v-row align="center">
              <v-col cols="12" md="6">
                <InputField :name="name" @update-name="updateName" />
              </v-col>
              <v-col cols="12" md="6">
                <v-alert
                  v-if="name !== 'Initial Name'"
                  type="success"
                  dense
                  icon="mdi-account-check"
                >
                  <strong>현재 사용자:</strong> {{ name }}
                </v-alert>
                <v-alert v-else type="info" dense icon="mdi-information">
                  이름을 입력해주세요
                </v-alert>
              </v-col>
            </v-row>
          </v-card-text>
        </v-card>
      </v-col>

      <!-- 영화 목록 섹션 -->
      <v-col cols="12">
        <v-card elevation="3">
          <v-card-title class="purple white--text">
            <v-icon left dark>mdi-filmstrip</v-icon>
            인기 영화 목록
            <v-spacer></v-spacer>
            <v-chip color="white" text-color="purple">
              {{ movies.length }} 편
            </v-chip>
          </v-card-title>

          <v-card-text class="pa-4">
            <!-- 로딩 상태 -->
            <div v-if="movies.length === 0" class="text-center py-12">
              <v-progress-circular
                indeterminate
                color="purple"
                size="64"
                width="4"
              ></v-progress-circular>
              <p class="mt-4 text-h6 grey--text">영화 정보를 불러오는 중...</p>
            </div>

            <!-- 영화 그리드 -->
            <v-row v-else>
              <v-col
                v-for="movie in movies"
                :key="movie.id"
                cols="12"
                sm="6"
                md="4"
                lg="3"
              >
                <v-card
                  elevation="2"
                  class="movie-card"
                  height="100%"
                  @click="openMovieDialog(movie)"
                >
                  <v-img
                    :src="movie.medium_cover_image"
                    :alt="movie.title"
                    height="300"
                    class="white--text align-end movie-poster"
                    gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
                  >
                    <v-card-title class="text-h6">
                      {{ movie.title }}
                    </v-card-title>
                  </v-img>

                  <v-card-text class="pb-0">
                    <div class="text-subtitle-2 grey--text mb-1">
                      {{ movie.year }}년
                    </div>

                    <v-row align="center" no-gutters>
                      <v-col>
                        <v-rating
                          :value="movie.rating / 2"
                          color="amber"
                          dense
                          half-increments
                          readonly
                          size="16"
                        ></v-rating>
                      </v-col>
                      <v-col class="text-right">
                        <span class="text-h6 font-weight-bold">
                          {{ movie.rating }}
                        </span>
                        <span class="grey--text">/10</span>
                      </v-col>
                    </v-row>
                  </v-card-text>

                  <v-card-actions>
                    <v-btn
                      :href="movie.url"
                      target="_blank"
                      text
                      color="purple"
                      small
                    >
                      <v-icon left small>mdi-open-in-new</v-icon>
                      상세보기
                    </v-btn>
                    <v-spacer></v-spacer>
                    <v-btn @click.stop="toggleFavorite(movie.id)" icon small>
                      <v-icon
                        :color="favorites.includes(movie.id) ? 'red' : 'grey'"
                      >
                        {{
                          favorites.includes(movie.id)
                            ? "mdi-heart"
                            : "mdi-heart-outline"
                        }}
                      </v-icon>
                    </v-btn>
                  </v-card-actions>
                </v-card>
              </v-col>
            </v-row>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>

    <!-- 영화 상세 다이얼로그 -->
    <v-dialog v-model="movieDialog" max-width="600px">
      <v-card v-if="selectedMovie">
        <v-img
          :src="
            selectedMovie.large_cover_image || selectedMovie.medium_cover_image
          "
          height="300"
          class="white--text align-end"
          gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.7)"
        >
          <v-card-title class="text-h4">
            {{ selectedMovie.title }}
          </v-card-title>
        </v-img>

        <v-card-text class="pa-6">
          <v-row>
            <v-col cols="12" sm="6">
              <div class="mb-2">
                <v-icon small color="purple">mdi-calendar</v-icon>
                <strong class="ml-2">개봉년도:</strong> {{ selectedMovie.year }}
              </div>
              <div class="mb-2">
                <v-icon small color="purple">mdi-star</v-icon>
                <strong class="ml-2">평점:</strong>
                {{ selectedMovie.rating }}/10
              </div>
              <div class="mb-2">
                <v-icon small color="purple">mdi-clock</v-icon>
                <strong class="ml-2">러닝타임:</strong>
                {{ selectedMovie.runtime || "N/A" }}분
              </div>
            </v-col>
            <v-col cols="12" sm="6">
              <v-rating
                :value="selectedMovie.rating / 2"
                color="amber"
                half-increments
                readonly
                class="mb-2"
              ></v-rating>
              <div v-if="selectedMovie.genres && selectedMovie.genres.length">
                <strong>장르:</strong>
                <v-chip
                  v-for="genre in selectedMovie.genres"
                  :key="genre"
                  small
                  outlined
                  class="ml-1"
                >
                  {{ genre }}
                </v-chip>
              </div>
            </v-col>
          </v-row>

          <div v-if="selectedMovie.summary" class="mt-4">
            <strong>줄거리:</strong>
            <p class="mt-2">{{ selectedMovie.summary }}</p>
          </div>
        </v-card-text>

        <v-card-actions>
          <v-btn
            :href="selectedMovie.url"
            target="_blank"
            color="purple"
            outlined
          >
            <v-icon left>mdi-open-in-new</v-icon>
            YTS에서 보기
          </v-btn>
          <v-spacer></v-spacer>
          <v-btn color="grey" text @click="movieDialog = false"> 닫기 </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-container>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator"
import Movies from "@/components/Movies/index.vue" // @ is an alias to /src
import InputField from "@/components/Movies/InputField/index.vue"

interface Movie {
  id: number
  title: string
  year: number
  rating: number
  runtime?: number
  genres?: string[]
  summary?: string
  url: string
  medium_cover_image: string
  large_cover_image?: string
}

@Component({
  components: {
    Movies,
    InputField,
  },
})
export default class MoviesView extends Vue {
  private title: string = "Movies List"
  private name: string = "Initial Name"
  private movies: Movie[] = []
  private movieDialog = false
  private selectedMovie: Movie | null = null
  private favorites: number[] = []

  private onClick(): void {
    if (this.title === "Movies List") {
      this.title = "Updated Movies List"
    } else {
      this.title = "Movies List"
    }
  }

  private updateName(newName: string): void {
    this.name = newName
  }

  private openMovieDialog(movie: any): void {
    this.selectedMovie = movie
    this.movieDialog = true
  }

  private toggleFavorite(movieId: number): void {
    const index = this.favorites.indexOf(movieId)
    if (index > -1) {
      this.favorites.splice(index, 1)
    } else {
      this.favorites.push(movieId)
    }
  }

  // <!-- Options API 방식 생명주기 & 스토어 -->
  // export default {
  //   // 메소드 : computed(값을 캐싱하는 함수) - watch(특정변수가 변할 때 실행) - methods(함수)
  //   computed: {
  //     movies() {
  //       return this.$store.state.movies
  //     }
  //   },
  //   // class api 에서는 computed를 get으로 사용
  //   watch: {},
  //   methods: {
  //     onClick() {
  //       if (this.title === "Movies List") {
  //         this.title = "Updated Movies List";
  //       } else {
  //         this.title = "Movies List";
  //       }
  //     },
  //   },
  //   // 라이프사이클 : created - updated - mounted - destroyed
  //   created() {
  //     this.$store.dispatch('FETCH_MOVIE') // vuex
  //   },
  //   updated() { },
  //   mounted() { },
  //   destroyed() { },

  // <!-- 생명주기 START -->
  beforeCreate() {
    console.log("MoviesView: beforeCreate")
  }
  created() {
    console.log("MoviesView: created")
  }
  beforeMount() {
    console.log("MoviesView: beforeMount")
  }
  mounted() {
    fetch("https://yts.mx/api/v2/list_movies.json?sort_by=rating")
      .then((response) => response.json())
      .then((data) => {
        console.log("Fetched movies:", data)
        this.movies = data.data.movies
      })
  }
  beforeUpdate() {
    console.log("MoviesView: beforeUpdate")
  }
  updated() {
    console.log("MoviesView: updated")
  }
  beforeDestroy() {
    console.log("MoviesView: beforeDestroy")
  }
  destroyed() {
    console.log("MoviesView: destroyed")
  }
  // <!-- 생명주기 END -->
}
</script>

<style scoped></style>
