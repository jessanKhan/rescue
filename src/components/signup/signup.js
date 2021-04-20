import React, {useContext, useState} from 'react';
import {Text, View} from 'react-native';
import {Formik} from 'formik';
import {Input, Button} from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import {AuthContext} from '../../routes/authprovider';
import * as yup from 'yup';

const SignUp = ({navigation}) => {
  const onSubmit = (values) => {
    console.log(values);
    register(values.email, values.password);
  };

  const {register} = useContext(AuthContext);
  const loginValidationSchema = yup.object().shape({
    // displayName: yup.string().required('Username is Required'),
    email: yup
      .string()
      .email('Please enter valid email')
      .required('Email Address is Required'),
    password: yup
      .string()
      .min(6, ({min}) => `Password must be at least ${min} characters`)
      .required('Password is required'),
  });

  return (
    <View>
      <Formik
        initialValues={({email: ''}, {password: ''})}
        validationSchema={loginValidationSchema}
        onSubmit={(values) => onSubmit(values)}>
        {({
          handleChange,
          handleBlur,
          handleSubmit,
          values,
          isValid,
          errors,
          touched,
        }) => (
          <View>
            {/* <Input
              placeholder="Username"
              leftIcon={<Icon name="user" size={24} color="black" />}
              style={{fontSize: 14}}
              onChangeText={handleChange('displayName')}
              onBlur={handleBlur('displayName')}
              value={values.displayName}
            /> */}
            <Input
              placeholder="Email"
              leftIcon={<Icon name="envelope-open" size={24} color="black" />}
              style={{fontSize: 14}}
              onChangeText={handleChange('email')}
              onBlur={handleBlur('email')}
              value={values.email}
            />
            {errors.email && touched.email && (
              <Text style={{fontSize: 13, color: 'red'}}>{errors.email}</Text>
            )}
            <Input
              placeholder="Password"
              secureTextEntry={true}
              leftIcon={<Icon name="key" size={24} color="black" />}
              style={{fontSize: 14}}
              onChangeText={handleChange('password')}
              onBlur={handleBlur('password')}
              value={values.password}
            />
            {errors.password && touched.password && (
              <Text style={{fontSize: 13, color: 'red'}}>
                {errors.password}
              </Text>
            )}
            <View
              style={{
                width: 120,
                height: 60,
                marginTop: 30,
                alignSelf: 'center',
              }}>
              <Button
                onPress={handleSubmit}
                title="Sign Up"
                titleStyle={{fontSize: 14}}
                disabled={!isValid}
              />
            </View>
          </View>
        )}
      </Formik>
      <View
        style={{
          justifyContent: 'center',
          marginTop: 30,
          alignSelf: 'center',
        }}>
        <Text> Already have an account? </Text>
        <View
          style={{
            justifyContent: 'center',
            width: 120,
            height: 50,
            alignSelf: 'center',
          }}>
          <Button
            type="outline"
            title="Login"
            titleStyle={{fontSize: 14}}
            onPress={() => navigation.navigate('Login')}
          />
        </View>
      </View>
    </View>
  );
};

export default SignUp;
