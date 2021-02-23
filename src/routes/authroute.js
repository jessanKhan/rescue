import React, {useState, useEffect} from 'react';
import {View} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import Login from '../components/login/login';
import Signup from '../components/signup/signup';
import ForgotPassword from '../components/forgotpassword/forgotPassword';

const Stack = createStackNavigator();

const AuthStack = () => {
  let routeName;

  return (
    <Stack.Navigator initialRouteName={routeName}>
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Signup" component={Signup} />
      <Stack.Screen name="ForgotPassword?" component={ForgotPassword} />
    </Stack.Navigator>
  );
};

export default AuthStack;
