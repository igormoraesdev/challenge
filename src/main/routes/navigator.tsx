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
  const forFade = ({current}: any) => ({
    cardStyle: {
      opacity: current.progress,
    },
  });
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          options={{headerShown: false, animationEnabled: true}}
          name="Home"
          component={PageHome}
        />
        <Stack.Screen
          options={{
            headerShown: false,
            animationEnabled: true,
            cardStyleInterpolator: forFade,
          }}
          name="Details"
          component={PageDetails}
          sharedElements={(route) => {
            const {item} = route.params;
            return [
              {
                id: `item.${item.id}.photo`,
                animation: 'fade-in',
              },
            ];
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
