import React from 'react';
import {View, TouchableOpacity, Text} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createDrawerNavigator} from '@react-navigation/drawer';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Icon from 'react-native-vector-icons/Ionicons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

import Home from '../components/home/home';
import Weather from '../screens/weather/weather';
import Profile from '../screens/profile/profile';
import SaveEnvironment from '../screens/articles/article';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

const HomeStack = ({navigation}) => (
  <Stack.Navigator
    options={{
      headerTitleAlign: 'center',
      headerTitleStyle: {
        color: '#2e64e5',
        fontFamily: 'Kufam-SemiBoldItalic',
        fontSize: 18,
      },
      headerStyle: {
        shadowColor: '#fff',
        elevation: 0,
      },
    }}>
    <Stack.Screen
      name="Home"
      component={Home}
      options={{
        headerLeft: () => (
          <Icon
            name="menu"
            size={25}
            onPress={() => navigation.openDrawer()}></Icon>
        ),
      }}
    />
  </Stack.Navigator>
);

const ProfileStack = ({navigation}) => (
  <Stack.Navigator
    options={{
      headerLeft: () => (
        <Icon.Button
          name="ios-menu"
          backgroundColor="#696969"
          size={25}></Icon.Button>
      ),
      headerTitleAlign: 'center',
      headerTitleStyle: {
        color: '#2e64e5',
        fontFamily: 'Kufam-SemiBoldItalic',
        fontSize: 18,
      },
      headerStyle: {
        shadowColor: '#fff',
        elevation: 0,
      },
    }}>
    <Stack.Screen
      name="Profile"
      component={Profile}
      options={{
        headerLeft: () => (
          <Icon
            name="menu"
            size={25}
            onPress={() => navigation.openDrawer()}></Icon>
        ),
      }}
    />
  </Stack.Navigator>
);

const AppStack = ({navigation}) => (
  <Drawer.Navigator initialRouteName="Home">
    <Drawer.Screen name="Home" component={HomeStack} />
    <Drawer.Screen name="Profile" component={ProfileStack} />
    <Drawer.Screen name="Weather" component={Weather} />
    <Drawer.Screen name="Article" component={SaveEnvironment} />
  </Drawer.Navigator>
);

export default AppStack;
