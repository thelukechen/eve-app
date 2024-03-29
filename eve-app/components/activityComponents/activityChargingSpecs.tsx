import React from 'react';
import { View, Text } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import GlobalStyles, { white } from '../../styles/globalStyles';
import HomeScreenStyles from '../../styles/screens/homeStyles';
import ActivityScreenStyles from '../../styles/screens/activityStyles';
import ActivityEnergyGraph from './activityEnergyGraph';
import Connection from './connection';
import useFirebaseData from '../../firebase/useFirebaseData';
import TimerComponent from '../../timer/TimerComponent';

const ActivityChargingSpecs = () => {
  const data = useFirebaseData('power');
    
  return (
    <View style={HomeScreenStyles.chargeSpecsView}>
      <Connection />
      <View style={[GlobalStyles.row, ActivityScreenStyles.chargeBlack]}>
        <View style={[GlobalStyles.column, ActivityScreenStyles.chargeBlack]}>
          <Icon name="flash-outline" size={26} color= {white}/>
          {data ? (
            <Text style={ActivityScreenStyles.chargeSpecsText}>{JSON.stringify(data)} Watts</Text>
            ) : (
            <Text style={ActivityScreenStyles.chargeSpecsText}>Loading...</Text>
          )}
        </View>
        <View style={[GlobalStyles.column, ActivityScreenStyles.chargeBlack]}>
          <Icon name="timer-outline" size={26} color= {white}/>
          <TimerComponent style={ActivityScreenStyles.chargeSpecsText}/>
        </View>
      </View>
      <ActivityEnergyGraph />
      <Text style={ActivityScreenStyles.textWhite}>Energy Delivered (kWh)</Text>
    </View>
  );
};

export default ActivityChargingSpecs;