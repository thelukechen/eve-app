import React from 'react';
import { View, Text } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import GlobalStyles, { white } from '../../styles/globalStyles';
import HomeScreenStyles from '../../styles/screens/homeStyles';
import ActivityScreenStyles from '../../styles/screens/activityStyles';
import ActivityEnergyGraph from './activityEnergyGraph';
import Connection from './connection';

const ActivityChargingSpecs = () => {
    
  return (
    <View style={HomeScreenStyles.chargeSpecsView}>
      <Connection />
      <View style={[GlobalStyles.row, ActivityScreenStyles.chargeBlack]}>
        <View style={[GlobalStyles.column, ActivityScreenStyles.chargeBlack]}>
          <Icon name="flash-outline" size={26} color= {white}/>
          <Text style={ActivityScreenStyles.chargeSpecsText}>21 kW</Text>
        </View>
        <View style={[GlobalStyles.column, ActivityScreenStyles.chargeBlack]}>
          <Icon name="timer-outline" size={26} color= {white}/>
          <Text style={ActivityScreenStyles.chargeSpecsText}>00:00:06</Text>
        </View>
    </View>
    <ActivityEnergyGraph />
    <Text style={ActivityScreenStyles.textWhite}>Energy Delivered (kWh)</Text>
    </View>
  );
};

export default ActivityChargingSpecs;