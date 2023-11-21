import React from 'react';
import { View, Text } from 'react-native';
import GlobalStyles, { green } from '../../styles/globalStyles';
import Icon from 'react-native-vector-icons/Ionicons';
import ActivityScreenStyles from '../../styles/screens/activityStyles';

const Connection = () => {
    
  return (
    <View style={[GlobalStyles.row, {alignItems: 'center'}]}>
        <Icon name="battery-full" size={24} color= {green}/>
        <Text style={ActivityScreenStyles.carDetailsText}>  Connected</Text>
    </View>
  );
};

export default Connection;