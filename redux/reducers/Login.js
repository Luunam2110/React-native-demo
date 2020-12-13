
let IsSignedIn  = false;

export const appReducer=(state = IsSignedIn, action)=> {
  switch (action.type) {
    case 'LOG_IN': {
      state= true;
      return  state;
    }
    case 'LOG_OUT':{
      state= false;
      return state;
    }
    default:
      return state
  }
}
