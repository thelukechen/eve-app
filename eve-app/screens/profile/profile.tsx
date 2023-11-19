import React from 'react';
import { ScrollView } from 'react-native';
import ProfilePic from '../../components/profilePic';
import Cars from '../../components/cars';
import SettingsButtons from '../../components/settings';
import GlobalStyles from '../../styles/globalStyles';
import ProfileHeader from '../../components/profileHeader';

const ProfileScreen = ({ }: {navigation: any}) => {
  
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
