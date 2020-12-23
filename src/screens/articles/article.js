import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  ImageBackground,
  ScrollView,
  StyleSheet,
  Image,
  ActivityIndicator,
} from 'react-native';
import styles from './styles';
//PARSING TMLD DATA FROM SERVER RESPONSE
import WebView from 'react-native-webview';

const SaveEnvironment = ({navigation}) => {
  //FUNCTION EXCLUDING IMG, BR TAGS FROM HTML DATA FROM SERVER RESPONSE
  const original_url = `https://healtheplanet.com/100-ways-to-heal-the-planet/?gclid=CjwKCAiAz4b_BRBbEiwA5XlVVhKJn3IsIVBLGLVpCIcR4lb7lAAM71iFzBio4cspEcxVv-YVjuw9RRoCAHUQAvD_BwE`;

  useEffect(() => console.log('Hello', original_url));

  const ActivityIndicatorLoadingView = (props) => {
    return (
      <ActivityIndicator
        color="#354E72"
        size="large"
        style={styles.ActivityIndicatorStyle}
      />
    );
  };

  return (
    <ScrollView style={styles.htmlContainer}>
      <WebView
        source={{uri: original_url}}
        // onShouldStartLoadWithRequest={request => {
        //   // Only allow navigating within this website
        //   return request.url.startsWith(original_url);
        // }}
        javaScriptEnabled={true}
        domStorageEnabled={true}
        renderLoading={ActivityIndicatorLoadingView}
        startInLoadingState={true}
      />
      <Text>Hello Article</Text>
    </ScrollView>
  );
};

const HTMLStyling = StyleSheet.create({
  p: {
    color: '#fff',
    padding: 0,
    marginTop: 0,
    marginBottom: 8,
    fontSize: 11,
  },
  img: {
    width: '100%',
    flex: 1,
  },
  b: {
    color: '#fff',
    fontSize: 11,
    fontWeight: 'bold',
  },
  h2: {
    color: '#fff',
    fontSize: 13,
  },
  blockquote: {
    color: '#fff',
    fontSize: 12,
  },
  a: {
    color: '#fff',
  },
});

export default SaveEnvironment;
