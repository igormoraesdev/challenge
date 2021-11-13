import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';

import {PageHome, PageDetails} from '../../presentation/pages';

const Stack = createNativeStackNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={PageHome} />
        <Stack.Screen name="Details" component={PageDetails} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
