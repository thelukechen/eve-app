import React from 'react';
import { View, Text } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import GlobalStyles, { black } from '../../styles/globalStyles';
import HomeScreenStyles from '../../styles/screens/homeStyles';
import HomeEnergyGraph from './homeEnergyGraph';
import useFirebaseData from '../../firebase/useFirebaseData';
import TimerComponent from '../../timer/TimerComponent';

const ChargingSpecs = () => {
  const data = useFirebaseData('power');
    
  return (
    <View style={HomeScreenStyles.chargeSpecsView}>
      <View style={[GlobalStyles.row, HomeScreenStyles.chargeGreen]}>
        <View style={[GlobalStyles.column, HomeScreenStyles.chargeGreen]}>
          <Icon name="flash-outline" size={26} color= {black}/>
          {data ? (
            <Text style={HomeScreenStyles.chargeSpecsText}>{JSON.stringify(data)} Watts</Text>
            ) : (
            <Text  style={HomeScreenStyles.chargeSpecsText}>Loading...</Text>
          )}
          </View>
          <View style={[GlobalStyles.column, HomeScreenStyles.chargeGreen]}>
            <Icon name="timer-outline" size={26} color= {black}/>
            <TimerComponent style={HomeScreenStyles.chargeSpecsText}/>
          </View>
      </View>
      <HomeEnergyGraph />
      <Text>Energy Delivered (kWh)</Text>
    </View>
  );
};

export default ChargingSpecs;