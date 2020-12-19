import React from 'react';
import {Text, View} from 'react-native';
import {Formik} from 'formik';
import {Input, Button} from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';

const SignUp = ({navigation}) => (
  <View>
    <Formik
      initialValues={{email: ''}}
      onSubmit={(values) => console.log(values)}>
      {({handleChange, handleBlur, handleSubmit, values}) => (
        <View>
          {/* <TextInput
            onChangeText={handleChange('email')}
            onBlur={handleBlur('email')}
            value={values.email}
          /> */}

          <Input
            placeholder="Comment"
            leftIcon={<Icon name="user" size={24} color="black" />}
            // style={styles}
            onChangeText={(value) => this.setState({comment: value})}
          />
          <Button onPress={handleSubmit} title="Submit" />
        </View>
      )}
    </Formik>
  </View>
);

export default SignUp;
