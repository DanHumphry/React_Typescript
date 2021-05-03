import React, {useEffect, useState, VFC} from 'react';
import {
  Modal,
  StyleSheet,
  Text,
  Pressable,
  View,
  Alert,
  Platform,
} from 'react-native';
import Sound from 'react-native-sound';

const App = () => {
  const PlayRemoteURLSoundFile = () => {
    Sound.setCategory('Playback');
    var myRemoteSound = new Sound(
      'https://www.soundjay.com/ambient/sounds/boarding-accouncement-1.mp3',
      null,
      error => {
        if (error) {
          console.log(error);
          return;
        } else {
          myRemoteSound.play(success => {
            if (success) {
              console.log('Sound playing');
            } else {
              console.log('Issue playing file');
            }
          });
        }
      },
    );
    myRemoteSound.setVolume(0.9);
    myRemoteSound.release();
  };

  // const [bell] = useState(
  //   Platform.OS === 'ios'
  //     ? new Sound(require('@sound/ring.wav'), error => {
  //         if (error) {
  //           Alert.alert('error' + error.message);
  //         }
  //         bell?.setNumberOfLoops(-1);
  //         bell?.setVolume(1);
  //       })
  //     : new Sound('ring.wav', Sound.MAIN_BUNDLE, error => {
  //         if (error) {
  //           console.log(error);
  //         }
  //         bell.setNumberOfLoops(-1);
  //         bell.setVolume(1);
  //       }),
  // );

  useEffect(() => {
    // modalVisible ? bell?.play() : bell?.stop();
    PlayRemoteURLSoundFile();
  }, []);

  return (
    <View>
      <Text>tete</Text>
    </View>
  );
};

export default App;
