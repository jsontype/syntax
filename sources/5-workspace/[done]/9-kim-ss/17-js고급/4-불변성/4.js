// 리액트는 새 메모리주소로 교체하면서 setState를 해야한다.
// 즉, 불변성의 법칙을 지키면서 setState 하는 방식을 취한다. Create, Read, Update, Delete
const arr = [1, 2, 3, 4, 5];

// 배열 추가
// arr.push(6) X
const addArr = [...arr, 6];
console.log("addArr: ", addArr);

// 배열 수정
const modArr = arr.map((item, index) => {
  return index === 2 ? 33 : item;
});
console.log("modArr: ", modArr);

// 배열 삭제
const delArr = arr.filter((item, index) => {
  return index !== arr.length - 1;
});
console.log("delArr: ", delArr);
