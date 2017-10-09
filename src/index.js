import React from 'react'
import { render } from 'react-dom'
import App from './components/App.js'
import { createStore } from 'redux'
import { Provider } from 'react-redux'

import './css/style.css';

const store = configureStore();

//отрисовка всего приложения
render(
  <Provider store={store}>
    <div className ='app'>
      <App />
    </div>
  </Provider>,
  document.getElementById('root')
);