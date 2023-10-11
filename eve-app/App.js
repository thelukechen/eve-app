import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import { getDatabase, ref, set } from "firebase/database";
import { app } from './firebase-config';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import DashboardScreen from './screens/dashboard';
import GreenScreen from './screens/greenscreen';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Dashboard" 
        component={DashboardScreen} 
        options={{ headerShown: false }}/>
        <Stack.Screen name="GreenScreen" component={GreenScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
