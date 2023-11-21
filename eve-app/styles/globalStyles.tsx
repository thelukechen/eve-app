import { StyleSheet } from 'react-native';

export const green = '#38FEAF';
export const black = '#212121';
export const white = '#D7D7D7';

export const GlobalStyles = StyleSheet.create({
    tabName: {
        fontSize: 32,
        marginBottom: 10,
        color: white,
        fontWeight: 'bold',
    },
    subText: {
        fontSize: 22,
        marginBottom: 10,
        color: white,
        fontWeight: 'bold',
    },
    scrollView: {
        backgroundColor: black,
    },
    container: {
        paddingLeft: 20,
        paddingRight: 20,
        paddingTop: 100,
        backgroundColor: black,
        alignItems: 'center',
        // justifyContent: 'center',
        justifyContent: 'flex-start',
    },
    row: {
        width: '100%',
        // flex: 1,
        flexDirection: 'row',
        alignItems: 'flex-start',
        paddingBottom: 5,
        paddingTop: 5,
        paddingLeft: 1,
        paddingRight: 1,
    },
    column: {
        width: '100%',
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        paddingBottom: 5,
        paddingTop: 5,
        paddingLeft: 1,
        paddingRight: 1,
        backgroundColor: black,
    },
    subView: {
        width: '100%',
        paddingTop: 20,
        flexDirection: 'row',
    },
    test: {
        borderWidth: 1,
        borderColor: 'yellow',
    },
    center: {
        alignItems: 'center',
        justifyContent: 'center',
    },
});

export default GlobalStyles;
