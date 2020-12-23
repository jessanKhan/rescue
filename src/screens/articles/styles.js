import {StyleSheet, Dimensions} from 'react-native';

let deviceHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    paddingHorizontal: 8,
    paddingBottom: 24,
  },
  bgImage: {
    height: deviceHeight,
    width: '100%',
  },
  newsImage: {
    width: '100%',
    height: 200,
    marginBottom: 16,
    marginTop: 24,
  },
  title: {
    color: '#fff',
    fontFamily: 'montserrat',
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  description: {
    marginTop: 8,
    color: '#ddd',
    width: '100%',
    fontFamily: 'montserrat',
    height: '100%',
  },
  htmlContainer: {
    flex: 1,
    //paddingBottom: 50,
    paddingHorizontal: 8,
    marginBottom: 80,
  },
  ActivityIndicatorStyle: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    alignItems: 'center',
    justifyContent: 'center',
  },
  NoNetView: {
    alignItems: 'center',
    justifyContent: 'center',
    top: '44%',
  },
  NetErrorText: {
    color: '#fff',
  },
  NetErrorButton: {
    width: 80,
    backgroundColor: '#303B55',
    margin: 20,
  },
});

export default styles;
