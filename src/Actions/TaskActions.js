import * as types from './ActionTypes'

export const taskActionCreators = {
  add: (item) => {
    return {type: types.ADD_TASK, payload: item}
  },
  remove: (index) => {
    return {type: types.REMOVE_TASK, payload: index}
  }
}
