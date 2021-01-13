import {useNavigation} from '@react-navigation/native';
import React, {useEffect} from 'react';
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
import DaysData from '../../data/world_env_days.json';
// import {useNavigation} from '@react-navigation/native';

const WorldDays = ({params}) => {
  const navigation = useNavigation();
  useEffect(() => {
    console.log(DaysData);
  });

  const Item = (props, key) => {
    const {title, date, description, image} = props.data;
    console.log('asdsa', props);
    return (
      <TouchableOpacity
        onPress={() => {
          //PASSING DATA TO CRYPTONEWSDETAILS
          navigation.navigate('WorldDaysDetails', {
            ArticleData: props.data,
          });
          //alert(props.data[0])
        }}>
        <View style={styles.card}>
          <Image style={styles.cardImage} source={{uri: image}} />

          <View style={styles.cardHeader}>
            <View>
              <Text>{title}</Text>
              <Text>{date}</Text>
            </View>
          </View>
          <View style={styles.blank}></View>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <ScrollView>
      {DaysData?.length > 0 &&
        DaysData.map((item) => {
          return <Item data={item} />;
        })}
    </ScrollView>
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
    height: 230,

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
  //   blank: {
  //     padding: 10,
  //   },
});

export default WorldDays;
