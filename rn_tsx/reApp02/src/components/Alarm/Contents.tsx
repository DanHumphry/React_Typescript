import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import AwesomeIcon from 'react-native-vector-icons/FontAwesome';

const Content = () => {
  return (
    <View style={styles.container}>
      <View style={styles.article}>
        <View style={styles.timeSection}>
          <Text style={{fontSize: 50}}>08 : 12</Text>
        </View>
        <View style={styles.dateSection}>
          <Text style={{fontSize: 20}}>매일</Text>
        </View>
        <View style={styles.toggleSection}>
          <AwesomeIcon name={'toggle-on'} size={50} />
        </View>
      </View>
      <View style={styles.article}>
        <View style={styles.timeSection}>
          <Text style={{fontSize: 50}}>08 : 12</Text>
        </View>
        <View style={styles.dateSection}>
          <Text style={{fontSize: 20}}>매일</Text>
        </View>
        <View style={styles.toggleSection}>
          <AwesomeIcon name={'toggle-on'} size={50} />
        </View>
      </View>
      <View style={styles.article}>
        <View style={styles.timeSection}>
          <Text style={{fontSize: 50}}>08 : 12</Text>
        </View>
        <View style={styles.dateSection}>
          <Text style={{fontSize: 20}}>매일</Text>
        </View>
        <View style={styles.toggleSection}>
          <AwesomeIcon name={'toggle-on'} size={50} />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#4d4d4d',
    flex: 8,
  },
  article: {
    flexDirection: 'row',
    borderColor: 'white',
    height: 100,
  },
  timeSection: {
    flex: 3,
    alignItems: 'center',
    justifyContent: 'center',
  },
  dateSection: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  toggleSection: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Content;
