import React, {useContext, useState} from 'react';
import {Text, View} from 'react-native';
import {Formik} from 'formik';
import {Input, Button} from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import {AuthContext} from '../../routes/authprovider';

const SignUp = ({navigation}) => {
  const onSubmit = (values) => {
    console.log(values);
    register(values.email, values.password);
  };

  const [userDats, setUserData] = useState();
  const {register} = useContext(AuthContext);

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

            <View
              style={{
                width: 200,
                height: 60,
                marginTop: 30,
                alignSelf: 'center',
              }}>
              <Button type="outline" onPress={handleSubmit} title="Sign Up" />
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
