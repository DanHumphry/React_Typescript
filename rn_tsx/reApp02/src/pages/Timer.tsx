import React, {useRef, useState} from 'react';
import DatePicker from 'react-native-date-picker';
import {FlatList, Text, TouchableOpacity, View} from 'react-native';
const Timer = () => {
  const [date, setDate] = useState(new Date());
  const [lap, setLap] = useState([] as any);
  const started: any = useRef(null);

  const makeTimer = (dt: any) => {
    const hour = dt.getUTCHours(),
      min = dt.getUTCMinutes(),
      sec = dt.getUTCSeconds();

    const time =
      (hour > 9 ? hour : '0' + hour) +
      ':' +
      (min > 9 ? min : '0' + min) +
      ':' +
      (sec > 9 ? sec : '0' + sec);
    const temp = [...lap];
    temp.push(time);
    setLap(temp);
  };

  const startLap = (idx: number) => {
    started.current = setInterval(() => {
      const temp = [...lap];
      let hour = +temp[idx].split(':')[0];
      let min = +temp[idx].split(':')[1];
      let sec = +temp[idx].split(':')[2];
      sec = sec - 1;
      const time =
        (hour > 9 ? hour : '0' + hour) +
        ':' +
        (min > 9 ? min : '0' + min) +
        ':' +
        (sec > 9 ? sec : '0' + sec);
      temp[idx] = time;
      setLap(temp);
    }, 1000);
  };

  return (
    <View>
      <DatePicker mode="time" date={date} onDateChange={setDate} />
      <TouchableOpacity
        onPress={() => {
          makeTimer(date);
        }}>
        <Text>만들기</Text>
      </TouchableOpacity>
      <View>
        <FlatList
          data={lap}
          renderItem={({item, index}) => (
            <View key={index + 1}>
              <Text>
                {`#${index}`}
                {item}
              </Text>
              <TouchableOpacity
                onPress={() => {
                  startLap(index);
                }}>
                <Text>시작하기</Text>
              </TouchableOpacity>
            </View>
          )}
        />
      </View>
    </View>
  );
};

export default Timer;
