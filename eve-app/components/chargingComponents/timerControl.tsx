import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import HomeScreenStyles from '../../styles/screens/homeStyles';
import { black, white } from '../../styles/globalStyles';
import { StackNavigationProp } from '@react-navigation/stack';
import { useNavigation } from '@react-navigation/native';


interface TimerControlProps {
  isActive: boolean;
  toggleTimer: () => void;
}

const TimerControl: React.FC<TimerControlProps> = ({ isActive, toggleTimer }) => {
  // const navigation = useNavigation();
  // const handlePress = () => {
  //   if (isActive) {
  //     // Navigate to another screen when the timer is active
  //     navigation.navigate('Charging');
  //     toggleTimer();
  //   } else {
  //     // Start the timer if it's not active
  //     navigation.navigate('NotCharging');
  //     toggleTimer();
  //   }
  // };

  return <TouchableOpacity onPress={toggleTimer} style={isActive ? [HomeScreenStyles.startButton, {backgroundColor: black}]: HomeScreenStyles.startButton}>
          <Text style={isActive ? [HomeScreenStyles.startButtonText, {color: white}] : HomeScreenStyles.startButtonText}>{isActive ? 'STOP' : 'START'}</Text>
        </TouchableOpacity>;
};

export default TimerControl;
