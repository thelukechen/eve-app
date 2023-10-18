import React from 'react';
import { View, Button, StyleSheet } from 'react-native';
// import { GoogleSignin, statusCodes } from '@react-native-community/google-signin';
// import auth from '@react-native-firebase/auth';

const SignInScreen = () => {
//   const signInWithGoogle = async () => {
//     try {
//       await GoogleSignin.hasPlayServices();
//       const { idToken } = await GoogleSignin.signIn();
//       const googleCredential = auth.GoogleAuthProvider.credential(idToken);

//       // Sign in with Google credential
//       await auth().signInWithCredential(googleCredential);
//     } catch (error) {
//       if (error.code === statusCodes.SIGN_IN_CANCELLED) {
//         console.log('User cancelled Google Sign In');
//       } else if (error.code === statusCodes.IN_PROGRESS) {
//         console.log('Google Sign In already in progress');
//       } else {
//         console.error('Google Sign In error:', error);
//       }
//     }
//   };

  return (
    <View style={styles.container}>
      {/* <Button title="Sign In with Google" onPress={signInWithGoogle} /> */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default SignInScreen;
