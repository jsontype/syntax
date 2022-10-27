// 1. 함수의 파라미터, 리턴값 타입 정의
function sum(x: number, y: number): number {
    return x + y
}
sum(1, 2) // 함수명에 마우스를 가져다대면, 함수의 파라미터, 리턴값 타입을 바로 알 수 있다.
// sum(1, null)// -> 에러! : 함수가 파라미터나 리턴값이 null이 된다면 오류가 뜨게 된다.

// 1. sumArray 함수 선언 : 숫자 배열의 총합을 구하는 함수를 선언한다.
function sumArray(numbers: number[]): number {
    return numbers.reduce((acc, current) => acc + current, 0)
}
const result1 = sumArray([1, 2, 3, 4, 5])
    
// 1. returnNothing 함수 선언 : 리턴값이 없는 함수라면 반환 타입을 void로 설정하면 된다.
function returnNothing(): void {
    console.log('1')
}
returnNothing()
