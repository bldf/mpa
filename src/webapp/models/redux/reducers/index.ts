interface actionType{
    type:string ;
}
export default (state = {home:{count:0}}, action:actionType) => {
console.log("TCL: state", state)
    console.log("TCL: action.type----------------", action.type)
    switch (action.type) {
      case 'INCREMENT':
        state.home.count+=1 ;
        return {...state} ;
      case 'DECREMENT':
          state.home.count-=1 ;
          console.log("TCL: {...state}", {...state})
        return {...state} ;
      default:
        return state
    }
  }
  