import React, {useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {StyleSheet, Text, View} from 'react-native';
import IonicIcon from 'react-native-vector-icons/Ionicons';
import AntIcon from 'react-native-vector-icons/AntDesign';

import Alarm from '@pages/Alarm';
import StopWatch from '@pages/StopWatch';
import Timer from '@pages/Timer';
import AlarmDetail from '@pages/AlarmDetail';
import Setting from '@pages/Setting';

const Stack = createStackNavigator();

const Nav = () => {
  const [content] = useState(['Alarm', 'StopWatch', 'Timer', 'Setting']);
  const [selectContent, setSelectContent] = useState('Alarm');
  const [navModal, setNavModal] = useState(false);

  const headerRight = () => (
    <>
      <Text style={{marginRight: 10}} onPress={() => setNavModal(!navModal)}>
        {selectContent}
        <AntIcon name="caretdown" size={15} />
      </Text>
      {navModal && (
        <View style={styles.navModal}>
          {content.map((item: string, index: number) => {
            if (item === 'Setting') {
              return null;
            }
            const TextStyle =
              selectContent === item
                ? styles.selectModalText
                : styles.modalText;
            return (
              <Text
                key={index}
                style={TextStyle}
                onPress={() => {
                  setSelectContent(item);
                  setNavModal(false);
                }}>
                {item}
              </Text>
            );
          })}
        </View>
      )}
    </>
  );
  const headerLeft = () => (
    <IonicIcon
      style={{marginLeft: 10}}
      name="settings"
      size={25}
      onPress={() => {
        setSelectContent('Setting');
      }}
    />
  );

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: '#4d4d4d',
            shadowColor: 'transparent',
          },
          headerTintColor: 'black',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
          headerTitle: selectContent,
          headerRight: headerRight,
          headerLeft: headerLeft,
        }}>
        <Stack.Screen
          name={selectContent}
          component={
            selectContent === 'Alarm'
              ? Alarm
              : selectContent === 'StopWatch'
              ? StopWatch
              : selectContent === 'Timer'
              ? Timer
              : Setting
          }
        />
        <Stack.Screen name={'AlarmDetail'} component={AlarmDetail} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  navModal: {
    width: 75,
    height: 100,
    position: 'absolute',
    top: 32,
    backgroundColor: '#4d4d4d',
    flex: 1,
  },
  modalText: {
    flex: 1,
    marginTop: 12,
    textAlign: 'center',
  },
  selectModalText: {
    flex: 1,
    marginTop: 12,
    textAlign: 'center',
    color: 'white',
  },
});

export default Nav;
