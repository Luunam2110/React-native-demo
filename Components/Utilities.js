import React from 'react';
import {
  View,
  Button,
  StyleSheet,
  Text,
  TouchableOpacity
} from "react-native";
import  Notifications from "./Notifications/Notifications"
import Ionicons from 'react-native-vector-icons/Ionicons';
import { connect } from "react-redux";

const Utilities = (props) => {
  return (
<View style={{flex:1}}>
  <TouchableOpacity
    style ={{position:'absolute', right:20,top:20,zIndex:2}}
    onPress={() => props.navigation.navigate('Notifications')}>
    <Ionicons  name="notifications" size={30} color="#900" />
  </TouchableOpacity>
  <TouchableOpacity
    style={{
      flex:1,
      flexDirection:'column',
      justifyContent:'center',
      alignItems: 'center'
  }}
  onPress={()=>{props.logout()}}>
    <Text style={styles.Logout}>LOG OUT</Text>
  </TouchableOpacity>

</View>


  );
};

const styles= StyleSheet.create ({
  Logout:{
    color:'#0d2ae9',
    fontSize:30
  }
})
const mapDispatchToProps = dispatch => {
  return {
    logout: () =>
      dispatch({
        type: 'LOG_OUT'
      })
  }
}

export default connect(null,mapDispatchToProps) (Utilities);
