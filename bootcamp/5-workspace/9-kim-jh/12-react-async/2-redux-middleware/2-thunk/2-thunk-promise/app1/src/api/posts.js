// n 밀리세컨드동안 기다리는 프로미스를 만들어주는 함수
const sleep = (n) => new Promise((resolve) => setTimeout(resolve, n));

const posts = [
  {
    id: 1,
    title: "안녕하세요",
    body: "양입니다.",
  },
  {
    id: 2,
    title: "redux-thunk를 사용해봅시다",
    body: "redux-thunk를 사용해서 비동기 작업을 처리해봅시다!",
  },
  {
    id: 3,
    title: "redux-saga도 사용해봅시다",
    body: "나중엔 redux-saga를 사용해서 비동기 작업을 처리하는 방법도 배워볼 거예요.",
  },
];

// get all api
export const getPostsAll = async () => {
  await Promise.all([sleep(500), sleep(700)]);
  return posts;
};

// get one by id api
export const getPostOne = async (id) => {
  await Promise.race([sleep(500), sleep(700)]);
  return posts.find((post) => post.id === id);
};
