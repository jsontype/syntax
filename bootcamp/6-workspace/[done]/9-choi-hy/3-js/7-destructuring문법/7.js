// 비구조화 할당 이라고도 한다.
const arr = ["yang", "kang", "shin", "kim"];
const [user1, , , user4] = arr;
console.log(user1, user4);

const obj = {
  id: "yang123",
  pw: "1324yasdf",
  userName: "yang",
};
const { id, userName } = obj;
console.log(id, userName);
const { id: myId, userName: myName } = obj;
console.log(myId, myName);
