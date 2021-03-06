import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../scenes/home/Home';
import CameraHandler from '../scenes/Camera/Camera';

const Stack = createNativeStackNavigator();

function ApplicationNavigator() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen
                    name="home"
                    component={Home}
                />
                <Stack.Screen
                    name="camera"
                    component={CameraHandler}
                />
                {/* <Stack.Screen name="Profile" component={ProfileScreen} /> */}
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default ApplicationNavigator
