import React, {useContext, useEffect} from 'react';
import {View, Text} from 'react-native';
import {AuthContext} from '../../routes/authprovider';
const Logout = ({navigation}) => {
  const {logout} = useContext(AuthContext);

  useEffect(() => logout());
  return (
    <View>
      <Text>Logged Out</Text>
    </View>
  );
};

export default Logout;
