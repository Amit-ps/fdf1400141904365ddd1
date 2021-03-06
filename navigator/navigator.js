import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screens/home';
import DetailsScreen from '../screens/details';
import RandomAsteroidListScreen from '../screens/randomAsteroidList';

const Stack = createStackNavigator();

export default function ScreenNavigator() {
    return (
        <NavigationContainer>
          <Stack.Navigator initialRouteName="Home">
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen name="Details" component={DetailsScreen} />
            <Stack.Screen name="RandomList" component={RandomAsteroidListScreen} />
          </Stack.Navigator>
        </NavigationContainer>
      );
}