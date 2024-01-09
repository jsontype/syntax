// 전달받은 액션을 출력하고 다음으로 넘기는 작업을 구현하는 함수
const myLogger = store => next => action => {
    // 콘솔에 액션을 출력한다.
    console.log(action)
    // 다음 미들웨어(또는 리듀서)에게 액션을 전달한다.
    const result = next(action)
    // 업데이트 이후의 상태를 조회한다.
    console.log('\t', store.getState()) // '\t'는 Tab 문자를 의미한다.
    // dispatch(action)의 결과물을 리턴한다. (기본값 : undefined)
    return result
}

export default myLogger
