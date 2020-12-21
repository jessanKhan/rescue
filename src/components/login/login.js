import React from 'react';
import {Text, View} from 'react-native';
import Formik from 'formik';

const Login = ({navigation}) => {
  const onSubmit = (values) => {
    console.log(values);
  };
  return (
    <View>
      <Formik
        initialValues={({email: ''}, {password: ''})}
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
    </View>
  );
};

export default Login;
