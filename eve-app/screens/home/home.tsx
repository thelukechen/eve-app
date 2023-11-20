import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import NotChargingScreen from './notCharging';
import ChargingScreen from './charging';

export type RootStackParamList = {
    NotCharging: undefined;
    Charging: undefined;
  };
  
const Stack = createStackNavigator<RootStackParamList>();

const HomeScreen = () => {
  
  return (
    <Stack.Navigator 
    initialRouteName="NotCharging" 
    screenOptions={{ headerShown: false, animationEnabled: false}}>
        <Stack.Screen name="NotCharging" component={NotChargingScreen} />
        <Stack.Screen name="Charging" component={ChargingScreen} />
    </Stack.Navigator>
  );
};

export default HomeScreen;
