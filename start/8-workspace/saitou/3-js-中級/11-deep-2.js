// Shallow Copy
const a = { id: "a123", pw: "dfsgkljsdfgl" };
const b = a;
a.id = "a999";
console.log(b.id); // a999

// Deep Copy
const aa = { id: "a123", pw: "dfsgkljsdfgl" };
const bb = Object.assign({}, aa); // const bb = JSON.parse(JSON.stringify(aa));
aa.id = "a999";
console.log(bb.id); // a123
