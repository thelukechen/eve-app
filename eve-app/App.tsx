import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import ActivityScreen from './screens/activity';
import ProfileScreen from './screens/profile';
import HomeScreen from './screens/home';
import Icon from 'react-native-vector-icons/Ionicons';
// import SignInScreen from './screens/auth';
// import { AppRegistry } from 'react-native';
// import { name as appName } from './app.json';
// import { GoogleSignin } from '@react-native-community/google-signin';
// import { initializeApp } from '@react-native-firebase/app';
// import { StatusBar } from 'expo-status-bar';
// import { StyleSheet, Text, View, Button } from 'react-native';
// import { getDatabase, ref, set } from "firebase/database";
// import { app } from './firebase-config';

// Initialize Firebase
// initializeApp();

// Configure Google Sign-In
// GoogleSignin.configure({
//   webClientId: 'AIzaSyCpzx0sJdHrLPeTcnjIoSkVyBqHsyp2ZEE',
// });

const Tab = createBottomTabNavigator();

const App = () => {
  return (
    <NavigationContainer>
      {/* <Screen.Navigator> */}
        {/* <Screen name="Auth" component={SignInScreen} /> */}
      {/* </Screen.Navigator> */}
      <Tab.Navigator initialRouteName="Home" screenOptions={{ headerShown: false, 
      tabBarActiveTintColor: '#38feaf', tabBarInactiveTintColor: 'white', tabBarStyle: [{display: 'flex', backgroundColor: '#212121', borderTopColor: '#38feaf'}]}}>
        <Tab.Screen name="Home" component={HomeScreen} options={{
            tabBarIcon: ({ color, size }) => (
              <Icon name="home-outline" color={color} size={size} />
            ),
          }}/>
        <Tab.Screen name="Activity" component={ActivityScreen} options={{
            tabBarIcon: ({ color, size }) => (
              <Icon name="ios-pulse" color={color} size={size} />
            ),
          }}/>
        <Tab.Screen name="Profile" component={ProfileScreen} options={{
            tabBarIcon: ({ color, size }) => (
              <Icon name="person-outline" color={color} size={size} />
            ),
          }}/>
        {/* <Tab.Screen name="Sign In" component={SignInScreen} /> */}
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default App;
