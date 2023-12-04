import React, { FC } from 'react';
import { View, Image, ImageSourcePropType, StyleProp, ViewStyle } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

interface FadingBorderImageProps {
  source: ImageSourcePropType;
  style?: StyleProp<ViewStyle>;
}

const FadingBorderImage: FC<FadingBorderImageProps> = ({ source, style }) => {
  return (
    <View style={[style, { overflow: 'hidden' }]}>
      <LinearGradient
        colors={['transparent', 'white']} // Adjust colors for the desired effect
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        style={{ 
          position: 'absolute', 
          top: 0, 
          bottom: 0, 
          left: 0, 
          right: 0 
        }}
      />
      <Image source={source} style={{ width: '100%', height: '100%' }} />
    </View>
  );
};

export default FadingBorderImage;
