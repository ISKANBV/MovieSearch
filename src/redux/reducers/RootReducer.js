import { combineReducers } from "redux";
import listReducer from './ListReducer';

const rootReducer = combineReducers({
    list: listReducer,
});

export default rootReducer;