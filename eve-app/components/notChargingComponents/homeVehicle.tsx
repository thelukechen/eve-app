import React from 'react';
import { View, Text, Image } from 'react-native';
import GlobalStyles, { white } from '../../styles/globalStyles';
import HomeScreenStyles from '../../styles/screens/homeStyles';
import Icon from 'react-native-vector-icons/Ionicons';

const HomeVehicle = () => {
    
  return (
    <View style={GlobalStyles.column}>
      <View style={[GlobalStyles.subView, {justifyContent: 'center'}]}>
        <Text style={GlobalStyles.subText}>Luke's Tesla Model Y</Text>
      </View>
      <View style={GlobalStyles.center}>
        <Image source={require('../../assets/images/model-y.png')} 
        style={HomeScreenStyles.carImage} />
        <View style={[GlobalStyles.row, {alignItems: 'center'}]}>
          <Icon name="battery-dead" size={24} color= {white}/>
          <Text style={HomeScreenStyles.carDetailsText}>  Not Connected</Text>
        </View>
      </View>
    </View>
  );
};

export default HomeVehicle;