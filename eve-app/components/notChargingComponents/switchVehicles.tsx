import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import HomeScreenStyles from '../../styles/screens/homeStyles';

const SwitchVehiclesButton = () => {
    
  return (
    <View style={HomeScreenStyles.switchView}>
        <TouchableOpacity onPress={() => console.log('Switch Vehicles Button Pressed')}>
            <Text style={HomeScreenStyles.switchText}>Switch Vehicles</Text>          
        </TouchableOpacity>
    </View>
  );
};

export default SwitchVehiclesButton;