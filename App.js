/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React,{useState} from 'react';
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import LoginComponent from "./Components/Login/LoginComponent";
import FloydHayes from "./Components/FloydHayes";
import Eiffel from "./Components/Eiffel";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Utilities from "./Components/Utilities";
import Notifications from "./Components/Notifications";
import MyTabBar from "./Components/MyTabBar";
import { connect, Provider } from "react-redux";
import store from "./redux/store";

const Stack = createStackNavigator();
const Tab= createBottomTabNavigator();

const Home =()=>(
       <Tab.Navigator tabBar={(props) => <MyTabBar {...props}/>}>
         <Tab.Screen name="Profile" component={FloydHayes}/>
         <Tab.Screen name="Setting" component={Eiffel}/>
         <Tab.Screen name="Utilities" component={Utilities}/>
       </Tab.Navigator>
);

const App: () => React$Node = (props) => {
  const [isSignedIn, setIsSignedIn]= useState(false);
  return (
      <NavigationContainer>
        {
          !props.login?
            <LognComponent/>
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
            </Stack.Navigator>
        }
      </NavigationContainer>
  );
};
const mapStateToProps = state => {
  return {
    login: state.appReducer
  }
}

export default connect (mapStateToProps)(App);
