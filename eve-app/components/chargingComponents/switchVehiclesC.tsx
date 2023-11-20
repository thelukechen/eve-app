import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import HomeScreenStyles from '../../styles/screens/homeStyles';
import { black } from '../../styles/globalStyles';

const SwitchVehiclesButtonC = () => {
    
  return (
    <View style={HomeScreenStyles.switchView}>
        <TouchableOpacity onPress={() => console.log('Switch Vehicles Button Pressed')}>
            <Text style={[HomeScreenStyles.switchText, {color: black}]}>Switch Vehicles</Text>          
        </TouchableOpacity>
    </View>
  );
};

export default SwitchVehiclesButtonC;