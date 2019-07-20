interface actionType{
    type:string ;
}
export default (state = 0, action:actionType) => {
console.log("TCL: state", state)
    console.log("TCL: action.type", action.type)
    switch (action.type) {
      case 'INCREMENT':
        return state + 1
      case 'DECREMENT':
        return state - 1
      default:
        return state
    }
  }
  