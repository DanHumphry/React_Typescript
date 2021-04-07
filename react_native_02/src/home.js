import React from 'react';
import {Text, View, Button} from 'react-native';
import 'react-native-gesture-handler';

const HomeScreen = props => {
  return (
    <View>
      <Text>home</Text>
      <Button
        title="To User Screen"
        onPress={() => {
          props.navigation.navigate('User', {
            userIdx: 100,
            userName: 'Gilding',
            userLastName: 'Hong',
          });
        }}
      />
      <Button
        title="Change the title"
        onPress={() => {
          props.navigation.setOptions({
            title: 'Chageed!!!',
            headerStyle: {
              backgroundColor: 'pink',
            },
            headerTintColor: 'red',
          });
        }}
      />
    </View>
  );
};

export default HomeScreen;
