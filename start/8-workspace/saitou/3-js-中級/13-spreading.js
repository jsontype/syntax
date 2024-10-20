// 不変性の法則
// Reactは不変性の法則って守らなきゃ。。。。。
// 守りながら配列とかを変換する！

// SIDU
const arr = [1, 2, 3, 4, 5];
// arr1.push(6) // X

// Insert
const addArr = [...arr, 6];
console.log(addArr);

// Delete
const delArr = arr.filter((item, index, arr) => {
  return index !== arr.length - 1;
});
console.log(delArr);

// Upadte
const modArr = arr.map((item, index, arr) => {
  return index === arr.length - 1 ? 999 : item;
});
console.log(modArr);
