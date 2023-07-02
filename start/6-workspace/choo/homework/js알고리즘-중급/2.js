const arr10 = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
]
// arr10.forEach((item) => item % 2 === 1 && console.log(item))
const result10 = arr10.filter((item) => item % 2)
result10.forEach((item) => console.log(item))
