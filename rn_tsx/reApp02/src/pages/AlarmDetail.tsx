import React from 'react';
import {View, StyleSheet} from 'react-native';
import TimePicker from '@components/AlarmDetail/TimePicker';
import DatePicker from '@components/AlarmDetail/DatePicker';
import DetailSetting from '@components/AlarmDetail/DetailSetting';
import FooterBar from '@components/AlarmDetail/FooterBar';

const AlarmDetail = () => {
  return (
    <View style={styles.container}>
      <TimePicker />
      <DatePicker />
      <DetailSetting />
      <FooterBar />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default AlarmDetail;
