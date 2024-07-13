import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import 'react-native-gesture-handler';
import { ProfileScreen } from '../screens/ProfileScreen';
import ChatsScreen from '../screens/Chats';
import { HomeScreen } from '../screens/Home';
import NotificationScreen from '../screens/Notifications';
import UserProfile from './UserProfile';


const Stack = createNativeStackNavigator();

const MyStack = () => {
  return (
    <Stack.Navigator screenOptions={{
      headerShadowVisible: false,
      headerTintColor: '#f1f1f1',
      headerStyle: {
        backgroundColor: '#2a1b2d',
      }
    }}>
      <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
      <Stack.Screen name="UserProfile" options={{ title: `User's Profile` }} component={UserProfile} />
      <Stack.Screen name="Chats" component={ChatsScreen} />
      <Stack.Screen name="Notifications" component={NotificationScreen} />
      <Stack.Screen name="Profile" component={ProfileScreen} />
    </Stack.Navigator>
  );
};

export default MyStack
