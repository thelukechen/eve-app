import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import GlobalStyles, { black } from '../../styles/globalStyles';
import HomeScreenStyles from '../../styles/screens/homeStyles';

const HomeHeaderC = () => {
    
  return (
    <View style={GlobalStyles.row}>
        <Text style={[GlobalStyles.tabName, {color: black}]}>Home</Text>
        <TouchableOpacity onPress={() => console.log('Search Button Pressed')}>
          <Icon name="search-outline" size={26} color= {black} 
          style={HomeScreenStyles.search}/>
        </TouchableOpacity>
      </View>
  );
};

export default HomeHeaderC;