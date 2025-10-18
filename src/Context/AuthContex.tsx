import React, { createContext, useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { UserData } from '../Assets/StaticData/StaticData';

export type User = {
  id: number;
  name: string;
  password?: string;
  role: 'user' | 'subAdmin';
};

type AuthContextType = {
  isLoading: boolean;
  userToken: string | null;
  userInfo: User | null;
  loginError: string;
  login: (email: string, password: string) => void;
  logout: () => void;
};

export const AuthContext = createContext<AuthContextType | null>(null);

const AuthProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [userToken, setUserToken] = useState<string | null>(null);
  const [userInfo, setUserInfo] = useState<User | null>(null);
  const [loginError, setLoginError] = useState<string>('');

  const login = async (email: string, password: string) => {
    setIsLoading(true);
    try {
      // const user = UserData.find(
      //   u => u.name === email && u.password === password,
      // );

      // console.log('user', user);

      // if (!user) {
      //   setLoginError('Invalid credentials');
      //   return;
      // }
      await AsyncStorage.setItem('userToken', 'dummy-auth-token');
      // await AsyncStorage.setItem('userInfo', JSON.stringify(user));
      setUserToken('dummy-auth-token');
      // setUserInfo('dummy-auth-Info');
    } catch (error) {
      setLoginError('Failed to log in');
    } finally {
      setIsLoading(false);
    }
  };

  const isLoggedIn = async () => {
    try {
      setIsLoading(true);
      const token = await AsyncStorage.getItem('userToken');
      const info = await AsyncStorage.getItem('userInfo');
      if (token) {
        setUserToken(token);
        setUserInfo(info ? JSON.parse(info) : null);
      }
    } catch (e) {
      console.log(`is logged in error ${e}`);
    } finally {
      setIsLoading(false);
    }
  };

  const logout = async () => {
    setIsLoading(true);
    try {
      setUserToken(null);
      await AsyncStorage.removeItem('userToken');
      await AsyncStorage.removeItem('userInfo');
    } catch (error) {
      console.log(`logout error ${error}`);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    isLoggedIn();
  }, []);

  return (
    <AuthContext.Provider
      value={{
        isLoading,
        userToken,
        userInfo,
        loginError,
        login,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
