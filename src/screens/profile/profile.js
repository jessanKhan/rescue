import React, {useContext, useEffect} from 'react';
import {View, Text} from 'react-native';
import {AuthContext} from '../../routes/authprovider';

const Profile = ({}) => {
  const {user} = useContext(AuthContext);

  useEffect(() => {
    console.log(user);
  });

  return (
    <View>
      <View>
        <Text>Name</Text>
      </View>
      <View>
        <Text>User Email</Text>
      </View>
      <View>
        <Text>Address</Text>
      </View>
    </View>
  );
};

export default Profile;
