import {NavigationContainer} from '@react-navigation/native';
import React, {useContext} from 'react';
import {Text, View} from 'react-native';
import {Button} from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import {AuthContext} from '../../routes/authprovider';

const Home = ({navigation}) => {
  const {logout} = useContext(AuthContext);
  return (
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
      <Button
        type="clear"
        icon={{
          name: 'arrow-right',
          size: 15,
          color: 'white',
        }}
        iconRight
        title="Logout"
        onPress={() => logout()}
      />
    </View>
  );
};

export default Home;
