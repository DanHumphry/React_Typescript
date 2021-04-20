import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import AwesomeIcon from 'react-native-vector-icons/FontAwesome';

const DatePicker = () => {
  const week = ['월', '화', '수', '목', '금', '토', '일'].map(
    (item: string, idx: number) => (
      <Text key={idx} style={{fontSize: 18}}>
        {item}
      </Text>
    ),
  );

  return (
    <View style={styles.container}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          padding: 15,
        }}>
        <Text style={{fontSize: 23}}>매일</Text>
        <AwesomeIcon name={'calendar'} size={23} />
      </View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          paddingRight: 15,
          paddingLeft: 15,
        }}>
        {week}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#4d4d4d',
    flex: 1,
  },
});

export default DatePicker;
