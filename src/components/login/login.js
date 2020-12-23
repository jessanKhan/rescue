import React, {useContext} from 'react';
import {Text, View} from 'react-native';
import {Formik} from 'formik';
import {Input, Button} from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import {AuthContext} from '../../routes/authprovider';

const Login = ({navigation}) => {
  const {login} = useContext(AuthContext);
  const onSubmit = (values) => {
    console.log(values);
    login(values.email, values.password);
  };
  return (
    <View>
      <Formik
        initialValues={({name: ''}, {email: ''}, {password: ''}, {phone: ''})}
        onSubmit={(values) => onSubmit(values)}>
        {({handleChange, handleBlur, handleSubmit, values}) => (
          <View>
            <Input
              placeholder="Email"
              leftIcon={<Icon name="envelope-open" size={24} color="black" />}
              // style={styles}
              onChangeText={handleChange('email')}
              onBlur={handleBlur('email')}
              value={values.email}
            />
            <Input
              placeholder="Password"
              secureTextEntry={true}
              leftIcon={<Icon name="key" size={24} color="black" />}
              // style={styles}
              onChangeText={handleChange('password')}
              onBlur={handleBlur('password')}
              value={values.password}
            />
            <View
              style={{
                width: 200,
                height: 60,
                marginTop: 30,
                alignSelf: 'center',
              }}>
              <Button onPress={handleSubmit} title="Login" />
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
