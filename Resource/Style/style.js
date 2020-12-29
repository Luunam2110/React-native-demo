import {StyleSheet,Dimensions} from 'react-native';

import{scale} from 'react-native-size-matters'

const style = StyleSheet.create({
  iconNotification:{
    position:'absolute',
    right:20,
    zIndex:2,
    width:36,
    height:36,
    backgroundColor:'#fff',
    paddingLeft:5,
    paddingTop:5,
    borderRadius:30
  }
});

export default style;
