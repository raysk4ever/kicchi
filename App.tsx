/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */
import React from 'react';

import {StatusBar} from 'react-native';
import { AuthContextProvider } from './Context/AuthContext';
import Screens from './screens';

function App(): React.JSX.Element {
  return (
    <>
    <AuthContextProvider>
      <StatusBar hidden={true} />
      <Screens />
      </AuthContextProvider>
    </>
  );
}
export default App;
