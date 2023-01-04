const sleep = (n) => new Promise((resolve) => setTimeout(resolve, n));

const posts = [
  {
    id: 1,
    title: "안녕하세요 여기 맛있어요",
    body: "신오쿠보 맛집 소개 블라블라",
  },
  { id: 2, title: "좋은 글 공유", body: "어쩌고" },
  { id: 3, title: "미용실 어디좋음?", body: "파리미용실은 절대 안됨" },
];

// Posts 목록 호출
export const getPosts = async () => {
  await sleep(500); // 0.5초 쉬고
  return posts;
};

// ID로 Post를 조회하는 비동기 함수
export const getPostById = async (id) => {
  await sleep(500); // 0.5초 쉬고
  return posts.find((post) => post.id === id);
};
