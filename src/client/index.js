import 'babel-polyfill'
import React from 'react'
import { render } from 'react-dom'
import { syncHistoryWithStore } from 'react-router-redux'
import { browserHistory } from 'react-router'
import Root from '../containers/Root'
import configureStore from '../redux/configureStore'

const rootElement = document.getElementById('content')

const initialState = window.__data
const store = configureStore(initialState)
const history = syncHistoryWithStore(browserHistory, store)

render(
  <Root store={store} history={history} />,
  rootElement
)
