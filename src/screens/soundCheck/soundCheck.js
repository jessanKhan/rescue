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

import React, {useEffect} from 'react';
import {Text, View} from 'react-native';
import RNSoundLevel from 'react-native-sound-level-foreground';

const SoundCheck = ({navigation}) => {
  useEffect(() => {
    RNSoundLevel.start();
    RNSoundLevel.onNewFrame = (data) => {
      // see "Returned data" section below
      console.log('Sound level info', data);
    };
  });

  return (
    <View>
      <Text>SoundCheck</Text>
    </View>
  );
};

export default SoundCheck;
