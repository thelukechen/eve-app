import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import GlobalStyles, { white } from '../../styles/globalStyles';
import ActivityScreenStyles from '../../styles/screens/activityStyles';

const ActivityHeader = () => {
    
  return (
    <View style={GlobalStyles.row}>
        <Text style={GlobalStyles.tabName}>Activity</Text>
        <TouchableOpacity onPress={() => console.log('Refresh Button Pressed')}>
          <Icon name="refresh-outline" size={26} color= {white} 
          style={ActivityScreenStyles.refresh}/>
        </TouchableOpacity>
      </View>
  );
};

export default ActivityHeader;