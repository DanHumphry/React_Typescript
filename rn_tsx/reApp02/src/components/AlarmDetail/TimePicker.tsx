import React, {useState} from 'react';
import {View, StyleSheet} from 'react-native';
import DatePicker from 'react-native-date-picker';

const TimePicker = () => {
  const [date, setDate] = useState(new Date());

  return (
    <View style={styles.container}>
      <DatePicker
        style={{maxWidth: 400, height: 400}}
        mode="time"
        date={date}
        onDateChange={setDate}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#4d4d4d',
    flex: 3,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default TimePicker;
