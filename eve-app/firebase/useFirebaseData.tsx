// useFirebaseData.ts

import { useState, useEffect } from 'react';
import { ref, onValue } from 'firebase/database';
import { database } from './firebase';

const useFirebaseData = (path: string) => {
  const [data, setData] = useState<any>(null);

  useEffect(() => {
    const dbRef = ref(database, path);
    const unsubscribe = onValue(dbRef, (snapshot) => {
      const data = snapshot.val();
      setData(data);
    });

    return () => unsubscribe();
  }, [path]);

  return data;
};

export default useFirebaseData;
