import React, { useEffect } from 'react';
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
import { sendStopSignal } from '../../firebase/sendStopSignal';

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
    sendStopSignal();
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
      <ChargingSpecs />
      <View style={[GlobalStyles.row, {justifyContent: 'center'}]}>
        <TouchableOpacity onPress={handleStartPress} style={[HomeScreenStyles.startButton, {backgroundColor: black}]}>
          <Text style={[HomeScreenStyles.startButtonText, {color: white}]}>STOP</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default ChargingScreen;