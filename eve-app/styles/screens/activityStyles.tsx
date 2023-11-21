import { StyleSheet } from 'react-native';
import { black, green, white } from '../globalStyles';

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
        textDecorationLine: 'underline',
    },
    switchView: { // used in currVehicle.tsx
        flexDirection: 'column', 
        paddingLeft: 50,
        paddingRight: 20,
    },
    currVehicle: { // used in currVehicle.tsx
        // borderWidth: 2,
        borderColor: green,
        borderRadius: 30,
        width: '100%',
    },
    chargeBlack: { // used in activityChargingSpecs.tsx
        backgroundColor: black,
    },
    chargeSpecsText: { // used in activityChargingSpecs.tsx
        color: white,
        fontSize: 18,
    },
    textWhite: { // used in activityChargingSpecs.tsx
        color: white,
    },
    carDetailsText: { // used in connection.tsx
        textAlign: 'center',
        color: green,
        fontSize: 20,
    },
    breakdownInfoButton: { // used in powerMixBreakdown.tsx 
        paddingLeft: 135,
    },

});

export default ActivityScreenStyles;