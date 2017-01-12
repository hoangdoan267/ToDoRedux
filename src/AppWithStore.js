/* @flow */

import React, { Component } from 'react';
import { Provider } from 'react-redux'
import App from './Containers/App'
import store from './Store'

const AppWithStore = () => {
  return (
    <Provider store={store}>
      <App/>
    </Provider>
  )
}

export default AppWithStore
