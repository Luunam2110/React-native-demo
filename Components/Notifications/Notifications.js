import React from 'react';
import {
  StyleSheet,
  Text, TouchableOpacity,
  View,
} from "react-native";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import { scale } from "react-native-size-matters";


const Notifications= (props) => {
  return (
    <View>

      <TouchableOpacity
        style={[{backgroundColor:'red',position:'absolute',zIndex:100}]}
        onPress={props.navigation.navigate('Home')}>
        <MaterialIcons name='schedule' color='#000' size={19} />
      </TouchableOpacity>

    </View>
  );
}

export default Notifications;
