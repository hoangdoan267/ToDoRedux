import { combineReducers } from "redux"

import taskReducer from "./task-reducer"

let reducers = combineReducers({
  taskState: taskReducer
})

export default reducers
