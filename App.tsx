/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */
import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import MyDrawer from './components/MyDrawer';
import {StatusBar} from 'react-native';
import { AppContextProvider } from './Context';

function App(): React.JSX.Element {
  return (
    <>
    <AppContextProvider>
      <StatusBar hidden={true} />
      <NavigationContainer>
        <MyDrawer />
      </NavigationContainer>
      </AppContextProvider>
    </>
  );
}
export default App;
