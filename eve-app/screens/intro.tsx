import React, { useEffect } from 'react';
import { View, Image, StyleSheet } from 'react-native';
import * as SplashScreen from 'expo-splash-screen';
import { black } from '../styles/globalStyles';

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
      <Image source={require('../assets/images/eve-logo.png')} 
      style={styles.logo} />
      {/* <FadingBorderImage
        source={{ uri: '../assets/images/eve-logo.png' }}
        style={{ width: 200, height: 200, borderRadius: 20 }}
      /> */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: black,
  },
  logo: {
    width: 200,
    height: 200,
  },
});

export default IntroScreen;
