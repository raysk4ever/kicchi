import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {HomeScreen, HomeStack} from '../screens/Home';
import {ProfileScreen} from '../screens/ProfileScreen';
import { useNavigation } from '@react-navigation/native';
import { useAuth } from '../Context/AuthContext';
import AuthScreen from '../screens/AuthScreen';

const Drawer = createDrawerNavigator();

export default function MyDrawer() {
  const { isLoggedIn } = useAuth()
  return (
    <Drawer.Navigator screenOptions={{headerShown: false}}>
      {/* {!isLoggedIn ? (
        <Drawer.Screen name="Auth" component={AuthScreen} />
      ) : (
        <>
          <Drawer.Screen name="Kicchi" component={HomeStack} />
          <Drawer.Screen name="Profile" component={ProfileScreen} />
        </>
      )} */}
      <Drawer.Screen name="Auth" component={AuthScreen} />
      <Drawer.Screen name="Kicchi" component={HomeStack} />
      <Drawer.Screen name="Profile" component={ProfileScreen} />
    </Drawer.Navigator>
  );
}
