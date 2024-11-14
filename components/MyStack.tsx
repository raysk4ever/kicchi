import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import 'react-native-gesture-handler';
import {ProfileScreen} from '../screens/ProfileScreen';
import ChatsScreen from '../screens/Chats';
import {HomeScreen} from '../screens/Home';
import NotificationScreen from '../screens/Notifications';
import UserProfile from './UserProfile';
import {useAuth} from '../Context/AuthContext';
import AuthScreen from '../screens/AuthScreen';
import {Text, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';

const Stack = createNativeStackNavigator();

// const MyStack = () => {
//   const {isLoggedIn, setUser, logout} = useAuth()
//   console.log('logout', isLoggedIn)
//   return (
//     <Stack.Navigator screenOptions={{
//       headerShadowVisible: false,
//       headerTintColor: '#f1f1f1',
//       headerStyle: {
//         backgroundColor: '#2a1b2d',
//       }
//     }}>
//       {isLoggedIn === true ? (
//         <>
//           <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
//           <Stack.Screen name="UserProfile" options={{ title: `User's Profile` }} component={UserProfile} />
//           <Stack.Screen name="Chats" component={ChatsScreen} />
//           <Stack.Screen name="Notifications" component={NotificationScreen} />
//           <Stack.Screen name="Profile" options={{ headerRight: profileHeaderRight }} component={ProfileScreen} />
//         </>
//       ): (
//         <>
//           <Stack.Screen name="Login" component={AuthScreen} initialParams={{setUser, logout}} options={{ headerShown: false }} />
//         </>
//       )}
//     </Stack.Navigator>
//   );
// };

const MyStack = () => {
  const {isLoggedIn, logout, setUser} = useAuth();
  // console.log('logout', isLoggedIn)
  return (
    <Stack.Navigator
      screenOptions={{
        headerShadowVisible: false,
        headerTintColor: '#f1f1f1',
        headerStyle: {
          backgroundColor: '#2a1b2d',
        },
      }}>
      <>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="UserProfile"
          options={{title: `User's Profile`}}
          component={UserProfile}
        />
        <Stack.Screen name="Chats" component={ChatsScreen} />
        <Stack.Screen name="Notifications" component={NotificationScreen} />
        <Stack.Screen
          name="Profile"
          options={{headerRight: ProfileHeaderRight}}
          component={ProfileScreen}
        />
        <Stack.Screen
          name="Login"
          component={AuthScreen}
          initialParams={{setUser, logout}}
          options={{headerShown: false}}
        />
      </>
    </Stack.Navigator>
  );
};

export default MyStack;

const ProfileHeaderRight = (x: any) => {
  // const { logout } = x;
  // const {logout, setUser} = useAuth()
  const {navigate} = useNavigation();
  console.log(x);
  const handleLogout = () => {
    navigate('Login' as never);
    // reset()
    // logout()
  };
  return (
    <TouchableOpacity onPress={handleLogout}>
      <Text style={{color: 'white'}}>Logout</Text>
    </TouchableOpacity>
  );
};
