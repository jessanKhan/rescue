import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  Alert,
  ScrollView,
  FlatList,
  Button,
} from 'react-native';
import axios from 'axios';

const initialdata = [
  {
    author: 'https://www.engadget.com/about/editors/saqib-shah',
    content:
      'Federal labor regulators have found that Amazon illegally fired two of the most outspoken critics of its climate and workplace practices. Former employees Emily Cunningham and Maren Costa were let go… [+2323 chars]',
    description:
      'Amazon illegally retaliated against two former employees after it fired them for staging climate and workplace safety protests last year, according to federal labor regulators.',
    publishedAt: '2021-04-05T10:42:45Z',
    source: [],

    title: 'Federal labor agency says Amazon illegally fired climate activists',
    url:
      'https://www.engadget.com/federal-labor-agency-amazon-illegally-fired-climate-activists-104245893.html',
    urlToImage:
      'https://s.yimg.com/os/creatr-uploaded-images/2021-04/76e449c0-95f9-11eb-b7ff-0723235a035b',
  },
];

const NewsFeeds = ({params}) => {
  const [data, setData] = useState(initialdata);
  const [gotData, setGotData] = useState(false);
  // const [newsData, setNewsData] = useState()

  useEffect(() => {
    axios
      .get(
        'https://newsapi.org/v2/everything?q=climate&q=nature&q=disaster&apiKey=40f074db59354f7a8bcacf878bdae154',
      )
      .then((res) => {
        setData(res);
        setGotData(true);
        console.log('Data news', res);
      });
  }, [gotData]);

  return (
    <View style={styles.container}>
      <FlatList
        style={styles.list}
        data={data}
        keyExtractor={(item) => {
          return item.id;
        }}
        ItemSeparatorComponent={() => {
          return <View style={styles.separator} />;
        }}
        renderItem={(post) => {
          const item = post.item;
          return (
            <View style={styles.card}>
              <Image style={styles.cardImage} source={{uri: item.urlToImage}} />
              <View style={styles.cardHeader}>
                <View>
                  <Text style={styles.title}>{item.title}</Text>
                  <Text style={styles.description}>{item.description}</Text>
                  <View style={styles.timeContainer}>
                    <Image
                      style={styles.iconData}
                      source={{
                        uri:
                          'https://img.icons8.com/color/96/3498db/calendar.png',
                      }}
                    />
                    <Text style={styles.time}>{item.time}</Text>
                  </View>
                </View>
              </View>
              <View style={styles.cardFooter}>
                <View style={styles.socialBarContainer}>
                  <View style={styles.socialBarSection}>
                    <TouchableOpacity style={styles.socialBarButton}>
                      <Image
                        style={styles.icon}
                        source={{
                          uri:
                            'https://img.icons8.com/material/96/2ecc71/visible.png',
                        }}
                      />
                      <Text style={styles.socialBarLabel}>78</Text>
                    </TouchableOpacity>
                  </View>
                  <View style={styles.socialBarSection}>
                    <TouchableOpacity style={styles.socialBarButton}>
                      <Image
                        style={styles.icon}
                        source={{
                          uri:
                            'https://img.icons8.com/ios-glyphs/75/2ecc71/comments.png',
                        }}
                      />
                      <Text style={styles.socialBarLabel}>25</Text>
                    </TouchableOpacity>
                  </View>
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
    marginTop: 20,
  },
  list: {
    paddingHorizontal: 17,
    backgroundColor: '#E6E6E6',
  },
  separator: {
    marginTop: 10,
  },
  /******** card **************/
  card: {
    shadowColor: '#00000021',
    shadowOffset: {
      width: 2,
    },
    shadowOpacity: 0.5,
    shadowRadius: 4,
    marginVertical: 8,
    backgroundColor: 'white',
  },
  cardHeader: {
    paddingVertical: 17,
    paddingHorizontal: 16,
    borderTopLeftRadius: 1,
    borderTopRightRadius: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
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
    backgroundColor: '#EEEEEE',
  },
  cardImage: {
    flex: 1,
    height: 150,
    width: null,
  },
  /******** card components **************/
  title: {
    fontSize: 18,
    flex: 1,
  },
  description: {
    fontSize: 15,
    color: '#888',
    flex: 1,
    marginTop: 5,
    marginBottom: 5,
  },
  time: {
    fontSize: 13,
    color: '#808080',
    marginTop: 5,
  },
  icon: {
    width: 25,
    height: 25,
  },
  iconData: {
    width: 15,
    height: 15,
    marginTop: 5,
    marginRight: 5,
  },
  timeContainer: {
    flexDirection: 'row',
  },
  /******** social bar ******************/
  socialBarContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    flex: 1,
  },
  socialBarSection: {
    justifyContent: 'center',
    flexDirection: 'row',
    flex: 1,
  },
  socialBarlabel: {
    marginLeft: 8,
    alignSelf: 'flex-end',
    justifyContent: 'center',
  },
  socialBarButton: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default NewsFeeds;
