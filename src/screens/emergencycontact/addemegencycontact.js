import React, {useEffect, useContext} from 'react';
import {View, Text, ScrollView, ToastAndroid} from 'react-native';
import {Input, Button} from 'react-native-elements';
import {Formik} from 'formik';
import Icon from 'react-native-vector-icons/FontAwesome';
import firestore from '@react-native-firebase/firestore';
import {AuthContext} from '../../routes/authprovider';

const AddEmergencyContact = (navigations) => {
  const {user} = useContext(AuthContext);
  const onSubmit = (values) => {
    addOnId(values);
  };

  const addData = (values) => {
    firestore()
      .collection('users')
      .add({
        relation: values.relation,
        name: values.name,
        phone: values.phone,
      })
      .then(() => {
        console.log('User added!');
      });
  };

  function makeid() {
    var result = '';
    var characters =
      'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    for (var i = 0; i < 15; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
  }
  const addOnId = (values) => {
    firestore()
      .collection('emergency')
      .doc(`${user._user.uid}`)
      .collection(`emergency_contact`)
      .doc(`${makeid()}`)
      .set({
        relation: values.relation,
        name: values.name,
        phone: values.phone,
      })
      .then(() => {
        console.log('Contact ADDED!');
        ToastAndroid.showWithGravity(
          'Contact',
          ToastAndroid.SHORT,
          ToastAndroid.BOTTOM,
        );
      });
  };

  //   useEffect(() => {
  //     console.log(user._user);
  //   });

  return (
    <ScrollView>
      <Formik
        initialValues={({relation: ''}, {name: ''}, {phone: ''})}
        onSubmit={(values) => onSubmit(values)}>
        {({handleChange, handleBlur, handleSubmit, values}) => (
          <View>
            <Input
              placeholder="Name"
              //leftIcon={<Icon name="user" size={24} color="black" />}
              // style={styles}
              onChangeText={handleChange('name')}
              onBlur={handleBlur('name')}
              value={values.name}
            />
            <Input
              placeholder="Relation"
              //leftIcon={<Icon name="envelope-open" size={24} color="black" />}
              // style={styles}
              onChangeText={handleChange('relation')}
              onBlur={handleBlur('relation')}
              value={values.relation}
            />

            <Input
              placeholder="Phone"
              //leftIcon={<Icon name="mobile" size={24} color="black" />}
              onChangeText={handleChange('phone')}
              onBlur={handleBlur('phone')}
              value={values.phone}
            />
            <View
              style={{
                width: 200,
                height: 60,
                marginTop: 30,
                alignSelf: 'center',
              }}>
              <Button
                type="outline"
                onPress={handleSubmit}
                title="Save Contact"
              />
            </View>
          </View>
        )}
      </Formik>
    </ScrollView>
  );
};

export default AddEmergencyContact;
