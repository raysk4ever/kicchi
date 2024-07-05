import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import 'react-native-gesture-handler';
import { ProfileScreen } from '../screens/ProfileScreen';
import { HomeScreen, HomeWithStack } from '../screens/Home';
import { View } from 'react-native';
import { withAppLayout } from '../HOC/withAppLayout';


const Stack = createNativeStackNavigator();

const MyStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Profile" component={(props: any) => withAppLayout(ProfileScreen, props)} />
      <Stack.Screen name="Home" component={(props: any) => withAppLayout(HomeScreen, props)} options={{ headerShown: false }} />
    </Stack.Navigator>
  );
};

export default MyStack
