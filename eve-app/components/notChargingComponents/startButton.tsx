import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import GlobalStyles from '../../styles/globalStyles';
import HomeScreenStyles from '../../styles/screens/homeStyles';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../../screens/home/home';

type HomeScreenProps = {
    navigation: StackNavigationProp<RootStackParamList, 'NotCharging'>;
  };

const StartButton: React.FC<HomeScreenProps> = ({ navigation }) => {
    const handleStartPress = () => {
        console.log('Start button pressed!');
        navigation.navigate('Charging');
    };
      
    return (
        <View style={[GlobalStyles.row, {justifyContent: 'center'}]}>
            <TouchableOpacity onPress={handleStartPress} style={HomeScreenStyles.startButton}>
                <Text style={HomeScreenStyles.startButtonText}>START</Text>
            </TouchableOpacity>
        </View>
    );
};

export default StartButton;