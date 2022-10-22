// @ts-check

/**
 * 둘을 더한다.
 * @param {number} a 첫번째 숫자
 * @param {number} b 두번째 숫자
 * @returns 
 */
function add(a, b) {
    // b = b + '1' // b가 20이면 '201'이 되어버린다.
    return a+b
}

// let a = add(10, '20') // '1020'으로 계산이 되어버린다.