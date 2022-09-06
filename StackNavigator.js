import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import IndexScreen from './src/IndexScreen';



const Stack = createNativeStackNavigator();
const StackNavigator = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Blogs" component={IndexScreen} />
        </Stack.Navigator>
    )
}

export default StackNavigator

