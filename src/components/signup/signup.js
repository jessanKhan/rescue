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

  // const [userDats, setUserData] = useState();
  const {register} = useContext(AuthContext);
  const loginValidationSchema = yup.object().shape({
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
            <Input
              placeholder="Email"
              leftIcon={<Icon name="envelope-open" size={24} color="black" />}
              // style={styles}
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
              // style={styles}
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
                width: 200,
                height: 60,
                marginTop: 30,
                alignSelf: 'center',
              }}>
              <Button
                type="outline"
                onPress={handleSubmit}
                title="Sign Up"
                disabled={!isValid}
              />
            </View>
          </View>
        )}
      </Formik>
      <View
        style={{
          // flexDirection: 'column',
          justifyContent: 'center',
          width: 200,
          height: 60,
          marginTop: 30,
          alignSelf: 'center',
        }}>
        <Text> Already have an account? </Text>

        <Button
          type="outline"
          title="Login"
          onPress={() => navigation.navigate('Login')}
        />
      </View>
    </View>
  );
};

export default SignUp;
