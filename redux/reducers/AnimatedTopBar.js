let Default={offset:0,scrollEnd:0};

export  const animatedReducer = (state=Default,action)=>{
  switch (action.type){
    case 'SWIPE':{
      Default.offset= action.value;
      return Default;
    }
    case 'SCROLL_END':{
      Default.scrollEnd= action.type;
      return Default;
    }
    default : return Default;
  }
}
