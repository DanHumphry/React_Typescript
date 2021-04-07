import React, {useState} from 'react';
import {StyleSheet, Button, View, Image} from 'react-native';
// import * as ImagePicker from 'react-native-image-picker';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';

const App = () => {
  const [avatar, setAvatar] = useState('');
  const addImage = () => {
    launchCamera({}, response => {
      setAvatar(response.uri);
    });
  };

  return (
    <View style={styles.container}>
      <Image source={{url: avatar}} />
      <Button
        title="Add an Image"
        onPress={() => {
          addImage();
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#e4ab26',
  },
});

export default App;
