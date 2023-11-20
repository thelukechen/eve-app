import { StyleSheet } from 'react-native';
import { black, green, white } from '../globalStyles';

const HomeScreenStyles = StyleSheet.create({
    search: { // used in homeHeader.tsx
        paddingLeft: 269,
    },
    switchText: { // used in switchVehicles.tsx
        color: white,
        fontSize: 14,
        textDecorationLine: 'underline',
        paddingRight: 10,
    },
    switchView: { // used in switchVehicles.tsx
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignSelf: 'flex-end',
    },
    carImage: { // used in homeVehicle.tsx
        width: 400,
        height: 200,
    },
    carDetailsText: { // used in homeVehicle.tsx
        textAlign: 'center',
        color: white,
        fontSize: 20,
    },
    startButton: { // used in startButton.tsx
        backgroundColor: green,
        borderRadius: 100, // Make it a circle by setting a large border radius
        padding: 15,
        width: 120, // Adjust the width and height to set the size of the circle
        height: 120,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 20,
    },
    startButtonText: { // used in startButton.tsx
        color: black,
        textAlign: 'center',
        fontSize: 24,
        fontWeight: 'bold',
    },
    chargeInputText: { // used in chargeInput.tsx
        color: white,
        fontSize: 16,
    },
    picker: { // used in chargeInput.tsx
        width: 280,
        color: white,
        height: 120,
        textAlign: 'center',
        textAlignVertical: 'center',
    },
    pickerView: { // used in chargeInput.tsx
        height: 80,
        marginBottom: 80,
    }
});

export default HomeScreenStyles;