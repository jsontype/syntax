<NavBar active={2} />
<h1>블로그</h1>
<ul>
  {#each blogs as blog}
    <li><a class="blogLink" href="blog/{blog.id}">{blog.title}</a></li>
  {/each}
</ul>

<script>
import NavBar from 'src/components/NavBar/index.svelte';  
import { blogs } from 'src/store/blogDB.js'; // 블로그 Mock DB
</script>

<style>
.blogLink {
  text-decoration: none;  
  color: black;
}
.blogLink:hover {
  text-decoration: underline;
  color: gray;
}
</style>