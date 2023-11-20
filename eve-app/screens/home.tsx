import React from 'react';
import { ScrollView } from 'react-native';
import GlobalStyles from '../styles/globalStyles';
import HomeHeader from '../components/homeHeader';
import SwitchVehiclesButton from '../components/switchVehicles';
import HomeVehicle from '../components/homeVehicle';
import StartButton from '../components/startButton';
import ChargeInput from '../components/chargeInput';

const HomeScreen = () => {

  return (
    <ScrollView contentContainerStyle={GlobalStyles.container} 
    style={GlobalStyles.scrollView} indicatorStyle='white'
    scrollEnabled={false}
    showsVerticalScrollIndicator={true}>
      <HomeHeader />
      <SwitchVehiclesButton />
      <HomeVehicle />
      <ChargeInput />
      <StartButton /> 
    </ScrollView>
  );
};

export default HomeScreen;