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
import ExpCircle from "../../Resource/SVG/Circle";
import FloydHayes from "../FloydHayes";


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


export default Profile;
