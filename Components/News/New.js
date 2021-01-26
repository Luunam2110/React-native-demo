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
  StatusBar, TouchableOpacity,
} from "react-native";
import style from "../../Resource/Style/style";
import Ionicons from "react-native-vector-icons/Ionicons";


const News = (props) => {
  return (
    <ScrollView ContanerStyle={{flex: 1}}>
      <SafeAreaView style={{flex: 1,minHeight:300}}>
        <TouchableOpacity
          style ={style.iconNotification}
          onPress={() => props.navigation.navigate('Notifications')}>
          <Ionicons  name="notifications" size={24} color="#007cb2" />
        </TouchableOpacity>
        <Text> Đây là màn hình News</Text>
      </SafeAreaView>
    </ScrollView>
  );
};


export default News;
