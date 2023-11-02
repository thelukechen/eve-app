import React, { useEffect } from 'react';
import { View, Text, Image, TouchableOpacity , Button, StatusBar} from 'react-native';
import ProfileScreenStyles from '../styles/screens/profileStyles';
import * as Font from 'expo-font';

const ProfileScreen = () => {
    // const carImage = require('../assets/cybertruck.png'); 
    const loadFonts = async () => {
        await Font.loadAsync({
          'SFProDisplay-Bold': require('../assets/fonts/SF-Pro-Display-Bold.otf'),
          'SFProDisplay-Regular': require('../assets/fonts/SF-Pro-Display-Regular.otf'),
        });
      };
        
    useEffect(() => {
        loadFonts();
    }, []);
  

    return (
        <View style={ProfileScreenStyles.container}>
            <View style={ProfileScreenStyles.container}>
                <StatusBar style="light" />
                <Text style={ProfileScreenStyles.tabName}>Profile</Text>
                {/* <Button title="Go Back" onPress={() => NavigationService.goBack()} /> */}
            </View>
            
            {/* <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <Image source={{ uri: 'https://example.com/profile-picture.jpg' }} style={{ width: 80, height: 80, borderRadius: 40 }} />
                <Text style={{ fontSize: 24, fontWeight: 'bold', marginLeft: 20 }}>John Doe</Text>
            </View>
            <View style={{ marginTop: 40 }}>
                <Image source={carImage} style={{ width: 200, height: 100 }} />
            </View>
            <View style={{ marginTop: 40 }}>
                <TouchableOpacity style={{ backgroundColor: '#007AFF', padding: 10, borderRadius: 5, marginBottom: 10 }}>
                    <Text style={{ color: 'white', fontWeight: 'bold' }}>Settings</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{ backgroundColor: '#007AFF', padding: 10, borderRadius: 5, marginBottom: 10 }}>
                    <Text style={{ color: 'white', fontWeight: 'bold' }}>Login & Security</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{ backgroundColor: '#007AFF', padding: 10, borderRadius: 5, marginBottom: 10 }}>
                    <Text style={{ color: 'white', fontWeight: 'bold' }}>Accessibility</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{ backgroundColor: '#007AFF', padding: 10, borderRadius: 5, marginBottom: 10 }}>
                    <Text style={{ color: 'white', fontWeight: 'bold' }}>Privacy and Sharing</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{ backgroundColor: '#007AFF', padding: 10, borderRadius: 5, marginBottom: 10 }}>
                    <Text style={{ color: 'white', fontWeight: 'bold' }}>Support</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{ backgroundColor: '#007AFF', padding: 10, borderRadius: 5 }}>
                    <Text style={{ color: 'white', fontWeight: 'bold' }}>Logout</Text>
                </TouchableOpacity>
            </View> */}
        </View>
    );
};

export default ProfileScreen;
