import React from 'react';
import {View, StyleSheet} from 'react-native';
const Timer = () => {
  return (
    <View style={styles.container}>
      <View style={styles.nav} />
      <View style={styles.banner} />
      <View style={styles.main} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'black',
    flex: 1,
  },
  nav: {
    backgroundColor: 'yellow',
    flex: 2,
    marginTop: 40,
  },
  banner: {
    backgroundColor: 'darkorange',
    flex: 8,
  },
  main: {
    backgroundColor: 'green',
    flex: 1,
  },
});

export default Timer;
