import { Animated } from "react-native";

let Default={offset:0};

export  const animatedReducer = (state=Default,action)=>{
  switch (action.type){
    case 'SWIPE':{
      return { ...state,offset :action.value};
    }
    case 'SCROLL_END':{
      let ans=state.offset._value;
      let res=0;
      if (ans>=120) res=240
      return { ...state, scrollEnd: action.value, Location :res,offset: new Animated.Value (res)};
    }
    default : return state;
  }
}
