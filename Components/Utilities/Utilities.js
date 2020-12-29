import React from 'react';
import {
  View,
  Button,
  StyleSheet,
  Text,
  TouchableOpacity, StatusBar,
} from "react-native";
import Ionicons from 'react-native-vector-icons/Ionicons';
import { connect } from "react-redux";
import style from "../../Resource/Style/style";

const Utilities = (props) => {
  return (
    <View style={{flex:1}}>
      <TouchableOpacity
        style ={style.iconNotification}
        onPress={() => props.navigation.navigate('Notifications')}>
        <Ionicons  name="notifications" size={24} color="#007cb2" />
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
