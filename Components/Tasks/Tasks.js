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
import ExpCircle from "../../Resource/SVG/Circle";
import style from "../../Resource/Style/style";
import Ionicons from "react-native-vector-icons/Ionicons";


const Tasks = () => {
  return (
    <View ContanerStyle={{flex: 1}}>
      <TouchableOpacity
        style ={style.iconNotification}
        onPress={() => props.navigation.navigate('Notifications')}>
        <Ionicons  name="notifications" size={24} color="#007cb2" />
      </TouchableOpacity>
      <Text>đây là màn hình tasts</Text>
    </View>
  );
};

export default Tasks;
