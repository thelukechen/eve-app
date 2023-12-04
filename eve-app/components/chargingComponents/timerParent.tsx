import React, { useState, useEffect } from 'react';
import { View, Text } from 'react-native';
import TimerDisplay from './timeDisplay';
import TimerControl from './timerControl';
import HomeEnergyGraph from './homeEnergyGraph';
import HomeScreenStyles from '../../styles/screens/homeStyles';
import GlobalStyles, { black } from '../../styles/globalStyles';
import Icon from 'react-native-vector-icons/Ionicons';


const TimerParent: React.FC = () => {
  const [seconds, setSeconds] = useState<number>(0);
  const [isActive, setIsActive] = useState<boolean>(false);

  useEffect(() => {
    let interval: NodeJS.Timeout | null = null;

    if (isActive) {
      interval = setInterval(() => {
        setSeconds(seconds => seconds + 1);
      }, 1000);
    } else if (!isActive && interval) {
      clearInterval(interval);
    }

    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isActive, seconds]);

  const toggleTimer = () => {
    setIsActive(!isActive);
  };

  return (
    <View>
    <View style={HomeScreenStyles.chargeSpecsView}>
      <View style={[GlobalStyles.row, HomeScreenStyles.chargeGreen]}>
        <View style={[GlobalStyles.column, HomeScreenStyles.chargeGreen]}>
          <Icon name="flash-outline" size={26} color= {black}/>
          <Text style={HomeScreenStyles.chargeSpecsText}>21 kW</Text>
        </View>
        <View style={[GlobalStyles.column, HomeScreenStyles.chargeGreen]}>
          <Icon name="timer-outline" size={26} color= {black}/>
          <TimerDisplay seconds={seconds} />
        </View>
    </View>
    <HomeEnergyGraph />
      <Text>Energy Delivered (kWh)</Text>
      <TimerControl isActive={isActive} toggleTimer={toggleTimer} />
    </View>
    </View>
  );
};

export default TimerParent;
