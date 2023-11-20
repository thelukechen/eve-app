import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import ProfilePic from '../components/profileComponents/profilePic';
import { black } from '../styles/globalStyles';
import Cars from '../components/profileComponents/cars';
import SettingsButtons from '../components/profileComponents/settings';

const TestScreen = () => {
  return (
    <View style={styles.container}>
        <ProfilePic />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    flexDirection: 'row',    
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    alignContent: 'flex-start',
    backgroundColor: black,
    borderColor: 'green',
    borderWidth: 10,
    paddingTop: 100,
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
  },
});

export default TestScreen;
