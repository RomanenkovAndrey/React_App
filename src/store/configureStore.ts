import { createStore } from 'redux';
import rootReducer from '../reducers/rootReducer';
import { IData } from '../interfaces';

export default function configureStore() {
  const store = createStore<IData>(rootReducer);

  /*if (module.hot) {
    module.hot.accept('../reducers', () => {
      const nextRootReducer = require('../reducers')
      store.replaceReducer(nextRootReducer)
    })
  }*/ 

  return store;
}