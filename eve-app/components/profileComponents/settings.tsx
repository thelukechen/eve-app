import React from 'react';
import { TouchableOpacity, View, Text } from 'react-native';
import ProfileScreenStyles from '../../styles/screens/profileStyles';
import GlobalStyles, { white } from '../../styles/globalStyles';
import Icon from 'react-native-vector-icons/Ionicons';
import CaretFoward from './caretForward';
import HorizontalLine from './horizonLine';

const SettingsButtons = () => {

    return (
        <View style={[GlobalStyles.column, { paddingBottom: 120 }]}>
            <View style={GlobalStyles.subView}>
                <Text style={GlobalStyles.subText}>Settings</Text>
            </View>
            <TouchableOpacity style={ProfileScreenStyles.button}>
                <Icon name="person-outline" size={20} color= {white}/>
                <Text style={ProfileScreenStyles.buttonText}>   Personal Information</Text>
                <CaretFoward />
            </TouchableOpacity>
            <HorizontalLine />
            <TouchableOpacity style={ProfileScreenStyles.button}>
                <Icon name="shield-outline" size={20} color= {white}/>
                <Text style={ProfileScreenStyles.buttonText}>   Login and Security    </Text>
                <CaretFoward />
            </TouchableOpacity>
            <HorizontalLine />
            <TouchableOpacity style={ProfileScreenStyles.button}>
                <Icon name="settings-outline" size={20} color= {white}/>
                <Text style={ProfileScreenStyles.buttonText}>   Accessibility              </Text>
                <CaretFoward />
            </TouchableOpacity>
            <HorizontalLine />
            <TouchableOpacity style={ProfileScreenStyles.button}>
                <Icon name="notifications-outline" size={20} color= {white}/>
                <Text style={ProfileScreenStyles.buttonText}>   Notifications             </Text>
                <CaretFoward />
            </TouchableOpacity>
            <HorizontalLine />
            <TouchableOpacity style={ProfileScreenStyles.button}>
                <Icon name="lock-closed-outline" size={20} color= {white}/>
                <Text style={ProfileScreenStyles.buttonText}>   Privacy and Sharing </Text>
                <CaretFoward />
            </TouchableOpacity>
            <HorizontalLine />
            <TouchableOpacity style={ProfileScreenStyles.button}>
                <Icon name="exit-outline" size={20} color= {white}/>
                <Text style={ProfileScreenStyles.buttonText}>   Logout                       </Text>
                <CaretFoward />
            </TouchableOpacity>
        </View>
    );
};

export default SettingsButtons;
