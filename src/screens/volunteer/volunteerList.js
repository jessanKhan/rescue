import React, {useEffect, useState} from 'react';
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
import firebase from '@react-native-firebase/app';

const VolunteerList = ({params}) => {
  const [state, setState] = useState();
  const volunteerList = firestore().collection('volunteer').get();

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

  async function getVolunteer() {
    await firestore()
      .collection('volunteer')
      .onSnapshot((data) => setState(data.docs));
  }

  useEffect(() => {
    getVolunteer();
    console.log(state);
  }, []);

  return (
    <ScrollView>
      {state?.length > 0 &&
        state.map((data) => (
          <View style={styles.box}>
            <Image
              style={styles.image}
              source={{
                uri: 'https://bootdey.com/img/Content/avatar/avatar6.png',
              }}
            />
            <View style={styles.boxContent}>
              <Text style={styles.title}>{data._data.name}</Text>

              <Text style={styles.userInfo}>Email:{data._data.email}</Text>
              <Text style={styles.userInfo}>Phone:{data._data.phone} </Text>
              <Text style={styles.userInfo}>Address: {data._data.address}</Text>
              <Text style={styles.userInfo}>
                Thana: {data._data.police_station}{' '}
              </Text>
              <Text style={styles.userInfo}>
                Post-Office: {data._data.post_office}
              </Text>
              <Text style={styles.userInfo}>
                Union/Ward: {data._data.union}{' '}
              </Text>
              <Text style={styles.userInfo}>
                District: {data._data.district}{' '}
              </Text>
              <Text style={styles.userInfo}>
                Division: {data._data.division}{' '}
              </Text>
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

export default VolunteerList;
