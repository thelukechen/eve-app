// Assuming you have an existing firebase.ts file with the Firebase setup
import { database } from './firebase';
import { ref, set } from 'firebase/database';

export const sendStopSignal = () => {
  set(ref(database, 'start'), 0)
    .then(() => {
      console.log('Stop signal sent successfully.');
    })
    .catch((error) => {
      console.error('Error sending start signal: ', error);
    });
};
