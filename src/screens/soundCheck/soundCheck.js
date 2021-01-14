// import React, {Component} from 'react';
// import {View, Text} from 'react-native';
// import RNSoundLevel from 'react-native-sound-level-foreground';

// class SoundCheck extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {};
//   }

//   componentDidMount() {
//     RNSoundLevel.start();
//     RNSoundLevel.onNewFrame = (data) => {
//       // see "Returned data" section below
//       console.log('Sound level info', data);
//     };
//   }

//   // don't forget to stop it
//   componentWillUnmount() {
//     RNSoundLevel.stop();
//   }

//   render() {
//     return (
//       <View>
//         <Text> soundCheck </Text>
//       </View>
//     );
//   }
// }

// export default SoundCheck;

import React, {useEffect, useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  PermissionsAndroid,
} from 'react-native';
import RNSoundLevel from 'react-native-sound-level-foreground';

const SoundCheck = ({navigation}) => {
  const [permission, setPermission] = useState(false);
  const [level, SetLevel] = useState(0);
  const [start, setStart] = useState(false);

  async function requestPermissions() {
    if (Platform.OS === 'android') {
      await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.RECORD_AUDIO,
      );
      setPermission(true);
    }
  }

  const startCheck = () => {
    if (permission) {
      RNSoundLevel.start();
      RNSoundLevel.onNewFrame = (data) => {
        // see "Returned data" section below
        let values = data.value + 100;
        SetLevel(values);
        console.log('Sound level info', data);
      };
    }
  };
  const stopCheck = () => {
    RNSoundLevel.stop();
  };

  useEffect(() => {
    requestPermissions();
  });

  return (
    <View style={styles.container}>
      <View style={level > 70 ? styles.header2 : styles.header}></View>
      <Image style={styles.avatar} source={require('../../assets/mic.png')} />
      <View style={styles.body}>
        <View style={styles.bodyContent}>
          <Text style={styles.name}>{level < 0 ? 0 : level}dB</Text>
          {/* <Text style={styles.info}>UX Designer / Mobile developer</Text>
          <Text style={styles.description}>
            Lorem ipsum dolor sit amet, saepe sapientem eu nam. Qui ne assum
            electram expetendis, omittam deseruisse consequuntur ius an,
          </Text> */}

          <TouchableOpacity
            style={styles.buttonContainer}
            onPress={() => startCheck()}>
            <Text>Start</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.buttonContainer}
            onPress={() => stopCheck()}>
            <Text>Stop</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#00BFFF',
    height: 200,
  },
  header2: {
    backgroundColor: '#e74c3c',
    height: 200,
  },
  avatar: {
    width: 130,
    height: 130,
    borderRadius: 63,
    borderWidth: 4,
    borderColor: 'white',
    marginBottom: 10,
    alignSelf: 'center',
    position: 'absolute',
    marginTop: 130,
  },
  name: {
    fontSize: 22,
    color: '#FFFFFF',
    fontWeight: '600',
  },
  body: {
    marginTop: 40,
  },
  bodyContent: {
    flex: 1,
    alignItems: 'center',
    padding: 30,
  },
  name: {
    fontSize: 28,
    color: '#696969',
    fontWeight: '600',
  },
  info: {
    fontSize: 16,
    color: '#00BFFF',
    marginTop: 10,
  },
  description: {
    fontSize: 16,
    color: '#696969',
    marginTop: 10,
    textAlign: 'center',
  },
  buttonContainer: {
    marginTop: 10,
    height: 45,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
    width: 250,
    borderRadius: 30,
    backgroundColor: '#00BFFF',
  },
});

export default SoundCheck;
