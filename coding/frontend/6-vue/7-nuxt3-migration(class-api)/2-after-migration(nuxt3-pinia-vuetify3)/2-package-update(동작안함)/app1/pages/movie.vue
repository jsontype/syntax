<template>
  <v-container>
    <v-row>
      <v-col cols="12">
        <h1 class="mb-4">🎬 Movie App</h1>

        <!-- 검색 바 -->
        <v-card class="mb-4">
          <v-card-text>
            <v-row>
              <v-col cols="12" md="8">
                <v-text-field
                  v-model="searchQuery"
                  label="영화 제목 검색"
                  prepend-icon="mdi-magnify"
                  outlined
                  clearable
                  @keyup.enter="searchMovies"
                />
              </v-col>
              <v-col cols="12" md="4" class="d-flex align-center">
                <v-btn
                  color="primary"
                  @click="searchMovies"
                  :loading="isLoading"
                  class="mr-2"
                >
                  검색
                </v-btn>
                <v-btn
                  color="secondary"
                  @click="fetchMoviesFromYTS"
                  :loading="isLoading"
                >
                  인기 영화
                </v-btn>
              </v-col>
            </v-row>
          </v-card-text>
        </v-card>

        <!-- 즐겨찾기 토글 -->
        <v-card class="mb-4">
          <v-card-text>
            <v-switch
              v-model="showFavoritesOnly"
              label="즐겨찾기만 보기"
              color="red"
            ></v-switch>
          </v-card-text>
        </v-card>

        <!-- 영화 목록 -->
        <v-row v-if="!isLoading">
          <v-col
            v-for="movie in filteredMovies"
            :key="movie.id"
            cols="12"
            sm="6"
            md="4"
            lg="3"
          >
            <v-card height="600" class="movie-card">
              <v-img
                :src="getMoviePoster(movie.poster_path)"
                height="300"
                cover
              >
                <v-btn
                  fab
                  small
                  absolute
                  top
                  right
                  :color="isFavorite(movie.id) ? 'red' : 'grey'"
                  @click="toggleFavorite(movie)"
                  class="ma-2"
                >
                  <v-icon>
                    {{
                      isFavorite(movie.id) ? "mdi-heart" : "mdi-heart-outline"
                    }}
                  </v-icon>
                </v-btn>
              </v-img>

              <v-card-title class="text-subtitle-1">
                {{ movie.title }}
              </v-card-title>

              <v-card-text>
                <div class="mb-2">
                  <v-rating
                    :value="movie.vote_average / 2"
                    color="amber"
                    dense
                    half-increments
                    readonly
                    size="14"
                  ></v-rating>
                  <span class="grey--text ml-1">
                    {{ movie.vote_average }}/10
                  </span>
                </div>

                <div class="text-caption">
                  개봉일: {{ formatDate(movie.release_date) }}
                </div>

                <div class="movie-overview mt-2">
                  {{ truncateText(movie.overview, 100) }}
                </div>
              </v-card-text>

              <v-card-actions>
                <v-btn text color="primary" @click="showMovieDetail(movie)">
                  상세보기
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-col>
        </v-row>

        <!-- 로딩 -->
        <v-row v-if="isLoading" justify="center">
          <v-col cols="12" class="text-center">
            <v-progress-circular
              indeterminate
              color="primary"
              size="64"
            ></v-progress-circular>
            <p class="mt-4">영화 정보를 불러오는 중...</p>
          </v-col>
        </v-row>

        <!-- 영화가 없을 때 -->
        <v-row v-if="!isLoading && filteredMovies.length === 0">
          <v-col cols="12" class="text-center">
            <v-card>
              <v-card-text>
                <v-icon size="64" color="grey">mdi-movie-off</v-icon>
                <h3 class="mt-4">영화를 찾을 수 없습니다</h3>
                <p>다른 키워드로 검색해보세요.</p>
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>

        <!-- 영화 상세 다이얼로그 -->
        <v-dialog v-model="showDetailDialog" max-width="800">
          <v-card v-if="selectedMovie">
            <v-img
              :src="getMoviePoster(selectedMovie.poster_path)"
              height="400"
              cover
            >
              <v-btn
                fab
                small
                absolute
                top
                right
                :color="isFavorite(selectedMovie.id) ? 'red' : 'grey'"
                @click="toggleFavorite(selectedMovie)"
                class="ma-2"
              >
                <v-icon>
                  {{
                    isFavorite(selectedMovie.id)
                      ? "mdi-heart"
                      : "mdi-heart-outline"
                  }}
                </v-icon>
              </v-btn>
            </v-img>

            <v-card-title>
              {{ selectedMovie.title }}
            </v-card-title>

            <v-card-text>
              <v-row>
                <v-col cols="12" md="6">
                  <div class="mb-2">
                    <strong>평점:</strong>
                    <v-rating
                      :value="selectedMovie.vote_average / 2"
                      color="amber"
                      dense
                      half-increments
                      readonly
                      size="16"
                      class="d-inline-block ml-2"
                    ></v-rating>
                    <span class="ml-2"
                      >{{ selectedMovie.vote_average }}/10</span
                    >
                  </div>

                  <div class="mb-2">
                    <strong>개봉일:</strong>
                    {{ formatDate(selectedMovie.release_date) }}
                  </div>

                  <div class="mb-2">
                    <strong>인기도:</strong> {{ selectedMovie.popularity }}
                  </div>
                </v-col>
              </v-row>

              <div class="mt-4">
                <strong>줄거리:</strong>
                <p class="mt-2">
                  {{ selectedMovie.overview || "줄거리 정보가 없습니다." }}
                </p>
              </div>
            </v-card-text>

            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn text @click="showDetailDialog = false">닫기</v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

// Movie 인터페이스 정의
interface Movie {
  id: number;
  title: string;
  overview: string;
  poster_path: string;
  release_date: string;
  vote_average: number;
  popularity: number;
  genres?: string[];
  runtime?: number;
  language?: string;
}

@Component({
  name: "MoviePage",
})
export default class MoviePage extends Vue {
  // Public reactive data properties
  public searchQuery: string = "";
  public movies: Movie[] = [];
  public favoriteMovies: Movie[] = [];
  public isLoading: boolean = false;
  public showFavoritesOnly: boolean = false;
  public showDetailDialog: boolean = false;
  public selectedMovie: Movie | null = null;

  // Private constants
  private readonly STORAGE_KEY: string = "favoriteMovies";
  private readonly DEFAULT_LIMIT: number = 20;
  private readonly LOADING_DELAY: number = 1000;

  // Computed properties (getters)
  public get filteredMovies(): Movie[] {
    if (this.showFavoritesOnly) {
      return this.favoriteMovies;
    }
    return this.movies;
  }

  public get hasMovies(): boolean {
    return this.movies.length > 0;
  }

  public get favoriteCount(): number {
    return this.favoriteMovies.length;
  }

  // Lifecycle hooks
  public mounted(): void {
    // 직접 YTS API 호출
    this.fetchMoviesFromYTS();
    this.loadFavoritesFromStorage();
  }

  // Public methods
  public async fetchMoviesFromYTS(): Promise<void> {
    this.isLoading = true;
    try {
      const response = await fetch(
        "https://yts.mx/api/v2/list_movies.json?sort_by=rating&limit=20"
      );
      const data = await response.json();

      console.log("Fetched movies from YTS:", data);

      if (data.status === "ok" && data.data && data.data.movies) {
        this.movies = this.transformYTSMovies(data.data.movies);
        console.log("변환된 영화 데이터:", this.movies);
      } else {
        console.warn("YTS API 응답에 문제가 있습니다:", data);
        this.loadMockMovies();
      }
    } catch (error) {
      console.error("YTS API 호출 실패:", error);
      console.log(
        "CORS 에러이거나 네트워크 문제일 수 있습니다. 모크 데이터를 사용합니다."
      );
      this.loadMockMovies();
    } finally {
      this.isLoading = false;
    }
  }

  // Legacy methods (kept for compatibility)
  private async loadPopularMovies(): Promise<void> {
    this.isLoading = true;
    try {
      // Mock API data - 실제로는 TMDB API를 사용할 수 있습니다
      await this.delay(1000); // 로딩 시뮬레이션

      this.movies = [
        {
          id: 1,
          title: "아바타: 물의 길",
          overview:
            "판도라 행성에서 제이크 설리와 네이티리가 이룬 가족이 겪게 되는 무자비한 위협과 살아남기 위해 떠나야 하는 긴 여정과 전투, 그리고 견뎌내야 할 상처에 대한 이야기를 그렸다.",
          poster_path: "/poster1.jpg",
          release_date: "2022-12-14",
          vote_average: 7.8,
          popularity: 2547.89,
        },
        {
          id: 2,
          title: "탑건: 매버릭",
          overview:
            "최고의 파일럿이자 전설적인 인물 매버릭은 자신이 졸업한 훈련학교 교관으로 발탁된다. 그곳에서 만난 신임 파일럻 중엔 과거 자신의 실수로 죽은 동료의 아들이 있었고, 매버릭은 그와 화해하며 자신의 과거 트라우마를 극복해 나가야만 한다.",
          poster_path: "/poster2.jpg",
          release_date: "2022-05-24",
          vote_average: 8.4,
          popularity: 2123.45,
        },
        {
          id: 3,
          title: "미니언즈: 라이즈 오브 그루",
          overview:
            "세계 최고의 슈퍼 악역을 꿈꾸는 12살 소년 '그루'와 그를 따르는 미니언들이 펼치는 좌충우돌 모험을 그린 애니메이션",
          poster_path: "/poster3.jpg",
          release_date: "2022-06-29",
          vote_average: 7.3,
          popularity: 1876.32,
        },
        {
          id: 4,
          title: "토르: 러브 앤 썬더",
          overview:
            "토르는 자아 성찰의 여정을 떠나지만, 모든 신들을 없애려는 도살자 고르의 등장으로 평화는 끝이 난다. 토르는 제인 포스터, 발키리, 그리고 코르그와 함께 고르를 막기 위한 모험을 시작한다.",
          poster_path: "/poster4.jpg",
          release_date: "2022-07-06",
          vote_average: 6.8,
          popularity: 1654.21,
        },
        {
          id: 5,
          title: "닥터 스트레인지: 대혼돈의 멀티버스",
          overview:
            "닥터 스트레인지가 멀티버스의 광기 속에서 새로운 적과 맞서 싸우는 이야기를 그린 영화",
          poster_path: "/poster5.jpg",
          release_date: "2022-05-04",
          vote_average: 7.1,
          popularity: 1432.11,
        },
        {
          id: 6,
          title: "블랙 팬서: 와칸다 포에버",
          overview:
            "티찰라 왕의 죽음 이후 와칸다를 보호하기 위해 뭉친 사람들의 이야기",
          poster_path: "/poster6.jpg",
          release_date: "2022-11-09",
          vote_average: 7.5,
          popularity: 1321.98,
        },
      ];
    } catch (error) {
      console.error("영화 로딩 실패:", error);
    } finally {
      this.isLoading = false;
    }
  }

  public async searchMovies(): Promise<void> {
    if (!this.searchQuery.trim()) {
      this.fetchMoviesFromYTS();
      return;
    }

    this.isLoading = true;
    try {
      // YTS API 검색 사용
      const response = await fetch(
        `https://yts.mx/api/v2/list_movies.json?query_term=${encodeURIComponent(
          this.searchQuery
        )}&limit=${this.DEFAULT_LIMIT}`
      );
      const data = await response.json();

      console.log("YTS 검색 결과:", data);

      if (data.status === "ok" && data.data && data.data.movies) {
        this.movies = this.transformYTSMovies(data.data.movies);
      } else {
        console.log("검색 결과가 없습니다.");
        this.movies = [];
      }
    } catch (error) {
      console.error("YTS API 검색 실패:", error);
      // 검색 실패 시 로컬 필터링으로 fallback
      this.filterMoviesLocally();
    } finally {
      this.isLoading = false;
    }
  }

  public toggleFavorite(movie: Movie): void {
    const index = this.favoriteMovies.findIndex((fav) => fav.id === movie.id);

    if (index > -1) {
      this.favoriteMovies.splice(index, 1);
    } else {
      this.favoriteMovies.push(movie);
    }

    this.saveFavoritesToStorage();
  }

  public isFavorite(movieId: number): boolean {
    return this.favoriteMovies.some((movie) => movie.id === movieId);
  }

  public showMovieDetail(movie: Movie): void {
    this.selectedMovie = movie;
    this.showDetailDialog = true;
  }

  public getMoviePoster(posterPath: string): string {
    // YTS API에서 제공하는 실제 포스터 이미지 사용
    if (posterPath && posterPath.startsWith("http")) {
      return posterPath;
    }

    // Fallback placeholder 이미지
    return `https://via.placeholder.com/300x450/333333/ffffff?text=${encodeURIComponent(
      "Movie Poster"
    )}`;
  }

  public formatDate(dateString: string): string {
    if (!dateString) return "N/A";

    const date = new Date(dateString);
    return date.toLocaleDateString("ko-KR", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  }

  public truncateText(text: string, maxLength: number): string {
    if (!text) return "";
    if (text.length <= maxLength) return text;
    return text.substring(0, maxLength) + "...";
  }

  // Private methods
  private loadFavoritesFromStorage(): void {
    try {
      const stored = localStorage.getItem(this.STORAGE_KEY);
      if (stored) {
        this.favoriteMovies = JSON.parse(stored);
      }
    } catch (error) {
      console.error("즐겨찾기 로딩 실패:", error);
    }
  }

  private saveFavoritesToStorage(): void {
    try {
      localStorage.setItem(
        this.STORAGE_KEY,
        JSON.stringify(this.favoriteMovies)
      );
    } catch (error) {
      console.error("즐겨찾기 저장 실패:", error);
    }
  }

  private delay(ms: number): Promise<void> {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }

  private transformYTSMovies(ytsMovies: any[]): Movie[] {
    return ytsMovies.map((movie: any) => ({
      id: movie.id,
      title: movie.title_english || movie.title,
      overview:
        movie.description_full || movie.summary || "영화 소개가 없습니다.",
      poster_path: movie.medium_cover_image,
      release_date: movie.year ? `${movie.year}-01-01` : "2024-01-01",
      vote_average: movie.rating || 0,
      popularity: movie.download_count || 0,
      genres: movie.genres || [],
      runtime: movie.runtime || 0,
      language: movie.language || "en",
    }));
  }

  private filterMoviesLocally(): void {
    const searchResults = this.movies.filter((movie) =>
      movie.title.toLowerCase().includes(this.searchQuery.toLowerCase())
    );
    this.movies = searchResults;
  }

  private loadMockMovies(): void {
    // API 실패 시 사용할 모크 데이터
    console.log("모크 데이터를 로딩합니다.");
    this.movies = [
      {
        id: 1,
        title: "아바타: 물의 길",
        overview:
          "판도라 행성에서 제이크 설리와 네이티리가 이룬 가족이 겪게 되는 무자비한 위협과 살아남기 위해 떠나야 하는 긴 여정과 전투, 그리고 견뎌내야 할 상처에 대한 이야기를 그렸다.",
        poster_path:
          "https://via.placeholder.com/300x450/1976D2/ffffff?text=Avatar",
        release_date: "2022-12-14",
        vote_average: 7.8,
        popularity: 2547,
      },
      {
        id: 2,
        title: "탑건: 매버릭",
        overview:
          "최고의 파일럿이자 전설적인 인물 매버릭은 자신이 졸업한 훈련학교 교관으로 발탁된다.",
        poster_path:
          "https://via.placeholder.com/300x450/e91e63/ffffff?text=Top+Gun",
        release_date: "2022-05-24",
        vote_average: 8.4,
        popularity: 2123,
      },
      {
        id: 3,
        title: "스파이더맨: 노 웨이 홈",
        overview:
          "정체가 탄로난 스파이더맨 피터 파커가 닥터 스트레인지의 도움을 받아 다시 정체를 숨기려 한다.",
        poster_path:
          "https://via.placeholder.com/300x450/FF5252/ffffff?text=Spider-Man",
        release_date: "2021-12-15",
        vote_average: 8.7,
        popularity: 3000,
      },
    ];
  }
}
</script>

<style scoped>
.movie-card {
  transition: transform 0.2s;
}

.movie-card:hover {
  transform: translateY(-4px);
}

.movie-overview {
  font-size: 0.875rem;
  line-height: 1.4;
  color: #666;
}
</style>
