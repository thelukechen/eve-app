import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import ProfileScreenStyles from '../../styles/screens/profileStyles';
import { Avatar } from 'react-native-elements';
import Icon from 'react-native-vector-icons/Ionicons';
import GlobalStyles, { white } from '../../styles/globalStyles';

const ProfilePic = () => {
    
  return (
    <View style={[GlobalStyles.row, GlobalStyles.center]}>
      <Avatar rounded size="large" 
      containerStyle={ProfileScreenStyles.avatar}
      source={require('../../assets/images/profile_pic.jpeg')}
      />
      <Text style={ProfileScreenStyles.name}>  Luke</Text>
      <TouchableOpacity onPress={() => console.log('Edit Profile Button Pressed')}>
        <Icon name="create-outline" size={20} color= {white} 
        style={ProfileScreenStyles.editProfile}/>
      </TouchableOpacity>
    </View>
  );
};

export default ProfilePic;