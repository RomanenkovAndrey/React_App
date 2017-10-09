import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import App from './components/App.js'
import configureStore from './store/configureStore.js'

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