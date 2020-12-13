import React,{useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  Touchable,
  TouchableOpacity
} from "react-native";
import Entypo from "react-native-vector-icons/Entypo";



const MyTabBar = ({state,navigation}) => {

  const RenderIcon =(name)=>(name === 'Profile'? 'news': name === 'Setting'?'clipboard':'grid');
  const [CurrentName, setCurrentName]= useState('Profile');
  const {routes}= state;
  const RenderColor=(name)=>(name === CurrentName ? 'red':'black');
  console.log(state.index);
  const handlePress=(activeTab,index)=>{
    if (state.index!==index) {
      setCurrentName(activeTab);
      navigation.navigate(activeTab);
    }
  }
  return (
    <View style={styles.Wrapper}>
      <View style={styles.container}>
        {routes.map((route,index) =>
          <Tab tab={route}
               onPress={()=>handlePress(route.name,index)}
               key ={route.key}
               icon={RenderIcon(route.name)}
               color={RenderColor(route.name)} />)}

      </View>
    </View>
  );
};

const Tab =({ icon ,onPress,color})=>{
  return (
    <TouchableOpacity onPress={onPress}>
      <Entypo
        size={25}
        color={color}
        name={icon}
      />
    </TouchableOpacity>
  );}
const {width}= Dimensions.get('screen');
const styles = StyleSheet.create ({
  Wrapper:{
    width,
    height:40,
    position:'absolute',
    bottom:20,
    alignItems:'center',

  },
  container:{
    padding:10,
    borderRadius:15,
    backgroundColor:'#fff',
    width:250,
    flexDirection:'row',
    justifyContent:'space-between'

  }
});


export default MyTabBar;
