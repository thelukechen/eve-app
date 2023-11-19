import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';

const PersonalInfoScreen = ({ navigation }: {navigation: any}) => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');

  const handleSave = () => {
    // Save the personal info
  };

  const handleEditEmail = () => {
    // Handle edit email
  };

  const handleEditPhoneNumber = () => {
    // Handle edit phone number
  };

  return (
    <View style={{ backgroundColor: '#212121', flex: 1, padding: 16 }}>
      <Text style={{ color: 'white', fontSize: 24, marginBottom: 16 }}>
        Edit personal info
      </Text>
      <TextInput
        style={{ backgroundColor: 'white', marginBottom: 16, padding: 8 }}
        placeholder="First Name"
        value={firstName}
        onChangeText={setFirstName}
      />
      <TextInput
        style={{ backgroundColor: 'white', marginBottom: 16, padding: 8 }}
        placeholder="Last Name"
        value={lastName}
        onChangeText={setLastName}
      />
      <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 16 }}>
        <Text style={{ color: 'white', flex: 1 }}>{email}</Text>
        <Button title="Edit" onPress={handleEditEmail} />
      </View>
      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        <Text style={{ color: 'white', flex: 1 }}>{phoneNumber}</Text>
        <Button title="Edit" onPress={handleEditPhoneNumber} />
      </View>
      <Button title="Save" onPress={handleSave} />
    </View>
  );
};

export default PersonalInfoScreen;
