import React from 'react';
import { ScrollView, View, Text, TouchableOpacity } from 'react-native';
import GlobalStyles, { black, green, white } from '../../styles/globalStyles';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from './home';
import HomeScreenStyles from '../../styles/screens/homeStyles';
import HomeHeaderC from '../../components/chargingComponents/homeHeaderC';
import SwitchVehiclesButtonC from '../../components/chargingComponents/switchVehiclesC';
import HomeVehicleC from '../../components/chargingComponents/homeVehicleC';
import ChargeInputC from '../../components/chargingComponents/chargeInputC';

type HomeScreenProps = {
  navigation: StackNavigationProp<RootStackParamList, 'Charging'>;
};

const ChargingScreen: React.FC<HomeScreenProps> = ({ navigation }) => {

  const handleStartPress = () => {
    console.log('Start button pressed!');
    navigation.navigate('NotCharging');
  };

  return (
    <ScrollView contentContainerStyle={[GlobalStyles.container, {backgroundColor: green}]} 
    style={[GlobalStyles.scrollView, {backgroundColor: green}]} indicatorStyle='white'
    scrollEnabled={false}
    showsVerticalScrollIndicator={true}>
      <HomeHeaderC />
      <SwitchVehiclesButtonC />
      <HomeVehicleC />
      <ChargeInputC />
      <View style={[GlobalStyles.row, {justifyContent: 'center'}]}>
        <TouchableOpacity onPress={handleStartPress} style={[HomeScreenStyles.startButton, {backgroundColor: black}]}>
          <Text style={[HomeScreenStyles.startButtonText, {color: white}]}>STOP</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default ChargingScreen;