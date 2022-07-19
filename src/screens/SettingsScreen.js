import React from 'react';
import { Text, Button } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export function SettingsScreen(props) {
    const { navigation } = props;

    const goToPage = (pageName) => {
        navigation.navigate(pageName);
    }

    return(
        <SafeAreaView>
            <Text>SettingsScreen</Text>
            <Text>SettingsScreen</Text>
            <Text>SettingsScreen</Text>
            <Text>SettingsScreen</Text>
            <Text>SettingsScreen</Text>
            <Text>SettingsScreen</Text>
            <Text>SettingsScreen</Text>
            <Text>SettingsScreen</Text>
            <Text>SettingsScreen</Text>
            <Text>SettingsScreen</Text>
            <Button type='button' onPress={ () => goToPage('Home') } title='Go to Home'/>
        </SafeAreaView>
    )
}