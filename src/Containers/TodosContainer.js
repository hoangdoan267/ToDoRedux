import React, { Component } from 'react'
import { AppRegistry, View } from 'react-native'
import { connect } from 'react-redux'

import Title from '../Components/Title'
import List from '../Components/List'
import Input from '../Components/Input'
import { taskActionCreators } from "../Actions/TaskActions"

class TodosContainer extends Component {

  onRemoveTodo = (index) => {
    const {dispatch} = this.props

    dispatch(taskActionCreators.remove(index))
  }

  render() {
    const {todos} = this.props

    return (
      <View>
        <List
          list={todos}
          onPressItem={this.onRemoveTodo}
        />
      </View>
    )
  }
}

const mapStateToProps = (state) => ({
  todos: state.taskState.todos,
})

export default connect(mapStateToProps)(TodosContainer)
