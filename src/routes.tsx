import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { Feather} from '@expo/vector-icons';

import Camera from './pages/Camera';
import Main from './pages/Main';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen options={{ tabBarIcon: ({ color }) => 
          <Feather name="home" size={20}/>}} name="Main" component={Main} />
        <Tab.Screen options={{ tabBarIcon: ({ color }) => 
          <Feather name="camera" size={20}/>}} name="Camera" component={Camera} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
