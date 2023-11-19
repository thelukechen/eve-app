import React from 'react';
import { ScrollView, TouchableOpacity, View, Text, Image } from 'react-native';
import ProfileScreenStyles from '../styles/screens/profileStyles';
import GlobalStyles, { green, white } from '../styles/globalStyles';
import Icon from 'react-native-vector-icons/Ionicons';

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
        <View style={[GlobalStyles.subView, ProfileScreenStyles.addButton]}>
          <Text style={GlobalStyles.subText}>Your Vehicles</Text>
          <TouchableOpacity onPress={() => console.log('Add Vehicle Button Pressed')}>
            <Text style={[GlobalStyles.subText, ProfileScreenStyles.addButtonText]}>+ Add</Text>
          </TouchableOpacity>
        </View>
      
      <ScrollView horizontal={true}
      showsHorizontalScrollIndicator={false}>
        {electricVehicles.map((vehicle, index) => (
        <TouchableOpacity key={index} style={ProfileScreenStyles.carButton}>
          <Image source={vehicle.image} style={ProfileScreenStyles.carImage} />
          <Text style={ProfileScreenStyles.carText}>{vehicle.name}</Text>
          {vehicle.name == 'Tesla Model Y' ? (
            <View style={ProfileScreenStyles.carDetails}>
              <Icon name="battery-full" size={24} color= {green}/>
              <Text style={ProfileScreenStyles.carDetailsText}>  Connected</Text>
            </View>
          ) : (
            <View style={ProfileScreenStyles.carDetails}>
              <Icon name="battery-dead" size={24} color= {white}/>
              <Text style={ProfileScreenStyles.carDetailsText}>  Not Connected</Text>
            </View>
          )}
        </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
};

export default Cars;