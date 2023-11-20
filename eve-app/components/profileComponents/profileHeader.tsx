import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import ProfileScreenStyles from '../../styles/screens/profileStyles';
import Icon from 'react-native-vector-icons/Ionicons';
import GlobalStyles, { white } from '../../styles/globalStyles';

const ProfileHeader = () => {
    
  return (
    <View style={GlobalStyles.row}>
        <Text style={GlobalStyles.tabName}>Profile</Text>
        <TouchableOpacity onPress={() => console.log('Notifications Button Pressed')}>
          <Icon name="notifications-outline" size={26} color= {white} 
          style={ProfileScreenStyles.notifications}/>
        </TouchableOpacity>
      </View>
  );
};

export default ProfileHeader;