const initialState = {
    isLogIn: false,
    data: null,
}
const userReducer = (prevState = initialState, action) => {
    switch (action.type) {
        case 'LOG_IN':
            return {
                ...prevState,
                isLogIn: action.payload.isLogIn,
                data: action.payload.data,
            }
        case 'LOG_OUT':
            return {
                ...prevState,
                isLogIn: false,
                data: null,
            }
        default:
            return prevState
    }
}
module.exports = userReducer
