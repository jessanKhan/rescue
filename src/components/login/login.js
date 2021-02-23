import React, {useContext} from 'react';
import {Text, View} from 'react-native';
import {Formik} from 'formik';
import {Input, Button} from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import {AuthContext} from '../../routes/authprovider';
import * as yup from 'yup';
import {TouchableOpacity} from 'react-native-gesture-handler';

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
              style={{fontSize: 14}}
              secureTextEntry={true}
              leftIcon={<Icon name="key" size={24} color="black" />}
              onChangeText={handleChange('password')}
              onBlur={handleBlur('password')}
              value={values.password}
            />
            <TouchableOpacity
              style={{paddingLeft: 15}}
              onPress={() => navigation.navigate('ForgotPassword?')}>
              <Text>Forgot Password ?</Text>
            </TouchableOpacity>
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
                title="Login"
                titleStyle={{fontSize: 14}}
                disabled={!isValid}
              />
            </View>
          </View>
        )}
      </Formik>
      {/* <View
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
      </View> */}
      <View
        style={{
          justifyContent: 'center',
          marginTop: 30,
          alignSelf: 'center',
        }}>
        <Text> Don't have any account? </Text>
        <View
          style={{
            // flexDirection: 'column',
            justifyContent: 'center',
            width: 120,
            height: 50,
            alignSelf: 'center',
          }}>
          <Button
            type="outline"
            title="SignUp"
            titleStyle={{fontSize: 14}}
            onPress={() => navigation.navigate('Signup')}
          />
        </View>
      </View>
    </View>
  );
};

export default Login;
