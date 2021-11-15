import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {createSharedElementStackNavigator} from 'react-navigation-shared-element';

import {EpisodesModel} from '../../domain';
import {PageHome, PageDetails} from '../../presentation/pages';

export type RootStackParamList = {
  Home: undefined;
  Details: {item: EpisodesModel};
};

const Stack = createSharedElementStackNavigator<RootStackParamList>();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          options={{headerShown: false}}
          name="Home"
          component={PageHome}
        />
        <Stack.Screen
          options={{headerShown: false}}
          name="Details"
          component={PageDetails}
          sharedElements={(route, otherRoute, showing) => {
            const {item} = route.params;
            return [`item.${item.id}.photo`];
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
