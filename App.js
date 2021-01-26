/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React,{useState} from 'react';
import {
  View,
  StatusBar
} from 'react-native'
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import LoginComponent from "./Components/Login/LoginComponent";
import Tasks from "./Components/Tasks/Tasks";
import Profile from "./Components/Profile/Profile";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Utilities from "./Components/Utilities/Utilities";
import MyBottomBar from "./Components/MyBottomBar";
import { connect, Provider } from "react-redux";
import Notifications from "./Components/Notifications/Notifications";
import New from "./Components/News/New";
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Schedule from "./Components/Schedule/Schedule";
import Study from "./Components/Study/Study";
import MyTopBar from "./Components/MyTopBar";
import store from "./redux/store";
import Detail from "./Components/Detail Profile/Detail";


const TabTop= createMaterialTopTabNavigator();
const Stack = createStackNavigator();
const Tab= createBottomTabNavigator();

const User =()=>(
  <TabTop.Navigator tabBar={(props) => <MyTopBar {...props}/>}>
    <TabTop.Screen name='Schedule' component={Schedule}/>
    <TabTop.Screen name='Profile' component={Profile}/>
    <TabTop.Screen name='Study' component={Study}/>
  </TabTop.Navigator>
);

const Home =()=>(
       <Tab.Navigator tabBar={(props) => <MyBottomBar {...props}/>}>
         <Tab.Screen name='News' component={New}/>
         <Tab.Screen name="User" component={User}/>
         <Tab.Screen name="Tasks" component={Tasks}/>
         <Tab.Screen name='Utilities' component={Utilities}/>
       </Tab.Navigator>
);

const App = (props) => {
  return (
    <View style={{flex:1}}>
      <StatusBar backgroundColor='#84cbe1' barStyle ='light-content'/>
      <NavigationContainer>
        {
          !props.login?
            <LoginComponent/>
            :
            <Stack.Navigator>
              <Stack.Screen
                name='Home'
                headerMode='none'
                options={{
                  headerShown:false
                }}
                component={Home}/>
              <Stack.Screen name='Notifications' component={Notifications}/>
              <Stack.Screen name='Detail' component={Detail} />
            </Stack.Navigator>
        }
      </NavigationContainer>
    </View>


  );
};
const mapStateToProps = state => {
  return {
    login: state.appReducer
  }
}

export default connect (mapStateToProps)(App);
