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
  Image,
} from 'react-native';
import {DataTable} from 'react-native-paper';
import Icon from 'react-native-vector-icons';
import getWeather from '../../services/weatherService';
import Geolocation from 'react-native-geolocation-service';
import styles from './Styles';

const initialWeather = {
  coord: {
    lon: 90.4085,
    lat: 23.8136,
  },
  weather: [
    {
      id: 800,
      main: 'Clear',
      description: 'clear sky',
      icon: '01n',
    },
  ],
  base: 'stations',
  main: {
    temp: 24.51,
    feels_like: 26.68,
    temp_min: 24.51,
    temp_max: 24.51,
    pressure: 1012,
    humidity: 64,
    sea_level: 1012,
    grnd_level: 1012,
  },
  visibility: 10000,
  wind: {
    speed: 0.44,
    deg: 54,
  },
  clouds: {
    all: 40,
  },
  dt: 1610204731,
  sys: {
    sunrise: 1610152620,
    sunset: 1610192201,
  },
  timezone: 21600,
  id: 1188909,
  name: 'Dhaka',
  cod: 200,
};

const Weather = ({navigation}) => {
  const [Result, setResult] = useState(initialWeather);
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
    // getWeather(lat, lon).then((data) => setResult(data.data));
    console.log(Result);
  }, [requestPermissions]);

  return (
    <View style={styles.current_weather_container}>
      {/* Wather Status a nd Iamge Block */}
      <View style={styles.current_weather_contant}>
        <View style={styles.current_weather_status}>
          {/* <Text style={styles.current_weather_status_text_A}>
            {Result.main.temp}º
          </Text> */}
          <Text style={styles.current_weather_status_text_A}>
            {Result.main.temp}º
          </Text>
          <Text style={styles.current_weather_status_text_B}>
            {Result.name}
          </Text>
          {Result.weather?.length > 0 &&
            Result.weather.map((weathers) => (
              <Text
                style={styles.current_weather_status_text_C}
                key={weathers.id}>
                {weathers.main}
              </Text>
            ))}
        </View>
        <View>
          <Image
            style={styles.current_weather_status_image}
            source={require('../../assets/googleweather.gif')}
          />
        </View>
      </View>

      <View>
        <DataTable>
          <DataTable.Header>
            <DataTable.Title>Weather Conditions</DataTable.Title>
            <DataTable.Title numeric>units</DataTable.Title>
          </DataTable.Header>

          <DataTable.Row>
            <DataTable.Cell>Temparature feels like</DataTable.Cell>
            <DataTable.Cell numeric>{Result.main.feels_like}º</DataTable.Cell>
          </DataTable.Row>

          <DataTable.Row>
            <DataTable.Cell>Minimum Temparature</DataTable.Cell>
            <DataTable.Cell numeric>{Result.main.temp_min}º</DataTable.Cell>
          </DataTable.Row>

          <DataTable.Row>
            <DataTable.Cell>Maximum Temparature</DataTable.Cell>
            <DataTable.Cell numeric>{Result.main.temp_max}º</DataTable.Cell>
          </DataTable.Row>

          <DataTable.Row>
            <DataTable.Cell>Pressure</DataTable.Cell>
            <DataTable.Cell numeric>{Result.main.pressure}</DataTable.Cell>
          </DataTable.Row>

          <DataTable.Row>
            <DataTable.Cell>Humidity</DataTable.Cell>
            <DataTable.Cell numeric>{Result.main.humidity}</DataTable.Cell>
          </DataTable.Row>

          {/* <DataTable.Pagination
            page={1}
            numberOfPages={3}
            onPageChange={(page) => {
              console.log(page);
            }}
            label="1-2 of 6"
          /> */}
        </DataTable>
      </View>
    </View>
  );
};

export default Weather;
