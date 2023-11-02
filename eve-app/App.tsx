import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import ActivityScreen from './screens/activity';
import ProfileScreen from './screens/profile';
import HomeScreen from './screens/home';
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
      <Tab.Navigator initialRouteName="Home" screenOptions={{ headerShown: false }} >
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Activity" component={ActivityScreen} />
        <Tab.Screen name="Profile" component={ProfileScreen} />
        {/* <Tab.Screen name="Sign In" component={SignInScreen} /> */}
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default App;
