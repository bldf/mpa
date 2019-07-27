require('@v/global') ;
import/* webpackChunkName:"react-common-react-js"*/ React from 'react';
import ReactDOM from 'react-dom';
import style from '@styles/page/report-index.less';
import loadable from '@loadable/component' ;
import { Provider } from 'react-redux'; // 管理所有状态的
// import store from "@/models/redux" ;
import { connect } from 'react-redux' ;
// import {fetchData} from "@/models/redux/sagas/index"
import { create } from 'dva-core';
const delay = (timeout:number) => new Promise(resolve => setTimeout(resolve, timeout));

const app = create();
app.model({
  namespace: 'person',
  state: 10,
  reducers: {
    add(state:any, { payload }:any) {
      return state + payload || 1;
    },
  },
  effects: {
    *addDelay({ payload }:any, { put, call }:any) {
      yield call(delay, 100);
      yield put({ type: 'add', payload });
    },
  },
});

app.start();
console.log("TCL: app", app)
// console.log("TCL: -------------------------------store", store)

// import mapDispatchToProps from "@/models/redux/reducers/index"
const BasicColumn = loadable(() => import(/* webpackChunkName:"async-banner-BasicColumn"*/'@/components/BasicColumn')) ;//懒加载


const PageDom = (props:any)=>{
  console.log("TCL: PageDom -> props", props)
  // console.log("TCL: PageDom -> props.home.count ", props.abc.count )
  // const home = props.abc; 
  return (
    <>
    <div>
        <h2>{ props.count }</h2>
        {/* <button key="add" onClick={() => { props.dispatch({type: 'INCREMENT'})}}>+</button> */}
        {/* <button key="minus" onClick={props.onIncreaseClick}>-</button> */}
        {/* <button key="as" onClick={()=>{props.fetchData()}}>987879987987987-</button> */}
      </div>
  
    <ul className={style.layout}>
      <li>
        <BasicColumn/>
      </li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
    </ul>
    </>
    ); 
}

// const getVisibleTodos = (todos, filter) => {
//   switch (filter) {
//     case 'SHOW_ALL':
//       return todos
//     case 'SHOW_COMPLETED':
//       return todos.filter(t => t.completed)
//     case 'SHOW_ACTIVE':
//       return todos.filter(t => !t.completed)
//     default:
//       throw new Error('Unknown filter: ' + filter)
//   }
// }

const mapStateToProps = (state:any) => {

  return {...state.home}
}

// const mapDispatchToProps = ({
//   onTodoClick: () => dispatch(increaseAction)
// })
function mapDispatchToProps(dispatch:any) {
  return {
    onIncreaseClick: () => dispatch({type: 'fetchData'})
  }
}
// const VisibleTodoList = connect(
//   mapStateToProps,
//   mapDispatchToProps
// )(PageDom)



const VisibleTodoList = connect((model:any, ownProps) => {
  console.log("TCL: VisibleTodoList -> state", model)
  return {
      count: model.person
  }
})(PageDom);


ReactDOM.render((<Provider store={app._store}><VisibleTodoList/></Provider>), document.querySelector('#app'))



// require('@v/global') ;
// import React from 'react';
// import ReactDOM from 'react-dom';
// import style from '@styles/page/report-index.less';
// import loadable from '@loadable/component' ;
// import { Provider } from 'react-redux'; // 管理所有状态的
// import store from "@/models/redux" ;
// import { connect } from 'react-redux' ;
// import {fetchData} from "@/models/redux/sagas/index"
// // import mapDispatchToProps from "@/models/redux/reducers/index"
// const BasicColumn = loadable(() => import('@/components/BasicColumn')) ;//懒加载


// const PageDom = (props:any)=>{
//   console.log("TCL: PageDom -> props", props)
//   // console.log("TCL: PageDom -> props.home.count ", props.abc.count )
//   // const home = props.abc; 
//   return (
//     <>
//     <div>
//         <h2>{ props.count }</h2>
//         <button key="add" onClick={() => { props.dispatch({type: 'INCREMENT'})}}>+</button>
//         <button key="minus" onClick={props.onIncreaseClick}>-</button>
//         <button key="as" onClick={()=>{props.fetchData()}}>987879987987987-</button>
//       </div>
  
//     <ul className={style.layout}>
//       <li>
//         <BasicColumn/>
//       </li>
//       <li></li>
//       <li></li>
//       <li></li>
//       <li></li>
//       <li></li>
//     </ul>
//     </>
//     ); 
// }

// // const getVisibleTodos = (todos, filter) => {
// //   switch (filter) {
// //     case 'SHOW_ALL':
// //       return todos
// //     case 'SHOW_COMPLETED':
// //       return todos.filter(t => t.completed)
// //     case 'SHOW_ACTIVE':
// //       return todos.filter(t => !t.completed)
// //     default:
// //       throw new Error('Unknown filter: ' + filter)
// //   }
// // }

// const mapStateToProps = (state:any) => {

//   return {...state.home}
// }

// // const mapDispatchToProps = ({
// //   onTodoClick: () => dispatch(increaseAction)
// // })
// function mapDispatchToProps(dispatch:any) {
//   return {
//     onIncreaseClick: () => dispatch({type: 'fetchData'})
//   }
// }
// // const VisibleTodoList = connect(
// //   mapStateToProps,
// //   mapDispatchToProps
// // )(PageDom)



// const VisibleTodoList = connect((state:any, ownProps) => {
//   console.log("TCL: VisibleTodoList -> ownProps", ownProps)
//   return {
//       count: state.home.count
//   }
// },{fetchData})(PageDom);


// ReactDOM.render((<Provider store={store}><VisibleTodoList/></Provider>), document.querySelector('#app'))






// import React, { Component } from 'react'
// import PropTypes from 'prop-types'
// import ReactDOM from 'react-dom'
// import { createStore } from 'redux'
// import { Provider, connect } from 'react-redux'

// // React component
// class Counter extends Component {
//   static propTypes: { value: PropTypes.Validator<number>; onIncreaseClick: PropTypes.Validator<(...args: any[]) => any>; };
//   render() {
//     const { value, onIncreaseClick }:any = this.props
//     return (
//       <div>
//         <span>{value}</span>
//         <button onClick={onIncreaseClick}>Increase</button>
//       </div>
//     )
//   }
// }

// Counter.propTypes = {
//   value: PropTypes.number.isRequired,
//   onIncreaseClick: PropTypes.func.isRequired
// }

// // Action
// const increaseAction = { type: 'increase' }

// // Reducer
// function counter(state = { count: 0 }, action:any) {
//   const count = state.count
//   switch (action.type) {
//     case 'increase':
//       return { count: count + 1 }
//     default:
//       return state
//   }
// }

// // Store
// const store = createStore(counter)

// // Map Redux state to component props
// function mapStateToProps(state:any) {
//   return {
//     value: state.count
//   }
// }

// // Map Redux actions to component props
// function mapDispatchToProps(dispatch:any) {
//   return {
//     onIncreaseClick: () => dispatch(increaseAction)
//   }
// }

// // Connected Component
// const App = connect(
//   mapStateToProps,
//   mapDispatchToProps
// )(Counter)

// ReactDOM.render(
//   <Provider store={store}>
//     <App />
//   </Provider>,
//   document.getElementById('app')
// )















// require('@v/global') ;
// import React from 'react';
// import ReactDOM from 'react-dom';
// import style from '@styles/page/report-index.less';
// import loadable from '@loadable/component' ;
// // import dva, { connect } from 'dva';
// // import { create } from 'dva-core';

// import dva from '@/utils/Dva';
// // import BasicColumn from '@/components/BasicColumn' ;
// const BasicColumn = loadable(() => import('@/components/BasicColumn')) ;//懒加载

// //定义dva的参数
// const options = {
//   initialState: {},
//   //注册的models
//   models: [{id:1}],
//   //注册的事件
//   onAction: [],
//   //异常处理，所有的异常都会通过这里
//   onError(e:any) {
//       console.log("Error", e);
//   }
// };


// const app = dva(options);
// const PageDom = (props:any)=>{
//   return (<>
//     <div>
//         <h2>{ props }</h2>
//         <button key="add" onClick={() => { props.dispatch({type: 'count/add'})}}>+</button>
//         <button key="minus" onClick={() => { props.dispatch({type: 'count/minus'})}}>-</button>
//       </div>
  
//     <ul className={style.layout}>
//       <li>
//         <BasicColumn/>
//       </li>
//       <li></li>
//       <li></li>
//       <li></li>
//       <li></li>
//       <li></li>
//     </ul>
//     </>); 
// }

// const App = app.start(<PageDom/>);
// ReactDOM.render((<App/>), document.querySelector('#app'))





























// // const app = dva();
// // const app = create() ;
// // import BasicColumn from '@/components/BasicColumn' ;
// const BasicColumn = loadable(() => import('@/components/BasicColumn')) ;//懒加载


// // 2. Model
// app.model({
//   namespace: 'count',
//   state: 0,
//   reducers: {
//     add  (count) { return count + 1 },
//     minus(count) { return count - 1 },
//   },
// });


// const App = connect(({ count }:any) => ({
//   count
// }))(PageDom);
// console.log("TCL: App", App)


// const MyContext = React.createContext({});



// // app.router(()=><App/>) ;
// // app.start('#app') ;

// ReactDOM.render((<App/>), document.querySelector('#app'))