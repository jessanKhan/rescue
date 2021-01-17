import React, {useEffect, useContext} from 'react';
import {View, Text, ScrollView, ToastAndroid} from 'react-native';
import {Input, Button} from 'react-native-elements';
import {Formik} from 'formik';
import Icon from 'react-native-vector-icons/FontAwesome';
import firestore from '@react-native-firebase/firestore';
import {AuthContext} from '../../routes/authprovider';

const ProfileInfo = (navigations) => {
  const {user} = useContext(AuthContext);
  const onSubmit = (values) => {
    addOnId(values);
  };

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

  //   useEffect(() => {
  //     console.log(user._user);
  //   });

  return (
    <ScrollView>
      <Formik
        initialValues={
          ({address: ''},
          {district: ''},
          {division: ''},
          {name: ''},
          {phone: ''},
          {police_station: ''},
          {post_office: ''},
          {union: ''})
        }
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
              placeholder="Address"
              //leftIcon={<Icon name="envelope-open" size={24} color="black" />}
              // style={styles}
              onChangeText={handleChange('address')}
              onBlur={handleBlur('address')}
              value={values.address}
            />
            <Input
              placeholder="Police Station"
              // secureTextEntry={true}
              //leftIcon={<Icon name="key" size={24} color="black" />}
              // style={styles}
              onChangeText={handleChange('police_station')}
              onBlur={handleBlur('police_station')}
              value={values.police_station}
            />
            <Input
              placeholder="Post Office"
              //leftIcon={<Icon name="mobile" size={24} color="black" />}
              onChangeText={handleChange('post_office')}
              onBlur={handleBlur('post_office')}
              value={values.post_office}
            />

            <Input
              placeholder="Union/Ward"
              //leftIcon={<Icon name="user" size={24} color="black" />}
              // style={styles}
              onChangeText={handleChange('union')}
              onBlur={handleBlur('union')}
              value={values.union}
            />
            <Input
              placeholder="District"
              //leftIcon={<Icon name="envelope-open" size={24} color="black" />}
              // style={styles}
              onChangeText={handleChange('district')}
              onBlur={handleBlur('district')}
              value={values.district}
            />
            <Input
              placeholder="Division"
              // secureTextEntry={true}
              // leftIcon={<Icon name="key" size={24} color="black" />}
              // style={styles}
              onChangeText={handleChange('division')}
              onBlur={handleBlur('division')}
              value={values.division}
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
