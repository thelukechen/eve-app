import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import GlobalStyles from '../styles/globalStyles';
import HomeScreenStyles from '../styles/screens/homeStyles';

const StartButton = ({ }) => {
    
    const handleStartPress = () => {
        console.log('Start button pressed!');
        // navigation.navigate('GreenScreen');
      };
      
    return (
        <View style={[GlobalStyles.row, {justifyContent: 'center'}]}>
            <TouchableOpacity onPress={handleStartPress} style={HomeScreenStyles.startButton}>
                <Text style={HomeScreenStyles.startButtonText}>START</Text>
            </TouchableOpacity>
        </View>
  );
};

export default StartButton;