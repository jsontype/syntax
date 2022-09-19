// action 생성
const logIn = (payload) => {
    return { // action
        type: 'LOG_IN',
        payload,
    }
}

// action 생성
const logOut = () => {
    return {
        type: 'LOG_OUT'
    }
}

module.exports = { logIn, logOut }