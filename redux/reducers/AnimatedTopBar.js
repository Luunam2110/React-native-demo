export  const animatedReducer = (state={offset:0,scrollEnd:0},action)=>{
  switch (action.type){
    case 'SWIPE':{
      return action.value;
    }
    case 'SCROLL_END':{
      return action.value;
    }
    default : return 1;
  }
}
