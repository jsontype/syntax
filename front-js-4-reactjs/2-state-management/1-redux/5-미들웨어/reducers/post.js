const initialState = []
const postReducer = (prevState = initialState, action) => {
    switch (action.type) {
        case 'ADD_POST':
            return [...prevState, action.payload]
        default:
            return prevState
    }
}
module.exports = postReducer
