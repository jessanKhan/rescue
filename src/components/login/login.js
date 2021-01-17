import React, {useContext} from 'react';
import {Text, View} from 'react-native';
import {Formik} from 'formik';
import {Input, Button} from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import {AuthContext} from '../../routes/authprovider';
import * as yup from 'yup';

const Login = ({navigation}) => {
  const {login} = useContext(AuthContext);
  const onSubmit = (values) => {
    console.log(values);
    login(values.email, values.password);
  };

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
        initialValues={({name: ''}, {email: ''}, {password: ''}, {phone: ''})}
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
                onPress={handleSubmit}
                title="Login"
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
        <Text> Dont have any account? </Text>
        <Button
          type="outline"
          title="SignUp"
          onPress={() => navigation.navigate('Signup')}
        />
      </View>
    </View>
  );
};

export default Login;
