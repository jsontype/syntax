// parameterが無い関数
function go () {
    // alert('clicked!')
    // location.href = 'http://google.com'
    console.log('clicked!')
}

// parameterが有る関数
function say (text) { // 'hi', 'hello' >>> argument
    alert(text)
}

// returnが有る関数
function returnYes () {
    return '何か'
}
let a = returnYes()

function returnHello (name) {
    return 'Hello ' + name    
}
let b = returnHello('Yang')

// console.log(returnYes())
// console.log(a)
console.log(b)
