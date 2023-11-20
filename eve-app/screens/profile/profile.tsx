import React, { useEffect } from 'react';
import { ScrollView, StatusBar } from 'react-native';
import ProfilePic from '../../components/profileComponents/profilePic';
import Cars from '../../components/profileComponents/cars';
import SettingsButtons from '../../components/profileComponents/settings';
import GlobalStyles from '../../styles/globalStyles';
import ProfileHeader from '../../components/profileComponents/profileHeader';
import { useIsFocused } from '@react-navigation/native';

const ProfileScreen = ({ }: {navigation: any}) => {

  const isFocused = useIsFocused();

  useEffect(() => {
    if (isFocused) {
      StatusBar.setBarStyle('light-content');
    }
  }, [isFocused]);
  
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
