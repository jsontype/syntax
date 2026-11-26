<a class="blogLink" href="/menu/blog">돌아가기</a>
<h1>블로그 상세</h1>
<p># {id}</p>
<p>{blogTitle}</p>
<p>{blogContent}</p>

<script>
import { page } from '$app/stores'; // SvelteKit의 page 스토어
import { blogs } from 'src/store/blogDB.js'; // 블로그 Mock DB

const id = $page.params.id; // 현재 경로의 [id] 파라미터
const blogTitle = blogs[id - 1]?.title || '제목 없음'; // 안전하게 blogs 데이터 접근
const blogContent = blogs[id - 1]?.content || '내용 없음'; // 안전하게 blogs 데이터 접근
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
