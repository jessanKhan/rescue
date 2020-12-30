import React, {useEffect, useState} from 'react';

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
// import Logout from '../components/logout/logout';
import SoundCheck from '../screens/soundCheck/soundCheck';

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

const WeatherStack = ({navigation}) => {
  return (
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
        name="Weather"
        component={Weather}
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
};

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

const SaveEnvironmentStack = ({navigation}) => (
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
      name="SaveEnvironment"
      component={SaveEnvironment}
      options={{
        title: 'Save Environment Guide',
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
    <Drawer.Screen
      name="Home"
      component={HomeStack}
      options={{
        title: 'Home',
        drawerIcon: ({focused, size}) => (
          <Icon name="md-home" size={35} color={focused ? '#7cc' : '#ccc'} />
        ),
      }}
    />
    <Drawer.Screen
      name="Profile"
      component={ProfileStack}
      options={{
        title: 'Profile',
        drawerIcon: ({focused, size}) => (
          <Icon name="person" size={35} color={focused ? '#7cc' : '#ccc'} />
        ),
      }}
    />
    <Drawer.Screen
      name="Weather"
      component={WeatherStack}
      options={{
        title: 'Weather Info',
        drawerIcon: ({focused, size}) => (
          <Icon
            name="cloudy-night"
            size={35}
            color={focused ? '#7cc' : '#ccc'}
          />
        ),
      }}
    />
    <Drawer.Screen
      name="Article"
      component={SaveEnvironmentStack}
      options={{
        title: 'Save Environment',
        drawerIcon: ({focused, size}) => (
          <Icon name="book" size={35} color={focused ? '#7cc' : '#ccc'} />
        ),
      }}
    />
    {/* <Drawer.Screen
      name="Logout"
      component={Logout}
      options={{
        title: 'Logout',
        drawerIcon: ({focused, size}) => (
          <Icon name="exit" size={35} color={focused ? '#7cc' : '#ccc'} />
        ),
      }}
    /> */}

    <Drawer.Screen
      name="Sound"
      component={SoundCheck}
      options={{
        title: 'Sound Polution',
        drawerIcon: ({focused, size}) => (
          <Icon
            name="mic-circle-outline"
            size={35}
            color={focused ? '#7cc' : '#ccc'}
          />
        ),
      }}
    />
  </Drawer.Navigator>
);

export default AppStack;
