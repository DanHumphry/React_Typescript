import React from 'react';
import {View, StyleSheet} from 'react-native';
import Content from '@components/Alarm/Contents';
import Banner from '@components/Alarm/Banner';

const Alarm = () => {
  return (
    <View style={styles.container}>
      <Banner />
      <Content />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default Alarm;
