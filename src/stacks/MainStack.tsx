import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';

import Preload from '../screens/Preload';
import Home from '../screens/Home';
import Descriptions from '../screens/Descriptions';

const Stack = createStackNavigator();

export default function MainStack() {
    return (
        <Stack.Navigator
            initialRouteName="Preload"
            screenOptions={{
                headerShown: false
            }}
        >
            <Stack.Screen name="Preload" component={Preload} />
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="Descriptions" component={Descriptions} />
        </Stack.Navigator>
    )
}
