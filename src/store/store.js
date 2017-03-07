import {createStore} from "redux"
import {Reducerx} from "./reducer/index"
import {applyMiddleware} from "redux"
import thunk from "redux-thunk"



export const store = createStore(Reducerx,applyMiddleware(thunk));

