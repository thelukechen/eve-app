import React from 'react';
import { View, Text, Image } from 'react-native';
import GlobalStyles, { black, green } from '../../styles/globalStyles';
import HomeScreenStyles from '../../styles/screens/homeStyles';
import Icon from 'react-native-vector-icons/Ionicons';

const HomeVehicleC = () => {
    
  return (
    <View style={[GlobalStyles.column, {backgroundColor: green}]}>
      <View style={[GlobalStyles.subView, {alignItems: 'center'}]}>
        <Text style={[GlobalStyles.subText, {color: black}]}>Luke's Tesla Model Y</Text>
      </View>
      <View style={GlobalStyles.center}>
        <Image source={require('../../assets/images/model-y.png')} 
        style={HomeScreenStyles.carImage} />
        <View style={[GlobalStyles.row, {alignItems: 'center'}]}>
          <Icon name="battery-full" size={24} color= {black}/>
          <Text style={[HomeScreenStyles.carDetailsText, {color: black}]}>  Connected</Text>
        </View>
      </View>
    </View>
  );
};

export default HomeVehicleC;