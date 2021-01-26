
import React,{useState,useEffect,useRef} from 'react';
import style from '../Resource/Style/style';
import { View, Image, Text, StyleSheet, TouchableOpacity,ScrollView, Animated } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import{scale} from 'react-native-size-matters'
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import connect from "react-redux/lib/connect/connect";


const MyTopBar =(props)=>{

  //const valueAnimated= props.valueAnimated;
  const scrollY= new Animated.Value(0);
  const [previousValue, setPreviousValue]= useState(0);

  useEffect(()=>{
    if(props.valueAnimated.offset<(240*1.2)) scrollY.setValue(props.valueAnimated.offset)
  },[props.valueAnimated.offset])
  const {state}= props;
  const [tabindex,setTabIndex] = useState(0);
  useEffect(()=>{setTabIndex(state.index);},[state.index]);
  const renderIcon=(name)=>(name==='Profile'?'assignment-ind':(name === 'Schedule'?'schedule':'import-contacts'));
  const renderText=(name)=>(name==='Profile'?'Hồ sơ':(name === 'Schedule'?'Lịch biểu':'Học tập'));
  const handlePress=(name,index)=>{
    console.log('ok');
    setTabIndex(index);
    props.navigation.navigate(name);
  };
  /**/


  const updateMarginTopViewBetween = scrollY.interpolate({
    inputRange: [0,240],
    outputRange: [0, 240],
    extrapolate: "clamp"
  });
  const updateMarginTopWrapper = scrollY.interpolate({
    inputRange: [0,240],
    outputRange: [-660, -900],
    extrapolate: "clamp"
  });

  const updateWidthContainerBottom = scrollY.interpolate({
    inputRange: [0,240],
    outputRange: ['80%', '33%'],
    extrapolate: "clamp"
  });
  const updateMarginTopContainer = scrollY.interpolate({
    inputRange: [0,240],
    outputRange: [-360, -820],
    extrapolate: "clamp"
  });
  const updateMarginTopNameText = scrollY.interpolate({
    inputRange: [0,240],
    outputRange: [0, -25],
    extrapolate: "clamp"
  });
  const updateMarginTopContainerBottom = scrollY.interpolate({
    inputRange: [0,240],
    outputRange: [-20, 0],
    extrapolate: "clamp"
  });
  const updateWidthTabBottom = scrollY.interpolate({
    inputRange: [0,240],
    outputRange: [70, 35],
    extrapolate: "clamp"
  });
  const updatePaddingTopTabBottom = scrollY.interpolate({
    inputRange: [0,240],
    outputRange: [18, 8],
    extrapolate: "clamp"
  });
  const updateFontSizeIDText = scrollY.interpolate({
    inputRange: [0,240],
    outputRange: [14, 0],
    extrapolate: "clamp"
  });
  const updateFontSizeHeader = scrollY.interpolate({
    inputRange: [0,240],
    outputRange: [20, 0],
    extrapolate: "clamp"
  });
  const updateMarginBottomHeader = scrollY.interpolate({
    inputRange: [0,240],
    outputRange: [17, 0],
    extrapolate: "clamp"
  });
  const updateWidthAvatar = scrollY.interpolate({
    inputRange: [0,240],
    outputRange: [110, 35],
    extrapolate: "clamp"
  });
  const updateMarginLeftAvatar = scrollY.interpolate({
    inputRange: [0,240],
    outputRange: ['0%', '-80%'],
    extrapolate: "clamp"
  });
  const updateWidthWrapper = scrollY.interpolate({
    inputRange: [0,240],
    outputRange: [680, 900],
    extrapolate: "clamp"
  });
  const updateMarginLeftWrapper = scrollY.interpolate({
    inputRange: [0,240],
    outputRange: [-340, -450],
    extrapolate: "clamp"
  });

  const ItemTopBar =({icon,text,onPress,isFocused})=>{
    let marginTop;
    let color, unColor;
    if (isFocused ===true) {color= '#007cb2';unColor='#fff'}else {color= '#fff';unColor='#007cb2'}
    if (text=='Hồ sơ') marginTop=40;else marginTop=0;
    const updateMarginTopTabBottom = scrollY.interpolate({
      inputRange: [0,240],
      outputRange: [marginTop, 0],
      extrapolate: "clamp"
    });
    const AnimatedTouchable = Animated.createAnimatedComponent(TouchableOpacity);
    return (
      <Animated.View>
        <AnimatedTouchable
          style={[
            styles.TabBottom,
            {
              backgroundColor:color,
              marginTop: updateMarginTopTabBottom,//margintop->0,updateMarginTopTabBottom
              width:updateWidthTabBottom,//70->35,updateWidthTabBottom
              height:updateWidthTabBottom,//70->35,updateWidthTabBottom
              paddingTop:updatePaddingTopTabBottom,//18->8,updatePaddingTopTabBottom
            }]}
          onPress={onPress}>
          <MaterialIcons name={icon} color={unColor} size={19} Text/>
          <Animated.Text style ={{
            color:unColor,
            lineHeight:updateFontSizeIDText,//14->0,updateFontSizeIDText
            fontSize: updateFontSizeIDText
          }}>{text}</Animated.Text>
        </AnimatedTouchable>
      </Animated.View>

    );
  }


  return (
    <View style={{height:0}}>
      <View >
        <View style={{marginLeft: '50%'}}>
          <Animated.View style={[styles.Container,{
            width:updateWidthWrapper,//680->900,updateWidthWrapper
            height:updateWidthWrapper,//680->900,updateWidthWrapper
            marginLeft:updateMarginLeftWrapper,//-340->-450,updateMarginLeftWrapper
            marginTop:updateMarginTopContainer//-360->-820,updateMarginTopContainer
          }]}/>
          <Animated.View style={[styles.Wrapper,{
            width:updateWidthWrapper,//680->900 ,updateWidthWrapper
            height:updateWidthWrapper,//680->900,updateWidthWrapper
            marginLeft:updateMarginLeftWrapper,//-340->-450,updateMarginLeftWrapper
            marginTop:updateMarginTopWrapper,//-660->-900,updateMarginTopWrapper
          }]}></Animated.View>
        </View>
        <Animated.View style={[styles.viewBetween,{
          marginTop:340//0->240,updateMarginTopViewBetween
        }]}></Animated.View>
        <Animated.View style={{marginTop:-320,zIndex:2,}}>
          <View style={{alignItems:'center', }}>
            <Animated.Text style={[styles.Header,{
              fontSize:updateFontSizeHeader,//20->0,updateFontSizeHeader
              marginBottom:updateMarginBottomHeader//17->0,updateMarginBottomHeader
            }]}>SINH VIÊN</Animated.Text>

            <Animated.Image
              source={require('../Resource/Img/Avartar.png')}
              style={[styles.Avatar,{
                width:updateWidthAvatar,//110->35,updateWidthAvatar
                height:updateWidthAvatar,//110->35,updateWidthAvatar
                marginLeft:updateMarginLeftAvatar//0%->-80%,updateMarginLeftAvatar
              }]}/>
            <Animated.Text style={[styles.NameText,{
              marginTop:updateMarginTopNameText//0->-25,updateMarginTopNameText
            }]}>Lưu Văn Nam</Animated.Text>
            <Animated.Text  style={[styles.IDText,{
              fontSize: updateFontSizeIDText,//14->0,updateFontSizeIDText
            }]}>18A10010357</Animated.Text>
            <Animated.View style={[styles.containerBottom,{
              width:updateWidthContainerBottom,//80%->33%,updateWidthContainerBottom
              marginTop:updateMarginTopContainerBottom,//-20->0,updateMarginTopContainerBottom
            }]}>
              <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                {state.routes.map((route,key) => <ItemTopBar
                  onPress={()=>handlePress(route.name,key)}
                  text={renderText(route.name)}
                  key={key}
                  icon={renderIcon(route.name)}
                  isFocused={key===tabindex?true:false} />)
                }
              </View>
            </Animated.View>
          </View>
          <TouchableOpacity
            style ={style.iconNotification}
            onPress={() => props.navigation.navigate('Notifications')}>
            <Ionicons  name="notifications" size={24} color="#007cb2" />
          </TouchableOpacity>
        </Animated.View>

      </View>
    </View>

  );

};

const styles = StyleSheet.create({
  Wrapper:{
    zIndex: 1,
    backgroundColor:'#35aacf',
    borderRadius: 700,
    //width:680,//680->900 ,updateWidthWrapper
    //height:680,//680->900,updateWidthWrapper
    //marginLeft:-340,//-340->-450,updateMarginLeftWrapper
    //marginTop:-660,//-660->-900,updateMarginTopWrapper
    borderWidth: 10,
    borderColor:'#3095c1'
  },
  viewBetween: {
    width:'100%',
    height:0,
    //marginTop:0//0->240,updateMarginTopViewBetween
  },
  containerBottom:{
    //width:'80%',//80%->33%,updateWidthContainerBottom
    //marginTop:-20,//-20->0,updateMarginTopContainerBottom
  },
  Container: {
    zIndex:2,
    backgroundColor:'#84cbe1',
    borderRadius: 700,
    //width:680,//680->900,updateWidthWrapper
    //height:680,//680->900,updateWidthWrapper
    //marginLeft:-340,//-340->-450,updateMarginLeftWrapper
    //marginTop:-360//-360->-820,updateMarginTopContainer
  },
  TabBottom:{
    borderRadius:50,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.32,
    shadowRadius: 5.46,

    elevation: 9,
    alignItems:'center',
    //width:70,//70->35,updateWidthTabBottom
    //height:70,//70->35,updateWidthTabBottom
    //paddingTop:18,//18->8,updatePaddingTopTabBottom
  }
  ,
  NameText:{
    color:'#fff',
    fontSize: 18,
    fontWeight: 'bold',
    //marginTop:0//0->25,updateMarginTopNameText
  },
  IDText:{
    color:'#fff',
    //fontSize: 14,//14->0,updateFontSizeIDText
  },
  Header:{
    color:'#fff',
    fontWeight:'bold',
    //fontSize:20,//20->0,updateFontSizeHeader
    //marginBottom:17//17->0,updateMarginBottomHeader
  },
  Avatar:{
    borderRadius:500,
    //width:110,//110->35,updateWidthAvatar
    //height:110,//110->35,updateWidthAvatar
    //marginLeft:'0%'//0%->-80%,updateMarginLeftAvatar
  },
});


const mapStateToProps= state =>{
  return ({
    valueAnimated: state.animatedReducer,
  })
};
const mapDispatchToProps=(dispatch)=>{
  return {
    WIPE:(offset)=>{
      dispatch({
        type:'SWIPE',
        value: offset
      })
    },
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(MyTopBar);
