import React from 'react';
import { View, Text } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import GlobalStyles, { black } from '../../styles/globalStyles';
import HomeScreenStyles from '../../styles/screens/homeStyles';
import HomeEnergyGraph from './homeEnergyGraph';
import useFirebaseData from '../../firebase/useFirebaseData';

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
        <Text>Loading...</Text>
      )}
          {/* {data && Object.keys(data).map((key) => (
        <Text style={HomeScreenStyles.chargeSpecsText} key={key}>{data[key]} W</Text>
      ))} */}
          {/* <Text style={HomeScreenStyles.chargeSpecsText}>21 kW</Text> */}
        </View>
        <View style={[GlobalStyles.column, HomeScreenStyles.chargeGreen]}>
          <Icon name="timer-outline" size={26} color= {black}/>
          <Text style={HomeScreenStyles.chargeSpecsText}>00:12:06</Text>
        </View>
    </View>
    <HomeEnergyGraph />
    <Text>Energy Delivered (kWh)</Text>
    </View>
  );
};

export default ChargingSpecs;