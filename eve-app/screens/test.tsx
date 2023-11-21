import React, { useState } from 'react';
import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import GlobalStyles from '../styles/globalStyles';

const SummaryComponent = () => {
  const [showDetails, setShowDetails] = useState(false);

  const toggleDetails = () => {
    setShowDetails(!showDetails);
  };

  return (
    <ScrollView contentContainerStyle={GlobalStyles.container} 
    style={GlobalStyles.scrollView} indicatorStyle='white' 
    showsVerticalScrollIndicator={true}>
    <View>
      <Text>Summary Information</Text>

      {showDetails ? (
        <View>
          {/* Detailed Information */}
          <Text>Detailed Information 1</Text>
          <Text>Detailed Information 2</Text>
          <Text>Detailed Information 3</Text>
        </View>
      ) : null}

      <TouchableOpacity onPress={toggleDetails}>
        <Text>{showDetails ? 'Hide Details' : 'Show Details'}</Text>
      </TouchableOpacity>
    </View>
    </ScrollView>
  );
};

export default SummaryComponent;
