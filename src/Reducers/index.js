import { combineReducers } from "redux"

import TaskReducer from "./TaskReducer"

let reducers = combineReducers({
  taskState: TaskReducer
})

export default reducers
