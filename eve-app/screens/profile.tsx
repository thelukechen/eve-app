import React, { useEffect } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import ProfileScreenStyles from '../styles/screens/profileStyles';
import * as Font from 'expo-font';
import { StatusBar } from 'expo-status-bar';
import { Avatar, Icon } from 'react-native-elements';
import GlobalStyles from '../styles/appStyles';

const ProfileScreen = () => {
  const [fontsLoaded, setFontsLoaded] = React.useState(false);

  const loadFonts = async () => {
    await Font.loadAsync({
      'SFProDisplay-Bold': require('../assets/fonts/SF-Pro-Display-Bold.otf'),
    });
    setFontsLoaded(true);
  };

  const electricVehicles = [
    {
      name: 'Tesla Model Y',
      image: require('../assets/images/model-y.png'),
    },
    {
      name: 'Tesla Cybertruck',
      image: require('../assets/images/cybertruck.png'),
    },
    {
      name: 'Chevrolet Bolt',
      image: require('../assets/images/bolt.png'),
    },
    {
      name: 'Rivian R1T',
      image: require('../assets/images/rivian.png'),
    },
  ];
  
  useEffect(() => {
    loadFonts();
  }, []);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <ScrollView contentContainerStyle={styles.container} style={styles.scrollView}>
<View style={ProfileScreenStyles.container}>
      <View style={ProfileScreenStyles.container}>
        <StatusBar style="light" />
        <View style={ProfileScreenStyles.name}></View>
        <View style={ProfileScreenStyles.name}></View>
        <Text style={[ProfileScreenStyles.tabName, { fontFamily: 'SFProDisplay-Bold' }]}>Profile</Text>
        <View style={styles.profilePicContainer}>
          <Avatar
            rounded
            size="xlarge"
            source={require('../assets/images/profile_pic.jpg')}
            containerStyle={{
              borderColor: '#38feaf',
              borderWidth: 4,
            }}
          />
          <Avatar.Accessory
            name="create"
            size={35}
            type="font-awesome-4"
            color="#38feaf"
            backgroundColor={'#212121'}
            borderRadius={20}
            onPress={() => console.log('Profile Edit Button Pressed')}
            />
        </View>
        <View>
          <View><Text></Text></View>
        </View>
        <ScrollView horizontal={true}>        
          {electricVehicles.map((vehicle, index) => (
            <TouchableOpacity key={index} style={{ margin: 4, borderWidth: 1, borderColor: 'white', borderRadius: 20}}>
              <Image source={vehicle.image} style={{ width: 150, height: 150 }} />
              <Text style={{ textAlign: 'center', marginTop: 10, color: 'white' }}>{vehicle.name}</Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
        <View style={styles.container}>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Personal Information</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Login and Security</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Accessibility</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Notifications</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Privacy and Sharing</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Logout</Text>
      </TouchableOpacity>
    </View>
      </View>
    </View>
    </ScrollView>
    
  );
};

      const styles = StyleSheet.create({
        container: {
          flexGrow: 1,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: '#212121',
          color: '#212121',
        },
        scrollView: {
          backgroundColor: '#212121', // Change this color for the overscroll area
        },
        profilePicContainer: {
          position: 'relative',
        },
        profilePic: {
          borderWidth: 5,
          color: '#38feaf',
          borderColor: '#38feaf',
        },
        editButton: {
          position: 'relative',
          bottom: 0,
          right: 0,
        },
        editIcon: {
          borderRadius: 100,
          width: 40,
          height: 40,
        },
        button: {
          width: '100%',
          padding: 20,
          borderBottomWidth: 1,
          borderColor: 'white',
          alignItems: 'center',
        },
        buttonText: {
          color: 'white',
          fontSize: 18,
        },
      });

      export default ProfileScreen;
