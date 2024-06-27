import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from '../views/Home';
import Detail from '../views/Detail';
import {RootStackParamList} from '../types';
const Stack = createNativeStackNavigator<RootStackParamList>();
const routeScreenDefaultOptions = {
  headerStyle: {
    backgroundColor: 'rgba(7, 26, 93, 255)',
  },
  headerTitleStyle: {
    fontWeight: '700',
    color: '#fff',
  },
};
const Routes = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Home}
          options={routeScreenDefaultOptions}
        />
        <Stack.Screen
          name="Detail"
          component={Detail}
          options={routeScreenDefaultOptions}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default Routes;
