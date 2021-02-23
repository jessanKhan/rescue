import React, {useContext} from 'react';
import {Text, View} from 'react-native';
import {Formik} from 'formik';
import {Input, Button} from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import {AuthContext} from '../../routes/authprovider';
import * as yup from 'yup';

const ForgotPassword = ({navigation}) => {
  const onSubmit = (values) => {
    console.log(values);
    forgot(values.email);
  };

  const {forgot} = useContext(AuthContext);
  const loginValidationSchema = yup.object().shape({
    email: yup
      .string()
      .email('Please enter valid email')
      .required('Email Address is Required'),
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
              style={{fontSize: 14}}
              onChangeText={handleChange('email')}
              onBlur={handleBlur('email')}
              value={values.email}
            />
            {errors.email && touched.email && (
              <Text style={{fontSize: 13, color: 'red'}}>{errors.email}</Text>
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
                title="Send mail"
                titleStyle={{fontSize: 14}}
                disabled={!isValid}
              />
            </View>
          </View>
        )}
      </Formik>
    </View>
  );
};

export default ForgotPassword;
