import { createStore, applyMiddleware, compose } from 'redux';
import thunkMiddleware from 'redux-thunk';
import appReducer from './reducers';

const composeEnhancers =  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const initStore = () => createStore(
    appReducer,
    composeEnhancers(applyMiddleware(thunkMiddleware))
);

export default initStore;
