<template>
  <div class="about">
    <Movies :title="title" @click="onClick" />

    <div class="input-section">
      <InputField :name="name" @update-name="updateName" />
      <div class="name-display">
        <strong>현재 이름:</strong> {{ name }}
      </div>
    </div>

    <!-- Movies List -->
    <div>
      <h2>Movies List</h2>
      <div v-if="movies.length === 0">Loading movies...</div>
      <ul v-else>
        <li v-for="movie in movies" :key="movie.id">          
          <h3>
            {{ movie.title }}
            ({{ movie.year }})
            <a :href="movie.url">Link</a>
          </h3>
          <p>Rating: {{ movie.rating }} / 10</p>
          <img :src="movie.medium_cover_image" :alt="movie.title" />
        </li>
      </ul>
    </div>

  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Movies from "@/components/Movies/index.vue"; // @ is an alias to /src
import InputField from "@/components/Movies/InputField/index.vue";

@Component({
  components: {
    Movies,
    InputField,
  },
})
export default class MoviesView extends Vue {
  private title: string = "Movies List";

  private onClick(): void {
    if (this.title === "Movies List") {
      this.title = "Updated Movies List";
    } else {
      this.title = "Movies List";
    }
  }

  private name: string = "Initial Name";

  private updateName(newName: string): void {
    this.name = newName;
  }

  private movies: [] = []

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
    console.log("MoviesView: beforeCreate");
  }
  created() {
    console.log("MoviesView: created");
  }
  beforeMount() {
    console.log("MoviesView: beforeMount");
  }
  mounted() {
    fetch('https://yts.mx/api/v2/list_movies.json?sort_by=rating')
      .then(response => response.json())
      .then(data => {
        console.log("Fetched movies:", data);
        this.movies = data.data.movies
      })
  }
  beforeUpdate() {
    console.log("MoviesView: beforeUpdate");
  }
  updated() {
    console.log("MoviesView: updated");
  }
  beforeDestroy() {
    console.log("MoviesView: beforeDestroy");
  }
  destroyed() {
    console.log("MoviesView: destroyed");
  }
  // <!-- 생명주기 END -->
}
</script>

<style scoped>
</style>
