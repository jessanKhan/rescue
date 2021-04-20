import React, {useEffect, useState} from 'react';
import {Text, View, StyleSheet, TouchableOpacity, FlatList} from 'react-native';
// import Newsapi from 'newsapi';
import axios from 'axios';

import Icon from 'react-native-vector-icons/Ionicons';

const data = [
  // {
  //   id: 1,
  //   title: 'News Feeds',
  //   image: 'newspaper',
  //   route: 'NewsStack',
  // },
  {
    id: 1,
    title: 'Profile',
    image: 'person',
    route: 'Profile',
  },
  {
    id: 2,
    title: 'Weather Info',
    image: 'cloudy-night',
    route: 'Weather',
  },
  {
    id: 3,
    title: 'Sound Polution',
    image: 'mic-circle-outline',
    route: 'Sound',
  },
  {
    id: 4,
    title: 'World Environment',
    image: 'globe',
    route: 'ArticleDays',
  },
  {
    id: 5,
    title: 'Save Environment',
    image: 'book',
    route: 'Article',
  },
  {
    id: 6,
    title: 'Emergency Contact',
    image: 'mail-open',
    route: 'EmergecyContact',
  },
  {
    id: 7,
    title: 'Volunteers',
    image: 'help-buoy',
    route: 'Volunteer',
  },
  {
    id: 8,
    title: 'Disaster Kit',
    image: 'medkit',
    route: 'disasterkit',
  },
  {
    id: 9,
    title: 'Help Line',
    image: 'help',
    route: 'helpline',
  },
];

const Home = ({navigation}) => {
  // const newsApi = Newsapi('40f074db59354f7a8bcacf878bdae154');
  const [newsData, setNewsData] = useState();
  const clickEventListener = (item) => {
    navigation.navigate(item.route);
  };

  // const getNews = async () => {
  //   await newsApi.v2
  //     .everything({
  //       sources: 'bbc-news,the-verge',
  //       q: 'environment',
  //       category: 'environment',
  //       language: 'en',
  //       country: 'us',
  //     })
  //     .then((res) => setNewsData(res));
  // };

  useEffect(() => {
    axios
      .get(
        'https://newsapi.org/v2/everything?q=weather&from=2021-02-27&sortBy=publishedAt&apiKey=40f074db59354f7a8bcacf878bdae154',
      )
      .then((res) => {
        setNewsData(res);
        console.log(res);
      });
  }, []);

  return (
    <View style={styles.container}>
      <FlatList
        style={styles.list}
        contentContainerStyle={styles.listContainer}
        data={data}
        horizontal={false}
        numColumns={2}
        keyExtractor={(item) => {
          return item.id;
        }}
        renderItem={({item}) => {
          return (
            <View>
              <TouchableOpacity
                style={styles.card}
                onPress={() => {
                  clickEventListener(item);
                }}>
                {/* <Image style={styles.cardImage} source={{uri: item.image}} /> */}
                <Icon name={item.image} size={35} color="#7cc" />
              </TouchableOpacity>

              <View style={styles.cardHeader}>
                <View style={{alignItems: 'center', justifyContent: 'center'}}>
                  <Text style={styles.title}>{item.title}</Text>
                </View>
              </View>
            </View>
          );
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // marginTop: 40,
    backgroundColor: '#f6f6f6',
  },
  list: {
    paddingHorizontal: 5,
    backgroundColor: '#f6f6f6',
  },
  listContainer: {
    alignItems: 'center',
  },
  /******** card **************/
  card: {
    shadowColor: '#474747',
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.37,
    shadowRadius: 7.49,

    elevation: 12,
    marginVertical: 20,
    marginHorizontal: 40,
    backgroundColor: '#e2e2e2',
    //flexBasis: '42%',
    width: 90,
    height: 90,
    borderRadius: 60,
    alignItems: 'center',
    justifyContent: 'center',
  },
  cardHeader: {
    paddingVertical: 17,
    paddingHorizontal: 16,
    borderTopLeftRadius: 1,
    borderTopRightRadius: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  cardContent: {
    paddingVertical: 12.5,
    paddingHorizontal: 16,
  },
  cardFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: 12.5,
    paddingBottom: 25,
    paddingHorizontal: 16,
    borderBottomLeftRadius: 1,
    borderBottomRightRadius: 1,
  },
  cardImage: {
    height: 50,
    width: 50,
    alignSelf: 'center',
  },
  title: {
    fontSize: 14,
    flex: 1,
    alignSelf: 'center',
    color: '#696969',
  },
});

export default Home;
