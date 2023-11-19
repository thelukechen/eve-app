import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import GlobalStyles from '../styles/globalStyles';
import ActivityScreenStyles from '../styles/screens/activityStyles';

const CurrVehicle = () => {
    
  return (
    <View style={GlobalStyles.column}>
        <View style={GlobalStyles.subView}>
            <Text style={GlobalStyles.subText}>Current Vehicle</Text>
        </View>
        <View style={[GlobalStyles.row, GlobalStyles.center, ActivityScreenStyles.currVehicle]}>
            <Image source={require('../assets/images/model-y.png')} 
            style={ActivityScreenStyles.avatar} />
            <Text style={ActivityScreenStyles.name}>Tesla Model Y</Text>
            <View style={ActivityScreenStyles.switchView}>
                <TouchableOpacity onPress={() => console.log('Switch Vehicles Button Pressed')}>
                    <Text style={ActivityScreenStyles.switchText}> Switch</Text>
                    <Text style={ActivityScreenStyles.switchText}>Vehicles</Text>
                </TouchableOpacity>
            </View>
        </View>
    </View>
  );
};

export default CurrVehicle;