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

            <Button onPress={handleSubmit} title="Submit" />
          </View>
        )}
      </Formik>
      <View>
        <Button title="SignUp" onPress={() => navigation.navigate('Signup')} />
      </View>
    </View>
  );
};

export default Login;
