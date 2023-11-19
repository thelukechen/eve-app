import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import IntroScreen from './screens/intro';
import RootScreen from './screens/root';
import { StatusBar } from 'expo-status-bar';

const Stack = createStackNavigator();

const App = () => {
  
  return (
    <NavigationContainer>
      <StatusBar style="light" />
      <Stack.Navigator 
      initialRouteName="intro" screenOptions={{ headerShown: false}}>
        <Stack.Screen name="intro" component={IntroScreen} />
        <Stack.Screen name="root" component={RootScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
