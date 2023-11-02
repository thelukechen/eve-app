import { StyleSheet } from 'react-native';

const ProfileScreenStyles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 15,
        backgroundColor: 'black',
    },
    tabName: {
        fontSize: 32,
        fontFamily: 'SFProDisplay-Bold',
        marginBottom: 10,
        color: 'white',
    },
    profileImage: {
        width: 150,
        height: 150,
        borderRadius: 75,
        marginBottom: 20,
    },
    name: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 10,
        color: 'white',
    },
    bio: {
        fontSize: 16,
        textAlign: 'center',
        marginHorizontal: 20,
        marginBottom: 20,
    },
    button: {
        backgroundColor: '#007AFF',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 5,
    },
    buttonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
    },
});

export default ProfileScreenStyles;
