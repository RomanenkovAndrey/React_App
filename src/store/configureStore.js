import { createStore } from 'redux'
import rootReducer from '../reducers/rootReducer.js'

export default function configureStore() {
  const store = createStore(rootReducer, window.REDUX_DEVTOOLS_EXTENSION && window.REDUX_DEVTOOLS_EXTENSION());

  /*if (module.hot) {
    module.hot.accept('../reducers', () => {
      const nextRootReducer = require('../reducers')
      store.replaceReducer(nextRootReducer)
    })
  }*/ 

  return store;
}