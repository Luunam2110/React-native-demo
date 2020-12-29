

import React from 'react';
import style from '../Style/style';
import { View, Image, Text, StyleSheet, TouchableOpacity, Animated } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import{scale} from 'react-native-size-matters'

const ExpCircle =()=>{
  return (
    <View>
      <View style={{marginLeft: '50%'}}>
        <View style={styles.Container}></View>
        <View style={styles.Wrapper}></View>
      </View>
      <View style={{marginTop:-320,zIndex:2}}>
        <View style={{alignItems:'center'}}>
          <Text style={styles.Header}>SINH VIÊN</Text>
          <Image
            source={require('../../Resource/Img/Avartar.png')}
            style={styles.Avatar}/>
        </View>

        <TouchableOpacity
          style ={style.iconNotification}
          onPress={() => props.navigation.navigate('Notifications')}>
          <Ionicons  name="notifications" size={24} color="#007cb2" />
        </TouchableOpacity>
      </View>
    </View>



  );
};
const styles = StyleSheet.create({
  Wrapper:{
    zIndex: 1,
    backgroundColor:'#35aacf',
    width:680,
    height:680,
    borderRadius: 500,
    marginLeft:-340,
    marginTop:-660,
    borderWidth: 10,
    borderColor:'#3095c1'
  },
  Container: {
    zIndex:2,
    backgroundColor:'#84cbe1',
    width:680,
    height:680,
    borderRadius: 500,
    marginLeft:-340,
    marginTop:-380,
  },
  Header:{
    color:'#fff',
    fontSize:20,
    fontWeight:'bold',
  },
  Avatar:{
    width:scale(100),
    height:scale(100),
    borderRadius:500,
  }
})
export default ExpCircle;
