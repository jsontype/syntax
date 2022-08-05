// reducer 생성 : reducer는 action과 짝으로 사용한다. reducer는 현재 상태와 액션 객체를 파라미터로 받아와서 새로운 State를 반환해주는 함수이다.
const reducer = (prevState, action) => {
    switch (action.type) {
        case 'LOG_IN':
            return {
                ...prevState,
                user: action.payload,
            }
        case 'LOG_OUT':
            return {
                ...prevState,
                user: null,
            }    
        case 'ADD_POST':
            return {
                ...prevState,
                post: [...prevState.post, action.payload],
            }
        default:
            return prevState
    }
}

module.exports = reducer
