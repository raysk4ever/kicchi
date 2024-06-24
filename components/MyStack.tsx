import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import 'react-native-gesture-handler';
import { ProfileScreen } from '../screens/ProfileScreen';


const Stack = createNativeStackNavigator();

const MyStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Profile" component={ProfileScreen} />
    </Stack.Navigator>
  );
};

export default MyStack
