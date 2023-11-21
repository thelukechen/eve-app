import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import GlobalStyles, { white } from '../../styles/globalStyles';
import ActivityScreenStyles from '../../styles/screens/activityStyles';
import Icon from 'react-native-vector-icons/Ionicons';
import PowerMixBreakdownChart from './powerMixBreakdownChart';

const PowerMixBreakdown = () => {
    
  return (
    <View style={GlobalStyles.column}>
        <View style={GlobalStyles.row}>
            <View style={GlobalStyles.subView}>
                <Text style={GlobalStyles.subText}>Power Mix Breakdown</Text>
                <TouchableOpacity onPress={() => console.log('Power Breakdown Info Button Pressed')}>
                    <Icon name="information-circle-outline" size={22} color= {white} 
                    style={ActivityScreenStyles.breakdownInfoButton}/>
                </TouchableOpacity>
            </View>
        </View>
        <PowerMixBreakdownChart />
    </View>
  );
};

export default PowerMixBreakdown;