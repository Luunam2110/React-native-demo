import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  View,
  Dimensions,
  TextInput,
  Text,
  Image,
  StatusBar,Animated
} from 'react-native';
import React,{useState,useEffect} from 'react';
import connect from "react-redux/lib/connect/connect";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import Entypo from "react-native-vector-icons/Entypo";
import { TouchableItem } from "react-native-tab-view";


const Profile = (props) => {

  return (
    <Animated.ScrollView
      onScroll={(e)=>{
        props.WIPE(e.nativeEvent.contentOffset.y);
        //console.log('offset:'+e.nativeEvent.contentOffset.y);
      }}
      /*onScrollEndDrag={(e)=> {
        props.SCROLL_END(e.nativeEvent.contentOffset.y);
        console.log('crollend:' + e.nativeEvent.contentOffset.y);
      }
       /* onMomentumScrollEnd={(e)=>{
        props.SCROLL_END(e.nativeEvent.contentOffset.y);console.log('ketthuc:'+e.nativeEvent.contentOffset.y);

      }}}*/

      style={{flex:1,flexDirection:'column',marginTop:30}}>
      <View style={{
        padding:15,
        margin:10,
        borderRadius:20,
        backgroundColor: '#fff'
      }}>
        <View style={{flex:1,flexDirection:'row'}}>
          <FontAwesome5 style={{flex:1}} name={'user'} color={'red'} size={20} />
          <Text style={styles.Title}>Thông tin cá nhân</Text>
          <TouchableOpacity
            onPress={() => props.navigation.navigate('Detail')}
            style={styles.Expand}>
            <Entypo name={'plus'} color={'red'} size={20} Text/>
          </TouchableOpacity>
        </View>
        <View style={{width:'96%',margin:'2%',height:1,backgroundColor:'#000'}}/>
        <View >
          <View style={{flex:1,flexDirection:'row',padding: 5}}>
            <Text style={styles.Subject}>Mã sinh viên:</Text>
            <Text style={styles.Value}>18A10010000</Text>
          </View>
          <View style={{flex:1,flexDirection:'row',padding: 5}}>
            <Text style={styles.Subject}>Mã sinh viên:</Text>
            <Text style={styles.Value}>18A10010000</Text>
          </View>
          <View style={{flex:1,flexDirection:'row',padding: 5}}>
            <Text style={styles.Subject}>Mã sinh viên:</Text>
            <Text style={styles.Value}>18A10010000</Text>
          </View>
          <View style={{flex:1,flexDirection:'row',padding: 5}}>
            <Text style={styles.Subject}>Mã sinh viên:</Text>
            <Text style={styles.Value}>18A10010000</Text>
          </View>
          <View style={{flex:1,flexDirection:'row',padding: 5}}>
            <Text style={styles.Subject}>Mã sinh viên:</Text>
            <Text style={styles.Value}>18A10010000</Text>
          </View>
          <View style={{flex:1,flexDirection:'row',padding: 5}}>
            <Text style={styles.Subject}>Mã sinh viên:</Text>
            <Text style={styles.Value}>18A10010000</Text>
          </View>
          <View style={{flex:1,flexDirection:'row',padding: 5}}>
            <Text style={styles.Subject}>Mã sinh viên:</Text>
            <Text style={styles.Value}>18A10010000</Text>
          </View>
        </View>
      </View>
      <View style={{
        padding:15,
        margin:10,
        borderRadius:20,
        backgroundColor: '#fff'
      }}>
        <View style={{flex:1,flexDirection:'row'}}>
          <FontAwesome5 style={{flex:1}} name={'user'} color={'red'} size={20} />
          <Text style={styles.Title}>Thông tin cá nhân</Text>
          <TouchableOpacity
            onPress={() => props.navigation.navigate('Detail')}
            style={styles.Expand}>
            <Entypo name={'plus'} color={'red'} size={20} Text/>
          </TouchableOpacity>
        </View>
        <View style={{width:'96%',margin:'2%',height:1,backgroundColor:'#000'}}/>
        <View >
          <View style={{flex:1,flexDirection:'row',padding: 5}}>
            <Text style={styles.Subject}>Mã sinh viên:</Text>
            <Text style={styles.Value}>18A10010000</Text>
          </View>
          <View style={{flex:1,flexDirection:'row',padding: 5}}>
            <Text style={styles.Subject}>Mã sinh viên:</Text>
            <Text style={styles.Value}>18A10010000</Text>
          </View>
          <View style={{flex:1,flexDirection:'row',padding: 5}}>
            <Text style={styles.Subject}>Mã sinh viên:</Text>
            <Text style={styles.Value}>18A10010000</Text>
          </View>
          <View style={{flex:1,flexDirection:'row',padding: 5}}>
            <Text style={styles.Subject}>Mã sinh viên:</Text>
            <Text style={styles.Value}>18A10010000</Text>
          </View>
          <View style={{flex:1,flexDirection:'row',padding: 5}}>
            <Text style={styles.Subject}>Mã sinh viên:</Text>
            <Text style={styles.Value}>18A10010000</Text>
          </View>
          <View style={{flex:1,flexDirection:'row',padding: 5}}>
            <Text style={styles.Subject}>Mã sinh viên:</Text>
            <Text style={styles.Value}>18A10010000</Text>
          </View>
          <View style={{flex:1,flexDirection:'row',padding: 5}}>
            <Text style={styles.Subject}>Mã sinh viên:</Text>
            <Text style={styles.Value}>18A10010000</Text>
          </View>
        </View>
      </View>
      <View style={{
        padding:15,
        margin:10,
        borderRadius:20,
        backgroundColor: '#fff'
      }}>
        <View style={{flex:1,flexDirection:'row'}}>
          <FontAwesome5 style={{flex:1}} name={'user'} color={'red'} size={20} />
          <Text style={styles.Title}>Thông tin cá nhân</Text>
          <TouchableOpacity
            onPress={() => props.navigation.navigate('Detail')}
            style={styles.Expand}>
            <Entypo name={'plus'} color={'red'} size={20} Text/>
          </TouchableOpacity>
        </View>
        <View style={{width:'96%',margin:'2%',height:1,backgroundColor:'#000'}}/>
        <View >
          <View style={{flex:1,flexDirection:'row',padding: 5}}>
            <Text style={styles.Subject}>Mã sinh viên:</Text>
            <Text style={styles.Value}>18A10010000</Text>
          </View>
          <View style={{flex:1,flexDirection:'row',padding: 5}}>
            <Text style={styles.Subject}>Mã sinh viên:</Text>
            <Text style={styles.Value}>18A10010000</Text>
          </View>
          <View style={{flex:1,flexDirection:'row',padding: 5}}>
            <Text style={styles.Subject}>Mã sinh viên:</Text>
            <Text style={styles.Value}>18A10010000</Text>
          </View>
          <View style={{flex:1,flexDirection:'row',padding: 5}}>
            <Text style={styles.Subject}>Mã sinh viên:</Text>
            <Text style={styles.Value}>18A10010000</Text>
          </View>
          <View style={{flex:1,flexDirection:'row',padding: 5}}>
            <Text style={styles.Subject}>Mã sinh viên:</Text>
            <Text style={styles.Value}>18A10010000</Text>
          </View>
          <View style={{flex:1,flexDirection:'row',padding: 5}}>
            <Text style={styles.Subject}>Mã sinh viên:</Text>
            <Text style={styles.Value}>18A10010000</Text>
          </View>
          <View style={{flex:1,flexDirection:'row',padding: 5}}>
            <Text style={styles.Subject}>Mã sinh viên:</Text>
            <Text style={styles.Value}>18A10010000</Text>
          </View>
        </View>
      </View>
      <View style={{
        padding:15,
        margin:10,
        borderRadius:20,
        backgroundColor: '#fff'
      }}>
        <View style={{flex:1,flexDirection:'row'}}>
          <FontAwesome5 style={{flex:1}} name={'user'} color={'red'} size={20} />
          <Text style={styles.Title}>Thông tin cá nhân</Text>
          <TouchableOpacity
            onPress={() => props.navigation.navigate('Detail')}
            style={styles.Expand}>
            <Entypo name={'plus'} color={'red'} size={20} Text/>
          </TouchableOpacity>
        </View>
        <View style={{width:'96%',margin:'2%',height:1,backgroundColor:'#000'}}/>
        <View >
          <View style={{flex:1,flexDirection:'row',padding: 5}}>
            <Text style={styles.Subject}>Mã sinh viên:</Text>
            <Text style={styles.Value}>18A10010000</Text>
          </View>
          <View style={{flex:1,flexDirection:'row',padding: 5}}>
            <Text style={styles.Subject}>Mã sinh viên:</Text>
            <Text style={styles.Value}>18A10010000</Text>
          </View>
          <View style={{flex:1,flexDirection:'row',padding: 5}}>
            <Text style={styles.Subject}>Mã sinh viên:</Text>
            <Text style={styles.Value}>18A10010000</Text>
          </View>
          <View style={{flex:1,flexDirection:'row',padding: 5}}>
            <Text style={styles.Subject}>Mã sinh viên:</Text>
            <Text style={styles.Value}>18A10010000</Text>
          </View>
          <View style={{flex:1,flexDirection:'row',padding: 5}}>
            <Text style={styles.Subject}>Mã sinh viên:</Text>
            <Text style={styles.Value}>18A10010000</Text>
          </View>
          <View style={{flex:1,flexDirection:'row',padding: 5}}>
            <Text style={styles.Subject}>Mã sinh viên:</Text>
            <Text style={styles.Value}>18A10010000</Text>
          </View>
          <View style={{flex:1,flexDirection:'row',padding: 5}}>
            <Text style={styles.Subject}>Mã sinh viên:</Text>
            <Text style={styles.Value}>18A10010000</Text>
          </View>
        </View>
      </View>
    </Animated.ScrollView>


  );
};
  const styles= StyleSheet.create({
    Subject:{
      flex:3
    },
    Value:{
      flex:4
    },
    Title:{
      flex:10,
      fontWeight:'bold',
      fontSize:18
    },
    Expand:{
      padding:2.5,
      width:25,
      height:25,
      borderRadius:5,
      backgroundColor:'#fff',
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 4,
      },
      shadowOpacity: 0.32,
      shadowRadius: 5.46,

      elevation: 9,
    }
  })

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
const mapStateToProps= state =>{
  return ({
    valueAnimated: state.animatedReducer,
  })
};
export default connect(mapStateToProps,mapDispatchToProps)(Profile);
