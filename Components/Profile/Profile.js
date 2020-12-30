import React, {useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Dimensions,
  TextInput,
  Text,
  Image,
  StatusBar,
} from 'react-native';
import connect from "react-redux/lib/connect/connect";
import mapStateToProps from "react-redux/lib/connect/mapStateToProps";


const Profile = () => {
  return (
    <ScrollView
      onScroll={(e)=>{
        console.log(e.nativeEvent.contentOffset.y);}}
      onScrollEndDrag={(e)=>{
        console.log('ok');
        console.log(e.nativeEvent.contentOffset.y);
      }}
      style={{flexDirection:'column',marginTop:150}}>
      <View >
        <Text style={{fontSize: 30}}> Đây là trang hồ sơ</Text>
        <Text style={{fontSize: 30}}> Đây là trang hồ sơ</Text>
        <Text style={{fontSize: 30}}> Đây là trang hồ sơ</Text>
        <Text style={{fontSize: 30}}> Đây là trang hồ sơ</Text>
        <Text style={{fontSize: 30}}> Đây là trang hồ sơ</Text>
        <Text style={{fontSize: 30}}> Đây là trang hồ sơ</Text>
        <Text style={{fontSize: 30}}> Đây là trang hồ sơ</Text>
        <Text style={{fontSize: 30}}> Đây là trang hồ sơ</Text>
        <Text style={{fontSize: 30}}> Đây là trang hồ sơ</Text>
        <Text style={{fontSize: 30}}> Đây là trang hồ sơ</Text>
        <Text style={{fontSize: 30}}> Đây là trang hồ sơ</Text>
        <Text style={{fontSize: 30}}> Đây là trang hồ sơ</Text>
      </View>
    </ScrollView>


  );
};
const mapDispatchToProps=dispatch=>{
  return {
    WIPE:(offset)=>{
      dispatch({
        type:'WIPE',
        value: offset
      })
    },
    SCROLL_END:(offset)=>{
      dispatch({
        type:'SCROLL_END',
        value: offset
      })

    }
  }
}

export default connect(null,mapDispatchToProps)(Profile);
