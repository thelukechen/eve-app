import { StyleSheet } from 'react-native';
import { green, white } from '../globalStyles';

const ProfileScreenStyles = StyleSheet.create({
    name: { // used in profilePic.tsx
        fontSize: 28,
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
        borderRadius: 60,
        marginRight: 20,
        width: 255,
        height: 300,
    },
    carImage: { // used in cars.tsx
        width: 225,
        height: 120,
        marginLeft: 15,
        marginTop: 15,
        marginBottom: 15,
    },
    carText: { // used in cars.tsx
        textAlign: 'center',
        color: white,
        fontSize: 18,
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
        paddingLeft: 216,
    },
    caret: { // used in caretForward.tsx
        paddingLeft: 190,
        alignSelf: 'flex-end'
    },
    addButton: { // used in cars.tsx
        flexDirection: 'row', 
        justifyContent: 'space-between', 
        alignItems: 'flex-end',
    },
    addButtonText: { // used in cars.tsx
        color: green,
        fontSize: 16,
        fontWeight: 'normal',
    },
    editButton: { // used in cars.tsx
        color: white,
        fontSize: 16,
        fontWeight: 'normal',
        marginRight: 10,
    },
    carDetails: { // used in cars.tsx
        width: '100%',
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        paddingLeft: 1,
        paddingRight: 1,
    },
    carDetailsText: { // used in cars.tsx
        textAlign: 'center',
        color: white,
        fontSize: 16,
    }
});

export default ProfileScreenStyles;
