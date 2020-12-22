import React, {useState, useEffect} from 'react';
import {View} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import Login from '../components/login/login';
import Signup from '../components/signup/signup';

// import FontAwesome from 'react-native-vector-icons/FontAwesome';

import AsyncStorage from '@react-native-community/async-storage';

const Stack = createStackNavigator();

const AuthStack = () => {
  //   const [isFirstLaunch, setIsFirstLaunch] = useState(null);
  let routeName;

  //   useEffect(() => {
  //     AsyncStorage.getItem('alreadyLaunched').then((value) => {
  //       if (value == null) {
  //         AsyncStorage.setItem('alreadyLaunched', 'true'); // No need to wait for `setItem` to finish, although you might want to handle errors
  //         setIsFirstLaunch(true);
  //       } else {
  //         setIsFirstLaunch(false);
  //       }
  //     }); // Add some error handling, also you can simply do setIsFirstLaunch(null)

  //     GoogleSignin.configure({
  //       webClientId: 'YOUR_APP_WEB_CLIENT_ID',
  //     });
  //   }, []);

  return (
    <Stack.Navigator initialRouteName={routeName}>
      {/* <Stack.Screen name="Login" component={Login} /> */}
      <Stack.Screen
        name="Signup"
        component={Signup}
        // options={({navigation}) => ({
        //   title: '',
        //   headerStyle: {
        //     backgroundColor: '#f9fafd',
        //     shadowColor: '#f9fafd',
        //     elevation: 0,
        //   },
        // })}
      />
      <Stack.Screen name="Login" component={Login} />
    </Stack.Navigator>
  );
};

export default AuthStack;
