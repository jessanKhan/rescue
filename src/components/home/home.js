import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {Text, View} from 'react-native';
import {Button} from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';

const Home = ({navigation}) => (
  <View>
    <Text>Home</Text>
    <Button
      type="clear"
      icon={<Icon name="arrow-right" size={15} color="white" />}
      iconRight
      title="Go to login"
      onPress={() => navigation.navigate('Login')}
    />
    <Button
      type="clear"
      icon={{
        name: 'arrow-right',
        size: 15,
        color: 'white',
      }}
      iconRight
      title="Go to sign up page"
      onPress={() => navigation.navigate('Sign Up')}
    />
  </View>
);

export default Home;
