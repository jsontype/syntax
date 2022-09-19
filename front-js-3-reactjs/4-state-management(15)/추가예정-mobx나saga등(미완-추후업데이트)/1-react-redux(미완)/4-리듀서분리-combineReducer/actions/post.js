// action 생성
const addPost = (payload) => {
    return {
        type: 'ADD_POST',
        payload,
    }
}

module.exports = { addPost }