import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from '@/home';
import UserScreen from '@/user';

const App = () => {
  const Stack = createStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{title: 'Home Screen'}}
        />
        <Stack.Screen
          name="User"
          component={UserScreen}
          initialParams={{
            userIdx: 50,
            userName: 'Gilding',
            userLastName: 'Go',
          }}
          options={{
            title: 'User Screen',
            headerStyle: {
              backgroundColor: 'pink',
            },
            headerTintColor: 'red',
            headerTitleStyle: {
              fontWeight: 'bold',
              color: 'purple',
            },
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
const styles = StyleSheet.create({});

export default App;
