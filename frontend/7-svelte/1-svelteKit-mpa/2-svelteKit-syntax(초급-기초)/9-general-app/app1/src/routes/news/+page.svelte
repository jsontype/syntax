<NavBar />
<TitleLabel title="News App" />

{#if news.length <= 0}
  <p>Loading...</p>
{:else}
  <ul>
    {#each news as item}
      <li><a class="newsItem" href={item.url} target="_blank">{item.title} / {item.user}</a></li>
    {/each}
  </ul>
{/if}

<script>
import NavBar from 'src/components/models/NavBar/index.svelte';
import TitleLabel from 'src/components/atoms/TitleLabel/index.svelte';

import { onMount } from 'svelte'

let news = [];

const fetchNews = async () => {
  const res = await fetch('https://api.hnpwa.com/v0/news.json');
  news = await res.json();
  console.log(news);
}

onMount(() => {
  fetchNews();
});
</script>

<style>
.newsItem {
  display: block;
  text-decoration: none;
  color: black;
}
.newsItem:hover {
  text-decoration: underline;
  color: gray;
}
</style>
