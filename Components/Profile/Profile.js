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

import {scale} from 'react-native-size-matters';
import ImageItem from './ImageItem';
import Entypo from 'react-native-vector-icons/Entypo';
import Feather from 'react-native-vector-icons/Feather';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Fontisto from 'react-native-vector-icons/Fontisto';
import Ionicons from 'react-native-vector-icons/Ionicons';
import ShareStyle from '../ShareStyle';
import { connect } from "react-redux";


const Profile = (props) => {
  return (
    <ScrollView ContanerStyle={{flex: 1}}>
      <SafeAreaView style={{flex: 1}}>
        <Text> Đây là màn hình profile</Text>
      </SafeAreaView>
    </ScrollView>
  );
};


const mapStateToProps = state => {
  return {
    name: state.ProfileReducer
  }
}
export default connect(mapStateToProps,null) (FloydHayes);
