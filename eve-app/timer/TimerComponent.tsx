import React, { useContext } from 'react';
import { Text, TextStyle } from 'react-native';
import { TimerContext } from './TimerContext';

interface TimerComponentProps {
  style?: TextStyle;
}

const TimerComponent: React.FC<TimerComponentProps> = ({ style }) => {
  const { time } = useContext(TimerContext);

  return <Text style={style}>{time}</Text>;
};

export default TimerComponent;
