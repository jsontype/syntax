// 백틱
function init () {
    let name1 = 'Yang' // Char
    let name2 = "Yang" // String
    let name3 = `Yang` // Backtick
    let result = introduce('양', '개발자', '20')
    // console.log(result)

    // 백틱에서 삼항연산자 Ternery Operator 문법
    // `${조건 ? `${true일때의 변수}` : false일때의 변수}`
    let a = 5
    console.log(
        `${a < 10 ? `0${a}` : a}`
    )
}

/**
 * 자기소개를 한다.
 * @param {String} name 이름
 * @param {String} job 직업
 * @param {String} age 나이
 */
function introduce (name, job, age) {
    // return '저는 ' + name + '입니다. ' + '직업은 ' + job + '입니다. ' + age + '살 입니다.'
    return `저는 ${name}입니다. 직업은 ${job}입니다. 올해로 ${age}살이 됩니다.`
}

init()
