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

const ListImage = [
  {
    id: 1,
    UriImage: require('../Resource/Img/anh1.jpg'),
  },
  {
    id: 2,
    UriImage: require('../Resource/Img/anh2.jpg'),
  },
  {
    id: 3,
    UriImage: require('../Resource/Img/anh3.jpg'),
  },
  {
    id: 4,
    UriImage: require('../Resource/Img/anh4.jpg'),
  },
  {
    id: 8,
    UriImage: require('../Resource/Img/anh3.jpg'),
  },
  {
    id: 7,
    UriImage: require('../Resource/Img/anh4.jpg'),
  },
  {
    id: 6,
    UriImage: require('../Resource/Img/anh1.jpg'),
  },
  {
    id: 5,
    UriImage: require('../Resource/Img/anh2.jpg'),
  },
];

const ListImage1 = [
  {
    id: 3,
    UriImage: require('../Resource/Img/anh3.jpg'),
  },
  {
    id: 4,
    UriImage: require('../Resource/Img/anh4.jpg'),
  },
  {
    id: 1,
    UriImage: require('../Resource/Img/anh1.jpg'),
  },
  {
    id: 2,
    UriImage: require('../Resource/Img/anh2.jpg'),
  },
  {
    id: 8,
    UriImage: require('../Resource/Img/anh3.jpg'),
  },
  {
    id: 7,
    UriImage: require('../Resource/Img/anh4.jpg'),
  },
  {
    id: 6,
    UriImage: require('../Resource/Img/anh1.jpg'),
  },
  {
    id: 5,
    UriImage: require('../Resource/Img/anh2.jpg'),
  },
];

const FloydHayes = () => {
  return (
      <SafeAreaView style={{flex: 1}}>
        <StatusBar barStyle="dark-content" />
        <ScrollView>
          <View
            style={{
              flexDirection: 'row',
              width: Dimensions.get('window').width,
              margin: 20,
              marginTop: 0,
            }}>
            <View style={{width: Dimensions.get('window').width / 2 - 20}}>
              {ListImage.map((item) => (
                <ImageItem key={item.id} Url={item} />
              ))}
            </View>
            <View style={{width: Dimensions.get('window').width / 2 - 20}}>
              {ListImage1.map((item) => (
                <ImageItem key={item.id} Url={item} />
              ))}
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  CircleImage: {
    width: scale(80),
    height: scale(80),
    borderRadius: scale(80) / 2,
    resizeMode: 'cover',
  },
  Container: {
    margin: 20,
  },
  Row1: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 60,
    marginBottom: 0,
  },
  Name: {
    flex: 1,
    fontSize: 25,
    fontWeight: 'bold',
  },
  SmallText: {
    color: '#a0a5be',
    fontWeight: '900',
    flex: 1,
    flexDirection: 'row',
  },
  Follow: {
    width: 83,
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 1,
    paddingBottom: 1,
    borderRadius: 14,
    color: '#fff',
    lineHeight: 20,
    fontSize: 13,
    backgroundColor: '#3b73ff',
  },
  IconSend: {
    paddingLeft: 15,
    paddingTop: 2.5,
    borderRadius: 15,
    width: 46,
    height: 23,
    backgroundColor: '#56d8ff',
  },
  Value: {
    alignItems: 'center',
    fontSize: 25,
    fontWeight: '100',
  },
});

const mapStateToProps = state => {
  return {
    name: state.ProfileReducer
  }
}
export default connect(mapStateToProps,null) (FloydHayes);
