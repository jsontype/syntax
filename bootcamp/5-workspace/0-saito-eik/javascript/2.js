// 反復文
const a = [1, 2, 3, 4, 5, 6, 7, 8]

// for (初期値; 実行条件; 実行の後の処理) { 実行すること入れる }

console.log('<1>')

for (let i = 0; i < a.length; i = i + 1) { // 0 // 1 // 2 // 3 // 4 // 5 // 6 // 7 // 8
    console.log(i, '番目のインデクスの値：', a[i]) // 1 // 2 // 3 // 4 // 5 // 6 // 7 // 8
}

console.log('<2>')

for (let i = 0; i < a.length; i++) {
    console.log(i, '番目のインデクスの値：', a[i] * a[i])  
}
