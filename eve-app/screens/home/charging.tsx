import React, { useEffect, useState } from 'react';
import { ScrollView, View, Text, TouchableOpacity, StatusBar } from 'react-native';
import GlobalStyles, { black, green, white } from '../../styles/globalStyles';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from './home';
import HomeScreenStyles from '../../styles/screens/homeStyles';
import HomeHeaderC from '../../components/chargingComponents/homeHeaderC';
import SwitchVehiclesButtonC from '../../components/chargingComponents/switchVehiclesC';
import HomeVehicleC from '../../components/chargingComponents/homeVehicleC';
import { useIsFocused } from '@react-navigation/native';
import ChargingSpecs from '../../components/chargingComponents/chargingSpecs';
import TimerParent from '../../components/chargingComponents/timerParent';

type HomeScreenProps = {
  navigation: StackNavigationProp<RootStackParamList, 'Charging'>;
};

const ChargingScreen: React.FC<HomeScreenProps> = ({ navigation }) => {

  const isFocused = useIsFocused();

  useEffect(() => {
    if (isFocused) {
      StatusBar.setBarStyle('dark-content');
    }
  }, [isFocused]);

  const handleStartPress = () => {
    console.log('Stop button pressed!');
    navigation.navigate('NotCharging');
  };

  return (
    <ScrollView contentContainerStyle={[GlobalStyles.container, {backgroundColor: green}]} 
    style={[GlobalStyles.scrollView, {backgroundColor: green}]} indicatorStyle='white'
    scrollEnabled={true}
    showsVerticalScrollIndicator={true}>
      <HomeHeaderC />
      <SwitchVehiclesButtonC />
      <HomeVehicleC />
      <ChargingSpecs />
      {/* <View style={[GlobalStyles.row, {justifyContent: 'center'}]}>
        <TimerParent />
      </View> */}
    </ScrollView>
  );
};

export default ChargingScreen;