const a = [1, 2, 3, 4, 5]

// Shallow Copy
// const b = a
// a[0] = 13245
// console.log(b)

// Deep Copy
const b = JSON.parse(JSON.stringify(a))
a[0] = 13245
console.log(b)
