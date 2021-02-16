import React, {useEffect, useState, useContext} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  TouchableHighlight,
  Alert,
  Image,
  FlatList,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import firestore from '@react-native-firebase/firestore';
import {AuthContext} from '../../routes/authprovider';
import firebase from '@react-native-firebase/app';
const userDt = [
  {
    _data: {
      name: 'Contacts Name',
      phone: 'Contacts Phone Number',
      relation: 'Your relation',
    },
  },
];
const EmergencyContactList = ({params}) => {
  const [state, setState] = useState();
  //   const volunteerList = firestore().collection('volunteer').get();
  const [userdata, setUser] = useState(userDt);
  const {user} = useContext(AuthContext);
  //   async function getVolunteer() {
  //     var volunteerList = [];
  //     var snapshot = await firebase
  //       .firestore()
  //       .collection('volunteer')
  //       .get()
  //       .then((doc) => console.log(doc));

  //     snapshot.forEach((doc) => {
  //       volunteerList.push(doc.data());
  //     });

  //     return volunteerList;
  //   }

  async function _getContacts() {
    try {
      await firestore()
        .collection('emergency')
        .doc(`${user._user.uid}`)
        .collection('emergency_contact')
        .onSnapshot((data) => setUser(data._docs));
    } catch (error) {
      console.log('Error', error);
      setUser(userDt);
    }
  }

  // async function removeContact() {
  //   try {
  //     await firestore()
  //       .collection('emergency')
  //       .doc(`${user._user.uid}`)
  //       .collection('emergency_contact')
  //       .onSnapshot((data) => setUser(data._docs));
  //   } catch (error) {
  //     console.log('Error', error);
  //     setUser(userDt);
  //   }
  // }

  useEffect(() => {
    _getContacts();
    console.log(userdata);
  }, []);

  return (
    <ScrollView>
      {userdata?.length > 0 ? (
        userdata.map((data, index) => (
          <View style={styles.box}>
            <Image
              style={styles.image}
              source={{
                uri: 'https://bootdey.com/img/Content/avatar/avatar6.png',
              }}
            />
            <View style={styles.boxContent}>
              <Text style={styles.title}>{data._data.name}</Text>
              <Text style={styles.userInfo}>Phone:{data._data.phone} </Text>
              <Text style={styles.userInfo}>
                Address: {data._data.relation}
              </Text>
            </View>
            {/* <View>
              <Button title="remove" onPress={() => removeContact()} />
            </View> */}
          </View>
        ))
      ) : (
        <Text style={styles.noContact}>No Contact Added</Text>
      )}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  noContact: {
    alignSelf: 'center',
    color: 'grey',
    paddingTop: '10%',
    fontFamily: 'Ariel',
    fontSize: 20,
  },
  image: {
    width: 100,
    height: 100,
  },
  box: {
    padding: 20,
    marginTop: 5,
    marginBottom: 5,
    backgroundColor: 'white',
    flexDirection: 'row',
  },
  boxContent: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'flex-start',
    marginLeft: 10,
  },
  title: {
    fontSize: 18,
    color: '#151515',
  },
  description: {
    fontSize: 15,
    color: '#646464',
  },
  buttons: {
    flexDirection: 'row',
  },
  button: {
    height: 35,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    width: 50,
    marginRight: 5,
    marginTop: 5,
  },
  icon: {
    width: 20,
    height: 20,
  },
  view: {
    backgroundColor: '#eee',
  },
  profile: {
    backgroundColor: '#1E90FF',
  },
  message: {
    backgroundColor: '#228B22',
  },
});

export default EmergencyContactList;
