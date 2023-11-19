import React from 'react';
import { ScrollView, TouchableOpacity, View, Text, Image } from 'react-native';
import ProfileScreenStyles from '../styles/screens/profileStyles';
import GlobalStyles from '../styles/globalStyles';

const Cars = () => {
  
  const electricVehicles = [
    {
      name: 'Tesla Model Y',
      image: require('../assets/images/model-y.png'),
    },
    {
      name: 'Tesla Cybertruck',
      image: require('../assets/images/cybertruck.png'),
    },
    {
      name: 'Chevrolet Bolt',
      image: require('../assets/images/bolt.png'),
    },
    {
      name: 'Rivian R1T',
      image: require('../assets/images/rivian.png'),
    },
  ];
  
  return (
    <View style={GlobalStyles.column}>
      <View style={GlobalStyles.subView}>
        <Text style={GlobalStyles.subText}>Your Vehicles</Text>
      </View>
      <ScrollView horizontal={true} 
      showsHorizontalScrollIndicator={false}>
        {electricVehicles.map((vehicle, index) => (
        <TouchableOpacity key={index} style={ProfileScreenStyles.carButton}>
          <Image source={vehicle.image} style={ProfileScreenStyles.carImage} />
          <Text style={ProfileScreenStyles.carText}>{vehicle.name}</Text>
        </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
};

export default Cars;