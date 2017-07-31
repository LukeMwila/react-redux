import { createStore, combineReducers, applyMiddleware } from "redux";
//import userReducer from "./reducers/userReducer";
import logger from "redux-logger";
import promise from "redux-promise-middleware";
import thunk from "redux-thunk";
import toDoReducer from "./reducers/toDoReducer";

export default createStore(combineReducers({toDoReducer}), {}, applyMiddleware(
    logger,
    thunk,
    promise()
));
