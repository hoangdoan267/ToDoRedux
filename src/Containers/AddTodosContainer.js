/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Modal,
  KeyboardAvoidingView,
  Keyboard,
  TouchableWithoutFeedback
} from 'react-native';
import Icon from 'react-native-vector-icons/EvilIcons';
import { Actions } from 'react-native-router-flux'
import Input from '../Components/Input'
import { connect } from 'react-redux'
import { taskActionCreators } from "../Actions/TaskActions"

class AddTodosContainer extends Component {

  state = {
    text: '',
  }

  onAddTodo = (text) => {
    const {dispatch} = this.props
    Keyboard.dismiss(0)
    dispatch(taskActionCreators.add(text))
    Actions.pop()
  }

  onChangeText = (text) => {
    this.setState({text})
  }

  onChangeState = (text) => {
    this.setState({text})
    console.log("Container: " + this.state.text)
  }

  submitText= () => {
    const {text} = this.state
    if (text == '') return
    this.onAddTodo(text)
  }

  render() {
    return (
      <TouchableWithoutFeedback onPress={()=> Keyboard.dismiss(0)}>
        <View style={styles.container}>
          <View style={{flex: 1, height: 64, position: "absolute", top: 0, left: 0, right: 0, flexDirection:'row', justifyContent:'space-between', alignItems:'center', paddingHorizontal: 30, paddingTop: 20, zIndex: 1}}>
            <TouchableOpacity onPress={() => Actions.pop()}>
              <Icon name="archive" size={30} color="#007AFF"/>
            </TouchableOpacity>
            <Text style={{fontSize: 16}}>
              ADD TO DO
            </Text>
            <View>
            </View>
          </View>
          <KeyboardAvoidingView behavior="padding" style={{flex: 1, justifyContent:"center", alignItems: "center", flexDirection: "column", padding: 20}}>
            <Icon name="calendar" size={150} color="whitesmoke"/>
            <Text style={{fontSize: 24, padding: 5}}>
              ADD YOUR TASK HERE
            </Text>
            <Text style={{color: "darkgrey", textAlign: "center"}}>
              Over 15 Million people rely on Any.do to keep their life organized with to-do list, reminders and notes. Share lists & Assign tasks to accomplish even more with the people around you.
            </Text>
            <Input
              placeholder={'Type a todo, then press button!'}
              onSubmitEditing={this.onAddTodo}
              onChangeState={this.onChangeState}
            />
              <Icon.Button name="plus" backgroundColor="#007AFF" onPress={() => this.submitText()}>
                  <Text style={{fontSize: 15, color: "#ffffff"}}>ADD MORE TASK</Text>
              </Icon.Button>
          </KeyboardAvoidingView>
        </View>
      </TouchableWithoutFeedback>

    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent:"center",
    alignItems: "center",
    position: "relative",
  },
});
const mapStateToProps = (state) => ({
  todos: state.taskState.todos,
})

export default connect(mapStateToProps)(AddTodosContainer)
