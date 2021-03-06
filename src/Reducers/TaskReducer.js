import * as types from '../Actions/ActionTypes'

const initialState = {
  todos: ['Click to remove', 'Learn React Native', 'Write Code', 'Ship App'],
}
const TaskReducer = (state = initialState, action) => {
  const { todos } = state
  const { type, payload } = action
  switch (type) {
    case types.ADD_TASK: {
      return {
        ...state,
        todos: [payload, ...todos],
      }
    }
    case types.REMOVE_TASK: {
      return {
        ...state,
        todos: todos.filter((todo,i) => i != payload),
      }
    }
  }
  return state
}

export default TaskReducer
