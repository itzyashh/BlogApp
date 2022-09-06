import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import StackNavigator from './StackNavigator';
import { BlogProvider } from './src/context/BlogContext';


function App() {
  return (
    <NavigationContainer>
      <StackNavigator />
    </NavigationContainer>
  );
}

export default () => {
  return <BlogProvider>
    <App />
  </BlogProvider>
};