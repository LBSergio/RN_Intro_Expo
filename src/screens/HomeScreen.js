import React from 'react';
import { Text, Button } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';


export function HomeScreen(props) {
    const { navigation } = props;

    const goToSetting = () => {
        navigation.navigate('Settings');
    }

    return(
        <SafeAreaView>
            <Text>TEXTO</Text>
            <Text>TEXTO</Text>
            <Text>TEXTO</Text>
            <Text>TEXTO</Text>
            <Text>TEXTO</Text>
            <Text>TEXTO</Text>
            <Text>TEXTO</Text>
            <Text>TEXTO</Text>
            <Text>TEXTO</Text>
            <Text>TEXTO</Text>
            <Button type='button' onPress={ goToSetting } title='Go to Settings'/>
        </SafeAreaView>
    )
}