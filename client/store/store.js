import { applyMiddleware, compose, createStore } from 'redux';
import reducer from '../reducers/reducer';
import logger from 'redux-logger';
import thunk from 'redux-thunk';


export default function configureStore(initialState) {
  const store = createStore(
    reducer,
    initialState,
    compose(applyMiddleware(thunk, logger()))
  )

  return store;
}
