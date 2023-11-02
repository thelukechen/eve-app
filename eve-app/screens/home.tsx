// import { StatusBar } from 'expo-status-bar';
// import { StyleSheet, Text, View, Button } from 'react-native';
// import { getDatabase, ref, set } from "firebase/database";
// import { app } from './firebase-config';

import React, { useState } from 'react';
import {Picker} from '@react-native-picker/picker';
import { View, Text, Switch, StyleSheet, Image, TouchableOpacity } from 'react-native';

const HomeScreen = ({ navigation }) => {
  const [currentCharge, setCurrentCharge] = useState(80); // Assuming 80% charge initially
  const [ecoMode, setEcoMode] = useState(false); // Eco mode is initially off

  const handleEcoModeToggle = () => {
    setEcoMode(!ecoMode);
  };

  const [selectedChargeTime, setSelectedChargeTime] = useState('1 hour');

  const handleStartPress = () => {
    console.log('Start button pressed!');
    navigation.navigate('GreenScreen');
  };

  return (
    <View style={styles.container}>
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={styles.headerText}>Kenny</Text>
      <Text style={styles.text}>Tesla Model 3</Text>
      <Image
        // source={require('../assets/cybertruck.png')}
        style={styles.image}
        resizeMode="cover"
      />
      <Text style={styles.label}>How long do you want to charge?</Text>
      <Picker
        selectedValue={selectedChargeTime}
        onValueChange={(itemValue) => setSelectedChargeTime(itemValue)}
        style={{ ...styles.picker, color: 'white' }} 
        itemStyle={{ color: 'white' }}
      >
        <Picker.Item label="1 hour" value="1 hour" />
        <Picker.Item label="2 hours" value="2 hours" />
        <Picker.Item label="4 hours" value="4 hours" />
        <Picker.Item label="8 hours" value="8 hours" />
        <Picker.Item label="12 hours" value="12 hours" />
      </Picker>
      <TouchableOpacity onPress={handleStartPress} style={styles.button}>
        <Text style={styles.buttonText}>Start</Text>
      </TouchableOpacity>
    </View>
    </View>
    
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',  // Set the background color to black
  },
  text: {
    color: 'white', // Set the text color to white
  },
  headerText: {
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  image: {
    width: 400,
    height: 200,
    borderRadius: 200,  // for a circular image, adjust as needed
    marginBottom: 20,
  },
  label: {
    color: 'white',
    marginBottom: 10,
  },
  picker: {
    width: '100%',
    color: 'white',
  },
  button: {
    backgroundColor: 'green',
    borderRadius: 100, // Make it a circle by setting a large border radius
    padding: 15,
    width: 150, // Adjust the width and height to set the size of the circle
    height: 150,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
