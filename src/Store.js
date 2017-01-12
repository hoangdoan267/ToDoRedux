import { createStore, applyMiddleware } from "redux"
import reducers from "./Reducers/"

console.log(typeof(reducers))
const store = createStore(
  reducers
)

export default store
