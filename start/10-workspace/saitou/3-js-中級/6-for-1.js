const a = [1, 2, 3, 4];

// for
for (let i = 0; i < a.length; i++) {
  a[i] = a[i] + 2;
  console.log(a[i]);
}

for (let i in a) {
  a[i] = a[i] + 2;
  console.log(a[i]);
}

// forEach : returnがない場合。配列に同じ処理をする。
a.forEach((item) => console.log(item));
a.forEach((item) => {
  item = item + 2;
  console.log(item);
});
