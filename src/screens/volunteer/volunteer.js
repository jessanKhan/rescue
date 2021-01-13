import React, {useContext, useEffect, useState} from 'react';
// import {View, Text} from 'react-native';
import {
  Text,
  View,
  Image,
  TouchableOpacity,
  PermissionsAndroid,
} from 'react-native';
// import {TouchableOpacity} from 'react-native-gesture-handler';
import {AuthContext} from '../../routes/authprovider';
import styles from './Styles.js';
import Icon from 'react-native-vector-icons/Ionicons';
// import firestore from '@react-native-firebase/firestore';
// import {useNavigation} from '@react-navigation/native';
import Geolocation from 'react-native-geolocation-service';

const userDt = {
  address: 'Your Address',
  district: 'Your District',
  division: 'Your Division',
  name: 'Your Name',
  phone: 'Your Phone Number',
  police_station: 'Your Local Police Station',
  post_office: 'Your Post Office',
  union: 'Your Union or Ward',
};
const Volunteer = ({navigation}) => {
  const [permission, setPermission] = useState(false);
  async function requestPermissions() {
    console.log('permission');
    if (Platform.OS === 'android') {
      await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
      );
      setPermission(true);
    }
  }

  useEffect(() => {
    requestPermissions();
    if (permission) {
      Geolocation.getCurrentPosition(
        (position) => {
          console.log('location', position);
        },
        (error) => {
          // See error code charts below.
          console.log(error.code, error.message);
        },
        {enableHighAccuracy: true, timeout: 15000, maximumAge: 10000},
      );
    }
    // getWeather(lat, lon).then((data) => setResult(data.data));
    console.log('sdfg');
  }, [requestPermissions]);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.headerContent}>
          <Image
            style={styles.avatar}
            source={{uri: 'https://img.icons8.com/color/70/000000/groups.png'}}
          />

          <Text style={styles.name}>Volunteer Programme</Text>
        </View>
      </View>

      <View style={styles.body}>
        <TouchableOpacity
          style={styles.item}
          onPress={() => navigation.navigate('VolunteerRegister')}>
          <View style={styles.iconContent}>
            <Icon
              style={styles.icon}
              name="add-circle"
              size={35}
              color="#7cc"
            />
          </View>
          <View style={styles.infoContent}>
            <Text style={styles.info}>Register Volunteer</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.item}
          onPress={() => navigation.navigate('VolunteerList')}>
          <View style={styles.iconContent}>
            <Icon style={styles.icon} name="list" size={35} color="#7cc" />
          </View>
          <View style={styles.infoContent}>
            <Text style={styles.info}>Volunteer List</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.item}
          onPress={() => navigation.navigate('VolunteerNear')}>
          <View style={styles.iconContent}>
            <Icon style={styles.icon} name="exit" size={35} color="#7cc" />
          </View>
          <View style={styles.infoContent}>
            <Text style={styles.info}>Volunteer Near Me</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Volunteer;
