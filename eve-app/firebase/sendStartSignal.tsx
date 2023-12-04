// Assuming you have an existing firebase.ts file with the Firebase setup
import { database } from './firebase';
import { ref, set } from 'firebase/database';

export const sendStartSignal = () => {
  set(ref(database, 'start'), 1)
    .then(() => {
      console.log('Start signal sent successfully.');
    })
    .catch((error) => {
      console.error('Error sending start signal: ', error);
    });
};
