import { combineReducers } from "redux";
import counter from './counter';
import todos from './todos';
import posts from './posts';

const rootReducer = combineReducers({
    counter,
    todos,
    posts
})

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;