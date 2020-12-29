import React,{useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  Touchable,
  TouchableOpacity
} from "react-native";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";



const MyBottomBar = ({state,navigation}) => {

  const RenderIcon =(name)=>(name === 'News'? 'newspaper': (name === 'Tasks'?'tasks':(name==='User'?'user':'box-open')));
  const [CurrentName, setCurrentName]= useState('News');
  const {routes}= state;
  const RenderColor=(name)=>(name === CurrentName ? 'red':'black');
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
let text;
const Icon = ({color, name}) => (
  <View>
    {
      color ==='red'?
        <Text style={ [styles.TextIcon,{color:'red'}]}>
          {name === 'News'? text='Tin tức': (name === 'Tasks'?text='Tiện ích':(name==='Profile'?text='Cá nhân':text='Tác vụ'))}
        </Text>
        :
        <View></View>
    }
  </View>
);
const Tab =({ tab,icon ,onPress,color})=>{


  return (
    <TouchableOpacity onPress={onPress} style={styles.TabIcon}>
      <FontAwesome5
        size={18}
        color={color}
        name={icon}
      />
      <Icon color={color} name={tab.name}/>
    </TouchableOpacity>
  );}
const {width}= Dimensions.get('screen');
const styles = StyleSheet.create ({
  TabIcon: {
    alignItems: 'center',
  },
  TextIcon :{
    fontSize:12
  },
  Wrapper:{
    width,
    height:50,
    position:'absolute',
    bottom:20,
    alignItems:'center',

  },
  container:{
    padding:20,
    flex:1,
    borderRadius:25,
    backgroundColor:'#fff',
    alignItems:'center',
    width:300,
    flexDirection:'row',
    justifyContent:'space-between'

  }
});


export default MyBottomBar;
