import React, {useContext, useEffect, useState} from 'react';
// import {View, Text} from 'react-native';
import {Text, View, Image, TouchableOpacity, ScrollView} from 'react-native';
// import {TouchableOpacity} from 'react-native-gesture-handler';
import {AuthContext} from '../../routes/authprovider';
import styles from './Styles.js';
import Icon from 'react-native-vector-icons/Ionicons';
import firestore from '@react-native-firebase/firestore';
import SendSMS from 'react-native-sms';

const userDt = {
  name: 'Your Name',
  phone: 'Your Phone Number',
  relation: 'Your relation',
};
const EmergencyContact = ({navigation}) => {
  const {user, logout} = useContext(AuthContext);
  const [userdata, setUser] = useState(userDt);
  const [numbers, setNumbers] = useState();
  const [loading, setLoading] = useState(true);
  // const usersCollection = firestore().collection('users');
  // const  {logout} =useContext(AuthContext)
  // const navigation = useNavigation();
  async function userDocument() {
    try {
      await firestore()
        .collection('emergency')
        .doc(`${user._user.uid}`)
        .collection('emergency_contact')
        .onSnapshot((data) => setNumbers(Object.entries(data._docs)));
    } catch (error) {
      console.log('Error', error);
      setUser(userDt);
    }
  }

  SendSMS.send(
    {
      body: 'The default body of the SMS!',
      recipients: ['0123456789', '9876543210'],
      successTypes: ['sent', 'queued'],
      allowAndroidSendWithoutReadPermission: true,
      attachment: attachment,
    },
    (completed, cancelled, error) => {
      console.log(
        'SMS Callback: completed: ' +
          completed +
          ' cancelled: ' +
          cancelled +
          'error: ' +
          error,
      );
    },
  );

  useEffect(() => {
    // setUserID();
    userDocument();
    console.log(numbers);
  }, [userdata]);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity>
          <View style={styles.headerContent}>
            <Image
              style={styles.avatar}
              source={require('../../assets/sos.png')}
            />
            <Text style={styles.name}>Tap When its Emergency</Text>
          </View>
        </TouchableOpacity>
      </View>

      <View style={styles.body}>
        <TouchableOpacity
          style={styles.item}
          onPress={() => navigation.navigate('AddEmergencyContact')}>
          {/* <View style={styles.item}> */}
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
            <Text style={styles.info}>Add Emergency Contact</Text>
          </View>
          {/* </View> */}
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.item}
          onPress={() => navigation.navigate('EmergencyContactList')}>
          <View style={styles.iconContent}>
            <Icon style={styles.icon} name="list" size={35} color="#7cc" />
          </View>
          <View style={styles.infoContent}>
            <Text style={styles.info}>Emergency Contact List</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default EmergencyContact;
