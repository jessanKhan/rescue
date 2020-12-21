import React from 'react';
import {Text, View} from 'react-native';
import {Formik} from 'formik';
import {Input, Button} from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';

const SignUp = ({navigation}) => {
  const onSubmit = (values) => {
    console.log(values);
  };
  return (
    <View>
      <Formik
        initialValues={({name: ''}, {email: ''}, {password: ''}, {phone: ''})}
        onSubmit={(values) => onSubmit(values)}>
        {({handleChange, handleBlur, handleSubmit, values}) => (
          <View>
            {/* <TextInput
            onChangeText={handleChange('email')}
            onBlur={handleBlur('email')}
            value={values.email}
          /> */}

            <Input
              placeholder="Name"
              leftIcon={<Icon name="user" size={24} color="black" />}
              // style={styles}
              onChangeText={handleChange('name')}
              onBlur={handleBlur('name')}
              value={values.name}
            />
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
            <Input
              placeholder="Phone"
              leftIcon={<Icon name="mobile" size={24} color="black" />}
              onChangeText={handleChange('phone')}
              onBlur={handleBlur('phone')}
              value={values.address}
            />
            <Button onPress={handleSubmit} title="Submit" />
          </View>
        )}
      </Formik>
    </View>
  );
};

export default SignUp;
