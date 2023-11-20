import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import ActivityScreen from './activity';
import ProfileScreen from './profile/profile';
import HomeScreen from './home/home';
import Icon from 'react-native-vector-icons/Ionicons';
import { green, white, black } from '../styles/globalStyles';

const Tab = createBottomTabNavigator();

const RootScreen = () => {
  
  return (
    <Tab.Navigator 
    initialRouteName="Home" screenOptions={{ headerShown: false, 
    tabBarActiveTintColor: green, tabBarInactiveTintColor: white, 
    tabBarStyle: [{display: 'flex', backgroundColor: black, borderTopColor: green}]}}>
      <Tab.Screen name="Home" component={HomeScreen} options={{tabBarIcon: ({ color, size }) => (
        <Icon name="home-outline" color={color} size={size} />),}}/>
      <Tab.Screen name="Activity" component={ActivityScreen} options={{tabBarIcon: ({ color, size }) => (
        <Icon name="ios-pulse" color={color} size={size} />),}}/>
      <Tab.Screen name="Profile" component={ProfileScreen} options={{tabBarIcon: ({ color, size }) => (
        <Icon name="person-outline" color={color} size={size} />),}}/>
    </Tab.Navigator>
  );
};

export default RootScreen;
