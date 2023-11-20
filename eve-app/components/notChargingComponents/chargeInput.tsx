import React, { useState } from 'react';
import { View } from 'react-native';
import GlobalStyles, { white } from '../../styles/globalStyles';
import { Picker } from '@react-native-picker/picker';
import HomeScreenStyles from '../../styles/screens/homeStyles';

const ChargeInput = () => {
  
  const [selectedChargeTime, setSelectedChargeTime] = useState('Charge Length');
    
  return (
    <View style={[GlobalStyles.column, HomeScreenStyles.pickerView]}>
      <Picker
        selectedValue={selectedChargeTime}
        onValueChange={(itemValue) => setSelectedChargeTime(itemValue)}
        itemStyle={{ color: white }}
        style={HomeScreenStyles.picker}
        mode="dropdown"
      >
        <Picker.Item label="Select Charge Length" value="Charge Length" />
        <Picker.Item label="1 hour" value="1" />
        <Picker.Item label="2 hours" value="2" />
        <Picker.Item label="4 hours" value="4" />
        <Picker.Item label="8 hours" value="8" />
        <Picker.Item label="12 hours" value="12" />
        <Picker.Item label="Max" value="Max" />
      </Picker>
    </View>
  );
};

export default ChargeInput;