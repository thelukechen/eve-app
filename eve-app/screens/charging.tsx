import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Charging = () => {
  return (
    <View style={{ ...styles.container, backgroundColor: 'green' }}>
      <Text style={styles.headerText}>Charging</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  headerText: {
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
});

export default Charging;
