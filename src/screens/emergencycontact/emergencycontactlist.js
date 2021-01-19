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

  // async function _deleteContacts(name) {
  //   try {
  //     await firestore()
  //       .collection('emergency')
  //       .doc(`${user._user.uid}`)
  //       .collection('emergency_contact')
  //       .where('name' == {name})
  //       .delete();
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
      {userdata?.length > 0 &&
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
              {/* <View style={styles.buttons}>
                <TouchableHighlight
                  style={[styles.button, styles.view]}
                  onPress={() => _deleteContacts('babu')}>
                  <Image
                    style={styles.icon}
                    source={{
                      uri:
                        'https://img.icons8.com/color/70/000000/filled-like.png',
                    }}
                  />
                </TouchableHighlight>
              </View> */}
            </View>
          </View>
        ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
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
