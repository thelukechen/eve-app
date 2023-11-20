import React from 'react';
import { ScrollView } from 'react-native';
import ProfilePic from '../../components/profileComponents/profilePic';
import Cars from '../../components/profileComponents/cars';
import SettingsButtons from '../../components/profileComponents/settings';
import GlobalStyles from '../../styles/globalStyles';
import ProfileHeader from '../../components/profileComponents/profileHeader';

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
