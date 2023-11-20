import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import IntroScreen from './screens/intro';
import RootScreen from './screens/root';
import { StatusBar } from 'react-native';

const Stack = createStackNavigator();

const App = () => {
  
  return (
    <NavigationContainer>
      <StatusBar barStyle='light-content' />
      <Stack.Navigator 
      initialRouteName="intro" screenOptions={{ headerShown: false}}>
        <Stack.Screen name="intro" component={IntroScreen} />
        <Stack.Screen name="root" component={RootScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
