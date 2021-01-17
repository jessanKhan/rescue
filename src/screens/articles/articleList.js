import React from 'react';
import {Text, ScrollView, View, TouchableOpacity} from 'react-native';
import ArticleData from '../../data/save_env.json';
import {useNavigation} from '@react-navigation/native';

const ArticleList = ({params}) => {
  const navigation = useNavigation();

  return (
    <ScrollView>
      {/* <Text style={{fontSize: 20, fontFamily: 'Roboto', color: '#696969'}}>
        List of Articles that will help you understand how could you can help
        saving the earth
      </Text> */}
      {ArticleData.map((name, index) => (
        <TouchableOpacity
          style={{marginLeft: 15, marginTop: 5, marginBottom: 10}}
          onPress={() => {
            navigation.navigate('SaveEnvironment', {
              ArticleData: name,
            });
          }}>
          <Text style={{fontSize: 18, color: '#16a085'}}>
            {index + 1}.{name.name}
          </Text>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
};

export default ArticleList;
