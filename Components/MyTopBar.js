
import React,{useState,useEffect} from 'react';
import style from '../Resource/Style/style';
import { View, Image, Text, StyleSheet, TouchableOpacity,ScrollView, Animated } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import{scale} from 'react-native-size-matters'
import MaterialIcons from "react-native-vector-icons/MaterialIcons";




const MyTopBar =(props)=>{
  const Up = new Animated.Value(1);
  const Down =new  Animated.Value(0);
  const swipeUp =()=>{
    Animated.timing(Up, {
      toValue: 0,
      duration: 200,
      useNativeDriver:false
    }).start();
  }
  const swipeDown =()=>{
    Animated.timing(Down, {
      toValue: 1,
      duration: 200,
      useNativeDriver:false
    }).start();
  }
  const {state}= props;
  console.log(props);
  const [tabindex,setTabIndex] = useState(0);
  useEffect(()=>{setTabIndex(state.index);},[state.index]);
  const renderIcon=(name)=>(name==='Profile'?'assignment-ind':(name === 'Schedule'?'schedule':'import-contacts'));
  const renderText=(name)=>(name==='Profile'?'Hồ sơ':(name === 'Schedule'?'Lịch biểu':'Học tập'));
  const handlePress=(name,index)=>{
    console.log('ok');
    setTabIndex(index);
    props.navigation.navigate(name);
  };

  return (
    <View
      onScroll={(e)=>{
        console.log(e.nativeEvent.contentOffset.y);}}>
      <View style={{marginLeft: '50%'}}>
        <View style={styles.Container}></View>
        <View style={styles.Wrapper}></View>
      </View>
      <View style={{marginTop:-320,zIndex:2}}>
        <View style={{alignItems:'center'}}>
          <Text style={styles.Header}>SINH VIÊN</Text>
          <Image
            source={require('../Resource/Img/Avartar.png')}
            style={styles.Avatar}/>
          <Text style={styles.NameText}>Lưu Văn Nam</Text>
          <Text  style={styles.IDText}>18A10010357</Text>
          <View style={{width:'80%',marginTop:-20}}>
            <View style={{flex:1,flexDirection:'row',justifyContent:'space-between'}}>
              {state.routes.map((route,key) => <ItemTopBar
                onPress={()=>handlePress(route.name,key)}
                text={renderText(route.name)}
                key={key}
                icon={renderIcon(route.name)}
                isFocused={key===tabindex?true:false} />)
              }
            </View>
          </View>
        </View>
        <TouchableOpacity
          style ={style.iconNotification}
          onPress={() => props.navigation.navigate('Notifications')}>
          <Ionicons  name="notifications" size={24} color="#007cb2" />
        </TouchableOpacity>
      </View>

    </View>
  );
};

const ItemTopBar =({icon,text,onPress,isFocused})=>{
  let color, unColor;
  if (isFocused ===true) {color= '#007cb2';unColor='#fff'}else {color= '#fff';unColor='#007cb2'}
  let marrginTop;
  if (text=='Hồ sơ') marrginTop=40;else marrginTop=0;
  return (
    <TouchableOpacity
      style={[styles.TabBottom,{backgroundColor:color,marginTop:marrginTop}]}
      onPress={console.log('okgg')}>
      <MaterialIcons name={icon} color={unColor} size={19} Text/>
      <Text style ={{
        color:unColor,
        lineHeight:15
      }}>{text}</Text>
    </TouchableOpacity>
  );
}
const styles = StyleSheet.create({
  Wrapper:{
    zIndex: 1,
    backgroundColor:'#35aacf',
    width:680,
    height:680,
    borderRadius: 500,
    marginLeft:-340,
    marginTop:-660,
    borderWidth: 10,
    borderColor:'#3095c1'
  },
  Container: {
    zIndex:2,
    backgroundColor:'#84cbe1',
    width:680,
    height:680,
    borderRadius: 500,
    marginLeft:-340,
    marginTop:-380,
  },
  TabBottom:{
    width:70,
    height:70,
    borderRadius:50,
    alignItems:'center',
    paddingTop:18,
  }
  ,
  NameText:{
    color:'#fff',
    fontSize: 18,
    fontWeight: 'bold'
  },
  IDText:{
    color:'#fff',
    fontSize: 14,
  },
  Header:{
    color:'#fff',
    fontSize:20,
    fontWeight:'bold',
    marginBottom:17
  },
  Avatar:{
    width:scale(100),
    height:scale(100),
    borderRadius:500,
  },
})
export default MyTopBar;
