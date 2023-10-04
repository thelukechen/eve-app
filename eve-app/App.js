// import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import { getDatabase, ref, set } from "firebase/database";
import { app } from './firebase-config';

// export default function App() {
//   function writeUserData(timestamp, location, power, charge) {
//     const db = getDatabase();
//     set(ref(db, 'data/' + timestamp), {
//       location: location,
//       power: power,
//       charge: charge,
//     });
//   }

//   return (
//     <Text>Test</Text>,
//     <View>
//       <Button title="Write Data to Firebase" onPress={writeUserData("Sept 27, 2023 1:34 pm", "US-south-east", 11000, 1)} />
//     </View>
//   );
// }

// Import necessary dependencies
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import DashboardScreen from './dashboard'; // Import the DashboardScreen component

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Dashboard" component={DashboardScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
