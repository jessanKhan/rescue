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
import ProfileInfo from '../screens/profile/profileinfo';
import SaveEnvironment from '../screens/articles/article';
// import Logout from '../components/logout/logout';
import SoundCheck from '../screens/soundCheck/soundCheck';
import Volunteer from '../screens/volunteer/volunteer';
import VolunteerRegister from '../screens/volunteer/volunteerRegister';
import VolunteerList from '../screens/volunteer/volunteerList';
import VolunteerNear from '../screens/volunteer/volunteerNear';
import WorldDays from '../screens/worldDays/worldDays';
import WorldDayDetails from '../screens/worldDays/worldDayDetail';

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
    initialRouteName="Profile"
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
    <Stack.Screen
      name="ProfileInfo"
      component={ProfileInfo}
      options={{
        title: 'Profile Details',
        // headerLeft: () => (
        //   <Icon
        //     name="menu"
        //     size={25}
        //     onPress={() => navigation.goBack()}></Icon>
        // ),
      }}
    />
  </Stack.Navigator>
);

const VolunteerStack = ({navigation}) => (
  <Stack.Navigator
    initialRouteName="Profile"
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
      name="Volunteer"
      component={Volunteer}
      options={{
        headerLeft: () => (
          <Icon
            name="menu"
            size={25}
            onPress={() => navigation.openDrawer()}></Icon>
        ),
      }}
    />
    <Stack.Screen
      name="VolunteerRegister"
      component={VolunteerRegister}
      options={{
        title: 'Register Volunteer',
      }}
    />
    <Stack.Screen
      name="VolunteerList"
      component={VolunteerList}
      options={{
        title: 'Registerd Volunteers',
      }}
    />
    <Stack.Screen
      name="VolunteerNear"
      component={VolunteerNear}
      options={{
        title: 'Volunteer Near Me',
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

const WorldDayStack = ({navigation}) => (
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
      name="WorldDays"
      component={WorldDays}
      options={{
        title: 'World Environmental Days',
        headerLeft: () => (
          <Icon
            name="menu"
            size={25}
            onPress={() => navigation.openDrawer()}></Icon>
        ),
      }}
    />
    <Stack.Screen
      name="WorldDaysDetails"
      component={WorldDayDetails}
      options={{
        title: 'World Environmental Days',
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
    <Drawer.Screen
      name="ArticleDays"
      component={WorldDayStack}
      options={{
        title: 'World Environment',
        drawerIcon: ({focused, size}) => (
          <Icon name="globe" size={35} color={focused ? '#7cc' : '#ccc'} />
        ),
      }}
    />
    <Drawer.Screen
      name="Volunteer"
      component={VolunteerStack}
      options={{
        title: 'Volunteers',
        drawerIcon: ({focused, size}) => (
          <Icon name="help-buoy" size={35} color={focused ? '#7cc' : '#ccc'} />
        ),
      }}
    />

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
