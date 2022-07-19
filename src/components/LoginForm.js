import React from 'react';
import { TextInput, Button, Text, View } from 'react-native';

export function LoginForm(){
    return(
        <View>
            <TextInput placeholder='Email'/>
            <TextInput type='password' placeholder='Password'/>
            <Button type='button' title='Enviar' onPress={()=> console.log("Enviar2")}/>
        </View>
    )
}