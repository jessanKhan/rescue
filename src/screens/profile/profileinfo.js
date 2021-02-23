import React, {useEffect, useContext} from 'react';
import {View, Text, ScrollView, ToastAndroid} from 'react-native';
import {Input, Button} from 'react-native-elements';
import {Formik} from 'formik';
import Icon from 'react-native-vector-icons/FontAwesome';
import firestore from '@react-native-firebase/firestore';
import {AuthContext} from '../../routes/authprovider';

const ProfileInfo = ({navigations, route}) => {
  const {user} = useContext(AuthContext);
  const onSubmit = (values) => {
    addOnId(values);
  };
  const {
    address,
    district,
    division,
    name,
    phone,
    police_station,
    post_office,
    union,
  } = route.params;
  const addData = (values) => {
    firestore()
      .collection('users')
      .add({
        address: values.address,
        district: values.district,
        division: values.division,
        name: values.name,
        phone: values.phone,
        police_station: values.police_station,
        post_office: values.post_office,
        union: values.union,
      })
      .then(() => {
        console.log('User added!');
      });
  };

  const addOnId = (values) => {
    firestore()
      .collection('users')
      .doc(`${user._user.uid}`)
      .set({
        address: values.address,
        district: values.district,
        division: values.division,
        name: values.name,
        phone: values.phone,
        police_station: values.police_station,
        post_office: values.post_office,
        union: values.union,
      })
      .then(() => {
        console.log('User added!');
        ToastAndroid.showWithGravity(
          'User Information Updated',
          ToastAndroid.SHORT,
          ToastAndroid.BOTTOM,
        );
      });
  };

  useEffect(() => {
    console.log(
      name,
      phone,
      police_station,
      address,
      district,
      division,
      post_office,
      union,
    );
  });

  return (
    <ScrollView>
      <Formik
        initialValues={
          ({address: address},
          {district: district},
          {division: division},
          {name: name},
          {phone: phone},
          {police_station: police_station},
          {post_office: post_office},
          {union: union})
        }
        onSubmit={(values) => onSubmit(values)}>
        {({handleChange, handleBlur, handleSubmit, values}) => (
          <View>
            <Input
              placeholder="Name"
              onChangeText={handleChange('name')}
              onBlur={handleBlur('name')}
              value={values.name}
            />
            <Input
              placeholder="Address"
              onChangeText={handleChange('address')}
              onBlur={handleBlur('address')}
              value={values.address}
            />
            <Input
              placeholder="Police Station"
              onChangeText={handleChange('police_station')}
              onBlur={handleBlur('police_station')}
              value={values.police_station}
            />
            <Input
              placeholder="Post Office"
              onChangeText={handleChange('post_office')}
              onBlur={handleBlur('post_office')}
              value={values.post_office}
            />

            <Input
              placeholder="Union/Ward"
              onChangeText={handleChange('union')}
              onBlur={handleBlur('union')}
              value={values.union}
            />
            <Input
              placeholder="District"
              onChangeText={handleChange('district')}
              onBlur={handleBlur('district')}
              value={values.district}
            />
            <Input
              placeholder="Division"
              onChangeText={handleChange('division')}
              onBlur={handleBlur('division')}
              value={values.division}
            />
            <Input
              placeholder="Phone"
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
                title="Save User Info"
              />
            </View>
          </View>
        )}
      </Formik>
    </ScrollView>
  );
};

export default ProfileInfo;
