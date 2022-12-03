// 비구조화 할당 : destructuring

const arr = ["yang", "kim", "shin", "kang"];
const [user1, , , user4] = arr;
console.log("user1: ", user1);
console.log("user4: ", user4);

const obj = {
  id: "yang123",
  pw: "123dsfajh",
  username: "yang",
};
const { id, username } = obj;
console.log("id: ", id);
console.log("username: ", username);
const { id: myId, username: myName } = obj;
console.log("myId: ", myId);
console.log("myName: ", myName);
