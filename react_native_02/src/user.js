import React from 'react';
import {Button, Text, View} from 'react-native';
import 'react-native-gesture-handler';

const UserScreen = props => {
  const {params} = props.route;
  const userIdx = params ? params.userIdx : null;
  const userName = params ? params.userName : null;
  const userLastName = params ? params.userLastName : null;

  return (
    <View>
      <Text>User</Text>
      <Button
        title="To Home Screen"
        onPress={() => {
          props.navigation.navigate('Home');
        }}
      />
      <Text>User Idx: {JSON.stringify(userIdx)}</Text>
      <Text>User userName: {JSON.stringify(userName)}</Text>
      <Text>User userLastName: {JSON.stringify(userLastName)}</Text>
    </View>
  );
};

export default UserScreen;
