/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';
import { Router, Scene, Modal,Actions } from 'react-native-router-flux'
import TodosContainer from './TodosContainer'
import AddTodosContainer from './AddTodosContainer'

export default class App extends Component {

  render() {
    return (
      <Router>
        <Scene key= "root">
          <Scene key = "TodosList"
                component={TodosContainer}
                initial={true}
                sceneStyle={{paddingTop: 64}}
                navigationBarStyle = {styles.navigationStyle}
                rightTitle="Add"
                onRight = {()=> Actions.Add()}
          />
        <Scene key = "Add"
              component={AddTodosContainer}
              direction={'vertical'}
              hideNavBar
         />
        </Scene>
      </Router>
    );
  }
}

const styles = StyleSheet.create({
  navigationStyle: {
    backgroundColor: "#ffffff",
    borderBottomWidth: 0,
  },
});
