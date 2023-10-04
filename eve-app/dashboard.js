import React, { useState } from 'react';
import { View, Text, Switch } from 'react-native';

const DashboardScreen = () => {
  const [currentCharge, setCurrentCharge] = useState(80); // Assuming 80% charge initially
  const [ecoMode, setEcoMode] = useState(false); // Eco mode is initially off

  const handleEcoModeToggle = () => {
    setEcoMode(!ecoMode);
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Current Charge: {currentCharge}%</Text>

      <View style={{ marginTop: 20, flexDirection: 'row', alignItems: 'center' }}>
        <Text>Eco Mode: </Text>
        <Switch
          value={ecoMode}
          onValueChange={handleEcoModeToggle}
        />
      </View>

      <Text style={{ marginTop: 20 }}>Electricity Source Breakdown:</Text>
      <View style={{ marginTop: 10 }}>
        <Text>Nuclear: 20%</Text>
        <Text>Biomass: 10%</Text>
        <Text>Coal: 30%</Text>
        <Text>Wind: 5%</Text>
        <Text>Solar: 15%</Text>
        <Text>Hydro: 10%</Text>
        <Text>Gas: 5%</Text>
        <Text>Oil: 5%</Text>
      </View>
    </View>
  );
};

export default DashboardScreen;
