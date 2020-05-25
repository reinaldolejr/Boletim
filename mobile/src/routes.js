import 'react-native-gesture-handler';
import React from "react";

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator, TransitionPresets } from '@react-navigation/stack';
const AppStack = createStackNavigator();

import Home from "./pages/Home";
import ReportDetails from './pages/ReportDetails';
import SaveReport from './pages/SaveReport'

export default function Routes() {
  return (
    <NavigationContainer>
      <AppStack.Navigator
        screenOptions={{
          headerTintColor: 'white',
          headerStyle: { backgroundColor: 'black' },
        }}>
        <AppStack.Screen name="Home" component={Home}
          options={{ title: 'Boletim' }} />
        <AppStack.Screen name="ReportDetails" component={ReportDetails}
          options={({ route }) => ({ title: `Boletim ${route.params.name}` })} />
        <AppStack.Screen name="SaveReport" component={SaveReport}
          options={{ title: 'Novo Boletim' }} />
      </AppStack.Navigator>
    </NavigationContainer>
  );
}
