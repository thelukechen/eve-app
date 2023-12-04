import React, { useEffect, useState } from 'react';
import { ScrollView, View, Text, TouchableOpacity, StatusBar } from 'react-native';
import GlobalStyles from '../../styles/globalStyles';
import HomeHeader from '../../components/notChargingComponents/homeHeader';
import SwitchVehiclesButton from '../../components/notChargingComponents/switchVehicles';
import HomeVehicle from '../../components/notChargingComponents/homeVehicle';
import ChargeInput from '../../components/notChargingComponents/chargeInput';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from './home';
import HomeScreenStyles from '../../styles/screens/homeStyles';
import { useIsFocused } from '@react-navigation/native';
import TimerParent from '../../components/chargingComponents/timerParent';

type HomeScreenProps = {
  navigation: StackNavigationProp<RootStackParamList, 'NotCharging'>;
};

const NotChargingScreen: React.FC<HomeScreenProps> = ({ navigation }) => {

  const isFocused = useIsFocused();

  useEffect(() => {
    if (isFocused) {
      StatusBar.setBarStyle('light-content');
    }
  }, [isFocused]);

  const handleStartPress = () => {
    console.log('Start button pressed!');
    navigation.navigate('Charging');
  };

  return (
    <ScrollView contentContainerStyle={GlobalStyles.container} 
    style={GlobalStyles.scrollView} indicatorStyle='white'
    scrollEnabled={true}
    showsVerticalScrollIndicator={true}>
      <HomeHeader />
      <SwitchVehiclesButton />
      <HomeVehicle />
      <ChargeInput />
      <View style={[GlobalStyles.row, {justifyContent: 'center', paddingTop: 45}]}>
        <TimerParent />
      </View>
    </ScrollView>
  );
};

export default NotChargingScreen;