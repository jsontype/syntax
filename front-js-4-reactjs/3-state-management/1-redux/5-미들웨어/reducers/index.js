const { combineReducers } = require('redux')
const userReducer = require('./user')
const postReducer = require('./post')

module.exports = combineReducers ({
    user: userReducer,
    post: postReducer,
})
