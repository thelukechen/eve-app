import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import GlobalStyles, { green, white } from '../../styles/globalStyles';
import ProfileScreenStyles from '../../styles/screens/profileStyles';

const ChargeHistory = () => {
    
  return (
    <View style={[GlobalStyles.column, {paddingBottom: 120}]}>
      <View style={GlobalStyles.row}>
        <View style={[GlobalStyles.subView, ProfileScreenStyles.addButton]}>
          <Text style={GlobalStyles.subText}>Charge History</Text>
          <TouchableOpacity onPress={() => console.log('Charge History Button Pressed')}>
            <Text style={[GlobalStyles.subText, ProfileScreenStyles.addButtonText]}>See All</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={[GlobalStyles.column, {flex: 1, borderWidth: 2, borderColor: white, borderRadius: 30, marginBottom: 20}]}>
        <View style={GlobalStyles.row}>
          <Text style={{color: white, paddingLeft: 15, paddingTop: 5}}>Yesterday at 7:28 AM</Text>
        </View>
        <View style={[GlobalStyles.row, {justifyContent:'space-evenly'}]}>
          <Text style={{color: white}}>27.5 kWh</Text>
          <Text style={{color: white}}>3h 21m 42s</Text>
          <Text style={{color: green}}>3.3 kWh</Text>
        </View>
        <View style={[GlobalStyles.row, {justifyContent:'space-evenly'}]}>
          <Text style={{color: white}}>Energy Delivered</Text>
          <Text style={{color: white}}>Charge Duration</Text>
          <Text style={{color: white}}>Clean Energy</Text>
        </View>
      </View>
      <View style={[GlobalStyles.column, {flex: 1, borderWidth: 2, borderColor: white, borderRadius: 30, marginBottom: 20}]}>
        <View style={GlobalStyles.row}>
          <Text style={{color: white, paddingLeft: 15, paddingTop: 5}}>Mon, 15 Sept 2023 at 8:32 AM</Text>
        </View>
        <View style={[GlobalStyles.row, {justifyContent:'space-evenly'}]}>
          <Text style={{color: white}}>32.5 kWh</Text>
          <Text style={{color: white}}>7h 16m 23s</Text>
          <Text style={{color: green}}>5.2 kWh</Text>
        </View>
        <View style={[GlobalStyles.row, {justifyContent:'space-evenly'}]}>
          <Text style={{color: white}}>Energy Delivered</Text>
          <Text style={{color: white}}>Charge Duration</Text>
          <Text style={{color: white}}>Clean Energy</Text>
        </View>
      </View>
    </View>
  );
};

export default ChargeHistory;