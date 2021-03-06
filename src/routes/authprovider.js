import React, {createContext, useState} from 'react';
import auth from '@react-native-firebase/auth';
import {ToastAndroid} from 'react-native';

export const AuthContext = createContext();

export const AuthProvider = ({children}) => {
  const [user, setUser] = useState(null);

  // const showToastWithGravity = (e) => {
  //   ToastAndroid.showWithGravity(e, ToastAndroid.SHORT, ToastAndroid.BOTTOM);
  // };

  return (
    <AuthContext.Provider
      value={{
        user,
        setUser,
        login: async (email, password) => {
          try {
            await auth().signInWithEmailAndPassword(email, password);
            ToastAndroid.showWithGravity(
              'Logged in succefully',
              ToastAndroid.SHORT,
              ToastAndroid.BOTTOM,
            );
          } catch (e) {
            console.log(e);
            ToastAndroid.showWithGravity(
              'User credential is not correct',
              ToastAndroid.SHORT,
              ToastAndroid.BOTTOM,
            );
          }
        },

        register: async (email, password) => {
          try {
            await auth().createUserWithEmailAndPassword(email, password);
            ToastAndroid.showWithGravity(
              'Signed Up Successfully',
              ToastAndroid.SHORT,
              ToastAndroid.BOTTOM,
            );
          } catch (e) {
            console.log(e);
            ToastAndroid.showWithGravity(
              'Sign up failed',
              ToastAndroid.SHORT,
              ToastAndroid.BOTTOM,
            );
          }
        },

        forgot: async (email) => {
          try {
            await auth().sendPasswordResetEmail(email);
            ToastAndroid.showWithGravity(
              'Password reset email sent',
              ToastAndroid.SHORT,
              ToastAndroid.BOTTOM,
            );
          } catch (e) {
            console.log(e);
            ToastAndroid.showWithGravity(
              'Password reset failed',
              ToastAndroid.SHORT,
              ToastAndroid.BOTTOM,
            );
          }
        },

        logout: async () => {
          try {
            await auth().signOut();
            ToastAndroid.showWithGravity(
              'Logged out successfully',
              ToastAndroid.SHORT,
              ToastAndroid.BOTTOM,
            );
          } catch (e) {
            console.log(e);
            ToastAndroid.showWithGravity(
              'Logout failed',
              ToastAndroid.SHORT,
              ToastAndroid.BOTTOM,
            );
          }
        },
      }}>
      {children}
    </AuthContext.Provider>
  );
};
