import React, { useState } from 'react';
import { View } from 'react-native';
import GlobalStyles, { black, green } from '../../styles/globalStyles';
import { Picker } from '@react-native-picker/picker';
import HomeScreenStyles from '../../styles/screens/homeStyles';

const ChargeInputC = () => {
  
  const [selectedChargeTime, setSelectedChargeTime] = useState('Charge Length');
    
  return (
    <View style={[GlobalStyles.column, HomeScreenStyles.pickerView, {backgroundColor: green}]}>
      <Picker
        selectedValue={selectedChargeTime}
        onValueChange={(itemValue) => setSelectedChargeTime(itemValue)}
        itemStyle={{ color: black }}
        style={[HomeScreenStyles.picker, {color: green}]}
        mode="dropdown"
      >
        <Picker.Item label="Select Charge Length" value="Charge Length" />
        <Picker.Item label="1 hour" value="1 hour" />
        <Picker.Item label="2 hours" value="2 hours" />
        <Picker.Item label="4 hours" value="4 hours" />
        <Picker.Item label="8 hours" value="8 hours" />
        <Picker.Item label="12 hours" value="12 hours" />
        <Picker.Item label="Max" value="Max" />
      </Picker>
    </View>
  );
};

export default ChargeInputC;