import React, { useContext, useEffect } from 'react';
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
import { sendStartSignal } from '../../firebase/sendStartSignal';
import { TimerContext } from '../../timer/TimerContext';

type HomeScreenProps = {
  navigation: StackNavigationProp<RootStackParamList, 'NotCharging'>;
};

const NotChargingScreen: React.FC<HomeScreenProps> = ({ navigation }) => {

  const { startTimer, resetTimer } = useContext(TimerContext);

  const isFocused = useIsFocused();

  useEffect(() => {
    if (isFocused) {
      StatusBar.setBarStyle('light-content');
    }
  }, [isFocused]);

  const handleStartPress = () => {
    console.log('Start button pressed!');
    sendStartSignal();
    resetTimer();
    startTimer();
    navigation.navigate('Charging');
  };

  return (
    <ScrollView contentContainerStyle={GlobalStyles.container} 
    style={GlobalStyles.scrollView} indicatorStyle='white'
    scrollEnabled={false}
    showsVerticalScrollIndicator={true}>
      <HomeHeader />
      <SwitchVehiclesButton />
      <HomeVehicle />
      <ChargeInput />
      <View style={[GlobalStyles.row, {justifyContent: 'center', paddingTop: 45}]}>
        <TouchableOpacity onPress={handleStartPress} style={HomeScreenStyles.startButton}>
          <Text style={HomeScreenStyles.startButtonText}>START</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default NotChargingScreen;