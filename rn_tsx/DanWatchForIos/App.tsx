import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {StyleSheet} from 'react-native';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';

import Timer from '@pages/Timer';
import StopWatch from '@pages/Watch';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({route}) => ({
          tabBarIcon: ({color, size}) => {
            if (route.name === 'StopWatch') {
              return (
                <MaterialIcon
                  style={styles.iconStyle}
                  name="timer"
                  size={size}
                  color={color}
                />
              );
            } else if (route.name === 'Timer') {
              return (
                <MaterialIcon
                  style={styles.iconStyle}
                  name="watch-later"
                  size={size}
                  color={color}
                />
              );
            }
          },
        })}
        tabBarOptions={{
          activeTintColor: '#2377AA',
          inactiveTintColor: 'gray',
          labelStyle: {
            fontSize: 14,
            paddingTop: 0,
          },
        }}>
        <Tab.Screen name="StopWatch" component={StopWatch} />
        <Tab.Screen name="Timer" component={Timer} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  iconStyle: {
    marginTop: 3,
  },
});
