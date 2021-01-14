// /**
//  * Sample React Native App
//  * https://github.com/facebook/react-native
//  *
//  * @format
//  * @flow strict-local
//  */

// import React, {useContext, useState, useEffect} from 'react';
// import {
//   SafeAreaView,
//   StyleSheet,
//   ScrollView,
//   View,
//   Text,
//   StatusBar,
// } from 'react-native';
// import {NavigationContainer} from '@react-navigation/native';
// import {createStackNavigator} from '@react-navigation/stack';
// import Home from './src/components/home/home';
// import Login from './src/components/login/login';
// import SignUp from './src/components/signup/signup';
// import AuthStack from './src/routes/authroute';
// import {AuthProvider} from './src/components/authprovider/authprovider';
// import AppStack from './src/routes/approute';
// import {AuthContext} from './src/components/authprovider/authprovider';

// const Stack = createStackNavigator();

// const App: () => React$Node = () => {
//   const {user, setUser} = useContext(AuthContext);
//   const [initializing, setInitializing] = useState(true);

//   const onAuthStateChanged = (user) => {
//     setUser(user);
//     if (initializing) setInitializing(false);
//   };

//   useEffect(() => {
//     const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
//     return subscriber; // unsubscribe on unmount
//   }, []);

//   if (initializing) return null;

//   return (
//     <>
//       <AuthProvider>
//         <NavigationContainer>
//           <StatusBar barStyle="dark-content" />
//           {/* <Stack.Navigator
//           screenOptions={{
//             headerStyle: {backgroundColor: '#696969'},
//             headerTintColor: '#fff',
//             headerTitleStyle: {fontWeight: 'bold'},
//           }}>
//           <Stack.Screen name="Home" component={Home} />
//           <Stack.Screen name="Login" component={Login} />
//           <Stack.Screen name="Sign Up" component={SignUp} />
//         </Stack.Navigator> */}
//           {user ? <AppStack /> : <AuthStack />}
//         </NavigationContainer>
//       </AuthProvider>
//     </>
//   );
// };

// export default App;
import React, {useEffect} from 'react';
import Providers from './src/routes/index';
import messaging from '@react-native-firebase/messaging';


const App = () => {
  const cloudMessegging = async () => {
    const authStatus = await messaging().requestPermission();
    const enabled =
      authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
      authStatus === messaging.AuthorizationStatus.PROVISIONAL;

    if (enabled) {
      console.log('Authorization status:', authStatus);
    }
  };

  useEffect(() => {
    cloudMessegging();
  });

  return <Providers />;
};

export default App;
