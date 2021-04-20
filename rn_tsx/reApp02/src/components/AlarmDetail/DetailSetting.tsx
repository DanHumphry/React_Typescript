import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import AwesomeIcon from 'react-native-vector-icons/FontAwesome';

const DetailSetting = () => {
  return (
    <View style={styles.container}>
      <View style={styles.article}>
        <View style={styles.menuSection}>
          <Text style={{fontSize: 30}}>알람음</Text>
          <Text style={{fontSize: 16}}>청량하고맑은바다</Text>
        </View>
        <View style={styles.toggleSection}>
          <AwesomeIcon name={'toggle-on'} size={40} />
        </View>
      </View>
      <View style={styles.article}>
        <View style={styles.menuSection}>
          <Text style={{fontSize: 30}}>진동</Text>
          <Text style={{fontSize: 16}}>Basic Call</Text>
        </View>
        <View style={styles.toggleSection}>
          <AwesomeIcon name={'toggle-on'} size={40} />
        </View>
      </View>
      <View style={styles.article}>
        <View style={styles.menuSection}>
          <Text style={{fontSize: 30}}>다시울림</Text>
          <Text style={{fontSize: 16}}>5분, 3회</Text>
        </View>
        <View style={styles.toggleSection}>
          <AwesomeIcon name={'toggle-on'} size={40} />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#4d4d4d',
    flex: 3,
  },
  article: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: 70,
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

export default DetailSetting;
