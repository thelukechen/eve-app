import React from 'react';
import { Text } from 'react-native';
import { black } from '../../styles/globalStyles';

interface TimerDisplayProps {
  seconds: number;
}

const TimerDisplay: React.FC<TimerDisplayProps> = ({ seconds }) => {
  const hours = Math.floor(seconds / 3600);
  const minutes = Math.floor((seconds % 3600) / 60);
  const remainingSeconds = seconds % 60;

  const formatNumber = (num: number) => num.toString().padStart(2, '0');

  return (
    <Text style={{ fontSize: 18, color: black }}>
      {formatNumber(hours)}hr {formatNumber(minutes)}m {formatNumber(remainingSeconds)}s
    </Text>
  );
};

export default TimerDisplay;
