import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  current_weather_container: {
    backgroundColor: '#ECEFF1',
    width: '100%',
    height: '100%',
    flexDirection: 'column',
    paddingLeft: 25,
    paddingRight: 25,
  },
  current_weather_contant: {
    flexDirection: 'row',
    width: '100%',
    height: '40%',
  },
  current_weather_status: {
    flexDirection: 'column',
    width: '50%',
    paddingTop: 20,
    height: '100%',
  },
  current_weather_status_text_A: {
    fontSize: 60,
    color: '#37474F',
  },
  current_weather_status_text_B: {
    color: '#90A4AE',
  },
  current_weather_status_text_C: {
    color: '#37474F',
    fontWeight: 'bold',
  },
  current_weather_status_image: {
    height: 180,
    width: 180,
  },
  current_weather_serach_box: {
    height: 40,
  },
  current_weather_serach_content: {
    flexDirection: 'row',
    // paddingTop: 5
  },
  current_weather_serach_textBox: {
    height: 50,
    width: '80%',
  },
  current_weather_serach_textBoxExta: {
    height: 40,
  },
  iconEdit: {
    paddingTop: 6,
  },
  iconButton: {
    paddingTop: 6,
    height: '80%',
    width: '100%',
    backgroundColor: '#207DE5',
  },
});

export default styles;
