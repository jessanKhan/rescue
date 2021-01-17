import React, {useContext, useEffect, useState} from 'react';
// import {View, Text} from 'react-native';
import {Text, View, Image, TouchableOpacity} from 'react-native';
// import {TouchableOpacity} from 'react-native-gesture-handler';
import {AuthContext} from '../../routes/authprovider';
import styles from './Styles.js';
import Icon from 'react-native-vector-icons/Ionicons';
import firestore from '@react-native-firebase/firestore';
import {useNavigation} from '@react-navigation/native';

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
const Profile = ({navigation}) => {
  const {user, logout} = useContext(AuthContext);
  const [userdata, setUser] = useState(userDt);
  const [userId, setUserID] = useState();
  const [loading, setLoading] = useState(true);
  // const usersCollection = firestore().collection('users');
  // const  {logout} =useContext(AuthContext)
  // const navigation = useNavigation();
  async function userDocument() {
    try {
      await firestore()
        .collection('users')
        .doc(`${user._user.uid}`)
        .onSnapshot((data) => console.log(data));
    } catch (error) {
      console.log('Error', error);
      setUser(userDt);
    }
  }

  useEffect(() => {
    setUserID();
    userDocument();
    console.log(user._user.uid);
  }, [userdata]);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.headerContent}>
          <Image
            style={styles.avatar}
            source={{uri: 'https://bootdey.com/img/Content/avatar/avatar6.png'}}
          />

          <Text style={styles.name}>Name: {userdata.name}</Text>
          <Text style={styles.userInfo}>Email:{user._user.email}</Text>
          <Text style={styles.userInfo}>Phone:{userdata.phone} </Text>
          <Text style={styles.userInfo}>Address: {userdata.address}</Text>
          <Text style={styles.userInfo}>Thana: {userdata.police_station} </Text>
          <Text style={styles.userInfo}>
            Post-Office: {userdata.post_office}
          </Text>
          <Text style={styles.userInfo}>Union/Ward: {userdata.union} </Text>
          <Text style={styles.userInfo}>District: {userdata.district} </Text>
          <Text style={styles.userInfo}>Division: {userdata.division} </Text>
        </View>
      </View>

      <View style={styles.body}>
        <TouchableOpacity
          style={styles.item}
          onPress={() => navigation.navigate('ProfileInfo')}>
          {/* <View style={styles.item}> */}
          <View style={styles.iconContent}>
            <Image
              style={styles.icon}
              source={{
                uri: 'https://img.icons8.com/color/70/000000/cottage.png',
              }}
            />
          </View>
          <View style={styles.infoContent}>
            <Text style={styles.info}>Update User Info</Text>
          </View>
          {/* </View> */}
        </TouchableOpacity>
        {/* <TouchableOpacity style={styles.item}>
          <View style={styles.iconContent}>
            <Image
              style={styles.icon}
              source={{
                uri:
                  'https://img.icons8.com/color/70/000000/administrator-male.png',
              }}
            />
          </View>
          <View style={styles.infoContent}>
            <Text style={styles.info}>Settings</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity style={styles.item}>
          <View style={styles.iconContent}>
            <Image
              style={styles.icon}
              source={{
                uri: 'https://img.icons8.com/color/70/000000/filled-like.png',
              }}
            />
          </View>
          <View style={styles.infoContent}>
            <Text style={styles.info}>News</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity style={styles.item}>
          <View style={styles.iconContent}>
            <Image
              style={styles.icon}
              source={{
                uri: 'https://img.icons8.com/color/70/000000/facebook-like.png',
              }}
            />
          </View>
          <View style={styles.infoContent}>
            <Text style={styles.info}>Shop</Text>
          </View>
        </TouchableOpacity> */}

        <TouchableOpacity style={styles.item} onPress={() => logout()}>
          <View style={styles.iconContent}>
            <Icon style={styles.icon} name="exit" size={35} color="#7cc" />
          </View>
          <View style={styles.infoContent}>
            <Text style={styles.info}>Logout</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Profile;
