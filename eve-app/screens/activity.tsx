import React, { useEffect } from 'react';
import { ScrollView, StatusBar } from 'react-native';
import GlobalStyles from '../styles/globalStyles';
import ActivityHeader from '../components/activityComponents/activityHeader';
import CurrVehicle from '../components/activityComponents/currVehicle';
import { useIsFocused } from '@react-navigation/native';
import ActivityChargingSpecs from '../components/activityComponents/activityChargingSpecs';
import PowerMixBreakdown from '../components/activityComponents/powerMixBreakdown';
import ChargeHistory from '../components/activityComponents/chargeHistory';

const ActivityScreen = () => {
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
      <StatusBar barStyle='light-content' />
      <ActivityHeader />
      <CurrVehicle />
      <ActivityChargingSpecs />
      <PowerMixBreakdown />
      <ChargeHistory />
    </ScrollView>
  );
};

export default ActivityScreen;
