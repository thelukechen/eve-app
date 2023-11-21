import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import GlobalStyles, { green, white } from '../../styles/globalStyles';
import Icon from 'react-native-vector-icons/Ionicons';
import ActivityScreenStyles from '../../styles/screens/activityStyles';

const PowerMixBreakdownChart = () => {

  const [showDetails, setShowDetails] = useState(false);

  const toggleDetails = () => {
    setShowDetails(!showDetails);
  };
    
  return (
    <View style={[GlobalStyles.column, {borderWidth: 2, borderColor: green, borderRadius: 30}]}>
      <View style={[GlobalStyles.row, {alignItems: 'center', justifyContent: 'space-evenly'}]}>
        <View style={{flexDirection: 'column', alignItems: 'center'}}>
            <Text style={{color: green}}>46%</Text>
            <Text style={{color: white}}>Fossil Free</Text>
        </View>
        <View style={{flexDirection: 'column', alignItems: 'center'}}>
            <Text style={{color: 'red'}}>54%</Text>
            <Text style={{color: white}}>Fossil Fueled</Text>
        </View>
        <TouchableOpacity onPress={toggleDetails}>
          {showDetails ? 
            <View style={{flexDirection: 'column', alignItems: 'center', paddingLeft: 110, paddingRight: 10}}>
              <Icon name="caret-up-outline" size={22} color= {white}/>
            </View>
          : 
            <View style={{flexDirection: 'column', alignItems: 'center', paddingLeft: 110, paddingRight: 10}}>
              <Icon name="caret-down-outline" size={22} color= {white}/>
            </View>
          }
        </TouchableOpacity>
      </View>
      {showDetails ? (
          <View style={{flexDirection: 'column', alignItems: 'flex-start', justifyContent: 'flex-start'}}>
            <Text style={{color: white}}>Main Sources</Text>
            <Text style={{color: 'red'}}>gas</Text>
            <Text style={{color: green}}>nuclear</Text>
            <Text style={{color: green}}>hydro</Text>
            <Text style={{color: green}}>solar</Text>
            <Text style={{color: green}}>wind</Text>
            <Text style={{color: green}}>geothermal</Text>
            <Text style={{color: green}}>biomass</Text>
            <Text style={{color: green}}>battery</Text>
          </View>
        ) : null}
    </View>
  );
};

export default PowerMixBreakdownChart;