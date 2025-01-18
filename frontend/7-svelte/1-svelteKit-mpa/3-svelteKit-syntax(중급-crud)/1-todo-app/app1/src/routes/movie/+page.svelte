<NavBar />
<TitleLabel title="Movie App" />
{#if movies.length <= 0}
  <p>Loading...</p>
{:else}
  {#each movies as movie}
    <div>
      <h2>{movie.title} ({movie.year})</h2>
      <img src={movie.large_cover_image} alt={movie.title} />
      <div>Genre: {movie.genres.join(" / ")}</div>
      <div>Rating: <span class={ratingClass(movie.rating)}>{movie.rating}</span> / 10</div>
      <div>Runtime: <span>{getRuntime(movie.runtime)}</span></div>
      <div>Link: <a href="{movie.url}">{movie.url}</a></div>
      <div>Synopsis: <span>{showSynopsis(movie.synopsis)}</span>
        {#if movie.synopsis && movie.synopsis.length > 300}
        <button on:click={() => toggleSynopsis(movie)}>
          {isExpanded ? 'close' : 'more'}
        </button>
        {/if}
      </div>
      <div>
        Download: 
        {#if movie.torrents <= 0}
          <p>Not Available</p>
        {:else}
          {#each movie.torrents as torrent, index}
            <a href={torrent.url}>#Link{index + 1}</a>{' '}
          {/each}
        {/if}
      </div>
    </div>
  {/each}
{/if}

<script>
import NavBar from 'src/components/models/NavBar/index.svelte';
import TitleLabel from 'src/components/atoms/TitleLabel/index.svelte';
import { onMount } from 'svelte'

let movies = [];

function fetchMovies() {
  fetch('https://yts.mx/api/v2/list_movies.json?sort_by=rating')
    .then(res => res.json())
    .then(data => {
      movies = data.data.movies; // 할당 연산자를 사용하여 movies 배열 업데이트
      console.log(movies)
    })
    .catch(error => {
      console.error('Error fetching movies:', error);
    });
}

// 시간 데이터 mm 포맷을 h:m 포맷으로 바꾸는 함수
function getRuntime(item) {
  if (!item) return 'No Data';
  const hours = Math.floor(item / 60);
  const minutes = item % 60;
  if (hours === 0) return `${minutes}m`;  // 0시간일 때 minutes만 return
  return `${hours}h ${minutes}m`;  
}

//synopsis길이가 300자 이상 일 때 300 words 이후를 "..." 로 표시하고 더 보기 버튼 표시
let isExpanded = false;

function showSynopsis(item) {
  if (!item) return 'No Data';
  if (item.length > 300) {
    return isExpanded ? item : item.slice(0, 300) + '...';
  }
  return item;
}

function toggleSynopsis() {
  isExpanded = !isExpanded;
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
  fetchMovies();
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
