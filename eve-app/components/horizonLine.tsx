import React from 'react';
import { View, StyleSheet } from 'react-native';
import { white } from '../styles/globalStyles';

const HorizontalLine = () => {
    
  return (
    <View style={styles.line}></View>
  );
};

const styles = StyleSheet.create({
    line: {
        borderTopWidth: .3,
        borderTopColor: white,
        width: '100%',
    }
});

export default HorizontalLine;