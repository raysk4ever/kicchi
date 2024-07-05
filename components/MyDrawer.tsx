import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {HomeScreen, HomeStack} from '../screens/Home';
import {ProfileScreen} from '../screens/ProfileScreen';

const Drawer = createDrawerNavigator();

export default function MyDrawer() {
  return (
    <Drawer.Navigator screenOptions={{headerShown: false}}>
      <Drawer.Screen name="Kicchi" component={HomeStack} />
      <Drawer.Screen name="Profile" component={ProfileScreen} />
    </Drawer.Navigator>
  );
}
