import { StyleSheet } from 'react-native';
import { black, green, white } from '../globalStyles';

const ProfileScreenStyles = StyleSheet.create({
    name: { // used in profilePic.tsx
        fontSize: 26,
        color: white,
    },
    avatar: { // used in profilePic.tsx
        borderWidth: 2, 
        borderColor: white,
    },
    carButton: { // used in cars.tsx
        backgroundColor: 'transparent',
        borderColor: green,
        borderWidth: 2,
        borderRadius: 50,
        marginRight: 20,
        width: 255,
        height: 255,
    },
    carImage: { // used in cars.tsx
        width: 250,
        height: 220,
        marginLeft: 10,
    },
    carText: { // used in cars.tsx
        textAlign: 'center',
        color: white,
        fontSize: 16,
    },
    button: { // used in settings.tsx
        width: '100%',
        paddingTop: 20,
        paddingBottom: 20,
        alignItems: 'flex-start',
        flexDirection: 'row',
        fontSize: 18,
    },
    buttonText: { // used in settings.tsx
        color: white,
        fontSize: 16,
    },
    notifications: { // used in profileHeader.tsx
        paddingLeft: 260,
    },
    editProfile: { // used in profilePic.tsx
        paddingLeft: 220,
    },
    caret: { // used in caretForward.tsx
        paddingLeft: 190,
        alignSelf: 'flex-end'
    },
});

export default ProfileScreenStyles;
