/**
 * createStore 生成store
 * applyMiddleware  应用中间件，异步改变状态
 * compose
 * redux-thunk 改造store.dispatch，使后者可以接受函数作为参数
 */
import {createStore, applyMiddleware} from 'redux'
import createSagaMiddleware from 'redux-saga'
import reducer from '../reducers'
import {fetchData} from '../sagas'
import data from './store';

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  reducer,
//   _INITIAL_STATE_,
  data,
  applyMiddleware(
    sagaMiddleware
  )
);

// createStore(()=>{},{}); 
sagaMiddleware.run(fetchData);

export default store;