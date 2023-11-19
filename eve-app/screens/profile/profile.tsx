import React from 'react';
import { View, ScrollView } from 'react-native';
import ProfileScreenStyles from '../../styles/screens/profileStyles';
import ProfilePic from '../../components/profilePic';
import Cars from '../../components/cars';
import SettingsButtons from '../../components/settings';
import GlobalStyles from '../../styles/globalStyles';
import ProfileHeader from '../../components/profileHeader';

const ProfileScreen = ({ navigation }: {navigation: any}) => {
  
  return (
    <ScrollView contentContainerStyle={GlobalStyles.container} 
    style={GlobalStyles.scrollView} indicatorStyle='white' 
    showsVerticalScrollIndicator={true}>
      <ProfileHeader />
      <ProfilePic />
      <Cars />
      <SettingsButtons />
    </ScrollView>
  );
};

export default ProfileScreen;
