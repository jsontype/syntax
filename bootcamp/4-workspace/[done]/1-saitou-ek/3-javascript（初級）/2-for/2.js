// 反復文
const a = [1, 2, 3, 4, 5, 6, 7, 8]
a[0]

// for (初期値; 実行条件; 実行の後の処理) { 実行すること入れる }

console.log('<1>')
for (let i = 0; i < a.length; i = i + 1) { // 0 // 1 // 2 // 3 // 4 // 5 // 6 // 7 // 8
    console.log(i, 'のインデクスの値：', a[i]) // 1 // 2 // 3 // 4 // 5 // 6 // 7 // 8
}

console.log('<2>')
for (let i = 0; i < a.length; i++) {
    console.log(i, 'のインデクスの値：', a[i] * a[i])  
}

console.log('<3>')


const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]
// arr 総合
let sum = 0

for (let i = 0; i < arr.length; i++) {
    sum = sum + arr[i]
}

console.log('sum: ', sum)

// arr すべての値を乗算コード
sum = 0

for (let i = 0; i < arr.length; i++) {
    sum = sum * arr[i]
}

console.log('sum: ', sum)



// 九九
for (let i = 2; i < 10; i++) {
    console.log(i, '>>>')
    for (let j = 1; j < 10; j++) {
        console.log(i, 'x', j, '=', i * j)
    }
}
