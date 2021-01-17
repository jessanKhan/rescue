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
// import ArticleList from '../../data/save_env.json';

const SaveEnvironment = (ArticleData) => {
  //FUNCTION EXCLUDING IMG, BR TAGS FROM HTML DATA FROM SERVER RESPONSE
  const original_url = ArticleData.route.params.ArticleData.url;

  useEffect(() => console.log('Hello', ArticleData));

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
    // <ScrollView style={styles.htmlContainer}>
    <WebView
      source={{uri: original_url}}
      onShouldStartLoadWithRequest={(request) => {
        // Only allow navigating within this website
        return request.url.startsWith(original_url);
      }}
      javaScriptEnabled={true}
      domStorageEnabled={true}
      renderLoading={ActivityIndicatorLoadingView}
      startInLoadingState={true}
    />
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
