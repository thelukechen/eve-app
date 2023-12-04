import React from 'react';
import { View, Text } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import GlobalStyles, { black } from '../../styles/globalStyles';
import HomeScreenStyles from '../../styles/screens/homeStyles';
import HomeEnergyGraph from './homeEnergyGraph';
import TimerParent from './timerParent';

const ChargingSpecs = () => {
    
  return (
    // <View style={HomeScreenStyles.chargeSpecsView}>
    //   <View style={[GlobalStyles.row, HomeScreenStyles.chargeGreen]}>
    //     <View style={[GlobalStyles.column, HomeScreenStyles.chargeGreen]}>
    //       <Icon name="flash-outline" size={26} color= {black}/>
    //       <Text style={HomeScreenStyles.chargeSpecsText}>21 kW</Text>
    //     </View>
    //     <View style={[GlobalStyles.column, HomeScreenStyles.chargeGreen]}>
    //       <Icon name="timer-outline" size={26} color= {black}/>
    //       <TimerParent />
    //     </View>
    // </View>
    // {/* <HomeEnergyGraph />
    // <Text>Energy Delivered (kWh)</Text> */}
    // </View>
    <View>
      <TimerParent />
    </View>
  );
};

export default ChargingSpecs;