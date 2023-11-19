import React, { useEffect } from 'react';
import { View, Image, StyleSheet } from 'react-native';
import * as SplashScreen from 'expo-splash-screen';

const IntroScreen = ({ navigation }: {navigation: any}) => {
  useEffect(() => {
    SplashScreen.preventAutoHideAsync()
    setTimeout(() => {
        SplashScreen.hideAsync();
        navigation.replace('root');
    }, 1000);
  }, [navigation]);

  return (
    <View style={styles.container}>
      <Image source={require('../assets/images/cybertruck.png')} 
      style={styles.logo} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  logo: {
    width: 150,
    height: 150,
  },
});

export default IntroScreen;
