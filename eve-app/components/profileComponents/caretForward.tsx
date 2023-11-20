import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import { white } from '../../styles/globalStyles';
import ProfileScreenStyles from '../../styles/screens/profileStyles';

const CaretFoward = () => {
    
  return (
    <Icon name="caret-forward-outline" size={20} color= {white}
    style={ProfileScreenStyles.caret}/>
  );
};

export default CaretFoward;