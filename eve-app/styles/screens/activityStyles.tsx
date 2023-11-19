import { StyleSheet } from 'react-native';
import { green, white } from '../globalStyles';
import CurrVehicle from '../../components/currVehicle';

const ActivityScreenStyles = StyleSheet.create({
    refresh: { // used in activityHeader.tsx
        paddingLeft: 245,
    },
    avatar: { // used in currVehicle.tsx
        width: 140,
        height: 70,
        marginLeft: 15,
    },
    name: { // used in profilePic.tsx
        fontSize: 26,
        color: white,
    },
    switchText: { // used in currVehicle.tsx
        color: white,
        fontSize: 11,
    },
    switchView: { // used in currVehicle.tsx   
        flexDirection: 'column', 
        paddingLeft: 50,
        paddingRight: 20,
    },
    currVehicle: { // used in currVehicle.tsx
        borderWidth: 2,
        borderColor: green,
        borderRadius: 36,
        width: '100%',
    }
});

export default ActivityScreenStyles;