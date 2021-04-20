import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import AwesomeIcon from 'react-native-vector-icons/FontAwesome';

const Setting = () => {
  return (
    <View style={{backgroundColor: '#4d4d4d'}}>
      <View style={styles.article}>
        <View style={styles.menuSection}>
          <Text style={{fontSize: 25}}>날씨표시</Text>
        </View>
        <View style={styles.toggleSection}>
          <AwesomeIcon name={'toggle-on'} size={30} />
        </View>
      </View>
      <View style={styles.article}>
        <View style={styles.menuSection}>
          <Text style={{fontSize: 30}}>세계시간</Text>
        </View>
        <View style={styles.toggleSection}>
          <Text style={{fontSize: 20}}>대한민국</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  article: {
    height: 70,
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderBottomColor: 'black',
    borderBottomWidth: 1,
  },
  menuSection: {
    paddingLeft: 35,
    justifyContent: 'center',
  },
  toggleSection: {
    paddingRight: 35,
    justifyContent: 'center',
  },
});
export default Setting;
