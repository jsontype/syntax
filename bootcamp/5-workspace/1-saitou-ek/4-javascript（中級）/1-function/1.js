function a () {
    console.log('a')
}

// 矢印関数
const b = () => { console.log('a') }
b()

// 矢印関数 parameter
const c = text => { console.log(text) }
c('hello')

// 矢印関数 return
// const d = () => { return 'return!!!' }
const d = () => 'return!!!'
console.log(d())

// 矢印関数 return + parameter
// const e = (text) => { return text + 'yang!' }
const e = text => text + 'yang!'
console.log(e('hello '))
