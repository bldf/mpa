require('@v/global') ;
import React from 'react';
import ReactDOM from 'react-dom';
import style from '@styles/page/report-index.less';
import loadable from '@loadable/component' ;
import { Provider } from 'react-redux'; // 管理所有状态的
import store from "@/models/redux" ;
import { connect } from 'react-redux' ;
// import mapDispatchToProps from "@/models/redux/reducers/index"
const BasicColumn = loadable(() => import('@/components/BasicColumn')) ;//懒加载


const PageDom = (props:any)=>{
  console.log("TCL: PageDom -> props.home.count ", props.home.count )
  return (
    <>
    <div>
        <h2>{ props.home.count }</h2>
        <button key="add" onClick={() => { store.dispatch({type: 'INCREMENT'})}}>+</button>
        <button key="minus" onClick={() => { store.dispatch({type: 'DECREMENT'})}}>-</button>
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
  return {
    home: state.home
  }
}

// const mapDispatchToProps = ({
//   onTodoClick: toggleTodo
// })

const VisibleTodoList = connect(
  mapStateToProps,
  // mapDispatchToProps
)(PageDom)

ReactDOM.render((<Provider store={store}><VisibleTodoList/></Provider>), document.querySelector('#app'))







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