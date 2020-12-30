import React, {useEffect, useState} from 'react';
import {
  Alert,
  Text,
  View,
  Platform,
  PermissionsAndroid,
  Label,
  TouchableOpacity,
  Card,
  TextInput,
  Button,
} from 'react-native';
import Icon from 'react-native-vector-icons';
import getWeather from '../../services/weatherService';
import Geolocation from 'react-native-geolocation-service';
import styles from './Styles';

const Weather = ({navigation}) => {
  const [Result, setResult] = useState();
  const [location, setLocation] = useState();
  const [lat, setLat] = useState();
  const [lon, setLon] = useState();
  const [permission, setPermission] = useState(false);

  async function requestPermissions() {
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
          console.log('location', position.coords);
          setLat(position.coords.latitude);
          setLon(position.coords.longitude);
        },
        (error) => {
          // See error code charts below.
          console.log(error.code, error.message);
        },
        {enableHighAccuracy: true, timeout: 15000, maximumAge: 10000},
      );
    }
    getWeather(lat, lon).then((data) => setResult(data.data));
    console.log(Result);
  }, [requestPermissions, getWeather]);

  return (
    <View style={styles.current_weather_container}>
      {/* Wather Status a nd Iamge Block */}
      <View style={styles.current_weather_contant}>
        <View style={styles.current_weather_status}>
          {/* <Label style={styles.current_weather_status_text_A}>10º</Label> */}
          {/* <Label style={styles.current_weather_status_text_B}>STATe NAme</Label>
          <Label style={styles.current_weather_status_text_C}>
            Weather Text
          </Label> */}
        </View>
        {/* <View>
          <Image
            style={styles.current_weather_status_image}
            source={require('../../../assets/googleweather.gif')}
          />
        </View> */}
      </View>
    </View>
  );
};

export default Weather;
