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

function App(): React.JSX.Element {
  return (
    <>
      <StatusBar hidden={true} />
      <NavigationContainer>
        <MyDrawer />
      </NavigationContainer>
    </>
  );
}
export default App;
