import 'react-native-gesture-handler';
import React from "react";
import { Button } from 'react-native';
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
          headerBackTitleVisible: false,
          headerStyle: { backgroundColor: 'black' },
        }}>
        <AppStack.Screen
          name="Home"
          component={Home}
          headerMode="none"
          options={{ title: '', headerTransparent: true }} />
        <AppStack.Screen
          name="ReportDetails"
          component={ReportDetails}
          options={
            ({ route }) => ({
              title: `Boletim ${route.params.name}`
            })} />
        <AppStack.Screen
          name="SaveReport"
          component={SaveReport}
          options={{
            title: 'Novo Boletim',
            headerRight: () => (
              <Button
                onPress={() => { }}
                title="Save"
                color="#fff"
              />
            ),
          }}
        />
      </AppStack.Navigator>
    </NavigationContainer>
  );
}
