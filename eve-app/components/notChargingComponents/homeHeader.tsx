import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import GlobalStyles, { white } from '../../styles/globalStyles';
import HomeScreenStyles from '../../styles/screens/homeStyles';

const HomeHeader = () => {
    
  return (
    <View style={GlobalStyles.row}>
        <Text style={GlobalStyles.tabName}>Home</Text>
        <TouchableOpacity onPress={() => console.log('Search Button Pressed')}>
          <Icon name="search-outline" size={26} color= {white} 
          style={HomeScreenStyles.search}/>
        </TouchableOpacity>
      </View>
  );
};

export default HomeHeader;