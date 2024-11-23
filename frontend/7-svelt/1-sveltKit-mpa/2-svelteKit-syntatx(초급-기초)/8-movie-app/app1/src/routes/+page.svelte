<h1>Movie App</h1>

{#if movies.length <= 0}
  <p>Loading...</p>
{:else}
  {#each movies as movie}
    <div>
      <h2>{movie.title} ({movie.year})</h2>
      <img src={movie.large_cover_image} alt={movie.title} />
      <div>Genre: {movie.genres.join(" / ")}</div>
      <div>Rating: <span class={ratingClass(movie.rating)}>{movie.rating}</span> / 10</div>
    </div>
  {/each}
{/if}

<script>
import { onMount } from 'svelte';

let movies = []

function fetchMovies() {
  // fetch('https://yts.mx/api/v2/list_movies.json')
  fetch('https://yts.mx/api/v2/list_movies.json?sort_by=rating')
    .then(res => res.json())
    .then(data => {      
      movies = data.data.movies
      console.log('movies: ', movies)
    })
}

const ratingClass = (rating) => {
  if (rating >= 9) {
    return 'highRating'
  } else if (rating >= 7) {
    return 'mediumRating'
  } else {
    return 'lowRating'
  }
}

onMount(() => {
  fetchMovies(); // 컴포넌트 생성 시 데이터를 가져옴
});
</script>

<style>
.highRating {
  color: blue;
}
.mediumRating {
  color: orange;
}
.lowRating {
  color: red;
}
</style>
