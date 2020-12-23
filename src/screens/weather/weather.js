import React, {useEffect, useState} from 'react';
import {Text, View} from 'react-native';
import getWeather from '../../services/weatherService';

const Weather = ({navigation}) => {
  const [Result, setResult] = useState();

  useEffect(() => {
    // WeatherData.WeatherNow().then((data) => {
    //   //setNewsData(Object.values(data));
    //   setResult(Object.values(data));
    // });
    getWeather().then((data) => console.log(data));
  });

  return (
    <View>
      <Text>componentName</Text>
    </View>
  );
};

export default Weather;
