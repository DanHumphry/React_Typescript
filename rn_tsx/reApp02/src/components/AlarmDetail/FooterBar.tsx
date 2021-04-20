import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const FooterBar = () => {
  return (
    <View style={styles.container}>
      <Text style={{color: '#4d4d4d', fontSize: 16}}>취소</Text>
      <Text style={{color: '#4d4d4d', fontSize: 16}}>저장</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 0.5,
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: 'black',
    paddingLeft: 50,
    paddingRight: 50,
    alignItems: 'center',
  },
});

export default FooterBar;
