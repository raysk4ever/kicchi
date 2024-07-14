import React, {
  PropsWithChildren,
  createContext,
  useEffect,
  useState,
} from 'react';
import {Appearance} from 'react-native';
import {DEFAULT_THEME, Theme} from '../Theme';
import {height} from '../Utils/Constant';
import {setItemInStorage, getItemFromStorage} from '../Utils/Storage';

const APP_THEME = 'appTheme';

type TAuthContext = {
  isLoggedIn: boolean;
  isLoading: boolean;
  setIsLoggedIn?: React.Dispatch<React.SetStateAction<boolean>>;
  user: Record<string, any>
  // setAppTheme?: React.Dispatch<React.SetStateAction<string>>;
  // isMute?: boolean;
  // setIsMute?: React.Dispatch<React.SetStateAction<boolean>>;
};

// App Conext for App Theme, display height and Video Volume
export const AuthContext = createContext<TAuthContext>({
  isLoggedIn: false,
  isLoading: true,
  user: {}
});

export const AuthContextProvider = ({children}: PropsWithChildren) => {
  const { isLoading, isLoggedIn, user } = useAuth()
  // useEffect(() => {
  //   setInitialLoad();
  // });

  return (
    <AuthContext.Provider
      value={{
        isLoading,
        isLoggedIn,
        user
      }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () =>  {
  const [isLoading, setIsLoading] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const [user, setUserState] = useState({
    name: 'Ravi',
    gender: 'male'
  })
  
  const setUser = (userData: any) => {
    setIsLoggedIn(true)
    setUserState((crr: any) => ({
      ...crr,
      name: 'Ravi',
      ...userData
    }))
  }
  
  return {
    isLoading,
    isLoggedIn,
    user,
    setUser,
    setIsLoggedIn,
    setIsLoading
  }
}